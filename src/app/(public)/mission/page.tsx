import type { Metadata } from "next";
import { MissionHero } from "@/components/mission/MissionHero";
import { MissionGoals } from "@/components/mission/MissionGoals";
import { Pillars } from "@/components/about/Pillars";
import { Membership } from "@/components/home/Membership";
import { MISSION_PAGE_TITLE } from "@/constants/mission";

export const metadata: Metadata = {
  title: MISSION_PAGE_TITLE,
};

export default function MissionPage() {
  return (
    <>
      <MissionHero />
      <MissionGoals />
      <Pillars />
      <Membership />
    </>
  );
}
