import type { PublicationEvent, SectionHeading } from "@/types/home";
import { siteConfig } from "@/config/site";
import { IMAGES } from "./images";

export const PUBLICATIONS_PAGE_TITLE = `Publications | ${siteConfig.name}`;

/* ---------- Featured publication ---------- */

export const FEATURED_PUBLICATION_HEADING: SectionHeading = {
  badge: "Research & Publications",
  title: "Our Memorable",
  highlight: "Moments & Gatherings",
  description:
    "A national repository of independent policy whitepapers, legislative reform proposals, economic audits, and peer-reviewed civic deliberations produced by Bangladesh Forward fellows and interdisciplinary working groups.",
};

export const FEATURED_PUBLICATION: PublicationEvent = {
  id: 1,
  image: { src: IMAGES.PUBLICATIONS[0], alt: "Delegates at the National Deliberative Forum" },
  tag: "Policy breakfast",
  date: "23 October 2026",
  location: "Dhaka Secretariat, Hall",
  title: "8th National Deliberative Forum on Institutional Accountability",
  summary:
    "Senior jurists, fiscal economists, and student representatives gathered to evaluate civic integrity metrics and propose legislative oversight amendments for Bangladesh's state agencies.",
  photoCredit: "Photographed by Tariqul Islam, Archive Staff",
  highlights: [
    { label: "Keynote Session", value: "Empirical Governance & Anti-Corruption Systems" },
    { label: "Delegates", value: "72 Academic Fellows, Civil Servants & Youth Observers" },
    { label: "Resolution", value: "Final draft of White paper No. 04 officially ratified" },
  ],
};

/* ---------- Previous news ---------- */

export const PREVIOUS_NEWS_HEADING: SectionHeading = {
  badge: "Previous news",
  title: "Some Captured",
  highlight: "Moments & Publications",
};

const PREVIOUS_NEWS_COUNT = 6;

// Sample data until the publications API is connected
export const PREVIOUS_NEWS: PublicationEvent[] = Array.from(
  { length: PREVIOUS_NEWS_COUNT },
  (_, index) => ({
    ...FEATURED_PUBLICATION,
    id: index + 2,
    image: {
      src: IMAGES.PUBLICATIONS[index % IMAGES.PUBLICATIONS.length],
      alt: FEATURED_PUBLICATION.image.alt,
    },
  }),
);

export const PUBLICATION_LABELS = {
  viewDetails: "View details",
  highlightsAriaLabel: "Event highlights",
  carouselAriaLabel: "Previous news",
  goToSlideAriaLabel: "Go to news item",
};
