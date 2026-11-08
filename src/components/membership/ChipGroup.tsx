import type { SelectableOption } from "@/types/home";
import { cn } from "@/lib/utils";

type ChipGroupProps = {
  options: SelectableOption[];
  selectedValues: string[];
  onToggle: (value: string) => void;
};

/** Row of pill buttons where several options can be selected at once */
export function ChipGroup({ options, selectedValues, onToggle }: ChipGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value);

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onToggle(option.value)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              isSelected
                ? "border-brand bg-brand text-white"
                : "border-ink/15 bg-cream/60 text-ink/80 hover:border-brand",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
