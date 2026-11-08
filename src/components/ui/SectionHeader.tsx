import type { SectionHeading } from "@/types/home";
import { cn } from "@/lib/utils";
import { SectionBadge } from "./SectionBadge";

type SectionHeaderProps = {
  heading: SectionHeading;
  /** Puts the highlighted words before the title instead of after it */
  highlightFirst?: boolean;
  centered?: boolean;
  /** Renders the title as the page's main <h1> with larger, navy text */
  asPageTitle?: boolean;
};

export function SectionHeader({
  heading,
  highlightFirst = false,
  centered = false,
  asPageTitle = false,
}: SectionHeaderProps) {
  const HeadingTag = asPageTitle ? "h1" : "h2";
  const highlightedText = <span className="text-brand">{heading.highlight}</span>;

  return (
    <div className={cn(centered && "text-center")}>
      <SectionBadge>{heading.badge}</SectionBadge>
      <HeadingTag
        className={cn(
          "mt-4 font-semibold leading-snug",
          asPageTitle ? "text-3xl font-bold text-navy md:text-4xl" : "text-3xl",
        )}
      >
        {highlightFirst ? (
          <>
            {highlightedText} {heading.title}
          </>
        ) : (
          <>
            {heading.title} {highlightedText}
          </>
        )}
      </HeadingTag>
      {heading.description && (
        <p className={cn("mt-4 max-w-4xl text-sm leading-relaxed text-ink/70", centered && "mx-auto")}>
          {heading.description}
        </p>
      )}
    </div>
  );
}
