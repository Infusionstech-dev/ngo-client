import type { NavItem, SocialLink } from "@/types/home";
import { ROUTES } from "./routes";

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Gallery", href: ROUTES.GALLERY },
  { label: "Publications", href: ROUTES.PUBLICATIONS },
  { label: "Contact", href: ROUTES.CONTACT },
];

export const FOOTER_NAV: NavItem[] = [
  { label: "About", href: ROUTES.ABOUT },
  { label: "Mission", href: ROUTES.MISSION },
  { label: "Membership", href: ROUTES.MEMBERSHIP },
  { label: "News", href: ROUTES.NEWS },
  { label: "Gallery", href: ROUTES.GALLERY },
  { label: "Contact", href: ROUTES.CONTACT },
];

export const LEGAL_NAV: NavItem[] = [
  { label: "Privacy Policy", href: ROUTES.PRIVACY },
  { label: "Terms of Service", href: ROUTES.TERMS },
];

// TODO: replace "#" with the organisation's real profile URLs
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
];
