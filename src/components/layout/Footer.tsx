import Link from "next/link";
import { FOOTER_NAV, LEGAL_NAV, SOCIAL_LINKS } from "@/constants/navigation";
import { siteConfig } from "@/config/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "./Logo";

const CONTACT_ITEMS: { icon: IconName; value: string }[] = [
  { icon: "mail", value: siteConfig.contact.email },
  { icon: "phone", value: siteConfig.contact.phone },
  { icon: "pin", value: siteConfig.contact.location },
];

const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-2xl font-medium leading-snug text-navy">
            {siteConfig.tagline}
          </p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest">Menu</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            {CONTACT_ITEMS.map((item) => (
              <li key={item.icon} className="flex items-center gap-2">
                <Icon name={item.icon} className="h-4 w-4 text-brand" />
                {item.value}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white hover:bg-brand"
              >
                {social.label.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-ink/60 sm:flex-row sm:justify-between">
          <p>
            © {COPYRIGHT_YEAR} {siteConfig.organizationName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {LEGAL_NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
