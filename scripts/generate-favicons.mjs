/**
 * Generates favicon + app icons from public/logo.png (rounded border, matches navbar).
 * Runs automatically before `npm run build`.
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import pngToIco from 'png-to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const logoPath = join(root, 'public/logo.png');
const appDir = join(root, 'src/app');
const BORDER = '#e0e0e0';

async function renderIcon(size) {
  const radius = Math.max(4, Math.round(size * 0.2));
  const padding = Math.max(2, Math.round(size * 0.08));
  const inner = size - padding * 2;

  const logo = await sharp(logoPath)
    .resize(inner, inner, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();

  const frameSvg = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="${size - 1}" height="${size - 1}" rx="${radius}" ry="${radius}" fill="#ffffff" stroke="${BORDER}" stroke-width="1"/>
    </svg>`
  );

  const frame = await sharp(frameSvg).png().toBuffer();

  return sharp(frame)
    .composite([{ input: logo, gravity: 'centre' }])
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(appDir, { recursive: true });

  const icon32 = await renderIcon(32);
  const icon180 = await renderIcon(180);
  const icon48 = await renderIcon(48);

  await writeFile(join(appDir, 'icon.png'), icon32);
  await writeFile(join(appDir, 'apple-icon.png'), icon180);

  const ico = await pngToIco([icon32, icon48, icon180]);
  await writeFile(join(appDir, 'favicon.ico'), ico);
  // Also write to public/ so /favicon.ico works even if app metadata is cached
  await writeFile(join(root, 'public/favicon.ico'), ico);

  console.log('Generated src/app/favicon.ico, icon.png, apple-icon.png, public/favicon.ico from public/logo.png');
}

main().catch((err) => {
  console.error('Favicon generation failed:', err);
  process.exit(1);
});
