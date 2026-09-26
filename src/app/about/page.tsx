import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealJourney } from "@/components/home/RevealJourney";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
};

const VALUES = [
  {
    title: "Wonder over spectacle",
    body: "Experiences are built for curiosity: tools to touch, questions to chase, stories to finish.",
  },
  {
    title: "Host-light by design",
    body: "We deliver, set up, and pick up. You get the birthday magic without the logistics maze.",
  },
  {
    title: "A brighter childhood",
    body: "Screen-light adventures that leave kids muddy-handed, proud, and writing in their field journals.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
        <FadeIn>
          <SectionLabel>Our story</SectionLabel>
          <h1 className="mt-8 max-w-3xl font-[family-name:var(--font-serif)] text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Built by moms, for kids who ask better questions.
          </h1>
          <p className="mt-6 max-w-2xl font-[family-name:var(--font-serif)] text-xl leading-relaxed text-muted">
            Field &amp; Fable started around kitchen tables in {SITE.region}. We
            were tired of the same party formulas and wanted something unique that
            still felt simple to set up. So we craft immersive worlds (Bug Lab, Spy
            Academy, Dino Dig, Potion Lab) and bring them to your door, mom to mom,
            so curiosity can take the lead.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Serving {SITE.region}. Call or text{" "}
            <a href={`tel:${SITE.phoneTel}`} className="text-olive underline-offset-2 hover:underline">
              {SITE.phone}
            </a>
            . Find us at{" "}
            <a href={SITE.url} className="text-olive underline-offset-2 hover:underline">
              {SITE.urlHost}
            </a>
            .
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.08}>
              <p className="tracked text-[10px] text-olive">0{i + 1}</p>
              <h2 className="mt-3 font-[family-name:var(--font-serif)] text-2xl font-semibold text-ink">
                {value.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>

      <RevealJourney eyebrow="The Field & Fable rhythm" compact />

      <div className="mx-auto max-w-6xl px-5 pb-12 md:px-10 md:pb-16">
        <FadeIn className="border-y border-ink/10 py-12 text-center">
          <p className="tracked text-xs text-muted md:text-sm">
            More than a party. A brighter kind of childhood.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/booking">Plan a birthday →</Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
