import Image from "next/image";
import type { ImageAsset } from "@/types/home";
import { cn } from "@/lib/utils";

type PublicationImageProps = {
  image: ImageAsset;
  tag: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/** Publication photo with the category tag in the top-left corner */
export function PublicationImage({ image, tag, sizes, className, priority = false }: PublicationImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <Image src={image.src} alt={image.alt} fill priority={priority} sizes={sizes} className="object-cover" />
      <span className="absolute left-4 top-4 rounded-full bg-ink/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
        {tag}
      </span>
    </div>
  );
}
