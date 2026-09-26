import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "olive-outline";

const styles: Record<Variant, string> = {
  primary:
    "bg-olive text-cream hover:bg-olive-deep focus-visible:ring-olive/40 shadow-[0_10px_30px_-18px_rgba(74,93,69,0.85)]",
  ghost:
    "bg-transparent text-ink hover:bg-cream-deep focus-visible:ring-ink/20",
  "olive-outline":
    "bg-transparent text-olive border border-olive/40 hover:bg-olive hover:text-cream focus-visible:ring-olive/30",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-xs font-medium tracked transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50";

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
