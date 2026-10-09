"""Generate Chinese card audio with iFlytek 超拟人语音合成 (smart-tts).

Needs an xfyun.cn account with the smart-tts service enabled. Put the
app credentials in .env:

    XFYUN_APPID=xxxxxxxx
    XFYUN_API_KEY=xxxxxxxxxxxxxxxx
    XFYUN_API_SECRET=xxxxxxxxxxxxxxxx
    XFYUN_VCN=x4_lingxiaoxuan_oral   # 妩媚姐姐 voice code from the console

Overwrites audio/zh/<text>.mp3 (the app needs no changes). Progress is
tracked in word-examples/.xfyun_done.json so an interrupted run resumes where
it stopped; delete that file to force a full regeneration.
"""
from card_data import load_cards, save_cards

import base64
import hashlib
import hmac
import json
import ssl
import sys
import time
from email.utils import formatdate
from pathlib import Path
from urllib.parse import urlencode

import websocket

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]
HOST = "cbm01.cn-huabei-1.xf-yun.com"
PATH = "/v1/private/mcd9m97e6"
SPEED = 45  # 0-100, 50 = normal; slightly slower for a toddler

# Pronunciation substitutions (长 alone reads zhǎng)
SPOKEN_AS = {"长": "常"}


def read_env() -> dict:
    env_file = ROOT / ".env"
    if not env_file.exists():
        sys.exit("The .env file was not found.")
    env = {}
    for line in env_file.read_text(encoding="utf-8").splitlines():
        if "=" in line and not line.startswith("#"):
            k, v = line.split("=", 1)
            env[k.strip()] = v.strip()
    missing = [k for k in ("XFYUN_APPID", "XFYUN_API_KEY", "XFYUN_API_SECRET", "XFYUN_VCN") if not env.get(k)]
    if missing:
        sys.exit(f"Missing settings in .env: {', '.join(missing)}")
    return env


def auth_url(api_key: str, api_secret: str) -> str:
    date = formatdate(usegmt=True)
    origin = f"host: {HOST}\ndate: {date}\nGET {PATH} HTTP/1.1"
    sig = base64.b64encode(
        hmac.new(api_secret.encode(), origin.encode(), hashlib.sha256).digest()
    ).decode()
    auth = base64.b64encode(
        (f'api_key="{api_key}", algorithm="hmac-sha256", '
         f'headers="host date request-line", signature="{sig}"').encode()
    ).decode()
    return f"wss://{HOST}{PATH}?" + urlencode({"authorization": auth, "date": date, "host": HOST})


def synthesize(env: dict, text: str) -> bytes:
    ws = websocket.create_connection(
        auth_url(env["XFYUN_API_KEY"], env["XFYUN_API_SECRET"]),
        sslopt={"cert_reqs": ssl.CERT_REQUIRED},
        timeout=30,
    )
    try:
        ws.send(json.dumps({
            "header": {"app_id": env["XFYUN_APPID"], "status": 2},
            "parameter": {
                "oral": {"oral_level": "mid"},
                "tts": {
                    "vcn": env["XFYUN_VCN"],
                    "speed": SPEED, "volume": 50, "pitch": 50,
                    "audio": {"encoding": "lame", "sample_rate": 24000,
                              "channels": 1, "bit_depth": 16, "frame_size": 0},
                },
            },
            "payload": {"text": {"encoding": "utf8", "compress": "raw", "format": "plain",
                                  "status": 2, "seq": 0,
                                  "text": base64.b64encode(text.encode()).decode()}},
        }))
        audio = b""
        while True:
            resp = json.loads(ws.recv())
            header = resp["header"]
            if header["code"] != 0:
                raise RuntimeError(f"xfyun {header['code']}: {header.get('message')}")
            chunk = (resp.get("payload") or {}).get("audio") or {}
            if chunk.get("audio"):
                audio += base64.b64decode(chunk["audio"])
            if header["status"] == 2:
                return audio
    finally:
        ws.close()


def main() -> None:
    env = read_env()
    entries = load_cards()
    texts = []
    spoken_text = {}
    seen = set()
    for e in entries:
        for t in [e.get("audio", {}).get("zh", e["zh"])]:
            spoken_text[t] = e["zh"]
            if t not in seen:
                seen.add(t)
                texts.append(t)

    out_dir = ROOT / "audio" / "zh"
    out_dir.mkdir(parents=True, exist_ok=True)
    done_file = ROOT / "word-examples" / ".xfyun_done.json"
    done_file.parent.mkdir(parents=True, exist_ok=True)
    done = set(json.loads(done_file.read_text(encoding="utf-8"))) if done_file.exists() else set()

    todo = [t for t in texts if t not in done
            or not (out_dir / f"{t}.mp3").exists()
            or (out_dir / f"{t}.mp3").stat().st_size == 0]
    print(f"Total recordings: {len(texts)}; to generate: {len(todo)}", flush=True)

    # these error codes mean the whole run is doomed (auth / quota), not one item
    FATAL_CODES = ("11200", "11201", "11202", "11203", "10105", "10313")

    made = 0
    skipped = []
    aborted = False
    for i, text in enumerate(todo):
        audio = b""
        for attempt in range(3):
            try:
                audio = synthesize(env, SPOKEN_AS.get(spoken_text[text], spoken_text[text]))
                break
            except Exception as exc:  # noqa: BLE001
                msg = str(exc)
                if any(code in msg for code in FATAL_CODES):
                    print(f"\nERROR: Authorization or quota error: {msg}", flush=True)
                    aborted = True
                    break
                if attempt == 2:
                    print(f"WARNING: Skipping '{text}' after repeated failures: {msg}", flush=True)
                    skipped.append(text)
                else:
                    time.sleep(2)
        if aborted:
            print("Progress saved. Run this script again to resume.", flush=True)
            break
        if not audio:
            if text not in skipped:
                print(f"WARNING: Skipping '{text}': received empty audio", flush=True)
                skipped.append(text)
            continue
        pending = out_dir / f"{text}.mp3.part"
        pending.write_bytes(audio)
        pending.replace(out_dir / f"{text}.mp3")
        done.add(text)
        done_file.write_text(json.dumps(sorted(done), ensure_ascii=False), encoding="utf-8")
        made += 1
        if made % 25 == 0:
            print(f"[{made}/{len(todo)}]", flush=True)
            done_file.write_text(json.dumps(sorted(done), ensure_ascii=False), encoding="utf-8")
        time.sleep(0.15)  # be gentle with the QPS limit

    done_file.write_text(json.dumps(sorted(done), ensure_ascii=False), encoding="utf-8")
    current_done = sum(t in done and (out_dir / f"{t}.mp3").exists()
                       and (out_dir / f"{t}.mp3").stat().st_size > 0 for t in texts)
    print(f"\nDone. Generated {made} recordings this run; completed {current_done}/{len(texts)} total.", flush=True)
    if skipped:
        print(f"Skipped {len(skipped)} recordings (run again to retry): {' '.join(skipped)}", flush=True)


if __name__ == "__main__":
    main()
