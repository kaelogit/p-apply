import type { MetadataRoute } from 'next';
import { pageUrl, PUBLIC_ROUTES } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PUBLIC_ROUTES.map((path) => ({
    url: pageUrl(path),
    lastModified,
    changeFrequency: path === '/' || path === '/apply' ? 'daily' : 'weekly',
    priority: path === '/' ? 1 : path === '/apply' ? 0.9 : 0.7,
  }));
}
