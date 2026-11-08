import { SectionHeader } from "@/components/ui/SectionHeader";
import { PublicationGrid } from "@/components/shared/PublicationGrid";
import { PREVIOUS_NEWS_HEADING } from "@/constants/publications";
import { SAMPLE_PUBLICATIONS } from "@/constants/home";

/** Grid of past publications, using the same cards as the homepage */
export function PreviousNews() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader heading={PREVIOUS_NEWS_HEADING} />
        <div className="mt-8">
          <PublicationGrid publications={SAMPLE_PUBLICATIONS} />
        </div>
      </div>
    </section>
  );
}
