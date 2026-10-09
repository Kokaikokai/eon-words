"""Archive assets no longer referenced by data.js; dry run unless --apply."""
from card_data import load_cards, save_cards
import argparse
import json
from collections import Counter
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT.parent / 'archive'


def image_archive_path(source, reserved):
    """Keep image archives flat; append a number for later copies."""
    suffix = '.prompt.txt' if source.name.endswith('.prompt.txt') else source.suffix
    stem = source.name[:-len(suffix)]
    folder = ROOT / 'output' / 'archived-prompts' if suffix == '.prompt.txt' else ARCHIVE / 'images'
    dest = folder / source.name
    number = 2
    while dest.exists() or dest in reserved:
        dest = dest.with_name(f'{stem}_{number}{suffix}')
        number += 1
    reserved.add(dest)
    return dest


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    cards = load_cards()
    image_keys = {c.get('image', c['zh']) for c in cards}
    audio_keys = {
        'zh': {c.get('audio', {}).get('zh', c['zh']) for c in cards},
        'en': {c.get('audio', {}).get('en', c['en']) for c in cards},
        'es': {c.get('audio', {}).get('es', c['es']) for c in cards},
        'ja': {c.get('audio', {}).get('ja', c['jaAudio']) for c in cards},
        'sfx': {c['soundEffect'] for c in cards if c.get('soundEffect')},
    }
    stamp = datetime.now().strftime('%Y%m%d-%H%M%S-%f')
    moves = []
    reserved = set()
    for p in sorted((ROOT / 'images').iterdir(), key=lambda p: (p.stat().st_mtime_ns, p.name)):
        if not p.is_file():
            continue
        key = p.name.removesuffix('.prompt.txt') if p.name.endswith('.prompt.txt') else p.stem
        if (p.suffix.lower() in {'.png', '.jpg', '.jpeg', '.webp', '.svg'} or p.name.endswith('.prompt.txt')) and key not in image_keys:
            moves.append((p, image_archive_path(p, reserved)))
    for kind in ('thumb', 'screen'):
        for p in sorted((ROOT / 'images' / kind).glob('*.webp')):
            if p.stem not in image_keys:
                moves.append((p, image_archive_path(p, reserved)))
    for lang, keys in audio_keys.items():
        for p in (ROOT / 'audio' / lang).glob('*.mp3'):
            if p.stem not in keys:
                dest = ARCHIVE / 'audio' / lang / p.name
                number = 2
                while dest.exists() or dest in reserved:
                    dest = dest.with_name(f'{p.stem}_{number}{p.suffix}')
                    number += 1
                reserved.add(dest)
                moves.append((p, dest))
                if lang == 'sfx':
                    prompt = p.with_suffix('.prompt.txt')
                    if prompt.exists():
                        moves.append((prompt, image_archive_path(prompt, reserved)))
    # Validate every resolved source and destination before moving any file.
    for source, dest in moves:
        assert source.resolve().is_relative_to(ROOT)
        assert (dest.resolve().is_relative_to(ARCHIVE.resolve())
                or dest.resolve().is_relative_to((ROOT / 'output').resolve()))
        assert not dest.exists(), dest
    counts = Counter(str(p.relative_to(ROOT).parent) for p, _ in moves)
    print(json.dumps({'apply': args.apply, 'files': len(moves), 'by_directory': dict(counts)}, ensure_ascii=False))
    if not args.apply:
        return
    manifest = ROOT / 'output' / ('unused-assets-' + stamp + '.json')
    manifest.parent.mkdir(parents=True, exist_ok=True)
    records = [{'source': str(p.relative_to(ROOT)), 'archive': str(d)} for p, d in moves]
    manifest.write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding='utf-8')
    for source, dest in moves:
        dest.parent.mkdir(parents=True, exist_ok=True)
        source.rename(dest)
    done_path = ROOT / 'word-examples' / '.xfyun_done.json'
    if done_path.exists():
        done = json.loads(done_path.read_text(encoding='utf-8-sig'))
        backup = ROOT / 'output' / stamp / '.xfyun_done.json'
        backup.parent.mkdir(parents=True, exist_ok=True)
        backup.write_bytes(done_path.read_bytes())
        done_path.write_text(json.dumps(sorted(set(done) & audio_keys['zh']), ensure_ascii=False), encoding='utf-8')
    print(str(manifest.relative_to(ROOT)))


if __name__ == '__main__':
    main()
