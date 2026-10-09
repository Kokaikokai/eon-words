"""Verify real asset URLs, caching, and access restrictions."""
import sys
import threading
import unittest
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import quote
from urllib.request import Request, urlopen
from http.server import ThreadingHTTPServer

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import serve_lan


class QuietHandler(serve_lan.PublicHandler):
    def log_message(self, *args):
        pass


class PublicAssetsTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = ThreadingHTTPServer(('127.0.0.1', 0), QuietHandler)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = 'http://127.0.0.1:' + str(cls.server.server_port)

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join()

    def request(self, path, **kwargs):
        return urlopen(Request(self.base + '/' + quote(path), **kwargs))

    def test_real_assets_and_cache(self):
        card = next(c for c in serve_lan.load_cards() if c['zh'] == '猫')
        image, sound = card['image'], card['soundEffect']
        for target in (f'images/thumb/{image}.webp', f'images/screen/{image}.webp', f'audio/sfx/{sound}.mp3'):
            with self.subTest(target=target):
                with self.request(target) as response:
                    self.assertEqual(response.read(), (serve_lan.ROOT / target).read_bytes())
                    etag = response.headers['ETag']
                with self.request(target, method='HEAD') as response:
                    self.assertEqual(etag, response.headers['ETag'])
                with self.assertRaises(HTTPError) as result:
                    self.request(target, headers={'If-None-Match': etag})
                self.assertEqual(result.exception.code, 304)

    def test_translated_aliases_do_not_exist(self):
        for path in ('images/cat.png', 'images/gato.png', 'images/thumb/cat.webp', 'audio/sfx/cat.mp3'):
            with self.subTest(path=path), self.assertRaises(HTTPError) as result:
                self.request(path)
            self.assertEqual(result.exception.code, 404)

    def test_category_files_are_public(self):
        for path in serve_lan.data_files():
            with self.request(path.relative_to(serve_lan.ROOT).as_posix()) as response:
                self.assertEqual(response.read(), path.read_bytes())

    def test_private_and_unknown_paths(self):
        for path in ('.env', 'word-examples/.xfyun_done.json',
                     '../.env', 'images/nonexistent-card.png'):
            with self.subTest(path=path), self.assertRaises(HTTPError) as result:
                self.request(path)
            self.assertEqual(result.exception.code, 404)


if __name__ == '__main__':
    unittest.main()
