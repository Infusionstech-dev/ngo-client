export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-brand/30 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
      {children}
    </span>
  );
}
