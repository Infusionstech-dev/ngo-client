import Link from "next/link";
import { LOGO_TEXT } from "@/constants/layout";
import { ROUTES } from "@/constants/routes";

export function Logo() {
  return (
    <Link href={ROUTES.HOME} className="inline-block leading-none" aria-label={LOGO_TEXT.ariaLabel}>
      <span className="block text-xl font-bold text-navy">{LOGO_TEXT.firstWord}</span>
      <span className="flex items-center gap-1 text-xl font-bold text-brand">
        {LOGO_TEXT.secondWord}
        <svg viewBox="0 0 40 10" className="h-3 w-10" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M0 5h37M32 1l5 4-5 4" />
        </svg>
      </span>
    </Link>
  );
}
