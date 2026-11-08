import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { GALLERY_BUTTON_LABEL, GALLERY_HEADING, GALLERY_PHOTOS } from "@/constants/home";
import { ROUTES } from "@/constants/routes";

export function Gallery() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader heading={GALLERY_HEADING} centered />
        <div className="mt-10">
          <GalleryGrid photos={GALLERY_PHOTOS} />
        </div>
        <div className="mt-8 text-center">
          <Button href={ROUTES.GALLERY}>{GALLERY_BUTTON_LABEL}</Button>
        </div>
      </div>
    </section>
  );
}
