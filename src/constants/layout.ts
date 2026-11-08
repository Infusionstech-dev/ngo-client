import type { IconName } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

/* ---------- Logo ---------- */

export const LOGO_TEXT = {
  firstWord: "Policy",
  secondWord: "Forward",
  ariaLabel: `${siteConfig.name} home`,
};

/* ---------- Header ---------- */

export const HEADER_CONTENT = {
  ctaLabel: "Become a member",
  menuToggleAriaLabel: "Toggle menu",
};

/* ---------- Footer ---------- */

export const FOOTER_HEADINGS = {
  menu: "Menu",
  contact: "Contact",
};

export const FOOTER_CONTACT_ITEMS: { icon: IconName; value: string }[] = [
  { icon: "mail", value: siteConfig.contact.email },
  { icon: "phone", value: siteConfig.contact.phone },
  { icon: "pin", value: siteConfig.contact.location },
];

export const COPYRIGHT_YEAR = 2026;

export const COPYRIGHT_TEXT = `© ${COPYRIGHT_YEAR} ${siteConfig.organizationName}. All rights reserved.`;
