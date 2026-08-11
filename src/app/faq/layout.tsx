import { createMetadata } from '@/lib/metadata';
import { buildFaqPageJsonLd, faqItems } from '@/data/faq';

export const metadata = createMetadata({
  title: 'FAQ',
  description:
    'Frequently asked questions about applying to PCH Digital prize drawings — eligibility, how winners are notified, and what happens after you apply.',
  path: '/faq',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildFaqPageJsonLd(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
