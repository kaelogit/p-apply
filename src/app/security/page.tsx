import Link from 'next/link';
import { Lock, ShieldCheck, Mail, UserX, AlertTriangle, ArrowRight } from 'lucide-react';
import {
  CONTACT_EMAIL,
  APPLICATION_RESPONSE_HOURS,
  applicantContactWithin,
  WINNER_NOTIFICATION,
  SITE_DOMAIN,
  PCH_BRAND_NAME,
} from '@/lib/site';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Did PCH Say You Won? Check If It’s Real',
  description: `Official PCH Digital contact is ${CONTACT_EMAIL} on ${SITE_DOMAIN}. We never ask for fees or passwords. Check a prize message before you act.`,
  path: '/verify',
  noIndex: true,
});

const blocks = [
  {
    icon: AlertTriangle,
    title: 'Unsure if a contact is real?',
    desc: `If someone called, emailed, or messaged you about a PCH prize and you are not sure it is official, stop and verify first. Email ${CONTACT_EMAIL} or use our Verify page. We will confirm whether the outreach matches an official file.`,
  },
  {
    icon: Lock,
    title: 'Private applications',
    desc: 'Your application details are never sold or shared publicly. Information is used only to process your application and contact you if you are selected as a winner.',
  },
  {
    icon: ShieldCheck,
    title: 'Official channels only',
    desc: `Use ${SITE_DOMAIN} and email addresses ending in @${SITE_DOMAIN} (including ${CONTACT_EMAIL}). We will never ask for your email or banking passwords. Lookalike domains and free inboxes pretending to be us are not official.`,
  },
  {
    icon: Mail,
    title: 'Email response',
    desc: `${applicantContactWithin(APPLICATION_RESPONSE_HOURS)} ${WINNER_NOTIFICATION}`,
  },
  {
    icon: UserX,
    title: 'Your data, your control',
    desc: 'You may request access to, correction of, or deletion of your personal information at any time by contacting our customer service team. See our Privacy Policy for full details.',
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[var(--pch-gray-50)] pt-28 pb-12 px-5 border-b border-[var(--pch-border)]">
        <div className="container-page max-w-3xl text-center">
          <div className="w-14 h-14 rounded-full bg-white border border-[var(--pch-border)] flex items-center justify-center mx-auto mb-6">
            <Lock className="w-7 h-7 text-[var(--pch-orange)]" />
          </div>
          <p className="section-label mb-3">Security</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)] mb-4">
            Trust, privacy, and how to verify us.
          </h1>
          <p className="text-[var(--pch-text-muted)] leading-relaxed">
            {PCH_BRAND_NAME} protects every applicant — and helps people confirm whether a prize
            message is really from us before they act.
          </p>
        </div>
      </section>

      <section className="py-16 px-5">
        <div className="container-page max-w-3xl space-y-12">
          {blocks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-5">
              <div className="w-11 h-11 rounded-lg bg-[var(--pch-orange-soft)] text-[var(--pch-orange)] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[var(--pch-text)] mb-2">{title}</h2>
                <p className="text-sm text-[var(--pch-text-muted)] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}

          <div className="card p-8 text-center mt-8 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--pch-text-muted)]">
              Verify contact or ask about your data
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Please%20verify%20this%20contact`}
              className="block text-[var(--pch-orange)] font-semibold hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <Link
              href="/verify"
              className="btn-primary inline-flex px-6 py-3 text-sm"
            >
              Go to Verify page
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
