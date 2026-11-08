"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { MembershipTextField } from "@/types/home";
import { cn } from "@/lib/utils";
import {
  DECLARATION_TEXT,
  DONATION_FIELD,
  EXPERTISE_LABEL,
  EXPERTISE_OPTIONS,
  INTEREST_OPTIONS,
  MEMBERSHIP_CATEGORIES,
  MEMBERSHIP_FORM_LABELS,
  MEMBERSHIP_SECTION_TITLES,
  PAYABLE_FEES,
  PAYMENT_METHOD_LABEL,
  PAYMENT_METHODS,
  PERSONAL_FIELDS,
  PROFESSIONAL_FIELDS,
} from "@/constants/membership";
import { ChipGroup } from "./ChipGroup";
import { FormSection } from "./FormSection";
import { FIELD_LABEL_CLASS_NAME, TextFieldGrid } from "./TextFieldGrid";

type TextFieldValues = Record<MembershipTextField["name"], string>;

const EMPTY_TEXT_VALUES: TextFieldValues = {
  fullName: "",
  dateOfBirth: "",
  mobile: "",
  email: "",
  nationalId: "",
  address: "",
  occupation: "",
  organization: "",
};

const [DEFAULT_CATEGORY] = MEMBERSHIP_CATEGORIES;
const [DEFAULT_PAYMENT_METHOD] = PAYMENT_METHODS;

/** Adds the value if it is missing, removes it if it is already selected */
const toggleValue = (values: string[], value: string) =>
  values.includes(value) ? values.filter((item) => item !== value) : [...values, value];

/** Frontend-only membership application; connect handleSubmit to the API when it is ready */
export function MembershipForm() {
  const [textValues, setTextValues] = useState<TextFieldValues>(EMPTY_TEXT_VALUES);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY.value);
  const [donationAmount, setDonationAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(DEFAULT_PAYMENT_METHOD.value);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [hasAcceptedDeclaration, setHasAcceptedDeclaration] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setTextValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send the application to the backend once the membership API exists
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FormSection title={MEMBERSHIP_SECTION_TITLES.personal}>
        <TextFieldGrid fields={PERSONAL_FIELDS} values={textValues} onChange={handleTextChange} />
      </FormSection>

      <FormSection title={MEMBERSHIP_SECTION_TITLES.professional}>
        <TextFieldGrid fields={PROFESSIONAL_FIELDS} values={textValues} onChange={handleTextChange} />
        <p className={cn(FIELD_LABEL_CLASS_NAME, "mt-5 mb-2")}>{EXPERTISE_LABEL}</p>
        <ChipGroup
          options={EXPERTISE_OPTIONS}
          selectedValues={selectedExpertise}
          onToggle={(value) => setSelectedExpertise((values) => toggleValue(values, value))}
        />
      </FormSection>

      <FormSection title={MEMBERSHIP_SECTION_TITLES.category}>
        <div className="grid gap-4 md:grid-cols-3">
          {MEMBERSHIP_CATEGORIES.map((category) => (
            <label
              key={category.value}
              className={cn(
                "cursor-pointer rounded-lg border p-4 transition-colors",
                selectedCategory === category.value ? "border-navy" : "border-ink/15 hover:border-brand",
              )}
            >
              <input
                type="radio"
                name="category"
                value={category.value}
                checked={selectedCategory === category.value}
                onChange={() => setSelectedCategory(category.value)}
                className="sr-only"
              />
              <span className="block font-semibold text-brand">{category.label}</span>
              <span className="mt-1 block text-sm text-ink/60">{category.description}</span>
            </label>
          ))}
        </div>
      </FormSection>

      <FormSection title={MEMBERSHIP_SECTION_TITLES.payment}>
        <dl>
          {PAYABLE_FEES.map((fee) => (
            <div key={fee.label} className="flex items-center justify-between border-b border-ink/10 py-3">
              <dt className="text-sm text-navy">{fee.label}</dt>
              <dd className="font-bold text-brand">
                {fee.amount}
                {fee.period}
              </dd>
            </div>
          ))}
        </dl>

        <label className="mt-5 block">
          <span className="font-display text-base font-semibold text-brand">{DONATION_FIELD.label}</span>
          <input
            type="number"
            name="donation"
            min={DONATION_FIELD.minimumAmount}
            placeholder={DONATION_FIELD.placeholder}
            value={donationAmount}
            onChange={(event) => setDonationAmount(event.target.value)}
            className="mt-2 w-full rounded-lg border border-ink/20 bg-cream/40 px-3 py-2 outline-none focus:border-brand"
          />
        </label>

        <p className="mt-5 font-display text-base font-semibold text-brand">{PAYMENT_METHOD_LABEL}</p>
        <div className="mt-2 flex flex-wrap gap-5">
          {PAYMENT_METHODS.map((method) => (
            <label key={method.value} className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="radio"
                name="paymentMethod"
                value={method.value}
                checked={paymentMethod === method.value}
                onChange={() => setPaymentMethod(method.value)}
                className="h-4 w-4 accent-brand"
              />
              {method.label}
            </label>
          ))}
        </div>
      </FormSection>

      <FormSection title={MEMBERSHIP_SECTION_TITLES.interests}>
        <ChipGroup
          options={INTEREST_OPTIONS}
          selectedValues={selectedInterests}
          onToggle={(value) => setSelectedInterests((values) => toggleValue(values, value))}
        />
      </FormSection>

      <FormSection title={MEMBERSHIP_SECTION_TITLES.declaration}>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink/80">
          <input
            type="checkbox"
            checked={hasAcceptedDeclaration}
            onChange={(event) => setHasAcceptedDeclaration(event.target.checked)}
            required
            className="mt-0.5 h-4 w-4 accent-brand"
          />
          {DECLARATION_TEXT}
        </label>
      </FormSection>

      <div className="text-center">
        <button
          type="submit"
          className="rounded bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          {MEMBERSHIP_FORM_LABELS.submit}
        </button>
        {isSubmitted && (
          <p role="status" className="mt-4 text-sm text-green-700">
            {MEMBERSHIP_FORM_LABELS.successMessage}
          </p>
        )}
      </div>
    </form>
  );
}
