import { createLogoIcon } from '@/lib/favicon-image';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return createLogoIcon(32);
}
