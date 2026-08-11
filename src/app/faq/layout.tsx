import { createMetadata } from '@/lib/metadata';
import { buildFaqPageJsonLd, faqItems } from '@/data/faq';

export const metadata = createMetadata({
  title: 'FAQ',
  description:
    'FAQ for PCH Digital applications — eligibility, winner notification, and how to verify if a prize call or email is real. Official support: support@applypchdigital.com.',
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
