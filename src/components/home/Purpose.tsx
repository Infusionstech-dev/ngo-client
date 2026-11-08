import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCardItem } from "@/components/shared/ValueCardItem";
import { PURPOSE_BUTTON_LABEL, PURPOSE_HEADING, PURPOSE_VALUES } from "@/constants/home";
import { ROUTES } from "@/constants/routes";

export function Purpose() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader heading={PURPOSE_HEADING} />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {PURPOSE_VALUES.map((value) => (
          <ValueCardItem key={value.title} value={value} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button href={ROUTES.ABOUT}>{PURPOSE_BUTTON_LABEL}</Button>
      </div>
    </section>
  );
}
