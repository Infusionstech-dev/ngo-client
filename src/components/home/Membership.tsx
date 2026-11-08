import { Button } from "@/components/ui/Button";
import { MEMBERSHIP_CONTENT, MEMBERSHIP_FEES } from "@/constants/home";
import { ROUTES } from "@/constants/routes";

export function Membership() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="inline-block rounded-full bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          {MEMBERSHIP_CONTENT.badge}
        </span>
        <h2 className="mt-5 text-3xl font-semibold leading-snug md:text-4xl">
          {MEMBERSHIP_CONTENT.titleLine1}
          <br />
          {MEMBERSHIP_CONTENT.titleLine2}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70">
          {MEMBERSHIP_CONTENT.description}
        </p>
        <div className="mt-10 grid gap-6 rounded-xl bg-brand p-8 sm:grid-cols-3">
          {MEMBERSHIP_FEES.map((fee) => (
            <div key={fee.label}>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                {fee.label}
              </p>
              <p className="mt-2 text-2xl font-bold">
                {fee.amount}
                {fee.period && <span className="text-base font-medium">{fee.period}</span>}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <Button href={ROUTES.MEMBERSHIP}>{MEMBERSHIP_CONTENT.applyButtonLabel}</Button>
          <Button href={ROUTES.CONTACT} variant="light">
            {MEMBERSHIP_CONTENT.contactButtonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
