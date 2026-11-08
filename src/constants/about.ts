import type { ImageAsset, PillarCard, SectionHeading, ValueCard } from "@/types/home";
import { siteConfig } from "@/config/site";
import { IMAGES } from "./images";

export const ABOUT_PAGE_TITLE = `About | ${siteConfig.name}`;

/* ---------- About hero ---------- */

export const ABOUT_HERO_CONTENT = {
  title: "From Thought to Meaningful",
  highlight: "Transformation",
  paragraphs: [
    "Bangladesh stands at a turning point. Moving beyond fragmented rhetoric and emotional discourse, our mission is to empower national institutions with the enduring strength of evidence, analysis, and reason.",
    "History reminds us that a nation without thoughtful, evidence-led leadership and constructive public dialogue invariably falls behind. Bangladesh possesses a dynamic youth demographic and a vibrant civic society—yet without structured, objective avenues into policymaking, strategic opportunities risk being squandered.",
  ],
  summary:
    "Policy Forward is an intellectual and civic initiative created to replace hollow slogans with thorough research, constructive multi-stakeholder dialogues, rigorous media analysis, and institutional capacity-building for long-term national reform.",
};

export const ABOUT_HERO_IMAGE: ImageAsset = {
  src: IMAGES.ABOUT_HERO,
  alt: "Policy Forward members in a working session",
};

export const ABOUT_VALUES: ValueCard[] = [
  {
    title: "Knowledge",
    description:
      "Evidence-based research, rigorous data verification, and empirical scientific inquiry. We refute subjective speculation by deploying peer-reviewed methodology and verified national indicators to guide public priorities.",
    isHighlighted: false,
  },
  {
    title: "Reason",
    description:
      "Rational civil discourse, constructive deliberation, and structured debate over ideological rhetoric. We believe complex socio-economic challenges require logical argumentation where facts supersede demagoguery.",
    isHighlighted: true,
  },
  {
    title: "Accountability",
    description:
      "Active civic duty, institutional transparency, and ethical responsibility in public governance. An educated populace has the moral obligation to monitor systemic decisions and advocate for institutional integrity.",
    isHighlighted: false,
  },
];

/* ---------- What we do ---------- */

export const PILLARS_HEADING: SectionHeading = {
  badge: "What we do",
  highlight: "Four Pillars",
  title: "Guiding Our Collective Journey",
  description: ABOUT_HERO_CONTENT.summary,
};

export const PILLARS: PillarCard[] = [
  {
    icon: "list",
    title: "Information Dissemination & Civic Outreach",
    description:
      "Fostering constructive national dialogue through evidence-based research articles in major print press, televised symposiums, analytical podcasts, and digital channels.",
    activities: [
      "Regular policy columns & op-eds across national dailies",
      "Broadcast television talk shows and specialized analytical podcasts",
      "Digital campaigns promoting fact-based civic literacy",
    ],
  },
  {
    icon: "chart",
    title: "Analytical Capability Building",
    description:
      "Equipping emerging analysts and civic scholars with rigorous policy literacy, advanced verification methods, and empirical research methodologies which are most important.",
    activities: [
      "Hands-on policy analysis workshops and evaluation seminars",
      "Fact-checking protocols & open-source research methodologies",
      "Research fellowships and mentorship for emerging thinkers",
    ],
  },
  {
    icon: "cycle",
    title: "Policy Advocacy & Institutional Reform",
    description:
      "Publishing actionable policy briefs, white papers, and hosting high-level stakeholder round tables with public administrators, academics, and civic leaders.",
    activities: [
      "Whitepapers with empirical, actionable policy recommendations",
      "High-level expert symposia and multi-sector roundtable dialogues",
      "Press communiqués and stakeholder advocacy briefings",
    ],
  },
  {
    icon: "userPlus",
    title: "Civic Consciousness & Engagement",
    description:
      "Conducting evidence-based civic awareness initiatives across socio-economic, constitutional, and governance questions to cultivate an active, responsible citizenry.",
    activities: [
      "Civic rights, democratic values & institutional accountability campaigns",
      "Open university intellectual forums and youth dialogue councils",
      "Accessible infographics and digestible analytical publications",
    ],
  },
];
