from card_data import load_cards, save_cards, media_stem
import json
import shutil
import sys
from pathlib import Path
from PIL import Image
from build_web_images import build_one

root = Path(__file__).resolve().parents[1]
jobpath = Path(sys.argv[1])
job = json.loads(jobpath.read_text(encoding='utf-8-sig'))
if job.get('subject_confirmed') is not True:
    raise ValueError('Image subject must be confirmed before installation.')
cards = load_cards()
label = job.get('label')
if not isinstance(label, str) or not label:
    raise ValueError('Image job requires label: the exact card display name.')
card = next((c for c in cards if (c['zh']) == label), None)
if card is None:
    raise ValueError(f'Unknown card display name: {label}')
key = card.get('image') or media_stem(card)
if not isinstance(job.get('prompt'), str) or not job['prompt'].strip():
    raise ValueError('Image job requires a nonempty prompt.')
target = root / 'images' / (key + '.png')
assert target.resolve().parent == root / 'images'
with Image.open(job['src']) as im:
    im.verify()
stem = key
archive = root.parent / 'archive' / 'images'
archive.mkdir(parents=True, exist_ok=True)
prompt_archive = root / 'output' / 'archived-prompts'
n = 2
while (archive / (stem + '.png')).exists() or (prompt_archive / (stem + '.prompt.txt')).exists():
    stem = f'{key}_{n}'
    n += 1
if target.exists():
    shutil.copy2(target, archive / (stem + '.png'))
    if card.get('prompt'):
        prompt_archive.mkdir(parents=True, exist_ok=True)
        (prompt_archive / (stem + '.prompt.txt')).write_text(card['prompt'], encoding='utf-8')
shutil.copyfile(job['src'], target)
card['image'] = key
card['prompt'] = job['prompt']
save_cards(cards)
for kind, size in [('thumb', 240), ('screen', 800)]:
    build_one(target, root / 'images' / kind / (key + '.webp'), size, force=True)
job['status'] = 'installed'
jobpath.write_text(json.dumps(job, ensure_ascii=False, indent=2), encoding='utf-8')
print('Installed image, saved prompt, archived predecessor and refreshed web copies')
