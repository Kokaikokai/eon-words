"""Build display-sized WebP copies; preserve original PNGs locally."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]


def build_one(source, target, size, force=False):
    if not force and target.exists() and target.stat().st_mtime_ns >= source.stat().st_mtime_ns:
        return
    target.parent.mkdir(exist_ok=True)
    with Image.open(source) as image:
        image = image.convert('RGBA')
        image.thumbnail((size, size), Image.Resampling.LANCZOS)
        image.save(target, 'WEBP', quality=85, method=4)


def build():
    for name, size in [('thumb', 240), ('screen', 800)]:
        folder = ROOT / 'images' / name
        folder.mkdir(exist_ok=True)
        for source in (ROOT / 'images').glob('*.png'):
            target = folder / (source.stem + '.webp')
            build_one(source, target, size)


if __name__ == '__main__':
    build()
