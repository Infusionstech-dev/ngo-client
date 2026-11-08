import type { IconName } from "@/components/ui/Icon";

export type NavItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

/** A piece of a heading; highlighted pieces are shown in the brand colour */
export type TextSegment = {
  text: string;
  isHighlighted: boolean;
};

export type SectionHeading = {
  badge: string;
  title: string;
  highlight: string;
  description?: string;
};

export type FeatureCard = {
  icon: IconName;
  title: string;
  description: string;
};

export type ValueCard = {
  title: string;
  description: string;
  isHighlighted: boolean;
};

export type PillarCard = FeatureCard & {
  activities: string[];
};

export type GalleryPhoto = ImageAsset & {
  /** Tailwind grid classes that control the photo's size in the gallery grid */
  gridClassName: string;
};

export type Publication = {
  id: number;
  image: ImageAsset;
  category: string;
  shortDate: string;
  title: string;
  excerpt: string;
  author: string;
  publishedOn: string;
};

export type EventHighlight = {
  label: string;
  value: string;
};

export type PublicationEvent = {
  id: number;
  image: ImageAsset;
  tag: string;
  date: string;
  location: string;
  title: string;
  summary: string;
  photoCredit: string;
  highlights: EventHighlight[];
};

export type ContactMethod = {
  icon: IconName;
  label: string;
  lines: string[];
};

export type ContactFormField = {
  name: "fullName" | "email" | "phone" | "message";
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
};

export type MembershipFee = {
  label: string;
  amount: string;
  period?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
