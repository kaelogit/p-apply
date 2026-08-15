import Link from 'next/link';
import { AlertTriangle, CheckCircle2, Globe, Mail, ShieldCheck } from 'lucide-react';
import { verifyFaqs } from '@/data/verify';
import { APPLY_FROM_EMAIL } from '@/lib/email-addresses';
import {
  APPLICANT_CASE_MANAGER_NAME,
  APPLICANT_CASE_MANAGER_TITLE,
  CONTACT_EMAIL,
  PCH_ADDRESS_LINE1,
  PCH_ADDRESS_LINE2,
  PCH_BRAND_NAME,
  SITE_DOMAIN,
  SITE_URL,
} from '@/lib/site';

const checks = [
  {
    icon: Globe,
    title: 'Official website only',
    body: `The official application site is ${SITE_DOMAIN}. If a link goes somewhere else, stop and email us.`,
  },
  {
    icon: Mail,
    title: 'Official email',
    body: `Legitimate ${PCH_BRAND_NAME} messages come from addresses you can confirm through this page: ${CONTACT_EMAIL} (${APPLICANT_CASE_MANAGER_NAME}) and ${APPLY_FROM_EMAIL} (application receipts).`,
  },
  {
    icon: ShieldCheck,
    title: 'Ask us before you act',
    body: 'Tell us who contacted you and what they asked. We will confirm whether it matches an official file.',
  },
  {
    icon: AlertTriangle,
    title: 'Protect yourself',
    body: 'We will never ask for your email or banking passwords, and we will never ask you to pay a fee to receive a prize. If anyone claiming to represent us demands passwords or money, ignore them and write support.',
  },
];

export default function VerifyPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[var(--pch-border)] bg-[var(--pch-gray-50)] px-5 pt-28 pb-12">
        <div className="container-page max-w-3xl text-center">
          <p className="section-label mb-3">Verify</p>
          <h1 className="text-3xl font-semibold leading-tight text-[var(--pch-text)] md:text-4xl">
            Did someone say you won a PCH prize?
            <span className="mt-2 block text-[var(--pch-orange)]">Check if it’s real first.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--pch-text-muted)]">
            If a call, email, or message left you unsure, pause and write us. Confirming official{' '}
            {PCH_BRAND_NAME} contact is the right next step.
          </p>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="container-page max-w-3xl space-y-8">
          <div className="card p-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[var(--pch-orange)]" />
            <h2 className="mt-4 text-xl font-semibold text-[var(--pch-text)]">Official support email</h2>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Please%20verify%20this%20contact`}
              className="mt-2 block text-lg font-semibold text-[var(--pch-orange)] break-all"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-sm text-[var(--pch-text-muted)]">
              Coordinator: {APPLICANT_CASE_MANAGER_NAME}, {APPLICANT_CASE_MANAGER_TITLE}. Application
              receipts come from {APPLY_FROM_EMAIL}. Website:{' '}
              <a href={SITE_URL} className="font-medium text-[var(--pch-text)] hover:underline">
                {SITE_DOMAIN}
              </a>
            </p>
            <p className="mt-2 text-xs text-[var(--pch-text-muted)]">
              {PCH_ADDRESS_LINE1}, {PCH_ADDRESS_LINE2}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Please%20verify%20this%20contact`}
              className="btn-primary mt-6 inline-flex px-6 py-3"
            >
              Email support to verify
            </a>
          </div>

          <div className="space-y-6">
            {checks.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--pch-orange-soft)] text-[var(--pch-orange)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--pch-text)]">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--pch-text-muted)]">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--pch-text)]">
              Questions people ask before they reply
            </h2>
            <div className="mt-4">
              {verifyFaqs.map((item) => (
                <div key={item.question} className="border-t border-[var(--pch-border)] py-5">
                  <h3 className="text-sm font-semibold text-[var(--pch-text)]">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--pch-text-muted)]">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/faq" className="btn-outline px-5 py-2.5 text-sm">
              FAQ
            </Link>
            <Link href="/privacy" className="btn-outline px-5 py-2.5 text-sm">
              Privacy
            </Link>
            <Link href="/apply" className="btn-primary px-5 py-2.5 text-sm">
              Apply on this site
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
