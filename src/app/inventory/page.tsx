import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EXPERIENCES } from "@/lib/experiences";
import { INVENTORY } from "@/lib/inventory";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Inventory",
};

export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
      <FadeIn>
        <SectionLabel>Kits &amp; props</SectionLabel>
        <h1 className="mt-8 max-w-3xl font-[family-name:var(--font-serif)] text-4xl font-semibold text-ink md:text-5xl">
          Everything we bring to the adventure.
        </h1>
        <p className="mt-5 max-w-2xl font-[family-name:var(--font-serif)] text-lg text-muted">
          Browse the catalog of wearables, tools, and setup pieces that travel with
          each experience. Exact kits are confirmed when you book.
        </p>
      </FadeIn>

      <div className="mt-12 flex flex-wrap gap-3">
        {EXPERIENCES.map((exp) => (
          <span
            key={exp.id}
            className="tracked rounded-full px-4 py-2 text-[10px] text-ink"
            style={{ backgroundColor: exp.accent }}
          >
            {exp.name}
          </span>
        ))}
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INVENTORY.map((item, i) => {
          const accents = item.experienceIds
            .map((id) => EXPERIENCES.find((e) => e.id === id)?.accent)
            .filter(Boolean);
          return (
            <FadeIn key={item.id} delay={(i % 6) * 0.04} className="h-full">
              <li className="flex h-full flex-col border border-ink/10 bg-cream/60 p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="tracked text-[10px] text-muted">{item.category}</p>
                  <div className="flex gap-1">
                    {accents.map((color, idx) => (
                      <span
                        key={`${item.id}-${idx}`}
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-serif)] text-2xl font-semibold text-ink">
                  {item.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <p className="tracked mt-5 text-[10px] text-olive">{item.qtyNote}</p>
              </li>
            </FadeIn>
          );
        })}
      </ul>

      <FadeIn className="mt-14 flex justify-center">
        <Button href="/booking">Book with these kits →</Button>
      </FadeIn>
    </div>
  );
}
