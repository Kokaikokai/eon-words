"""Build a whitelist-only GitHub Pages site from the current card data."""
import shutil
from pathlib import Path
from card_data import ROOT, data_files, load_cards


def public_files():
    files = {ROOT / name for name in ('index.html', 'app.js', 'style.css', 'data.js')}
    files.update(data_files())
    for card in load_cards():
        image = card.get('image', card['zh'])
        for folder, ext in [('images/thumb', '.webp'), ('images/screen', '.webp')]:
            files.add(ROOT / folder / (image + ext))
        keys = {'zh':card['zh'], 'en':card['en'], 'ja':card['jaAudio'], 'es':card['es']}
        keys.update(card.get('audio', {}))
        if card.get('soundEffect'):
            keys['sfx'] = card['soundEffect']
        for lang, key in keys.items():
            files.add(ROOT / 'audio' / lang / (key + '.mp3'))
    for path in files:
        if not path.resolve().is_relative_to(ROOT) or not path.is_file():
            raise ValueError('Missing or invalid public asset: ' + str(path.relative_to(ROOT)))
    return sorted(files)


def build():
    files = public_files()
    total = sum(p.stat().st_size for p in files)
    if total >= 1_000_000_000:
        raise ValueError('Site exceeds the GitHub Pages 1 GB limit')
    destination = ROOT / 'output' / 'pages'
    if destination.is_symlink() or destination.resolve() != ROOT / 'output' / 'pages':
        raise ValueError('Unexpected build destination')
    if destination.exists():
        shutil.rmtree(destination)
    for source in files:
        target = destination / source.relative_to(ROOT)
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
    (destination / '.nojekyll').write_text('', encoding='utf-8')
    print(f'Built {len(files)} public files: {total / 1048576:.1f} MiB in output/pages')


if __name__ == '__main__':
    build()
