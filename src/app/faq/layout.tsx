import { createMetadata } from '@/lib/metadata';
import { buildFaqPageJsonLd, faqItems } from '@/data/faq';

export const metadata = createMetadata({
  title: 'Is PCH Digital Real? How to Apply and Win',
  description:
    'Yes — prizes are being awarded. How to apply, when Dave Sayer emails you, who can enter, and how to check a prize message before you reply.',
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
