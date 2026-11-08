"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MAIN_NAV } from "@/constants/navigation";
import { HEADER_CONTENT } from "@/constants/layout";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

const MENU_OPEN_ICON = "M4 7h16M4 12h16M4 17h16";
const MENU_CLOSE_ICON = "M6 6l12 12M18 6 6 18";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-10 md:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "border-b-2 border-brand pb-1 text-base font-semibold text-brand"
                  : "text-base font-semibold text-ink hover:text-brand"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href={ROUTES.MEMBERSHIP} className="hidden md:inline-flex">
          {HEADER_CONTENT.ctaLabel}
        </Button>
        <button onClick={toggleMenu} className="md:hidden" aria-label={HEADER_CONTENT.menuToggleAriaLabel}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d={isMenuOpen ? MENU_CLOSE_ICON : MENU_OPEN_ICON} />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="flex flex-col gap-3 border-t border-ink/5 px-4 py-4 md:hidden">
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu} className="text-base font-medium">
              {item.label}
            </Link>
          ))}
          <Button href={ROUTES.MEMBERSHIP}>{HEADER_CONTENT.ctaLabel}</Button>
        </nav>
      )}
    </header>
  );
}
