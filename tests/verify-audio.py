"""Check all four languages and referenced sound effects, including HTTP URLs."""
import json
import sys
import threading
import urllib.request
from pathlib import Path
from urllib.parse import quote
from mutagen.mp3 import MP3

ROOT = Path(__file__).resolve().parents[1]
import sys
sys.path.insert(0, str(ROOT / 'scripts'))
from card_data import load_cards
sys.path.insert(0, str(ROOT))
from serve_lan import PublicHandler, ThreadingHTTPServer


class QuietHandler(PublicHandler):
    def log_message(self, *args):
        pass


def main():
    cards = load_cards()
    keys = {lang: set() for lang in ('zh', 'en', 'ja', 'es', 'sfx')}
    errors, valid = [], []
    for card in cards:
        label = card['zh']
        refs = {'zh': label, 'en': card.get('en'), 'ja': card.get('jaAudio'), 'es': card.get('es')}
        refs.update(card.get('audio', {}))
        if card.get('soundEffect'):
            refs['sfx'] = card['soundEffect']
        for lang, key in refs.items():
            if not isinstance(key, str) or not key.strip() or any(ch in key for ch in '/\\'):
                errors.append(f'{label}: missing or invalid {lang} audio key')
            else:
                keys[lang].add(key)
    for lang, names in keys.items():
        directory = ROOT / 'audio' / lang
        for pending in directory.glob('*.part'):
            errors.append(f'Incomplete download: {pending.relative_to(ROOT)}')
        for key in sorted(names):
            path = directory / f'{key}.mp3'
            try:
                info = MP3(path).info
                if info.length <= 0.2 or info.sample_rate <= 0:
                    raise ValueError('invalid duration or sample rate')
                valid.append(path)
            except Exception as exc:
                errors.append(f'{path.relative_to(ROOT)}: {exc}')
    server = ThreadingHTTPServer(('127.0.0.1', 0), QuietHandler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    client = urllib.request.build_opener(urllib.request.ProxyHandler({}))
    try:
        for path in valid:
            relative = path.relative_to(ROOT).as_posix()
            url = f'http://127.0.0.1:{server.server_port}/' + quote(relative)
            try:
                with client.open(url, timeout=5) as response:
                    if response.status != 200 or response.read() != path.read_bytes():
                        raise ValueError('HTTP response does not match file')
            except Exception as exc:
                errors.append(f'HTTP {relative}: {exc}')
    finally:
        server.shutdown()
        server.server_close()
        thread.join(timeout=5)
    for lang, names in keys.items():
        print(f'{lang}: {len(names)} referenced recordings')
    if errors:
        for error in errors:
            print(f'FAIL: {error}', file=sys.stderr)
        return 1
    print(f'PASS: {len(cards)} cards, {len(valid)} valid MP3s; all HTTP audio URLs verified')
    return 0


if __name__ == '__main__':
    sys.exit(main())
