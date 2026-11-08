"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SCROLL_REVEAL } from "@/constants/animation";

/**
 * Fades every page section up as it scrolls into view.
 * Renders nothing; it only adds CSS classes, so sections stay plain server components.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(SCROLL_REVEAL.targetSelector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(SCROLL_REVEAL.visibleClassName);
          observer.unobserve(entry.target);
        });
      },
      { threshold: SCROLL_REVEAL.visibilityThreshold, rootMargin: SCROLL_REVEAL.rootMargin },
    );

    sections.forEach((section) => {
      section.classList.add(SCROLL_REVEAL.hiddenClassName);
      observer.observe(section);
    });

    return () => observer.disconnect();
    // Re-run on navigation so sections of the new page are animated too
  }, [pathname]);

  return null;
}
