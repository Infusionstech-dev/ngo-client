import type { SectionHeading } from "@/types/home";
import { cn } from "@/lib/utils";
import { SectionBadge } from "./SectionBadge";

type SectionHeaderProps = {
  heading: SectionHeading;
  /** Puts the highlighted words before the title instead of after it */
  highlightFirst?: boolean;
  centered?: boolean;
};

export function SectionHeader({ heading, highlightFirst = false, centered = false }: SectionHeaderProps) {
  const highlightedText = <span className="text-brand">{heading.highlight}</span>;

  return (
    <div className={cn(centered && "text-center")}>
      <SectionBadge>{heading.badge}</SectionBadge>
      <h2 className="mt-4 text-3xl font-semibold leading-snug">
        {highlightFirst ? (
          <>
            {highlightedText} {heading.title}
          </>
        ) : (
          <>
            {heading.title} {highlightedText}
          </>
        )}
      </h2>
      {heading.description && (
        <p className={cn("mt-4 max-w-4xl text-sm leading-relaxed text-ink/70", centered && "mx-auto")}>
          {heading.description}
        </p>
      )}
    </div>
  );
}
