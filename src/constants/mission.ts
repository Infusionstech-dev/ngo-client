import type { FeatureCard, ImageAsset } from "@/types/home";
import { siteConfig } from "@/config/site";
import { IMAGES } from "./images";

export const MISSION_PAGE_TITLE = `Our Mission | ${siteConfig.name}`;

/* ---------- Mission hero ---------- */

export const MISSION_HERO_CONTENT = {
  badge: "Our mission",
  title: "Building a Knowledge-Based,",
  highlight: "Accountable Bangladesh",
  description:
    "Our mission is to bring evidence, reason and responsibility to the centre of national decision-making. We connect intellectuals, professionals and conscious citizens so that public policy is shaped by research and open dialogue, not slogans.",
};

export const MISSION_HERO_IMAGE: ImageAsset = {
  src: IMAGES.MISSION,
  alt: "Members at a roundtable meeting",
};

/* ---------- Goals ---------- */

export const MISSION_GOALS_HEADING = {
  title: "What We Aim",
  highlight: "to Achieve",
};

export const MISSION_GOALS: FeatureCard[] = [
  {
    icon: "search",
    title: "Evidence first",
    description: "Make research and verified data the starting point of every public policy debate.",
  },
  {
    icon: "people",
    title: "Empowered youth",
    description: "Give young people real pathways into policy discussion and civic leadership.",
  },
  {
    icon: "chat",
    title: "Open dialogue",
    description: "Bring experts, officials and citizens to the same table through roundtables and forums.",
  },
];
