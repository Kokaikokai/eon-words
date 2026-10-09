"""Exercise developer edit authorization, persistence, backups and conflicts."""
import json
import shutil
import sys
import tempfile
import threading
import unittest
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import serve_lan
from scripts import card_data
from scripts.editor import update_card, revision


class QuietHandler(serve_lan.PublicHandler):
    def log_message(self, *args):
        pass


class EditorTests(unittest.TestCase):
    def test_authorization(self):
        server = serve_lan.ThreadingHTTPServer(('127.0.0.1',0), QuietHandler)
        server.edit_token = 'test-token'
        server.edit_enabled = False
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        base = 'http://127.0.0.1:' + str(server.server_port)
        def request(path, method='GET', headers=None, data=None):
            return urlopen(Request(base+path, method=method, headers=headers or {}, data=data))
        try:
            with self.assertRaises(HTTPError) as denied: request('/api/editor')
            self.assertEqual(denied.exception.code,403)
            server.edit_enabled=True
            with request('/api/editor') as response:
                self.assertEqual(json.load(response)['token'],'test-token')
            for headers in ({}, {'Origin':base}, {'Origin':'https://evil.example','X-Edit-Token':'test-token'}, {'Origin':base,'X-Edit-Token':'wrong'}):
                with self.assertRaises(HTTPError) as denied:
                    request('/api/editor/card','POST',dict(headers, **{'Content-Type':'application/json'}),b'{}')
                self.assertEqual(denied.exception.code,403)
            with self.assertRaises(HTTPError) as denied: request('/api/editor',headers={'Host':'evil.example'})
            self.assertEqual(denied.exception.code,403)
            handler=object.__new__(QuietHandler)
            handler.server=server; handler.client_address=('192.168.1.7',1234); handler.headers={'Host':'localhost'}
            self.assertFalse(handler.editor_allowed())
            card=card_data.load_cards()[0]
            with request('/api/editor/card/'+card['id']) as response:
                self.assertEqual(json.load(response)['revision'],revision(card))
        finally:
            server.shutdown();server.server_close();thread.join()

    def test_persistence_conflict_validation_and_rollback(self):
        with tempfile.TemporaryDirectory() as temp:
            root=Path(temp)
            shutil.copytree(card_data.ROOT/'data',root/'data')
            shutil.copy2(card_data.ROOT/'data.js',root/'data.js')
            with patch.object(card_data,'ROOT',root):
                card=next(c for c in card_data.load_cards() if not c.get('soundEffect'))
                payload={'id':card['id'],'revision':revision(card),'changes':{'en':card['en']+' corrected'}}
                result=update_card(payload)
                saved=next(c for c in card_data.load_cards() if c['id']==card['id'])
                self.assertEqual(saved,result['card'])
                self.assertEqual(saved['audio']['en'],card['en'])
                self.assertTrue(list((root/'output/editor-backups').glob('*/translations.js')))
                with self.assertRaises(FileExistsError): update_card(payload)
                payload['revision']=revision(saved)
                payload['changes']={'cat':'bad'}
                with self.assertRaises(ValueError): update_card(payload)
                payload['changes']={'id':'bad'}
                with self.assertRaises(ValueError): update_card(payload)
                payload['changes']={'zhPinyin':'corrected'}
                before={p:p.read_bytes() for p in card_data.data_files()}
                def fail(cards):
                    (root/'data/translations.js').write_text('broken')
                    raise OSError('simulated write failure')
                with patch.object(card_data,'save_cards',side_effect=fail), self.assertRaises(OSError):
                    update_card(payload)
                self.assertTrue(all(p.read_bytes()==data for p,data in before.items()))


if __name__=='__main__':
    unittest.main()
