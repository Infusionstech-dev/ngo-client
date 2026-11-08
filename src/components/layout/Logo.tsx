import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-block leading-none" aria-label="Policy Forward home">
      <span className="block text-xl font-bold text-navy">Policy</span>
      <span className="flex items-center gap-1 text-xl font-bold text-brand">
        Forward
        <svg viewBox="0 0 40 10" className="h-3 w-10" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M0 5h37M32 1l5 4-5 4" />
        </svg>
      </span>
    </Link>
  );
}
