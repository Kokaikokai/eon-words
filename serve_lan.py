"""Serve only public flashcard assets on the local network."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import quote, unquote, urlsplit
import json
import secrets
import ipaddress
from scripts.editor import update_card, revision
from threading import Lock
from scripts.build_web_images import build_one
from scripts.card_data import load_cards, data_files

ROOT = Path(__file__).resolve().parent
PUBLIC_FILES = {'index.html', 'style.css', 'data.js', 'app.js'}
IMAGE_LOCK = Lock()


class PublicHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Browser disk cache revalidates using Last-Modified; edits appear on refresh.
        self.send_header('Cache-Control', 'no-cache')
        if getattr(self, 'asset_etag', None):
            self.send_header('ETag', self.asset_etag)
        super().end_headers()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def editor_allowed(self):
        if not getattr(self.server, 'edit_enabled', False):
            return False
        try:
            return ipaddress.ip_address(self.client_address[0]).is_loopback and urlsplit('http://' + self.headers.get('Host', '')).hostname in {'localhost', '127.0.0.1', '::1'}
        except ValueError:
            return False

    def json_response(self, status, data):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.asset_etag = None
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        route = urlsplit(self.path).path
        if route.startswith('/api/editor'):
            if not self.editor_allowed():
                self.json_response(403, {'error': 'Developer editing is disabled or unavailable from this address.'})
                return
            if route == '/api/editor':
                self.json_response(200, {'token': self.server.edit_token})
            elif route.startswith('/api/editor/card/'):
                card = next((c for c in load_cards() if c['id'] == route.rsplit('/', 1)[-1]), None)
                self.json_response(200 if card else 404, {'card': card, 'revision': revision(card)} if card else {'error': 'Unknown card'})
            else:
                self.json_response(404, {'error': 'Not found'})
            return
        if route == '/editor.js' and not self.editor_allowed():
            self.send_error(404)
            return
        super().do_GET()

    def do_POST(self):
        if urlsplit(self.path).path != '/api/editor/card':
            self.json_response(404, {'error': 'Not found'})
            return
        origin = self.headers.get('Origin')
        if (not self.editor_allowed() or self.headers.get('X-Edit-Token') != getattr(self.server, 'edit_token', None)
                or origin != 'http://' + self.headers.get('Host', '')
                or self.headers.get_content_type() != 'application/json'):
            self.json_response(403, {'error': 'Editing is not authorized'})
            return
        try:
            length = int(self.headers.get('Content-Length', '0'))
            if not 0 < length <= 100000:
                raise ValueError('Invalid request size')
            payload = json.loads(self.rfile.read(length))
            if not isinstance(payload, dict):
                raise ValueError('Invalid request')
            result = update_card(payload)
            self.json_response(200, result)
        except FileExistsError as exc:
            self.json_response(409, {'error': str(exc)})
        except (ValueError, TypeError, KeyError) as exc:
            self.json_response(400, {'error': str(exc)})
        except Exception:
            self.json_response(500, {'error': 'Save failed; check server logs and backup files.'})

    def send_head(self):
        self.asset_etag = None
        name = unquote(urlsplit(self.path).path).lstrip('/') or 'index.html'
        path = (ROOT / name).resolve()
        if not path.is_relative_to(ROOT):
            self.send_error(404)
            return None
        parts = path.relative_to(ROOT).parts
        if (len(parts) == 3 and parts[0] == 'images'
                and parts[1] in {'thumb', 'screen'} and path.suffix == '.webp'):
            source = ROOT / 'images' / (path.stem + '.png')
            if source.is_file():
                with IMAGE_LOCK:
                    build_one(source, path, 240 if parts[1] == 'thumb' else 800)
        allowed = (name == 'editor.js' and self.editor_allowed()) or name in PUBLIC_FILES or path in data_files() or (
            len(parts) == 2 and parts[0] == 'images' and path.suffix == '.png'
        ) or (
            len(parts) == 3 and parts[0] == 'images'
            and parts[1] in {'thumb', 'screen'} and path.suffix == '.webp'
        ) or (
            len(parts) == 3 and parts[0] == 'audio'
            and parts[1] in {'zh', 'en', 'ja', 'es', 'sfx'} and path.suffix == '.mp3'
        )
        if not allowed or not path.is_file():
            self.send_error(404)
            return None
        # Include nanoseconds and size so same-second replacements invalidate cache.
        stat = path.stat()
        self.asset_etag = f'"{stat.st_mtime_ns:x}-{stat.st_size:x}"'
        if self.headers.get('If-None-Match') == self.asset_etag:
            self.send_response(304)
            self.end_headers()
            return None
        if self.headers.get('If-None-Match'):
            del self.headers['If-Modified-Since']
        original_path = self.path
        self.path = '/' + quote(path.relative_to(ROOT).as_posix())
        try:
            return super().send_head()
        finally:
            self.path = original_path


if __name__ == '__main__':
    from scripts.build_web_images import build
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--edit', action='store_true', help='Enable developer editing from localhost only')
    args = parser.parse_args()
    build()
    server = ThreadingHTTPServer(('0.0.0.0', 8000), PublicHandler)
    server.edit_enabled = args.edit
    server.edit_token = secrets.token_urlsafe(32)
    server.serve_forever()
