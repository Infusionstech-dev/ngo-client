import type { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_PAGE_TITLE } from "@/constants/contact";

export const metadata: Metadata = {
  title: CONTACT_PAGE_TITLE,
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-2 md:py-16">
      <ContactInfo />
      <ContactForm />
    </section>
  );
}
