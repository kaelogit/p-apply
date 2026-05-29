import Link from 'next/link';
import { PchLogo } from '@/components/brand/PchLogo';
import { CONTACT_EMAIL } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--pch-gray-50)] border-t border-[var(--pch-border)] pt-14 pb-8 px-5">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <PchLogo className="mb-4" />
            <p className="text-sm text-[var(--pch-text-muted)] leading-relaxed">
              Apply for your chance to win life-changing prizes.
              Real winners worldwide since 1953.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--pch-text-muted)] mb-4">
              Explore
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/story', label: 'Our Story' },
                { href: '/areas', label: 'Prize Categories' },
                { href: '/impact', label: 'Impact Stories' },
                { href: '/winners', label: 'Winner Photos' },
                { href: '/apply', label: 'Apply' },
                { href: '/faq', label: 'FAQ' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--pch-text-muted)] hover:text-[var(--pch-orange)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--pch-text-muted)] mb-4">
              Contact
            </h4>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-[var(--pch-text-muted)] hover:text-[var(--pch-orange)] transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="text-sm text-[var(--pch-text-muted)] mt-3 leading-relaxed">
              382 Channel Drive<br />
              Port Washington, NY 11050
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--pch-text-muted)] mb-4">
              Legal & Trust
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: '/security', label: 'Security' },
                { href: '/rules', label: 'Official Rules' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--pch-text-muted)] hover:text-[var(--pch-orange)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--pch-border)]">
          <p className="text-sm text-[var(--pch-text-muted)]">
            © {year} Publishers Clearing House
          </p>
        </div>
      </div>
    </footer>
  );
}
