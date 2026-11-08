import Image from "next/image";
import Link from "next/link";
import type { Publication } from "@/types/home";
import { IMAGE_SIZES } from "@/constants/images";
import { publicationDetailRoute } from "@/constants/routes";

/** Two-column grid of horizontal publication cards, used on Home and the Publications page */
export function PublicationGrid({ publications }: { publications: Publication[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {publications.map((publication) => (
        <Link
          key={publication.id}
          href={publicationDetailRoute(publication.id)}
          className="group grid grid-cols-[2fr_3fr] gap-4 rounded-lg bg-white p-3 shadow-sm card-hover"
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
  );
}
