import { Lock, ShieldCheck, Mail, UserX } from 'lucide-react';
import { CONTACT_EMAIL } from '@/lib/site';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Security & Trust',
  description:
    'How PCH protects your application, your privacy, and your personal information.',
  path: '/security',
});

const blocks = [
  {
    icon: Lock,
    title: 'Private applications',
    desc: 'Your application details are never sold or shared publicly. Information is used only to process your application and contact you if you are selected as a winner.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure verification',
    desc: 'When winners are verified, we use professional-grade security practices. We will never ask for your passwords through email.',
  },
  {
    icon: Mail,
    title: 'Email notification',
    desc: 'Selected winners are contacted by email at the address provided on their application. Always verify messages come from an official applypch.com address.',
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
            Your privacy is our priority.
          </h1>
          <p className="text-[var(--pch-text-muted)] leading-relaxed">
            Publishers Clearing House is committed to protecting every applicant
            with the highest standards of security and transparency — in the USA and worldwide.
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

          <div className="card p-8 text-center mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--pch-text-muted)] mb-3">
              Questions about your data?
            </p>
            <p className="text-sm text-[var(--pch-text-muted)] mb-4 leading-relaxed">
              Contact our team directly with any privacy or security questions.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[var(--pch-orange)] font-semibold hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
