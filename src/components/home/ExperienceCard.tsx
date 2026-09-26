"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Experience } from "@/lib/experiences";

export function ExperienceCard({
  experience,
  index = 0,
}: {
  experience: Experience;
  index?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden"
    >
      <Link href={`/booking?experience=${experience.id}`} className="flex h-full flex-col">
        <div
          className="relative aspect-square overflow-hidden"
          style={{ backgroundColor: experience.accentSoft }}
        >
          <ExperienceArt id={experience.id} accent={experience.accent} />
          <motion.div
            className="absolute inset-0"
            whileHover={reduce ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div
          className="flex flex-1 flex-col justify-between gap-4 p-5 text-ink"
          style={{ backgroundColor: experience.accent }}
        >
          <div>
            <h3 className="font-[family-name:var(--font-serif)] text-2xl font-semibold leading-tight md:text-[1.65rem]">
              {experience.name}
            </h3>
            <p className="tracked mt-2 text-[10px] font-medium opacity-80">
              {experience.verbs}
            </p>
          </div>
          <span
            aria-hidden
            className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 text-sm transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function ExperienceArt({ id, accent }: { id: string; accent: string }) {
  if (id === "bug-lab") {
    return (
      <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden>
        <rect width="320" height="320" fill={accent} opacity="0.35" />
        <circle cx="160" cy="150" r="54" fill="none" stroke="#1A1A1A" strokeWidth="1.5" opacity="0.45" />
        <ellipse cx="160" cy="150" rx="18" ry="28" fill="#4A5D45" opacity="0.55" />
        <path d="M142 130c-18-22-40-28-52-22" stroke="#1A1A1A" strokeWidth="1.25" fill="none" opacity="0.4" />
        <path d="M178 130c18-22 40-28 52-22" stroke="#1A1A1A" strokeWidth="1.25" fill="none" opacity="0.4" />
        <circle cx="112" cy="220" r="28" fill="#F9F8F3" opacity="0.55" />
        <circle cx="210" cy="235" r="18" fill="#F9F8F3" opacity="0.4" />
        <text x="40" y="48" fill="#1A1A1A" opacity="0.35" fontSize="11" letterSpacing="2">
          FIELD NOTES
        </text>
      </svg>
    );
  }
  if (id === "spy-academy") {
    return (
      <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden>
        <rect width="320" height="320" fill={accent} opacity="0.35" />
        <rect x="70" y="70" width="180" height="180" fill="none" stroke="#1A1A1A" strokeWidth="1.25" opacity="0.35" />
        <circle cx="160" cy="150" r="36" fill="none" stroke="#1A1A1A" strokeWidth="1.5" opacity="0.5" />
        <circle cx="160" cy="150" r="10" fill="#4A5D45" opacity="0.55" />
        <path d="M90 250h140M110 262h100" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
        <text x="88" y="55" fill="#1A1A1A" opacity="0.35" fontSize="11" letterSpacing="3">
          CLASSIFIED
        </text>
      </svg>
    );
  }
  if (id === "dino-dig") {
    return (
      <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden>
        <rect width="320" height="320" fill={accent} opacity="0.4" />
        <path
          d="M40 230c30-40 70-55 110-40 25 10 40 8 60-10 30-28 60-20 80 10v70H40z"
          fill="#4A5D45"
          opacity="0.25"
        />
        <path
          d="M120 180l18-8 12 22-20 10zM168 165l22-4 6 24-24 8zM210 178l16 6-4 20-18-2z"
          fill="#F9F8F3"
          opacity="0.7"
        />
        <line x1="90" y1="120" x2="70" y2="210" stroke="#1A1A1A" strokeWidth="1.5" opacity="0.4" />
        <circle cx="68" cy="214" r="6" fill="#1A1A1A" opacity="0.35" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden>
      <rect width="320" height="320" fill={accent} opacity="0.35" />
      <ellipse cx="160" cy="165" rx="48" ry="62" fill="#F9F8F3" opacity="0.45" />
      <path
        d="M160 110c20 20 28 40 28 55s-12 35-28 55c-16-20-28-40-28-55s8-35 28-55z"
        fill="#4A5D45"
        opacity="0.35"
      />
      <circle cx="120" cy="90" r="10" fill="#F9F8F3" opacity="0.55" />
      <circle cx="230" cy="120" r="14" fill="#F9F8F3" opacity="0.4" />
      <circle cx="90" cy="200" r="8" fill="#F9F8F3" opacity="0.5" />
    </svg>
  );
}
