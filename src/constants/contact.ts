import type { ContactFormField, ContactMethod } from "@/types/home";
import { siteConfig } from "@/config/site";

export const CONTACT_PAGE_TITLE = `Contact | ${siteConfig.name}`;

/* ---------- Contact information ---------- */

export const CONTACT_INFO_HEADING = {
  title: "Get In Touch",
  description: "Reach out to us through any of the methods below.",
};

export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: "pin",
    label: "Office Location",
    lines: ["House # 579 (Parabar), Road # 09,", "Mirpur DOHS, Dhaka-1216, Bangladesh."],
  },
  { icon: "mail", label: "Email", lines: ["info@infusionstech.com"] },
  { icon: "phone", label: "Contact Number", lines: ["+880 1313 552 299"] },
  { icon: "clock", label: "Office Time", lines: ["Sunday - Friday : 09:30 am - 06:30 pm"] },
];

/* ---------- Map ---------- */

const MAP_SEARCH_QUERY = "Mirpur DOHS, Dhaka 1216, Bangladesh";

export const OFFICE_MAP = {
  label: "Google Map Location",
  title: "Office location on Google Maps",
  // Embed URL works without an API key
  embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(MAP_SEARCH_QUERY)}&output=embed`,
};

/* ---------- Contact form ---------- */

export const CONTACT_FORM_HEADING = {
  title: "Send Us a Message",
  description: "Fill out the form and we'll get back to you as soon as possible.",
};

export const CONTACT_FORM_FIELDS: ContactFormField[] = [
  { name: "fullName", label: "Full Name", placeholder: "Enter Full Name", type: "text" },
  { name: "email", label: "Email", placeholder: "Enter Your Email", type: "email" },
  { name: "phone", label: "Contact", placeholder: "Enter Contact Number", type: "tel" },
  { name: "message", label: "Message", placeholder: "Tell us about your project.......", type: "textarea" },
];

export const CONTACT_FORM_LABELS = {
  submit: "Send message",
  successMessage: "Thank you! Your message has been received. We'll get back to you soon.",
};
