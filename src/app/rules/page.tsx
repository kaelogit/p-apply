import { LegalLayout, LegalSection } from '@/components/layout/LegalLayout';
import { createMetadata } from '@/lib/metadata';
import {
  PCH_BRAND_NAME,
  PCH_OPERATOR,
  PCH_ADDRESS_LINE1,
  PCH_ADDRESS_LINE2,
  PCH_OWNERSHIP_NOTE,
} from '@/lib/site';

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
        Potential winners will be notified by email and by text message at the email address and phone number provided on their application. Official email: support@applypch.com. Official text: +1 (917) 743-0256 (text only — do not call).
        Winners may be required to sign and return an Affidavit of Eligibility and Release of Liability.
      </LegalSection>
      <LegalSection title="Sponsor">
        {PCH_BRAND_NAME}. Sweepstakes administered by {PCH_OPERATOR}. {PCH_OWNERSHIP_NOTE}{' '}
        Mailing address: {PCH_ADDRESS_LINE1}, {PCH_ADDRESS_LINE2}.
      </LegalSection>
    </LegalLayout>
  );
}
