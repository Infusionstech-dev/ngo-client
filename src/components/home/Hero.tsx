import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT, HERO_IMAGE, HERO_TAGS } from "@/constants/home";
import { IMAGE_SIZES } from "@/constants/images";
import { ROUTES } from "@/constants/routes";

export function Hero() {
  const [firstTag] = HERO_TAGS;

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes={IMAGE_SIZES.HALF_WIDTH}
          className="object-cover"
        />
      </div>
      <div>
        <ul className="flex flex-wrap gap-2">
          {HERO_TAGS.map((tag) => (
            <li
              key={tag}
              className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className={tag === firstTag ? "text-ink" : "text-brand"}>{tag}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-ink/60">{HERO_CONTENT.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
          {HERO_CONTENT.title}
          <br />
          <span className="text-brand">{HERO_CONTENT.highlight}</span>
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-ink/70">{HERO_CONTENT.description}</p>
        <div className="mt-7 flex gap-3">
          <Button href={ROUTES.MEMBERSHIP}>{HERO_CONTENT.primaryButtonLabel}</Button>
          <Button href={ROUTES.ABOUT} variant="outline">
            {HERO_CONTENT.secondaryButtonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
