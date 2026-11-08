/** Every internal URL used in the app; change a path here and it updates everywhere */
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  MISSION: "/mission",
  GALLERY: "/gallery",
  PUBLICATIONS: "/publications",
  MEMBERSHIP: "/membership",
  NEWS: "/news",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
  TERMS: "/terms",
} as const;

export const publicationDetailRoute = (id: number) => `${ROUTES.PUBLICATIONS}/${id}`;
