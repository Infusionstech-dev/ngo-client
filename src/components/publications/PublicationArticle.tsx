import Link from "next/link";
import type { PublicationEvent } from "@/types/home";
import { Icon } from "@/components/ui/Icon";
import { IMAGE_SIZES } from "@/constants/images";
import { ROUTES } from "@/constants/routes";
import { PUBLICATION_DETAIL_LABELS, SAMPLE_ARTICLE_PARAGRAPHS } from "@/constants/publications";
import { EventMeta } from "./EventMeta";
import { PublicationImage } from "./PublicationImage";

/** Full article view for a single publication */
export function PublicationArticle({ publication }: { publication: PublicationEvent }) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <Link
        href={ROUTES.PUBLICATIONS}
        className="text-sm font-semibold text-brand hover:underline"
      >
        ← {PUBLICATION_DETAIL_LABELS.backToPublications}
      </Link>

      <h1 className="mt-6 text-3xl font-bold leading-tight text-navy md:text-4xl">{publication.title}</h1>
      <div className="mt-5 max-w-md">
        <EventMeta date={publication.date} location={publication.location} />
      </div>

      <PublicationImage
        image={publication.image}
        tag={publication.tag}
        sizes={IMAGE_SIZES.HALF_WIDTH}
        className="mt-8 aspect-[16/9]"
        priority
      />
      <p className="mt-3 text-sm text-ink/60">{publication.photoCredit}</p>

      <p className="mt-8 text-lg leading-relaxed text-ink/80">{publication.summary}</p>

      <div className="mt-8 rounded-lg bg-cream p-6">
        <h2 className="font-bold text-navy">{PUBLICATION_DETAIL_LABELS.highlightsHeading}</h2>
        <ul className="mt-4 space-y-3">
          {publication.highlights.map((highlight) => (
            <li key={highlight.label} className="flex items-start gap-2 text-ink/70">
              <Icon name="checkCircle" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span>
                <strong className="font-semibold text-ink">{highlight.label}:</strong> {highlight.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 space-y-5">
        {SAMPLE_ARTICLE_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-ink/70">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
