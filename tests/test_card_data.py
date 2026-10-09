"""Validate card identities, browser load order, and category updates."""
import json
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from scripts import card_data


class CardDataTest(unittest.TestCase):
    def test_ids_and_browser_order(self):
        cards = card_data.load_cards()
        self.assertTrue(all(c['zh'] and c['zhPinyin'] for c in cards))
        self.assertTrue(all('char' not in c and 'pinyin' not in c for c in cards))
        html = (card_data.ROOT / 'index.html').read_text(encoding='utf-8')
        names = [p.relative_to(card_data.ROOT).as_posix() for p in card_data.data_files()]
        offsets = [html.index(f'src="{name}"') for name in [*names, 'data.js', 'app.js']]
        self.assertEqual(offsets, sorted(offsets))

    def test_join_update_and_invalid_ids(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / 'data').mkdir()
            names = [f'data/{name}.js' for name in [*card_data.FIELDS, 'category-definitions', 'category-translations']]
            (root / 'data.js').write_text('const CARD_DATA_FILES = ' + json.dumps(names) + ';', encoding='utf-8')
            ids = ['012345abcdef', 'abcdef012345']
            for name in card_data.FIELDS:
                rows = [{'id': key} for key in ids]
                if name == 'categories':
                    rows = [dict(row, cat='111111111111') for row in rows]
                if name == 'translations':
                    rows = [{'id': ids[1], 'zh': 'second'}, {'id': ids[0], 'zh': 'first'}]
                (root / f'data/{name}.js').write_text('const TABLE = ' + json.dumps(rows) + ';', encoding='utf-8')
            (root / 'data/category-definitions.js').write_text('const DEFS = [{"id":"111111111111","parent":null}];', encoding='utf-8')
            (root / 'data/category-translations.js').write_text('const LABELS = [{"id":"111111111111","zh":"test","en":"test","ja":"test","es":"test"}];', encoding='utf-8')
            with patch.object(card_data, 'ROOT', root):
                cards = card_data.load_cards()
                self.assertEqual([c['zh'] for c in cards], ['first', 'second'])
                card_data.refresh_category_comments()
                before = {p: p.read_bytes() for p in card_data.data_files()}
                card_data.save_cards(cards)
                self.assertTrue(all(p.read_bytes() == content for p, content in before.items()))
                cards[0]['zh'] = 'renamed'
                cards[0]['prompt'] = 'new prompt'
                card_data.save_cards(cards)
                self.assertEqual(card_data.load_cards(), cards)
                self.assertIn('// zh: renamed', (root / 'data/categories.js').read_text(encoding='utf-8'))
                for p, content in before.items():
                    if p.stem not in {'translations', 'image-prompts', 'categories'}:
                        self.assertEqual(p.read_bytes(), content)
                with self.assertRaises(ValueError):
                    card_data.save_cards(cards + cards)
                file = root / 'data/translations.js'
                for rows in ([{'id': ids[0]}], [{'id': ids[0]}, {'id': ids[0]}], [{'id': '111111111111'}, {'id': ids[1]}]):
                    file.write_text('const TABLE = ' + json.dumps(rows) + ';', encoding='utf-8')
                    with self.assertRaises(ValueError):
                        card_data.load_cards()


if __name__ == '__main__':
    unittest.main()
