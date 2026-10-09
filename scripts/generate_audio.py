"""Generate missing English, Japanese and Spanish audio with Microsoft edge-tts.

Chinese audio is generated exclusively by generate_audio_xfyun.py.
The ja field supplies spoken kana; jaAudio supplies the recording filename.
Existing nonempty files are preserved. Incomplete downloads are saved to
.part files and promoted only after successful generation.
"""
from card_data import load_cards, save_cards

import asyncio
import json
import sys
from pathlib import Path

import edge_tts

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]
VOICES = {
    "en": "en-US-AriaNeural",
    "ja": "ja-JP-NanamiNeural",
    "es": "es-MX-DaliaNeural",
}
RATE = "-20%"  # slightly slower, for little ears
CONCURRENCY = 8

def collect_tasks() -> list[tuple[str, str, str]]:
    """Returns (lang, filename_key, spoken_text) triples."""
    entries = load_cards()
    tasks = set()
    for e in entries:
        tasks.add(("en", e.get("audio", {}).get("en", e["en"]), e["en"]))
        tasks.add(("es", e.get("audio", {}).get("es", e["es"]), e["es"]))
        tasks.add(("ja", e["jaAudio"], e["ja"]))  # spoken text is ALWAYS plain ja kana
    return sorted(tasks)


async def generate(sem: asyncio.Semaphore, lang: str, key: str, text: str) -> bool:
    out = ROOT / "audio" / lang / f"{key}.mp3"
    if out.exists() and out.stat().st_size > 0:
        return False
    async with sem:
        pending = out.with_suffix(".mp3.part")
        spoken = text
        for attempt in range(3):
            try:
                await asyncio.wait_for(
                    edge_tts.Communicate(spoken, VOICES[lang], rate=RATE).save(str(pending)),
                    timeout=45,
                )
                if not pending.stat().st_size:
                    raise RuntimeError("Received empty audio")
                pending.replace(out)
                return True
            except Exception as exc:  # noqa: BLE001 — network hiccups
                pending.unlink(missing_ok=True)
                if attempt == 2:
                    print(f"ERROR: {lang}/{key}: {exc}", flush=True)
                    return False
                await asyncio.sleep(3)
    return False


async def main() -> None:
    tasks = collect_tasks()
    for lang in VOICES:
        (ROOT / "audio" / lang).mkdir(parents=True, exist_ok=True)
    sem = asyncio.Semaphore(CONCURRENCY)
    missing = [(lang, key, text) for lang, key, text in tasks
               if not (ROOT / "audio" / lang / f"{key}.mp3").exists()
               or (ROOT / "audio" / lang / f"{key}.mp3").stat().st_size == 0]
    print(f"Recordings to generate: {len(missing)}", flush=True)
    made = completed = 0
    for result in asyncio.as_completed([generate(sem, *task) for task in missing]):
        made += await result
        completed += 1
        if completed % 25 == 0:
            print(f"Processed {completed}/{len(missing)}; generated {made}", flush=True)
    have = sum(1 for lang, key, _ in tasks if (ROOT / "audio" / lang / f"{key}.mp3").exists()
               and (ROOT / "audio" / lang / f"{key}.mp3").stat().st_size > 0)
    print(f"Total recordings: {len(tasks)}; generated this run: {made}; available: {have}.")
    if have < len(tasks):
        print("Some recordings are missing. Run this script again to retry.")


if __name__ == "__main__":
    asyncio.run(main())
