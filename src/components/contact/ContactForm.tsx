"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormField } from "@/types/home";
import {
  CONTACT_FORM_FIELDS,
  CONTACT_FORM_HEADING,
  CONTACT_FORM_LABELS,
} from "@/constants/contact";

type ContactFormValues = Record<ContactFormField["name"], string>;

const EMPTY_FORM_VALUES: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const INPUT_CLASS_NAME =
  "mt-2 w-full rounded-lg border border-ink/20 bg-white px-3 py-2.5 outline-none placeholder:text-ink/50 focus:border-brand";

/** Frontend-only contact form; connect handleSubmit to the API when it is ready */
export function ContactForm() {
  const [formValues, setFormValues] = useState<ContactFormValues>(EMPTY_FORM_VALUES);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send formValues to the backend once the contact API exists
    setIsSubmitted(true);
    setFormValues(EMPTY_FORM_VALUES);
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="text-4xl font-bold text-brand">{CONTACT_FORM_HEADING.title}</h2>
      <p className="mt-4 text-ink/70">{CONTACT_FORM_HEADING.description}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {CONTACT_FORM_FIELDS.map((field) => (
          <label key={field.name} className="block">
            <span className="font-semibold text-navy">{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                value={formValues[field.name]}
                onChange={handleChange}
                rows={8}
                required
                className={INPUT_CLASS_NAME}
              />
            ) : (
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formValues[field.name]}
                onChange={handleChange}
                required
                className={INPUT_CLASS_NAME}
              />
            )}
          </label>
        ))}

        <button
          type="submit"
          className="w-full rounded-lg bg-brand py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          {CONTACT_FORM_LABELS.submit}
        </button>

        {isSubmitted && (
          <p role="status" className="text-sm text-green-700">
            {CONTACT_FORM_LABELS.successMessage}
          </p>
        )}
      </form>
    </div>
  );
}
