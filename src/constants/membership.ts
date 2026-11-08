import type {
  MembershipCategory,
  MembershipTextField,
  SelectableOption,
} from "@/types/home";
import { siteConfig } from "@/config/site";
import { MEMBERSHIP_FEES } from "./home";

export const MEMBERSHIP_PAGE_TITLE = `Membership | ${siteConfig.name}`;

/** Numbered section titles, in the order they appear on the form */
export const MEMBERSHIP_SECTION_TITLES = {
  personal: "Personal information",
  professional: "Professional profile",
  category: "Membership category",
  payment: "Fees & payment",
  interests: "Areas of interest",
  declaration: "Declaration",
};

/* ---------- 1. Personal information ---------- */

export const PERSONAL_FIELDS: MembershipTextField[] = [
  { name: "fullName", label: "Full name", type: "text", isRequired: true, isFullWidth: false },
  { name: "dateOfBirth", label: "Date of birth", type: "date", isRequired: false, isFullWidth: false },
  { name: "mobile", label: "Mobile number", type: "tel", isRequired: true, isFullWidth: false },
  { name: "email", label: "Email address", type: "email", isRequired: false, isFullWidth: false },
  { name: "nationalId", label: "NID / Passport number", type: "text", isRequired: false, isFullWidth: true },
  { name: "address", label: "Present address", type: "textarea", isRequired: false, isFullWidth: true },
];

/* ---------- 2. Professional profile ---------- */

export const PROFESSIONAL_FIELDS: MembershipTextField[] = [
  { name: "occupation", label: "Occupation", type: "text", isRequired: false, isFullWidth: false },
  { name: "organization", label: "Organization", type: "text", isRequired: false, isFullWidth: false },
];

export const EXPERTISE_LABEL = "Areas of expertise (select multiple)";

export const EXPERTISE_OPTIONS: SelectableOption[] = [
  { value: "writer", label: "Writer" },
  { value: "journalist", label: "Journalist" },
  { value: "activist", label: "Activist" },
  { value: "researcher", label: "Researcher / Academic" },
  { value: "policy-analyst", label: "Policy analyst" },
  { value: "business", label: "Business / Entrepreneur" },
];

/* ---------- 3. Membership category ---------- */

export const MEMBERSHIP_CATEGORIES: MembershipCategory[] = [
  {
    value: "intellectual",
    label: "Intellectual / Activist / Writer / Journalist / Think-tank member",
    description: "Contribute directly to national discussion through opinion and analysis.",
  },
  {
    value: "general",
    label: "General professional member",
    description: "Politically and socially conscious individuals from any profession.",
  },
  {
    value: "donor",
    label: "Donor / Sponsor member",
    description: "Advance the organization through financial and structural support.",
  },
];

/* ---------- 4. Fees & payment ---------- */

// Entry and annual fees come from the homepage constants so the amounts are defined once
const [ENTRY_FEE, ANNUAL_FEE] = MEMBERSHIP_FEES;
export const PAYABLE_FEES = [ENTRY_FEE, ANNUAL_FEE];

export const DONATION_FIELD = {
  label: "Extra donation (optional, in taka)",
  placeholder: "0",
  minimumAmount: 0,
};

export const PAYMENT_METHOD_LABEL = "Payment method";

export const PAYMENT_METHODS: SelectableOption[] = [
  { value: "cash", label: "Cash" },
  { value: "bank", label: "Bank transfer" },
  { value: "mfs", label: "MFS (bKash/Nagad/Upay)" },
];

/* ---------- 5. Areas of interest ---------- */

export const INTEREST_OPTIONS: SelectableOption[] = [
  { value: "outreach", label: "Community & member outreach" },
  { value: "governance", label: "Constitution & governance" },
  { value: "social-media", label: "Social media" },
  { value: "selection-committee", label: "New-member selection committee" },
  { value: "training", label: "Training & capacity building" },
  { value: "media", label: "Media & communications" },
];

/* ---------- 6. Declaration & submit ---------- */

export const DECLARATION_TEXT = `I declare that the information above is accurate and complete. I agree to abide by ${siteConfig.organizationName}'s constitution, code of conduct and decisions.`;

export const MEMBERSHIP_FORM_LABELS = {
  submit: "Submit application",
  successMessage: "Thank you! Your membership application has been received. We will contact you soon.",
};
