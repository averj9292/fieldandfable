"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/config";

const STEPS = [
  {
    n: "01",
    title: "Deliver",
    body: `We bring the full experience to your door in ${SITE.region}: crates, props, and the world they will walk into.`,
    accent: "var(--sage)",
  },
  {
    n: "02",
    title: "Setup",
    body: "While you host, we transform the space. Soft light, stations ready, every detail in place.",
    accent: "var(--blue)",
  },
  {
    n: "03",
    title: "Explore",
    body: "Kids enter the reveal. Dig, decode, mix, observe. Curiosity leads for the whole adventure.",
    accent: "var(--terracotta)",
  },
  {
    n: "04",
    title: "Collect",
    body: "When the celebration settles, we pack and pick up. You keep the memories. We handle the rest.",
    accent: "var(--lavender)",
  },
];

export function RevealJourney({
  eyebrow = "How it unfolds",
  compact = false,
}: {
  eyebrow?: string;
  compact?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <section
      id="journey"
      className={`relative overflow-hidden ${compact ? "py-10 md:py-12" : "py-14 md:py-20"}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 40%, rgba(188,197,177,0.22), transparent 60%), radial-gradient(ellipse 50% 45% at 90% 70%, rgba(196,180,212,0.16), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <SectionLabel>{eyebrow}</SectionLabel>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl font-[family-name:var(--font-serif)] text-3xl font-semibold leading-tight text-ink md:text-4xl"
        >
          From the doorstep to the reveal, then we quietly disappear.
        </motion.h2>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-xl font-[family-name:var(--font-serif)] text-lg text-muted"
        >
          Made by moms who wanted something unique and simple. Serving {SITE.region}.
        </motion.p>

        <ol className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.n}
              initial={reduce ? false : { opacity: 0, y: 36 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.75,
                delay: reduce ? 0 : i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div
                className="journey-wash mb-5 h-1.5 w-14 rounded-full"
                style={{ background: step.accent }}
              />
              <p
                className="font-[family-name:var(--font-serif)] text-5xl font-semibold leading-none text-olive/25 md:text-6xl"
                aria-hidden
              >
                {step.n}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-serif)] text-2xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
