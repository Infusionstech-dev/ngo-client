import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GALLERY_BUTTON_LABEL, GALLERY_HEADING, GALLERY_PHOTOS } from "@/constants/home";
import { IMAGE_SIZES } from "@/constants/images";
import { ROUTES } from "@/constants/routes";

export function Gallery() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader heading={GALLERY_HEADING} centered />
        <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {GALLERY_PHOTOS.map((photo) => (
            <div key={photo.src} className={`relative overflow-hidden rounded-lg ${photo.gridClassName}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={IMAGE_SIZES.GALLERY}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href={ROUTES.GALLERY}>{GALLERY_BUTTON_LABEL}</Button>
        </div>
      </div>
    </section>
  );
}
