import type {
  FeatureCard,
  GalleryPhoto,
  ImageAsset,
  MembershipFee,
  Publication,
  SectionHeading,
  TextSegment,
  ValueCard,
} from "@/types/home";
import { IMAGES } from "./images";
import { buildGalleryPhotos } from "./gallery";

/* ---------- Hero ---------- */

export const HERO_TAGS = ["Knowledge", "Logic", "Responsibility"];

export const HERO_CONTENT = {
  eyebrow: "A platform for intellectuals, professionals & conscious citizens",
  title: "The time to change is now.",
  highlight: "Building the future is on all of us.",
  description:
    "Bangladesh stands today at a historic crossroads. If we do not raise our voice now, grounded in knowledge, reason and responsibility, the power to decide will pass into other hands. Bangladesh Forward is a platform of intellectuals, professionals and conscious citizens who believe a knowledge-based, evidence-driven and accountable Bangladesh is possible, and that it must be built by our own hands.",
  primaryButtonLabel: "Become a member",
  secondaryButtonLabel: "Learn more",
};

export const HERO_IMAGE: ImageAsset = {
  src: IMAGES.HERO,
  alt: "Members in a policy discussion",
};

/* ---------- Services ---------- */

export const SERVICES: FeatureCard[] = [
  { icon: "press", title: "Op-eds in the press", description: "Objective national commentary" },
  { icon: "mic", title: "Talk shows & podcasts", description: "Thoughtful public engagement" },
  { icon: "wave", title: "Roundtable dialogues", description: "Expert & civic dialogue" },
  { icon: "screen", title: "Training workshops", description: "Building analytical capacity" },
];

/* ---------- Purpose ---------- */

const ORGANIZATION_SUMMARY =
  "Policy Forward is an intellectual and civic initiative created to replace hollow slogans with thorough research, constructive multi-stakeholder dialogues, rigorous media analysis, and institutional capacity-building for long-term national reform.";

export const PURPOSE_HEADING: SectionHeading = {
  badge: "Our purpose",
  title: "From Thought to",
  highlight: "Meaningful Transformation",
  description: ORGANIZATION_SUMMARY,
};

export const PURPOSE_VALUES: ValueCard[] = [
  {
    title: "Knowledge",
    description: "Evidence-based research and scientific inquiry guiding national priorities.",
    isHighlighted: false,
  },
  {
    title: "Reason",
    description: "Rigorous public logic and constructive debate prioritized over polarizing rhetoric.",
    isHighlighted: true,
  },
  {
    title: "Accountability",
    description: "Civic responsibility, institutional integrity, and transparency in public governance.",
    isHighlighted: false,
  },
];

export const PURPOSE_BUTTON_LABEL = "View more details";

/* ---------- Why now ---------- */

export const WHY_NOW_CONTENT = {
  badge: "Why now",
  titleLines: [
    [
      { text: "The ", isHighlighted: false },
      { text: "opportunity", isHighlighted: true },
      { text: " is here today.", isHighlighted: false },
    ],
    [
      { text: "Lose", isHighlighted: true },
      { text: " it and it will ", isHighlighted: false },
      { text: "not return.", isHighlighted: true },
    ],
  ] satisfies TextSegment[][],
  description:
    "History has taught us again and again: a nation that fails to build thoughtful leadership in time falls behind. The opportunity before Bangladesh today, a young population, a growing educated class, and a public appetite for change, is not one to be squandered.",
};

export const WHY_NOW_CHALLENGES: FeatureCard[] = [
  {
    icon: "minus",
    title: "Misinformation epidemic",
    description: "The rapid spread of false information is weakening healthy, fact-based public discourse.",
  },
  {
    icon: "people",
    title: "Untapped youth potential",
    description: "A vast young population, yet their participation in policy conversation remains marginal.",
  },
  {
    icon: "chat",
    title: "Accountability deficit",
    description: "There are many conscious people, but evidence-based voice bringing them together is missing.",
  },
  {
    icon: "search",
    title: "Fragmented civic action",
    description: "The culture of evidence-based policy and accountability is not yet strong enough.",
  },
];

/* ---------- Mission ---------- */

export const MISSION_HEADING: SectionHeading = {
  badge: "Our mission",
  highlight: "Four Pillars",
  title: "Guiding Our Collective Journey",
};

export const MISSION_PILLARS = [
  "Information Dissemination & Civic Outreach",
  "Analytical Capability Building",
  "Policy Advocacy & Institutional Reform",
  "Civic Consciousness & Engagement",
];

export const MISSION_IMAGE: ImageAsset = {
  src: IMAGES.MISSION,
  alt: "Members at a roundtable meeting",
};

export const MISSION_BUTTON_LABEL = "Learn more";

/* ---------- Gallery ---------- */

export const GALLERY_HEADING: SectionHeading = {
  badge: "Gallery",
  title: "Some Captured",
  highlight: "Moments",
};

export const GALLERY_PHOTOS: GalleryPhoto[] = buildGalleryPhotos(IMAGES.GALLERY);

export const GALLERY_BUTTON_LABEL = "View more";

/* ---------- Publications ---------- */

export const PUBLICATIONS_HEADING: SectionHeading = {
  badge: "Publications",
  title: "From Thought to",
  highlight: "Meaningful Transformation",
  description: ORGANIZATION_SUMMARY,
};

// Sample data until the publications API is connected
export const SAMPLE_PUBLICATIONS: Publication[] = IMAGES.PUBLICATIONS.map((src, index) => ({
  id: index + 1,
  image: { src, alt: "" },
  category: "Org news",
  shortDate: "23 Oct",
  title: "The 8th weekly meeting of Bangladesh Forward has taken place.",
  excerpt:
    "During the regular weekly meetings, various measures are adopted to expand the activities of the Bangladesh Forward platform and to increase public engagement in each of its initiatives.",
  author: "Tanvir Ahmed",
  publishedOn: "23 October 2026",
}));

export const PUBLICATIONS_BUTTON_LABEL = "Load more";

/* ---------- Membership ---------- */

export const MEMBERSHIP_CONTENT = {
  badge: "Open membership",
  titleLine1: "Take Part in Shaping",
  titleLine2: "Tomorrow's Bangladesh",
  description:
    "Membership in Bangladesh Forward is not merely signing up to an organization, it is a commitment: to build the country through knowledge, reason and collective effort.",
  applyButtonLabel: "Apply for membership",
  contactButtonLabel: "Contact for details",
};

export const MEMBERSHIP_FEES: MembershipFee[] = [
  { label: "Entry fee (one-time)", amount: "৳1,000" },
  { label: "Annual membership fee", amount: "৳2,000", period: " / year" },
  { label: "Extra donation (optional)", amount: "As you wish" },
];
