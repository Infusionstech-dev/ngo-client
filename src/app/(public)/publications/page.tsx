import type { Metadata } from "next";
import { FeaturedPublication } from "@/components/publications/FeaturedPublication";
import { PreviousNews } from "@/components/publications/PreviousNews";
import { PUBLICATIONS_PAGE_TITLE } from "@/constants/publications";

export const metadata: Metadata = {
  title: PUBLICATIONS_PAGE_TITLE,
};

export default function PublicationsPage() {
  return (
    <>
      <FeaturedPublication />
      <PreviousNews />
    </>
  );
}
