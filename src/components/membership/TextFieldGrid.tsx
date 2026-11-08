import type { ChangeEvent } from "react";
import type { MembershipTextField } from "@/types/home";
import { cn } from "@/lib/utils";

type TextFieldGridProps = {
  fields: MembershipTextField[];
  values: Record<string, string>;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const FIELD_LABEL_CLASS_NAME = "text-sm font-medium text-navy";

const INPUT_CLASS_NAME =
  "mt-2 w-full rounded-lg border border-ink/20 bg-white px-3 py-2.5 outline-none focus:border-brand";

/** Two-column grid of text inputs built from a list of field definitions */
export function TextFieldGrid({ fields, values, onChange }: TextFieldGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {fields.map((field) => (
        <label key={field.name} className={cn("block", field.isFullWidth && "md:col-span-2")}>
          <span className={FIELD_LABEL_CLASS_NAME}>
            {field.label}
            {field.isRequired && <span className="text-brand"> *</span>}
          </span>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              value={values[field.name]}
              onChange={onChange}
              required={field.isRequired}
              rows={3}
              className={INPUT_CLASS_NAME}
            />
          ) : (
            <input
              name={field.name}
              type={field.type}
              value={values[field.name]}
              onChange={onChange}
              required={field.isRequired}
              className={INPUT_CLASS_NAME}
            />
          )}
        </label>
      ))}
    </div>
  );
}
