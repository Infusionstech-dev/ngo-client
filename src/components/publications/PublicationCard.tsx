import type { PublicationEvent } from "@/types/home";
import { Button } from "@/components/ui/Button";
import { PUBLICATION_LABELS } from "@/constants/publications";
import { IMAGE_SIZES } from "@/constants/images";
import { publicationDetailRoute } from "@/constants/routes";
import { EventMeta } from "./EventMeta";
import { PublicationImage } from "./PublicationImage";

export function PublicationCard({ publication }: { publication: PublicationEvent }) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-white p-4 shadow-sm">
      <PublicationImage
        image={publication.image}
        tag={publication.tag}
        sizes={IMAGE_SIZES.CAROUSEL_CARD}
        className="aspect-[5/4]"
      />
      <div className="mt-5">
        <EventMeta date={publication.date} location={publication.location} />
      </div>
      <h3 className="mt-4 text-lg font-bold leading-snug text-brand">{publication.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">{publication.summary}</p>
      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
        <p className="text-sm text-ink/60">{publication.photoCredit}</p>
        <Button href={publicationDetailRoute(publication.id)} className="shrink-0">
          {PUBLICATION_LABELS.viewDetails}
        </Button>
      </div>
    </article>
  );
}
