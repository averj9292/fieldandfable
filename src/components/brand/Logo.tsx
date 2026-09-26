import Link from "next/link";
import { LeafMark } from "./LeafMark";

type LogoProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
};

const sizes = {
  sm: { mark: "h-5 w-5", title: "text-xl md:text-2xl", gap: "gap-1" },
  md: { mark: "h-7 w-7", title: "text-3xl md:text-4xl", gap: "gap-1.5" },
  lg: { mark: "h-9 w-9 md:h-11 md:w-11", title: "text-4xl md:text-6xl", gap: "gap-2" },
};

export function Logo({
  href = "/",
  size = "md",
  showTagline = false,
  className = "",
}: LogoProps) {
  const s = sizes[size];
  const inner = (
    <span className={`inline-flex flex-col items-center ${s.gap} ${className}`}>
      <LeafMark className={`${s.mark} text-olive`} />
      <span
        className={`font-[family-name:var(--font-serif)] font-semibold tracking-[0.04em] text-ink ${s.title}`}
      >
        FIELD &amp; FABLE
      </span>
      {showTagline ? (
        <span className="tracked max-w-md text-center text-[10px] font-medium text-muted md:text-xs">
          Immersive birthday experiences for curious kids
        </span>
      ) : null}
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="outline-none focus-visible:ring-2 focus-visible:ring-olive/40">
      {inner}
    </Link>
  );
}
