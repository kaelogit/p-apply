import type { Metadata } from 'next';
import { absoluteSiteUrl, MAX_LUMP_SUM_PRIZE, SITE_URL } from '@/lib/site';

export const SITE_NAME = 'PCH Digital';
export const DEFAULT_TITLE = 'Official PCH Site — Apply Free. You Could Win $2.5M';
export const DEFAULT_DESCRIPTION = `This is applypchdigital.com — the official PCH Digital site. Apply free for prizes up to ${MAX_LUMP_SUM_PRIZE}. Dave Sayer emails you within 24 hours. We never ask for a fee or password.`;

/** Hero image used for link previews (WhatsApp, Instagram, Facebook, iMessage, etc.) */
export const OG_IMAGE_PATH = '/hero-image.jpg';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 900;
export const OG_IMAGE_ALT = 'PCH Digital winner with Prize Patrol and prize check';

export function pageUrl(path = '/'): string {
  return absoluteSiteUrl(path || '/');
}

export function ogImageUrl(imagePath = OG_IMAGE_PATH): string {
  return absoluteSiteUrl(imagePath);
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
  const documentTitle = options.title ?? DEFAULT_TITLE;

  return {
    title: options.title ?? { default: DEFAULT_TITLE, template: '%s' },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
        { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      ],
      shortcut: '/favicon.ico',
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    openGraph: {
      title: documentTitle,
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
      title: documentTitle,
      description,
      images: {
        url: imageUrl,
        alt: imageAlt,
      },
    },
    robots: options.noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
      : {}),
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
  '/verify',
  '/rules',
  '/privacy',
  '/terms',
] as const;
