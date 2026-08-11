'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/** Save your logo as: public/logo.png (transparent PNG recommended) */
const LOGO_SRC = '/logo.png';

interface PchLogoProps {
  className?: string;
}

export function PchLogo({ className }: PchLogoProps) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <Link href="/" className={cn('flex items-center gap-2.5 group', className)}>
      {logoFailed ? (
        <div className="w-9 h-9 rounded-lg bg-[var(--pch-orange)] flex items-center justify-center shrink-0 border border-[var(--pch-border)]">
          <span className="text-white text-[10px] font-bold tracking-tight">PCH</span>
        </div>
      ) : (
        <div className="h-9 shrink-0 rounded-lg border border-[var(--pch-border)] overflow-hidden bg-white p-0.5">
          <Image
            src={LOGO_SRC}
            alt="PCH Digital"
            width={36}
            height={36}
            className="h-full w-auto object-contain rounded-md"
            unoptimized
            onError={() => setLogoFailed(true)}
          />
        </div>
      )}
      <div className="leading-tight">
        <span className="block text-sm font-semibold text-[var(--pch-text)] tracking-tight">
          PCH Digital
        </span>
        <span className="block text-[10px] font-medium text-[var(--pch-text-muted)] tracking-wide">
          Publishers Clearing House
        </span>
      </div>
    </Link>
  );
}
