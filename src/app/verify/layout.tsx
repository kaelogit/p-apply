import { ReactNode } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqPageJsonLd } from '@/data/faq';
import { VERIFY_DESCRIPTION, VERIFY_TITLE, verifyFaqs } from '@/data/verify';
import { createMetadata, pageUrl } from '@/lib/metadata';
import { PCH_BRAND_NAME } from '@/lib/site';

export const metadata = createMetadata({
  title: VERIFY_TITLE,
  description: VERIFY_DESCRIPTION,
  path: '/verify',
});

export default function VerifyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Check a message', item: pageUrl('/verify') },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `Verify official ${PCH_BRAND_NAME} contact`,
          url: pageUrl('/verify'),
          description: VERIFY_DESCRIPTION,
        }}
      />
      <JsonLd data={buildFaqPageJsonLd(verifyFaqs)} />
      {children}
    </>
  );
}
