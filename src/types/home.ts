import type { IconName } from "@/components/ui/Icon";

export type NavItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
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

export type MembershipFee = {
  label: string;
  amount: string;
  period?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
