/** Fixed application reference — no date segment. Override via APPLY_REF_ID in Vercel. */
export function buildApplicationRef(): string {
  const id = process.env.APPLY_REF_ID?.trim() || '128553974';
  return `PCH-${id}`;
}

export function firstNameFromFullName(fullName: string): string {
  const trimmed = fullName.trim();
  if (!trimmed) return 'Applicant';
  return trimmed.split(/\s+/)[0] ?? trimmed;
}

/** When you need the real submit date (not in the ref). */
export function formatSubmittedDate(date = new Date()): string {
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yyyy = String(date.getFullYear());
  return `${mm}-${dd}-${yyyy}`;
}
