import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Pillars } from "@/components/about/Pillars";
import { WhyNow } from "@/components/home/WhyNow";
import { Membership } from "@/components/home/Membership";
import { ABOUT_PAGE_TITLE } from "@/constants/about";

export const metadata: Metadata = {
  title: ABOUT_PAGE_TITLE,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyNow />
      <Pillars />
      <Membership />
    </>
  );
}
