import Link from 'next/link';
import { ShieldCheck, Mail, Globe, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import {
  CONTACT_EMAIL,
  SITE_DOMAIN,
  SITE_URL,
  APPLICANT_CASE_MANAGER_NAME,
  APPLICANT_CASE_MANAGER_TITLE,
  PCH_BRAND_NAME,
  PCH_ADDRESS_LINE1,
  PCH_ADDRESS_LINE2,
} from '@/lib/site';

export const metadata = createMetadata({
  title: 'Verify Official Contact',
  description: `Was someone contacting you about a PCH prize? Verify if it is real. Official PCH Digital contact is only ${CONTACT_EMAIL} and ${SITE_DOMAIN}. How to spot impersonators and confirm before you act.`,
  path: '/verify',
});

const checks = [
  {
    icon: Globe,
    title: 'Official website only',
    body: `The official application and information site is ${SITE_DOMAIN}. Bookmark it. If a link goes somewhere else, pause and contact us first.`,
  },
  {
    icon: Mail,
    title: 'Official email domain',
    body: `Legitimate PCH Digital messages come from addresses ending in @${SITE_DOMAIN} — including ${CONTACT_EMAIL}. Do not trust lookalike domains, free inboxes pretending to be us, or attachments from unknown senders.`,
  },
  {
    icon: ShieldCheck,
    title: 'Ask us before you act',
    body: `If someone called, texted, emailed, or messaged you about a prize and you are unsure, email ${CONTACT_EMAIL} from this page. Tell us what you were told. We will confirm whether it matches an official file.`,
  },
  {
    icon: AlertTriangle,
    title: 'Protect yourself',
    body: 'We will never ask for your email or banking passwords. If anyone claiming to represent us demands passwords, ignore them and write support immediately.',
  },
];

export default function VerifyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Verify official ${PCH_BRAND_NAME} contact`,
    description: `How to verify whether contact about a PCH prize is from official ${PCH_BRAND_NAME} staff.`,
    url: `${SITE_URL}/verify`,
    isPartOf: { '@type': 'WebSite', name: PCH_BRAND_NAME, url: SITE_URL },
    mainEntity: {
      '@type': 'Organization',
      name: PCH_BRAND_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: PCH_ADDRESS_LINE1,
        addressLocality: 'Port Washington',
        addressRegion: 'NY',
        postalCode: '11050',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: CONTACT_EMAIL,
        availableLanguage: ['English'],
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-[var(--pch-gray-50)] pt-28 pb-12 px-5 border-b border-[var(--pch-border)]">
        <div className="container-page max-w-3xl text-center">
          <p className="section-label mb-3">Verify contact</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)] mb-4 leading-tight">
            Someone contacted you about a PCH prize?
            <span className="block text-[var(--pch-orange)] mt-2">Verify it here first.</span>
          </h1>
          <p className="text-[var(--pch-text-muted)] leading-relaxed max-w-2xl mx-auto">
            People reach out to us every day when they receive a call, email, or message and are not
            sure if it is real. That is the right thing to do. Use this page to confirm official{' '}
            {PCH_BRAND_NAME} contact before you take any next step.
          </p>
        </div>
      </section>

      <section className="py-12 px-5 border-b border-[var(--pch-border)]">
        <div className="container-page max-w-3xl">
          <div className="card p-6 md:p-8 text-center">
            <CheckCircle2 className="w-10 h-10 text-[var(--pch-orange)] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[var(--pch-text)] mb-2">
              Official support email
            </h2>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Please%20verify%20this%20contact`}
              className="text-lg md:text-xl font-semibold text-[var(--pch-orange)] hover:underline break-all"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="text-sm text-[var(--pch-text-muted)] mt-4 leading-relaxed">
              Coordinator: {APPLICANT_CASE_MANAGER_NAME}, {APPLICANT_CASE_MANAGER_TITLE}. Website:{' '}
              <a href={SITE_URL} className="font-medium text-[var(--pch-text)] hover:underline">
                {SITE_DOMAIN}
              </a>
            </p>
            <p className="text-xs text-[var(--pch-text-muted)] mt-2">
              {PCH_ADDRESS_LINE1}, {PCH_ADDRESS_LINE2}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Please%20verify%20this%20contact`}
              className="btn-primary mt-6 inline-flex px-6 py-3"
            >
              Email support to verify
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-5">
        <div className="container-page max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--pch-text)] mb-3">
              How to confirm a message is from us
            </h2>
            <p className="text-sm text-[var(--pch-text-muted)] leading-relaxed">
              If you were contacted about an application, prize selection, or next steps, use these
              checks. When anything feels off, stop and email support from this website.
            </p>
          </div>

          <div className="space-y-8">
            {checks.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-[var(--pch-orange-soft)] text-[var(--pch-orange)] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--pch-text)] mb-1">{title}</h3>
                  <p className="text-sm text-[var(--pch-text-muted)] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-[var(--pch-border)] bg-[var(--pch-gray-50)] p-6">
            <h2 className="text-lg font-semibold text-[var(--pch-text)] mb-3">
              What to include when you email us
            </h2>
            <ul className="space-y-2 text-sm text-[var(--pch-text-muted)] leading-relaxed">
              <li>• Your full name and the email you used to apply (if you applied)</li>
              <li>• Who contacted you (name, phone, or email address they used)</li>
              <li>• What they asked you to do</li>
              <li>• Any reference number they mentioned</li>
            </ul>
            <p className="text-sm text-[var(--pch-text-muted)] mt-4 leading-relaxed">
              We will reply and tell you clearly whether the contact matches official {PCH_BRAND_NAME}{' '}
              process — so you can do what is right with confidence.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/faq" className="btn-outline px-5 py-2.5 text-sm">
              Read FAQ
            </Link>
            <Link href="/security" className="btn-outline px-5 py-2.5 text-sm">
              Security & trust
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
