type FormSectionProps = {
  stepNumber: number;
  title: string;
  children: React.ReactNode;
};

/** White card with a numbered beige title bar, used for each step of the membership form */
export function FormSection({ stepNumber, title, children }: FormSectionProps) {
  return (
    <fieldset className="rounded-lg bg-white p-4 shadow-md md:p-6">
      <legend className="sr-only">{title}</legend>
      <div className="rounded bg-cream px-5 py-3 font-semibold text-brand" aria-hidden="true">
        {stepNumber}&nbsp;&nbsp;{title}
      </div>
      <div className="mt-5">{children}</div>
    </fieldset>
  );
}
