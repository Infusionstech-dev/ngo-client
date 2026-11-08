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

const PREVIOUS_NEWS_COUNT = 4;

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

/* ---------- Publication detail page ---------- */

/** Every publication that has a detail page, looked up by the id in the URL */
export const ALL_PUBLICATIONS: PublicationEvent[] = [FEATURED_PUBLICATION, ...PREVIOUS_NEWS];

export const findPublicationById = (id: number) =>
  ALL_PUBLICATIONS.find((publication) => publication.id === id);

export const publicationPageTitle = (publicationTitle: string) =>
  `${publicationTitle} | ${siteConfig.name}`;

// Sample article text shared by all demo publications until real content is available
export const SAMPLE_ARTICLE_PARAGRAPHS = [
  "The forum opened with a keynote on empirical governance, setting out how transparent data and independent audits can strengthen public trust in state institutions. Speakers stressed that accountability must be built into systems, not added after problems appear.",
  "In the working sessions, delegates were divided into three groups covering fiscal oversight, judicial integrity and digital public services. Each group reviewed recent case studies from Bangladesh and the region, and listed practical reforms that could be adopted within the next policy cycle.",
  "Student representatives and young professionals played an active role, presenting survey findings on how citizens experience public services. Their input shaped several of the final recommendations, especially on open data and citizen feedback channels.",
  "The session closed with the ratification of the final draft of White Paper No. 04, which will be shared with policymakers, academic institutions and the media in the coming weeks.",
];

export const PUBLICATION_DETAIL_LABELS = {
  backToPublications: "Back to publications",
  highlightsHeading: "Event highlights",
  relatedHeading: "More publications",
  relatedCount: 3,
};

export const PUBLICATION_LABELS = {
  viewDetails: "View details",
  highlightsAriaLabel: "Event highlights",};
