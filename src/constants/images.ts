/**
 * Homepage photos stored in public/images.
 * Files are numbered in the order they appear in the design.
 */
const IMAGE_FOLDER = "/images";

const imagePath = (imageNumber: number) => `${IMAGE_FOLDER}/I-${imageNumber}.png`;

const GALLERY_IMAGE_NUMBERS = [3, 4, 5, 6, 7];
const PUBLICATION_IMAGE_NUMBERS = [8, 9, 10, 11];

export const IMAGES = {
  HERO: imagePath(1),
  MISSION: imagePath(2),
  GALLERY: GALLERY_IMAGE_NUMBERS.map(imagePath),
  PUBLICATIONS: PUBLICATION_IMAGE_NUMBERS.map(imagePath),
};
