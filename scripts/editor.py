"""Developer-only card editing with optimistic concurrency and local backups."""
import copy
import hashlib
import json
import re
from datetime import datetime
from threading import Lock
from scripts import card_data

EDIT_LOCK = Lock()
FIELDS = {'zh', 'zhPinyin', 'en', 'ja', 'jaWritten', 'jaRuby', 'es', 'cat', 'subcat', 'extraCats', 'prompt', 'soundEffect'}


def revision(card):
    return hashlib.sha256(json.dumps(card, ensure_ascii=False, sort_keys=True).encode()).hexdigest()


def update_card(payload):
    with EDIT_LOCK:
        cards = card_data.load_cards()
        card = next((c for c in cards if c['id'] == payload.get('id')), None)
        if card is None:
            raise ValueError('Unknown card ID')
        if payload.get('revision') != revision(card):
            raise FileExistsError('This card changed. Reopen the editor before saving.')
        changes = payload.get('changes')
        if not isinstance(changes, dict) or set(changes) - FIELDS:
            raise ValueError('Unsupported fields')
        updated = copy.deepcopy(card)
        updated.update(changes)
        for key in ('zh', 'zhPinyin', 'en', 'ja', 'jaWritten', 'es', 'cat', 'prompt'):
            if not isinstance(updated.get(key), str) or not updated[key].strip() or len(updated[key]) > 30000:
                raise ValueError('Invalid field: ' + key)
        for key in ('zh', 'zhPinyin', 'en', 'ja', 'jaWritten', 'es'):
            if '<' in updated[key] or '>' in updated[key]:
                raise ValueError('Markup is not allowed in card text')
        for key in ('zh', 'en', 'es', 'jaWritten'):
            if any(ch in updated[key] for ch in '/\\\r\n'):
                raise ValueError('Invalid name: ' + key)
        if any(c['id'] != card['id'] and c['zh'] == updated['zh'] for c in cards):
            raise ValueError('Chinese card name already exists')
        ruby = updated.get('jaRuby')
        if not isinstance(ruby, list) or not ruby or any(not isinstance(r, dict) or set(r)-{'text','reading'} or not isinstance(r.get('text'),str) or not r['text'] or ('reading' in r and (not isinstance(r['reading'],str) or not r['reading'])) for r in ruby):
            raise ValueError('Invalid Japanese readings')
        if ''.join(r['text'] for r in ruby) != updated['jaWritten'] or ''.join(r.get('reading', r['text']) for r in ruby) != updated['ja']:
            raise ValueError('Japanese reading segments must match written Japanese and kana')
        if not isinstance(updated.get('extraCats', []), list) or any(not isinstance(k,str) for k in updated.get('extraCats', [])):
            raise ValueError('Invalid additional categories')
        sound = updated.get('soundEffect', '')
        if not isinstance(sound, str) or '/' in sound or '\\' in sound:
            raise ValueError('Invalid sound effect')
        if sound and not (card_data.ROOT / 'audio/sfx' / (sound + '.mp3')).is_file():
            raise ValueError('Sound effect file does not exist')
        if not sound:
            updated.pop('soundEffect', None)
        # Keep existing recordings and pictures when correcting displayed text.
        if updated['zh'] != card['zh']:
            updated.setdefault('image', card.get('image', card['zh']))
        audio = dict(card.get('audio', {}))
        for lang, field in [('zh','zh'),('en','en'),('es','es')]:
            if updated[field] != card[field]:
                audio.setdefault(lang, card[field])
        if audio:
            updated['audio'] = audio
        index = cards.index(card)
        cards[index] = updated
        card_data.validate_categories(cards)
        paths = card_data.data_files()
        originals = {p: p.read_bytes() for p in paths}
        backup = card_data.ROOT / 'output/editor-backups' / datetime.now().strftime('%Y%m%d-%H%M%S-%f')
        backup.mkdir(parents=True)
        for path, data in originals.items():
            (backup / path.name).write_bytes(data)
        try:
            card_data.save_cards(cards)
        except Exception:
            for path, data in originals.items():
                path.write_bytes(data)
            raise
        return {'card': updated, 'revision': revision(updated)}
