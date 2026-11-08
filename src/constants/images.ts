/**
 * Homepage photos stored in public/images.
 * Files are numbered in the order they appear in the design.
 */
const IMAGE_FOLDER = "/images";

const imagePath = (imageNumber: number) => `${IMAGE_FOLDER}/I-${imageNumber}.png`;

const GALLERY_IMAGE_NUMBERS = [3, 4, 5, 6, 7];
// TODO: the Gallery page design has 10 photos; replace these with the 5 extra gallery photos once uploaded
const GALLERY_PAGE_EXTRA_IMAGE_NUMBERS = [9, 8, 10, 11, 1];
const PUBLICATION_IMAGE_NUMBERS = [8, 9, 10, 11];

/** Tells the browser how wide each image is shown, so it downloads the right size */
export const IMAGE_SIZES = {
  HALF_WIDTH: "(min-width: 768px) 50vw, 100vw",
  GALLERY: "(min-width: 768px) 66vw, 100vw",
  PUBLICATION_THUMBNAIL: "200px",
  CAROUSEL_CARD: "(min-width: 1024px) 36vw, (min-width: 640px) 50vw, 85vw",
};

export const IMAGES = {
  HERO: imagePath(1),
  MISSION: imagePath(2),
  // TODO: replace with the About page photo from the design once it is added to public/images
  ABOUT_HERO: imagePath(2),
  GALLERY: GALLERY_IMAGE_NUMBERS.map(imagePath),
  GALLERY_PAGE: [...GALLERY_IMAGE_NUMBERS, ...GALLERY_PAGE_EXTRA_IMAGE_NUMBERS].map(imagePath),
  PUBLICATIONS: PUBLICATION_IMAGE_NUMBERS.map(imagePath),
};
