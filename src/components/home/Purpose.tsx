import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PURPOSE_BUTTON_LABEL, PURPOSE_HEADING, PURPOSE_VALUES } from "@/constants/home";
import { ROUTES } from "@/constants/routes";

export function Purpose() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader heading={PURPOSE_HEADING} />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {PURPOSE_VALUES.map((value) => (
          <div key={value.title} className="rounded-lg border border-ink/5 bg-white p-5 shadow-sm">
            <h3
              className={`text-xs font-bold uppercase tracking-wide ${value.isHighlighted ? "text-brand" : ""}`}
            >
              {value.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink/60">{value.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button href={ROUTES.ABOUT}>{PURPOSE_BUTTON_LABEL}</Button>
      </div>
    </section>
  );
}
