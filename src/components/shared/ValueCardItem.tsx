import type { ValueCard } from "@/types/home";
import { cn } from "@/lib/utils";

/** Card used for the Knowledge / Reason / Accountability values on Home and About */
export function ValueCardItem({ value }: { value: ValueCard }) {
  return (
    <div className="rounded-lg border border-ink/5 bg-white p-5 shadow-sm card-hover">
      <h3 className={cn("text-xs font-bold uppercase tracking-wide", value.isHighlighted && "text-brand")}>
        {value.title}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-ink/60">{value.description}</p>
    </div>
  );
}
