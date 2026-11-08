import { Icon } from "@/components/ui/Icon";
import { CONTACT_INFO_HEADING, CONTACT_METHODS, OFFICE_MAP } from "@/constants/contact";

export function ContactInfo() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-brand">{CONTACT_INFO_HEADING.title}</h1>
      <p className="mt-4 text-ink/70">{CONTACT_INFO_HEADING.description}</p>

      <ul className="mt-8 space-y-7">
        {CONTACT_METHODS.map((method) => (
          <li key={method.label} className="flex items-start gap-6">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white shadow-md">
              <Icon name={method.icon} className="h-9 w-9 text-brand" />
            </span>
            <div>
              <h2 className="font-semibold text-navy">{method.label}</h2>
              {method.lines.map((line) => (
                <p key={line} className="mt-1 text-ink/70">
                  {line}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 font-semibold text-navy">{OFFICE_MAP.label}</h2>
      <iframe
        src={OFFICE_MAP.embedUrl}
        title={OFFICE_MAP.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mt-3 h-56 w-full rounded-lg border border-ink/20"
      />
    </div>
  );
}
