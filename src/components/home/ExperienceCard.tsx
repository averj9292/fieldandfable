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
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden"
    >
      <Link href={`/booking?experience=${experience.id}`} className="flex h-full flex-col">
        <div
          className="relative aspect-square overflow-hidden"
          style={{ backgroundColor: experience.accentSoft }}
        >
          <motion.div
            className="h-full w-full"
            whileHover={reduce ? undefined : { scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ExperienceArt id={experience.id} accent={experience.accent} />
          </motion.div>
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
            <dl className="mt-4 grid gap-1.5 text-[11px] leading-snug text-ink/75">
              <div className="flex flex-wrap gap-x-2">
                <dt className="sr-only">Ages</dt>
                <dd>{experience.ages}</dd>
                <span aria-hidden>·</span>
                <dt className="sr-only">Duration</dt>
                <dd>{experience.duration}</dd>
              </div>
              <div>
                <dt className="sr-only">Capacity</dt>
                <dd>{experience.capacity}</dd>
              </div>
              <div>
                <dt className="sr-only">Includes</dt>
                <dd className="opacity-90">{experience.includes.join(" · ")}</dd>
              </div>
            </dl>
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
        <defs>
          <radialGradient id="bugWash" cx="30%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#F9F8F3" stopOpacity="0.55" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <rect width="320" height="320" fill="url(#bugWash)" />
        <rect width="320" height="320" fill={accent} opacity="0.28" />
        <circle cx="160" cy="150" r="54" fill="none" stroke="#1A1A1A" strokeWidth="1.5" opacity="0.45" />
        <ellipse cx="160" cy="150" rx="18" ry="28" fill="#4A5D45" opacity="0.55" />
        <path d="M142 130c-18-22-40-28-52-22" stroke="#1A1A1A" strokeWidth="1.25" fill="none" opacity="0.4" />
        <path d="M178 130c18-22 40-28 52-22" stroke="#1A1A1A" strokeWidth="1.25" fill="none" opacity="0.4" />
        <circle cx="112" cy="220" r="28" fill="#F9F8F3" opacity="0.55" />
        <circle cx="210" cy="235" r="18" fill="#F9F8F3" opacity="0.4" />
        <path d="M40 48h48M40 56h32" stroke="#1A1A1A" strokeWidth="1" opacity="0.2" />
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
        <circle cx="240" cy="70" r="50" fill="#F9F8F3" opacity="0.2" />
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
        <ellipse cx="250" cy="90" r="28" ry="12" fill="#F9F8F3" opacity="0.25" />
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
      <circle cx="250" cy="210" r="6" fill="#F9F8F3" opacity="0.35" />
    </svg>
  );
}
