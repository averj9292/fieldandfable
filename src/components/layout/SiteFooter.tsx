import Link from "next/link";
import { LeafMark } from "@/components/brand/LeafMark";
import { SITE } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden px-5 pb-10 pt-8 md:px-10">
      <div className="pointer-events-none absolute bottom-0 left-4 text-olive/25 md:left-10">
        <LeafMark className="h-16 w-16 rotate-[-20deg] md:h-24 md:w-24" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-4 text-olive/25 md:right-10">
        <LeafMark className="h-16 w-16 rotate-[20deg] scale-x-[-1] md:h-24 md:w-24" />
      </div>

      <div className="section-rule relative z-[1] mx-auto max-w-4xl">
        <p className="tracked max-w-xl text-center text-[11px] font-medium text-muted md:text-xs">
          More than a party. A brighter kind of childhood.
        </p>
      </div>

      <div className="relative z-[1] mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-[family-name:var(--font-serif)] text-lg text-ink">
            {SITE.name}
          </p>
          <p className="mt-1 text-xs text-muted">{SITE.region}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 text-[10px] tracked text-muted">
          <Link href="/booking" className="hover:text-ink">
            Book
          </Link>
          <Link href="/inventory" className="hover:text-ink">
            Inventory
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
          <a href={`tel:${SITE.phoneTel}`} className="hover:text-ink">
            {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-ink">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
