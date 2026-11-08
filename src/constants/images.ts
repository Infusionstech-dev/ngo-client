/**
 * Homepage photos stored in public/images.
 * Files are numbered in the order they appear in the design.
 */
const IMAGE_FOLDER = "/images";

const imagePath = (imageNumber: number) => `${IMAGE_FOLDER}/I-${imageNumber}.png`;

const GALLERY_IMAGE_NUMBERS = [3, 4, 5, 6, 7];
const PUBLICATION_IMAGE_NUMBERS = [8, 9, 10, 11];

/** Tells the browser how wide each image is shown, so it downloads the right size */
export const IMAGE_SIZES = {
  HALF_WIDTH: "(min-width: 768px) 50vw, 100vw",
  GALLERY: "(min-width: 768px) 66vw, 100vw",
  PUBLICATION_THUMBNAIL: "200px",
};

export const IMAGES = {
  HERO: imagePath(1),
  MISSION: imagePath(2),
  // TODO: replace with the About page photo from the design once it is added to public/images
  ABOUT_HERO: imagePath(2),
  GALLERY: GALLERY_IMAGE_NUMBERS.map(imagePath),
  PUBLICATIONS: PUBLICATION_IMAGE_NUMBERS.map(imagePath),
};
