import type { Metadata } from "next";
import { MembershipForm } from "@/components/membership/MembershipForm";
import { MEMBERSHIP_PAGE_TITLE } from "@/constants/membership";

export const metadata: Metadata = {
  title: MEMBERSHIP_PAGE_TITLE,
};

export default function MembershipPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <MembershipForm />
    </section>
  );
}
