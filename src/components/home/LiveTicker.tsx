'use client';

import { useEffect, useState } from 'react';

const recentApplications = [
  { name: 'Sarah M.', location: 'Denver, USA' },
  { name: 'Angela K.', location: 'Toronto, Canada' },
  { name: 'Malik T.', location: 'Manchester, UK' },
  { name: 'Naomi C.', location: 'Munich, Germany' },
  { name: 'Michael R.', location: 'Sydney, Australia' },
  { name: 'Jennifer L.', location: 'Chicago, USA' },
];

export function LiveTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % recentApplications.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const item = recentApplications[index];

  return (
    <div className="bg-[var(--pch-orange-soft)] border-y border-[var(--pch-border)] py-2.5">
      <div className="container-page text-center text-sm text-[var(--pch-text-muted)]">
        <span className="text-[var(--pch-text)] font-medium">{item.name}</span>
        {' '}from {item.location} submitted an application recently
      </div>
    </div>
  );
}
