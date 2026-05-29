'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { faqItems } from '@/data/faq';

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-[var(--pch-border)] pt-28 pb-10 px-5">
        <div className="container-page">
          <p className="section-label mb-2">FAQ</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)]">
            Common questions
          </h1>
        </div>
      </div>

      <div className="container-page max-w-3xl py-12 space-y-2">
        {faqItems.map((item, idx) => (
          <div key={idx} className="card overflow-hidden">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-[var(--pch-text)]"
            >
              {item.question}
              <ChevronDown className={`w-4 h-4 text-[var(--pch-text-muted)] shrink-0 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
            </button>
            {open === idx && (
              <div className="px-5 pb-5 text-sm text-[var(--pch-text-muted)] leading-relaxed border-t border-[var(--pch-border)] pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}

        <div className="text-center pt-8">
          <Link href="/apply" className="btn-primary px-6 py-3">
            Apply now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
