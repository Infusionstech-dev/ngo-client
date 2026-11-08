import { Icon } from "@/components/ui/Icon";
import { HighlightedText } from "@/components/ui/HighlightedText";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { WHY_NOW_CHALLENGES, WHY_NOW_CONTENT } from "@/constants/home";

export function WhyNow() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionBadge>{WHY_NOW_CONTENT.badge}</SectionBadge>
        <h2 className="mt-4 text-3xl font-semibold leading-snug">
          {WHY_NOW_CONTENT.titleLines.map((line, index) => (
            <span key={index} className="block">
              <HighlightedText segments={line} />
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-ink/70">
          {WHY_NOW_CONTENT.description}
        </p>
        <div className="mt-10 grid gap-4 text-left md:grid-cols-2">
          {WHY_NOW_CHALLENGES.map((challenge) => (
            <div key={challenge.title} className="rounded-lg bg-white p-6 shadow-sm">
              <Icon name={challenge.icon} className="h-8 w-8 text-brand" />
              <h3 className="mt-4 text-xs font-bold uppercase tracking-wide">{challenge.title}</h3>
              <p className="mt-1 text-xs text-ink/60">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
