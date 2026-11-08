import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import {
  GALLERY_PAGE_BUTTON_LABEL,
  GALLERY_PAGE_HEADING,
  GALLERY_PAGE_PHOTOS,
  GALLERY_PAGE_TITLE,
} from "@/constants/gallery";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: GALLERY_PAGE_TITLE,
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <SectionHeader heading={GALLERY_PAGE_HEADING} asPageTitle />
      <div className="mt-8">
        <GalleryGrid photos={GALLERY_PAGE_PHOTOS} />
      </div>
      <div className="mt-8 text-center">
        {/* TODO: link to the next page of photos once the gallery API exists */}
        <Button href={ROUTES.GALLERY}>{GALLERY_PAGE_BUTTON_LABEL}</Button>
      </div>
    </section>
  );
}
