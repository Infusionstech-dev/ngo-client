import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PublicationGrid } from "@/components/shared/PublicationGrid";
import {
  PUBLICATIONS_BUTTON_LABEL,
  PUBLICATIONS_HEADING,
  SAMPLE_PUBLICATIONS,
} from "@/constants/home";
import { ROUTES } from "@/constants/routes";

export function Publications() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader heading={PUBLICATIONS_HEADING} />
      <div className="mt-8">
        <PublicationGrid publications={SAMPLE_PUBLICATIONS} />
      </div>
      <div className="mt-8 text-center">
        <Button href={ROUTES.PUBLICATIONS}>{PUBLICATIONS_BUTTON_LABEL}</Button>
      </div>
    </section>
  );
}
