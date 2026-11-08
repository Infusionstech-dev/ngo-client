import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
};

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-ink/20 bg-white text-ink hover:border-ink",
  light: "bg-white text-ink hover:bg-cream",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
