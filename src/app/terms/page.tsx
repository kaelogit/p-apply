import { Metadata } from 'next';
import { LegalLayout, LegalSection } from '@/components/layout/LegalLayout';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p className="text-sm text-gray-500 mb-6">Last updated: May 2026</p>
      <LegalSection title="Acceptance of Terms">
        By accessing and using this website, you accept and agree to be bound by these Terms
        of Service. If you do not agree, please do not use this site.
      </LegalSection>
      <LegalSection title="Sweepstakes Participation">
        Participation in PCH sweepstakes is subject to the Official Rules of each promotion.
        In the event of a conflict between these Terms and the Official Rules, the Official
        Rules shall govern.
      </LegalSection>
      <LegalSection title="Prohibited Conduct">
        You may not use automated systems, bots, or scripts to submit entries. Fraudulent
        entries will be disqualified. PCH reserves the right to investigate and prosecute
        violations to the fullest extent of the law.
      </LegalSection>
      <LegalSection title="Disclaimer">
        This website and its content are provided &ldquo;as is&rdquo; without warranties of any kind.
        PCH is not liable for any damages arising from your use of this site.
      </LegalSection>
      <LegalSection title="Changes">
        We reserve the right to modify these Terms at any time. Continued use of the site
        after changes constitutes acceptance of the updated Terms.
      </LegalSection>
    </LegalLayout>
  );
}
