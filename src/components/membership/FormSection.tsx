type FormSectionProps = {
  title: string;
  children: React.ReactNode;
};

/** White card that groups one step of the membership form */
export function FormSection({ title, children }: FormSectionProps) {
  return (
    <fieldset className="rounded-lg bg-white p-4 shadow-md md:p-6">
      {/* Title is hidden on screen but still read out by screen readers */}
      <legend className="sr-only">{title}</legend>
      {children}
    </fieldset>
  );
}
