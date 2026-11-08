import { ALL_PUBLICATIONS, PUBLICATION_DETAIL_LABELS } from "@/constants/publications";
import { PublicationCard } from "./PublicationCard";

/** A few other publications shown under an article, excluding the current one */
export function RelatedPublications({ currentPublicationId }: { currentPublicationId: number }) {
  const relatedPublications = ALL_PUBLICATIONS.filter(
    (publication) => publication.id !== currentPublicationId,
  ).slice(0, PUBLICATION_DETAIL_LABELS.relatedCount);

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold">{PUBLICATION_DETAIL_LABELS.relatedHeading}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {relatedPublications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
}
