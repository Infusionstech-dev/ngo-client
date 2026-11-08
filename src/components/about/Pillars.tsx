import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PILLARS, PILLARS_HEADING } from "@/constants/about";

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader heading={PILLARS_HEADING} highlightFirst />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="rounded-lg border border-ink/5 bg-white p-6 shadow-sm">
            <Icon name={pillar.icon} className="h-10 w-10 text-brand" />
            <h3 className="mt-5 text-sm font-bold uppercase tracking-wide">{pillar.title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-ink/60">{pillar.description}</p>
            <ul className="mt-4 space-y-1.5">
              {pillar.activities.map((activity) => (
                <li key={activity} className="flex items-start gap-2 text-xs text-ink/60">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
