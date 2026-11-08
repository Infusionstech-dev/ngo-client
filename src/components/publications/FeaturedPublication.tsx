import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  FEATURED_PUBLICATION,
  FEATURED_PUBLICATION_HEADING,
  PUBLICATION_LABELS,
} from "@/constants/publications";
import { IMAGE_SIZES } from "@/constants/images";
import { publicationDetailRoute } from "@/constants/routes";
import { EventMeta } from "./EventMeta";
import { PublicationImage } from "./PublicationImage";

export function FeaturedPublication() {
  const publication = FEATURED_PUBLICATION;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <SectionHeader heading={FEATURED_PUBLICATION_HEADING} asPageTitle />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <PublicationImage
          image={publication.image}
          tag={publication.tag}
          sizes={IMAGE_SIZES.HALF_WIDTH}
          className="aspect-[16/9] md:aspect-auto md:min-h-80"
          priority
        />
        <div className="flex flex-col">
          <EventMeta date={publication.date} location={publication.location} />
          <h2 className="mt-4 text-xl font-bold text-brand">{publication.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">{publication.summary}</p>
          <ul className="mt-4 space-y-2" aria-label={PUBLICATION_LABELS.highlightsAriaLabel}>
            {publication.highlights.map((highlight) => (
              <li key={highlight.label} className="flex items-start gap-2 text-sm text-ink/70">
                <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  <strong className="font-semibold text-ink">{highlight.label}:</strong> {highlight.value}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center justify-between gap-4 pt-6">
            <p className="text-sm text-ink/60">{publication.photoCredit}</p>
            <Button href={publicationDetailRoute(publication.id)}>{PUBLICATION_LABELS.viewDetails}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
