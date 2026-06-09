import type { Metadata } from 'next';
import { absoluteSiteUrl, MAX_LUMP_SUM_PRIZE, SITE_URL } from '@/lib/site';

export const SITE_NAME = "Publisher's Clearing House";
export const DEFAULT_TITLE = 'Apply to Win PCH Prizes';
export const DEFAULT_DESCRIPTION = `Apply for your chance to win PCH prizes — Mega Prize up to ${MAX_LUMP_SUM_PRIZE}, SuperPrizes, Weekly For Life, and more. Real winners since 1953.`;

/** Hero image used for link previews (WhatsApp, Instagram, Facebook, iMessage, etc.) */
export const OG_IMAGE_PATH = '/hero-image.jpg';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 900;
export const OG_IMAGE_ALT = 'PCH winner with Prize Patrol and prize check';

export function pageUrl(path = '/'): string {
  return absoluteSiteUrl(path || '/');
}

export function ogImageUrl(imagePath = OG_IMAGE_PATH): string {
  return absoluteSiteUrl(imagePath);
}

function fullTitle(title?: string): string {
  return title ? `${title} | PCH` : `${SITE_NAME} — ${DEFAULT_TITLE}`;
}

export function createMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const description = options.description ?? DEFAULT_DESCRIPTION;
  const path = options.path ?? '/';
  const url = pageUrl(path);
  const imagePath = options.image ?? OG_IMAGE_PATH;
  const imageUrl = ogImageUrl(imagePath);
  const imageAlt = options.imageAlt ?? OG_IMAGE_ALT;
  const title = fullTitle(options.title);

  return {
    ...(options.title ? { title: options.title } : { title: { default: title, template: '%s | PCH' } }),
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: imageAlt,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: {
        url: imageUrl,
        alt: imageAlt,
      },
    },
    robots: options.noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

/** All public marketing routes — used by sitemap.xml */
export const PUBLIC_ROUTES = [
  '/',
  '/apply',
  '/about',
  '/story',
  '/areas',
  '/impact',
  '/winners',
  '/faq',
  '/security',
  '/rules',
  '/privacy',
  '/terms',
] as const;
