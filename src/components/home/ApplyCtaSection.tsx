import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ApplyCtaSection() {
  return (
    <section className="py-16 bg-[var(--pch-orange)]">
      <div className="container-page text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Ready to apply?
        </h2>
        <p className="text-white/85 mb-8 max-w-md mx-auto text-sm">
          Submit your application today. Takes just a few minutes.
        </p>
        <Link
          href="/apply"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-[var(--pch-orange)] font-semibold text-sm hover:bg-[var(--pch-gray-50)] transition-colors"
        >
          Apply Now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
