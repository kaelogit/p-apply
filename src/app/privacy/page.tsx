import { Metadata } from 'next';
import { LegalLayout, LegalSection } from '@/components/layout/LegalLayout';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy Policy' };

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
        Publishers Clearing House, 382 Channel Drive, Port Washington, NY 11050.
        Email: {CONTACT_EMAIL}
      </LegalSection>
    </LegalLayout>
  );
}
