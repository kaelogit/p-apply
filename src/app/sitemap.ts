import type { MetadataRoute } from 'next';
import { pageUrl, PUBLIC_ROUTES } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PUBLIC_ROUTES.map((path) => ({
    url: pageUrl(path),
    lastModified,
    changeFrequency:
      path === '/' || path === '/apply' || path === '/faq' || path === '/verify' ? 'daily' : 'weekly',
    priority:
      path === '/'
        ? 1
        : path === '/apply' || path === '/verify'
          ? 0.9
          : path === '/faq'
            ? 0.85
            : path === '/winners' || path === '/areas'
              ? 0.8
              : 0.7,
  }));
}
