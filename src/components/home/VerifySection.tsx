import Link from 'next/link';
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';
import { APPLY_FROM_EMAIL } from '@/lib/email-addresses';
import {
  APPLICANT_CASE_MANAGER_NAME,
  APPLICANT_CASE_MANAGER_TITLE,
  APPLICATION_RESPONSE_HOURS,
  CONTACT_EMAIL,
  PCH_BRAND_NAME,
  SITE_DOMAIN,
} from '@/lib/site';

export function VerifySection() {
  return (
    <section id="verify" className="border-y border-[var(--pch-border)] bg-[var(--pch-gray-50)] py-20 px-5">
      <div className="container-page max-w-3xl">
        <p className="section-label">Before you reply</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--pch-text)] md:text-4xl">
          Did someone say you won a PCH prize?
        </h2>
        <p className="mt-4 leading-relaxed text-[var(--pch-text-muted)]">
          Pause. Check it here first. Official messages come only from{' '}
          <span className="font-semibold text-[var(--pch-text)]">{CONTACT_EMAIL}</span> on{' '}
          {SITE_DOMAIN}. {PCH_BRAND_NAME} never asks you to pay a fee or share a password.
        </p>

        <div className="mt-8 rounded-lg border border-[var(--pch-border)] bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--pch-text-muted)]">
            Official support email
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Please%20verify%20this%20contact`}
            className="mt-2 block break-all text-xl font-semibold text-[var(--pch-orange)] sm:text-2xl"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-[var(--pch-text-muted)]">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--pch-orange)]" />
            If the address does not match this one, it is not us.
          </p>
        </div>

        <div className="mt-10">
          <p className="section-label">Your coordinator</p>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--pch-text)]">
            {APPLICANT_CASE_MANAGER_NAME}
          </h3>
          <p className="mt-1 text-sm font-semibold text-[var(--pch-orange)]">
            {APPLICANT_CASE_MANAGER_TITLE}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--pch-text-muted)]">
            Every application is read by a person. {APPLICANT_CASE_MANAGER_NAME} writes you within{' '}
            {APPLICATION_RESPONSE_HOURS} hours — not a ticket number, not a chatbot. Official
            follow-up is email only. Receipts come from {APPLY_FROM_EMAIL}.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--pch-text-muted)]">
            If a stranger contacts you claiming to be {PCH_BRAND_NAME}, pause and verify on this
            website first.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/verify" className="btn-primary px-6 py-3.5">
            Check if this message is real
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Please%20verify%20this%20contact`}
            className="btn-outline px-6 py-3.5"
          >
            <Mail className="h-4 w-4" />
            Email support
          </a>
        </div>
      </div>
    </section>
  );
}
