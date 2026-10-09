"""Read and update card field tables joined by permanent ID."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FIELDS = {
    'categories': {'cat', 'subcat', 'extraCats'},
    'translations': {'zh', 'zhPinyin', 'en', 'ja', 'jaWritten', 'jaRuby', 'jaAudio', 'es'},
    'assets': {'soundEffect', 'image', 'audio'},
    'image-prompts': {'prompt'},
    'sound-prompts': {'soundPrompt'},
}


def data_files():
    source = (ROOT / 'data.js').read_text(encoding='utf-8')
    match = re.search(r'const CARD_DATA_FILES = (\[.*?\]);', source, re.S)
    paths = [ROOT / name for name in json.loads(match.group(1))]
    if [p.stem for p in paths] != [*FIELDS, 'category-definitions', 'category-translations']:
        raise ValueError('Unexpected card field tables')
    for path in paths:
        if path.resolve().parent != ROOT / 'data' or path.suffix != '.js':
            raise ValueError('Invalid card data path')
    return paths


def read_group(path):
    source = path.read_text(encoding='utf-8')
    payload = source[source.index('['):source.rindex(']') + 1]
    # Only standalone comment lines are allowed; strings containing // stay intact.
    payload = re.sub(r'^\s*//[^\r\n]*', '', payload, flags=re.M)
    return json.loads(payload)


def load_cards():
    cards = {}
    for index, path in enumerate(p for p in data_files() if p.stem in FIELDS):
        seen = set()
        for row in read_group(path):
            key = row.get('id')
            if not isinstance(key, str) or not re.fullmatch(r'[a-f0-9]{12}', key) or key in seen:
                raise ValueError('Invalid or duplicate card ID')
            seen.add(key)
            if set(row) - (FIELDS[path.stem] | {'id'}):
                raise ValueError('Unexpected card field in ' + path.name)
            if index == 0:
                cards[key] = dict(row)
            else:
                if key not in cards:
                    raise ValueError('Unknown field-table ID')
                cards[key].update(row)
        if seen != set(cards):
            raise ValueError('Missing field-table card ID')
    validate_categories(list(cards.values()))
    return list(cards.values())


def save_cards(cards):
    """Write each field back to its owning table, retaining IDs and row order."""
    existing = load_cards()
    updates = {c['id']: c for c in cards}
    if len(updates) != len(cards) or set(updates) != {c['id'] for c in existing}:
        raise ValueError('Updates must preserve the existing card IDs')
    allowed = set.union(*FIELDS.values()) | {'id'}
    if any(set(c) - allowed for c in cards):
        raise ValueError('Unknown card fields cannot be saved')
    validate_categories(cards)
    for path in (p for p in data_files() if p.stem in FIELDS):
        group = read_group(path)
        fields = FIELDS[path.stem]
        updated = [{'id': row['id'], **{k: v for k, v in updates[row['id']].items() if k in fields}} for row in group]
        if group == updated:
            continue
        source = path.read_text(encoding='utf-8')
        start, end = source.index('['), source.rindex(']') + 1
        path.write_text(source[:start] + '[\n' + ',\n'.join(
            '  ' + json.dumps(c, ensure_ascii=False) for c in updated
        ) + '\n]' + source[end:], encoding='utf-8')

    refresh_category_comments()


def validate_categories(cards):
    definitions = read_group(ROOT / 'data/category-definitions.js')
    translations = read_group(ROOT / 'data/category-translations.js')
    parents = {}
    for row in definitions:
        key = row['id']
        if not re.fullmatch(r'[a-f0-9]{12}', key) or key in parents:
            raise ValueError('Invalid or duplicate category ID')
        parents[key] = row['parent']
    for key, parent in parents.items():
        if parent is not None and (parent not in parents or parents[parent] is not None):
            raise ValueError('Subcategories must belong to a major category')
    labels = {row['id']: row for row in translations}
    if len(labels) != len(translations) or set(labels) != set(parents):
        raise ValueError('Category translations must match definition IDs')
    if any(not isinstance(row.get(lang), str) or not row[lang] for row in translations for lang in ('zh', 'en', 'ja', 'es')):
        raise ValueError('Missing category translation')
    for card in cards:
        major = card.get('cat')
        if major not in parents or parents[major] is not None:
            raise ValueError('Unknown major category')
        minor = card.get('subcat')
        if minor and not (minor == major or minor in parents and parents[minor] == major):
            raise ValueError('Subcategory does not belong to the card category')
        if any(key not in parents for key in card.get('extraCats', [])):
            raise ValueError('Unknown extra category')


def refresh_category_comments():
    """Derive four-language comments from authoritative translation tables."""
    labels = {r['id']: r for r in read_group(ROOT / 'data/category-translations.js')}
    words = {r['id']: r for r in read_group(ROOT / 'data/translations.js')}
    def multilingual(row):
        return ' | '.join(lang + ': ' + str(row.get(lang, '')).replace('\n', ' ').replace('\r', ' ').replace('\u2028', ' ').replace('\u2029', ' ') for lang in ('zh', 'en', 'ja', 'es'))
    for name in ('categories', 'category-definitions'):
        path = ROOT / ('data/' + name + '.js')
        rows = read_group(path)
        lines = []
        for i, row in enumerate(rows):
            if name == 'categories':
                comments = [multilingual(words[row['id']]), 'cat: ' + multilingual(labels[row['cat']])]
                if row.get('subcat'):
                    comments.append('subcat: ' + multilingual(labels[row['subcat']]))
                for extra in row.get('extraCats', []):
                    comments.append('extraCats: ' + multilingual(labels[extra]))
            else:
                comments = [multilingual(labels[row['id']])]
                if row['parent']:
                    comments.append('parent: ' + multilingual(labels[row['parent']]))
            lines.extend('  // ' + comment for comment in comments)
            lines.append('  ' + json.dumps(row, ensure_ascii=False) + (',' if i < len(rows) - 1 else ''))
        source = path.read_text(encoding='utf-8')
        start, end = source.index('['), source.rindex(']') + 1
        updated = source[:start] + '[\n' + '\n'.join(lines) + '\n]' + source[end:]
        if source != updated:
            path.write_text(updated, encoding='utf-8')


def media_stem(card):
    """Chinese, English, written Japanese, Spanish; safe on Windows."""
    values = (card['zh'], card['en'], card.get('jaWritten') or card['ja'], card['es'])
    parts = [re.sub(r'[<>:"/\\|?*\x00-\x1f]', '-', value).strip().rstrip('.') for value in values]
    if any(not part for part in parts):
        raise ValueError('Empty multilingual filename component')
    stem = '_'.join(parts)
    if len(stem.encode('utf-16-le')) // 2 > 220:
        raise ValueError('Multilingual filename is too long')
    return stem
