import { Icon } from "@/components/ui/Icon";
import { MISSION_GOALS, MISSION_GOALS_HEADING } from "@/constants/mission";

export function MissionGoals() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-semibold">
          {MISSION_GOALS_HEADING.title} <span className="text-brand">{MISSION_GOALS_HEADING.highlight}</span>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {MISSION_GOALS.map((goal) => (
            <div key={goal.title} className="rounded-lg bg-white p-6 shadow-sm card-hover">
              <Icon name={goal.icon} className="h-9 w-9 text-brand" />
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide">{goal.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
