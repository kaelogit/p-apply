import { LegalLayout, LegalSection } from '@/components/layout/LegalLayout';
import {
  CONTACT_EMAIL,
  PCH_BRAND_NAME,
  PCH_OPERATOR,
  PCH_ADDRESS_LINE1,
  PCH_ADDRESS_LINE2,
} from '@/lib/site';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'PCH privacy policy — how we collect, use, and protect your application information.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-sm text-gray-500 mb-6">Last updated: May 2026</p>
      <LegalSection title="Information We Collect">
        When you submit a PCH application, we collect personal information including your
        name, email address, phone number, mailing address, and country. This information
        is used to process your application and contact you if you win.
      </LegalSection>
      <LegalSection title="How We Use Your Information">
        Your information is used to administer sweepstakes, notify winners by email, comply with legal
        requirements, and send promotional communications (with your consent). We do not sell
        your personal information to third parties.
      </LegalSection>
      <LegalSection title="Data Security">
        We implement industry-standard security measures to protect your personal information.
        However, no method of transmission over the Internet is 100% secure.
      </LegalSection>
      <LegalSection title="Your Rights">
        You may request access to, correction of, or deletion of your personal information
        by contacting us at {CONTACT_EMAIL}.
      </LegalSection>
      <LegalSection title="Contact">
        {PCH_BRAND_NAME}. Operated by {PCH_OPERATOR}. {PCH_ADDRESS_LINE1}, {PCH_ADDRESS_LINE2}.
        Email: {CONTACT_EMAIL}
      </LegalSection>
    </LegalLayout>
  );
}
