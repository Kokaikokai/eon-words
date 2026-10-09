"""Generate applicable card effects with ElevenLabs; resume without overwriting."""
from card_data import load_cards, save_cards, media_stem
import json
import argparse
import os
import shutil
from pathlib import Path
import sys
from urllib.request import Request, urlopen
from urllib.error import HTTPError

ROOT = Path(__file__).resolve().parents[1]
SOUNDS = {
    '猫': 'A domestic cat making two clear natural meows, close and isolated.',
    '狗': 'A friendly domestic dog making three clear natural barks, close and isolated, not aggressive.',
    '牛': 'A cow making one long clear natural moo, close and isolated.',
    '消防车': 'A fire engine sounding its distinctive alternating emergency siren, steady moderate intensity, no voices.',
    '警车': 'A police car sounding a clear rising and falling wailing siren, steady moderate intensity, no voices.',
    '鸟': 'A small songbird chirping several clear melodic calls.',
    '马': 'A horse giving a natural neigh and a brief snort.',
    '羊': 'A sheep bleating twice, natural baa calls.',
    '猪': 'A domestic pig making soft natural oinks and grunts.',
    '鸡': 'A rooster giving a clear natural crow.',
    '鸭': 'A duck quacking several times.',
    '大象': 'An elephant making a short natural trumpet call, not startling.',
    '猴': 'A monkey making short natural chattering calls, not a human imitation.',
    '老虎': 'A tiger making one natural low growl followed by a short roar, moderate intensity.',
    '狮子': 'A lion giving a short deep natural roar, moderate intensity.',
    '青蛙': 'A frog making several distinct natural croaks.',
    '蜜蜂': 'A single honeybee buzzing steadily while flying nearby.',
    '狼': 'A single wolf giving a sustained natural howl.',
    '蝉': 'A cicada making its characteristic sustained rhythmic summer buzzing call.',
    '鲸鱼': 'A humpback whale making a low resonant underwater song call.',
    '飞机': 'A passenger jet airplane flying past, smooth jet engine roar, moderate intensity.',
    '火车': 'A steam train chugging rhythmically with one short whistle.',
    '自行车': 'A bicycle bell ringing twice, clear metallic ding ding.',
    '救护车': 'An ambulance sounding a clear alternating high low two tone siren, moderate intensity.',
    '直升机': 'A helicopter flying nearby with rhythmic rotor blade chopping, moderate intensity.',
    '雨': 'Steady natural rainfall pattering on the ground, no thunder.',
    '大海': 'Gentle ocean waves breaking and washing onto a sandy shore.',
    '闹钟': 'A traditional twin bell alarm clock ringing clearly at moderate volume.',
    '拍手': 'A person clapping their hands three times, clear separate hand claps.',
    '电扇': 'An electric fan running with a steady soft motor hum and airflow.',
    '门铃': 'A clear two-note household doorbell: bright high ding followed by a warm lower dong, evenly spaced, no speech.',
    '打雷': 'One unmistakable sharp natural thunderclap, immediately followed by a powerful deep rolling thunder rumble that decays naturally. Clear strong attack and rich low-frequency resonance, moderate playback level, no distortion, no rain, no wind, no voices.',
    '哭': 'A young child crying briefly with a few gentle natural sobs and a small whimper, child-friendly, no words.',
}


def update_card_links(out):
    cards = load_cards()
    for card in cards:
        label = card['zh']
        stem = card.get('soundEffect') or media_stem(card)
        clip = out / (stem + '.mp3')
        if label in SOUNDS and clip.exists() and clip.stat().st_size:
            card['soundEffect'] = stem
    save_cards(cards)


def main():
    sys.stdout.reconfigure(encoding='utf-8')
    parser = argparse.ArgumentParser()
    parser.add_argument('--only', help='Generate only this exact card display name.')
    parser.add_argument('--replace', action='store_true', help='Archive and replace the selected existing clip.')
    args = parser.parse_args()
    if args.replace and not args.only:
        parser.error('--replace requires --only')
    if args.only and args.only not in SOUNDS:
        parser.error('No sound effect configured for this card display name.')
    key = os.environ.get('ELEVENLABS_API_KEY', '')
    for line in (ROOT / '.env').read_text(encoding='utf-8-sig').splitlines():
        name, sep, value = line.partition('=')
        if sep and name.strip() == 'ELEVENLABS_API_KEY':
            key = value.strip().strip('\"\'')
    if not key:
        raise SystemExit('ELEVENLABS_API_KEY is missing.')
    headers = {'xi-api-key': key, 'Content-Type': 'application/json'}
    out = ROOT / 'audio' / 'sfx'
    out.mkdir(parents=True, exist_ok=True)
    try:
        req = Request('https://api.elevenlabs.io/v1/user/subscription', headers=headers)
        with urlopen(req, timeout=30) as response:
            subscription = json.load(response)
        remaining = subscription['character_limit'] - subscription['character_count']
        print('Plan:', subscription.get('tier'), 'Remaining credits:', remaining, flush=True)
        # Budget only the included balance. Never enable or purchase extra usage.
        cards = load_cards()
        labels = {c['zh']: c for c in cards}
        for name, description in SOUNDS.items():
            if name not in labels:
                continue
            if args.only and args.only != name:
                continue
            card = labels[name]
            target = out / ((card.get('soundEffect') or media_stem(card)) + '.mp3')
            if target.exists() and target.stat().st_size and not args.replace:
                print('Already exists:', name, flush=True)
                continue
            if remaining < 400:
                raise SystemExit('Stopped: insufficient included credits for the next preview.')
            prompt = description + ' Four-second educational sound effect. Realistic sound, clean quiet background, no speech, no music, no other animals or vehicles.'
            payload = {'text': prompt, 'duration_seconds': 4, 'model_id': 'eleven_text_to_sound_v2', 'prompt_influence': 0.5}
            req = Request('https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128', data=json.dumps(payload).encode(), headers=headers)
            with urlopen(req, timeout=180) as response:
                content_type = response.headers.get('Content-Type', '')
                data = response.read()
                cost = int(response.headers.get('character-cost', '400'))
            if not content_type.startswith('audio/') or len(data) < 1000:
                raise SystemExit('Stopped: unexpected audio response.')
            pending = target.with_suffix('.mp3.part')
            pending.write_bytes(data)
            if target.exists():
                archive = ROOT.parent / 'archive' / 'audio' / 'sfx'
                archive.mkdir(parents=True, exist_ok=True)
                backup = archive / target.name
                suffix = 2
                while backup.exists() or backup.with_suffix('.prompt.txt').exists():
                    backup = archive / f'{target.stem}_{suffix}.mp3'
                    suffix += 1
                shutil.copy2(target, backup)
                if card.get('soundPrompt'):
                    backup.with_suffix('.prompt.txt').write_text(card['soundPrompt'], encoding='utf-8')
            pending.replace(target)
            latest = load_cards()
            saved_card = next(c for c in latest if c['id'] == card['id'])
            saved_card['soundEffect'] = target.stem
            saved_card['soundPrompt'] = prompt
            save_cards(latest)
            remaining -= cost
            print('Generated:', name, 'credits:', cost, flush=True)
        update_card_links(out)
    except HTTPError as exc:
        # Never print headers or credentials.
        try:
            detail = json.loads(exc.read()).get('detail', {})
            reason = detail.get('status', 'request_rejected') if isinstance(detail, dict) else 'request_rejected'
        except (ValueError, AttributeError):
            reason = 'request_rejected'
        raise SystemExit(f'ElevenLabs HTTP {exc.code}: {reason}') from None


if __name__ == '__main__':
    main()
