export function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-[var(--pch-border)] pt-28 pb-10 px-5">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl font-semibold text-[var(--pch-text)]">{title}</h1>
        </div>
      </div>
      <div className="container-page max-w-3xl py-12">{children}</div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold text-[var(--pch-text)] mb-2">{title}</h2>
      <p className="text-sm text-[var(--pch-text-muted)] leading-relaxed">{children}</p>
    </div>
  );
}
