import type { GalleryPhoto, SectionHeading } from "@/types/home";
import { siteConfig } from "@/config/site";
import { IMAGES } from "./images";

/**
 * Grid placement for one block of 5 photos, matching the design:
 * one large photo with two stacked beside it, then a small photo and a wide photo.
 * Longer galleries repeat this block.
 */
const GALLERY_BLOCK_LAYOUT = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "",
  "md:col-span-2",
];

/** Turns a list of image paths into gallery photos with alt text and grid placement */
export const buildGalleryPhotos = (imageSources: string[]): GalleryPhoto[] =>
  imageSources.map((src, index) => ({
    src,
    alt: `Event photo ${index + 1}`,
    gridClassName: GALLERY_BLOCK_LAYOUT[index % GALLERY_BLOCK_LAYOUT.length],
  }));

/* ---------- Gallery page ---------- */

export const GALLERY_PAGE_TITLE = `Gallery | ${siteConfig.name}`;

export const GALLERY_PAGE_HEADING: SectionHeading = {
  badge: "Gallery",
  title: "Our Memorable",
  highlight: "Moments & Gatherings",
  description:
    "A visual record of roundtables, policy working groups, youth civic assemblies, and regional forums hosted by Bangladesh Forward across Dhaka and beyond. Documenting our ongoing effort to build an evidence-based, accountable nation.",
};

export const GALLERY_PAGE_PHOTOS = buildGalleryPhotos(IMAGES.GALLERY_PAGE);

export const GALLERY_PAGE_BUTTON_LABEL = "View more";
