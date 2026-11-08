import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { MISSION_HERO_CONTENT, MISSION_HERO_IMAGE } from "@/constants/mission";
import { IMAGE_SIZES } from "@/constants/images";

export function MissionHero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
      <div>
        <SectionBadge>{MISSION_HERO_CONTENT.badge}</SectionBadge>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-navy md:text-4xl">
          {MISSION_HERO_CONTENT.title}{" "}
          <span className="text-brand">{MISSION_HERO_CONTENT.highlight}</span>
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-ink/70">{MISSION_HERO_CONTENT.description}</p>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={MISSION_HERO_IMAGE.src}
          alt={MISSION_HERO_IMAGE.alt}
          fill
          priority
          sizes={IMAGE_SIZES.HALF_WIDTH}
          className="object-cover"
        />
      </div>
    </section>
  );
}
