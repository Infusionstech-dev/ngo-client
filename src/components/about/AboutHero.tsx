import Image from "next/image";
import { ValueCardItem } from "@/components/shared/ValueCardItem";
import { ABOUT_HERO_CONTENT, ABOUT_HERO_IMAGE, ABOUT_VALUES } from "@/constants/about";
import { IMAGE_SIZES } from "@/constants/images";

export function AboutHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-navy md:text-4xl">
            {ABOUT_HERO_CONTENT.title} <span className="text-brand">{ABOUT_HERO_CONTENT.highlight}</span>
          </h1>
          {ABOUT_HERO_CONTENT.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-sm leading-relaxed text-ink/70">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
          <Image
            src={ABOUT_HERO_IMAGE.src}
            alt={ABOUT_HERO_IMAGE.alt}
            fill
            priority
            sizes={IMAGE_SIZES.HALF_WIDTH}
            className="object-cover"
          />
        </div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-ink/70">{ABOUT_HERO_CONTENT.summary}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {ABOUT_VALUES.map((value) => (
          <ValueCardItem key={value.title} value={value} />
        ))}
      </div>
    </section>
  );
}
