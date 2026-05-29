import { LegalLayout, LegalSection } from '@/components/layout/LegalLayout';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Official Rules',
  description:
    'Official rules for PCH prize drawings — eligibility, winner selection, and prize awards.',
  path: '/rules',
});

export default function RulesPage() {
  return (
    <LegalLayout title="Official Rules">
      <p className="text-sm text-gray-500 mb-6">Last updated: May 2026</p>
      <LegalSection title="Eligibility">
        Open to legal residents of the 50 United States, D.C., and Canada (excluding Quebec)
        who are 18 years of age or older at time of entry. Void where prohibited.
      </LegalSection>
      <LegalSection title="How To Apply">
        Apply online by completing the application form. Limit one application per person per day
        unless otherwise stated.
      </LegalSection>
      <LegalSection title="Prize Description">
        Grand Prize: $2,500,000 ($2,500,000.00) Mega Prize awarded as a lump sum. SuperPrize awards
        up to $1,250,000 ($1,250,000.00) and additional prizes
        as described in individual promotion materials. Prizes are not transferable.
        Taxes are the sole responsibility of the winner.
      </LegalSection>
      <LegalSection title="Winner Selection">
        Winners will be selected in a random drawing from among all eligible applications received.
        Odds of winning depend on the number of eligible applications received.
      </LegalSection>
      <LegalSection title="Winner Notification">
        Potential winners will be notified by email at the address provided on their application.
        Winners may be required to sign and return an Affidavit of Eligibility and Release of Liability.
      </LegalSection>
      <LegalSection title="Sponsor">
        Publishers Clearing House, 382 Channel Drive, Port Washington, NY 11050.
      </LegalSection>
    </LegalLayout>
  );
}
