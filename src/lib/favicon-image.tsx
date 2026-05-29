import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const LOGO_PATH = join(process.cwd(), 'public/logo.png');
const BORDER_COLOR = '#e0e0e0';

/** Matches navbar logo: white background, subtle border, rounded corners */
export async function createLogoIcon(size: number) {
  const logo = await readFile(LOGO_PATH);
  const base64 = `data:image/png;base64,${logo.toString('base64')}`;
  const borderWidth = Math.max(1, Math.round(size / 32));
  const padding = Math.max(2, Math.round(size * 0.08));
  const radius = Math.max(4, Math.round(size * 0.2));
  const inner = size - padding * 2 - borderWidth * 2;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          borderRadius: radius,
          border: `${borderWidth}px solid ${BORDER_COLOR}`,
          padding,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={base64}
          alt=""
          width={inner}
          height={inner}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { width: size, height: size }
  );
}
