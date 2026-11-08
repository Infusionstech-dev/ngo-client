import Image from "next/image";
import type { GalleryPhoto } from "@/types/home";
import { IMAGE_SIZES } from "@/constants/images";
import { cn } from "@/lib/utils";

/** Photo grid used on the Home gallery section and the Gallery page */
export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[250px] md:grid-cols-3">
      {photos.map((photo) => (
        <div key={photo.src} className={cn("relative overflow-hidden rounded-lg", photo.gridClassName)}>
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
  );
}
