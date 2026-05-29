import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CheckWinnersGallery } from '@/components/winners/WinnerGallery';

export const metadata: Metadata = {
  title: 'Winners',
  description: 'PCH winners who applied and received life-changing prizes worldwide.',
};

export default function WinnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-[var(--pch-border)] pt-28 pb-10 px-5">
        <div className="container-page">
          <p className="section-label mb-2">Winners</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)] mb-2">
            People who applied and won
          </h1>
          <p className="text-[var(--pch-text-muted)] max-w-2xl">
            Real winners from the USA, Canada, UK, Germany, Australia, and beyond — with their
            PCH prize checks.
          </p>
        </div>
      </div>

      <div className="container-page py-12">
        <CheckWinnersGallery />

        <div className="text-center pt-12 mt-12 border-t border-[var(--pch-border)] space-y-4">
          <p>
            <Link
              href="/impact"
              className="text-sm font-medium text-[var(--pch-orange)] hover:underline inline-flex items-center gap-1.5"
            >
              Read winner impact stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
          <Link href="/apply" className="btn-primary px-6 py-3">
            Submit your application
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
