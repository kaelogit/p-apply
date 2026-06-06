"""Enhance cash delivery photo with PCH branding for operator send."""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
LOGO_PATH = ROOT / "public" / "logo.png"

PCH_ORANGE = (245, 124, 0)
PCH_ORANGE_DARK = (230, 81, 0)
PCH_NAVY = (26, 35, 56)
WHITE = (255, 255, 255)


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def gradient_bar(size: tuple[int, int]) -> Image.Image:
    w, h = size
    bar = Image.new("RGB", size, PCH_ORANGE)
    draw = ImageDraw.Draw(bar)
    for x in range(w):
        t = x / max(w - 1, 1)
        r = int(PCH_ORANGE[0] + (PCH_ORANGE_DARK[0] - PCH_ORANGE[0]) * t)
        g = int(PCH_ORANGE[1] + (PCH_ORANGE_DARK[1] - PCH_ORANGE[1]) * t)
        b = int(PCH_ORANGE[2] + (PCH_ORANGE_DARK[2] - PCH_ORANGE[2]) * t)
        draw.line([(x, 0), (x, h)], fill=(r, g, b))
    return bar


def enhance_photo(img: Image.Image) -> Image.Image:
    img = img.convert("RGB")
    img = ImageEnhance.Contrast(img).enhance(1.08)
    img = ImageEnhance.Color(img).enhance(1.05)
    img = ImageEnhance.Sharpness(img).enhance(1.15)
    img = ImageEnhance.Brightness(img).enhance(1.03)
    return img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=90, threshold=3))


def compose(
    source: Path,
    output: Path,
    *,
    name: str,
    ref: str,
    address: str,
    prize: str,
) -> Path:
    photo = enhance_photo(Image.open(source))
    pw, ph = photo.size

    top_h = int(ph * 0.14)
    bottom_h = int(ph * 0.11)
    side_w = int(pw * 0.055)
    canvas_w = pw + side_w
    canvas_h = ph + top_h + bottom_h

    canvas = Image.new("RGB", (canvas_w, canvas_h), (248, 248, 248))
    canvas.paste(photo, (side_w // 2, top_h))

    # Top PCH header
    header = gradient_bar((canvas_w, top_h))
    canvas.paste(header, (0, 0))

    draw = ImageDraw.Draw(canvas)
    title_font = load_font(max(22, top_h // 5), bold=True)
    sub_font = load_font(max(14, top_h // 8))
    small_font = load_font(max(12, top_h // 9))

    if LOGO_PATH.exists():
        logo = Image.open(LOGO_PATH).convert("RGBA")
        logo_h = int(top_h * 0.72)
        ratio = logo_h / logo.height
        logo = logo.resize((int(logo.width * ratio), logo_h), Image.Resampling.LANCZOS)
        canvas.paste(logo, (18, (top_h - logo_h) // 2), logo)

    draw.text((int(top_h * 0.95) + 90, top_h * 0.22), "PUBLISHERS CLEARING HOUSE", fill=WHITE, font=title_font)
    draw.text((int(top_h * 0.95) + 90, top_h * 0.52), "Prize Patrol — Cash Delivery Package Prepared", fill=WHITE, font=sub_font)
    draw.text((int(top_h * 0.95) + 90, top_h * 0.74), f"Reference {ref}", fill=(255, 236, 210), font=small_font)

    # Side board strip
    side = gradient_bar((side_w, canvas_h))
    canvas.paste(side, (0, 0))
    side_draw = ImageDraw.Draw(canvas)
    label = "PCH\nDIGITAL"
    side_draw.text((6, canvas_h // 2 - 28), label, fill=WHITE, font=load_font(max(11, side_w // 2), bold=True))

    # Bottom status bar
    footer_y = top_h + ph
    draw.rectangle([(0, footer_y), (canvas_w, canvas_h)], fill=PCH_NAVY)
    foot_font = load_font(max(13, bottom_h // 4), bold=True)
    foot_small = load_font(max(11, bottom_h // 5))
    draw.text((16, footer_y + bottom_h * 0.18), f"{name}  |  {prize} Cash Award", fill=WHITE, font=foot_font)
    draw.text((16, footer_y + bottom_h * 0.52), address, fill=(200, 210, 230), font=foot_small)
    draw.text(
        (16, footer_y + bottom_h * 0.74),
        "Status: Secured at dispatch — awaiting final administrative release on official file",
        fill=(255, 200, 140),
        font=foot_small,
    )

    # Thin frame
    draw.rectangle([(side_w // 2 - 2, top_h - 2), (side_w // 2 + pw + 1, top_h + ph + 1)], outline=PCH_ORANGE, width=3)

    output.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output, quality=92, optimize=True)
    return output


if __name__ == "__main__":
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else None
    if not src or not src.exists():
        print("Usage: python enhance-delivery-photo.py <source-image>")
        sys.exit(1)

    out = ROOT / "public" / "delivery" / "william-pearson-cash-package.png"
    compose(
        src,
        out,
        name="William Pearson",
        ref="PCH-WIN-012006851",
        address="1724 Maple Dr, Danville, VA 24540, USA",
        prize="$1,250,000",
    )
    print(out)
