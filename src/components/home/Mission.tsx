import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  MISSION_BUTTON_LABEL,
  MISSION_HEADING,
  MISSION_IMAGE,
  MISSION_PILLARS,
} from "@/constants/home";
import { ROUTES } from "@/constants/routes";

export function Mission() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
      <div>
        <SectionHeader heading={MISSION_HEADING} highlightFirst />
        <ul className="mt-6 space-y-3">
          {MISSION_PILLARS.map((pillar) => (
            <li key={pillar} className="flex items-center gap-3 text-sm">
              <span className="h-3 w-3 rounded-full border-2 border-brand" />
              {pillar}
            </li>
          ))}
        </ul>
        <Button href={ROUTES.MISSION} className="mt-8">
          {MISSION_BUTTON_LABEL}
        </Button>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={MISSION_IMAGE.src}
          alt={MISSION_IMAGE.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
