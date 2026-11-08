import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  PUBLICATIONS_BUTTON_LABEL,
  PUBLICATIONS_HEADING,
  SAMPLE_PUBLICATIONS,
} from "@/constants/home";
import { IMAGE_SIZES } from "@/constants/images";
import { ROUTES, publicationDetailRoute } from "@/constants/routes";

export function Publications() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader heading={PUBLICATIONS_HEADING} />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {SAMPLE_PUBLICATIONS.map((publication) => (
          <Link
            key={publication.id}
            href={publicationDetailRoute(publication.id)}
            className="group grid grid-cols-[2fr_3fr] gap-4 rounded-lg bg-white p-3 shadow-sm"
          >
            <div className="relative min-h-40 overflow-hidden rounded">
              <Image
                src={publication.image.src}
                alt={publication.image.alt}
                fill
                sizes={IMAGE_SIZES.PUBLICATION_THUMBNAIL}
                className="object-cover"
              />
            </div>
            <div className="py-1">
              <div className="flex items-center gap-2 text-[10px] text-ink/60">
                <span className="rounded border border-ink/10 px-2 py-0.5">{publication.category}</span>
                <span>{publication.shortDate}</span>
              </div>
              <h3 className="mt-2 text-sm font-bold uppercase leading-snug text-brand group-hover:underline">
                {publication.title}
              </h3>
              <p className="mt-2 line-clamp-4 text-[11px] leading-relaxed text-ink/60">
                {publication.excerpt}
              </p>
              <p className="mt-2 text-[10px] text-ink/50">
                {publication.author} · {publication.publishedOn}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button href={ROUTES.PUBLICATIONS}>{PUBLICATIONS_BUTTON_LABEL}</Button>
      </div>
    </section>
  );
}
