import { Icon } from "@/components/ui/Icon";
import { SERVICES } from "@/constants/home";

export function Services() {
  return (
    <section className="bg-cream py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {SERVICES.map((service) => (
          <div key={service.title} className="rounded-lg bg-white p-6 text-center shadow-sm card-hover">
            <Icon name={service.icon} className="mx-auto h-9 w-9 text-brand" />
            <h3 className="mt-4 text-xs font-bold uppercase tracking-wide">{service.title}</h3>
            <p className="mt-1 text-xs text-ink/60">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
