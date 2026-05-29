'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PchLogo } from '@/components/brand/PchLogo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/story', label: 'Our Story' },
  { href: '/areas', label: 'Prizes' },
  { href: '/impact', label: 'Impact' },
  { href: '/winners', label: 'Winners' },
  { href: '/faq', label: 'FAQ' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--pch-border)]">
        <div className="container-page flex items-center justify-between h-16">
          <PchLogo />

          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-[var(--pch-orange)]'
                    : 'text-[var(--pch-text-muted)] hover:text-[var(--pch-text)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/apply" className="btn-primary px-5 py-2.5">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[var(--pch-text)] hover:bg-[var(--pch-gray-100)]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white xl:hidden pt-16">
          <div className="flex flex-col h-full px-5 py-6">
            <nav className="flex flex-col border-t border-[var(--pch-border)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-4 border-b border-[var(--pch-border)] text-base font-medium ${
                    isActive(link.href) ? 'text-[var(--pch-orange)]' : 'text-[var(--pch-text)]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Link href="/apply" className="btn-primary w-full py-3.5 text-base" onClick={() => setIsOpen(false)}>
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
