"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 pt-10 md:grid-cols-2 md:gap-14 md:px-10 md:pb-12 md:pt-14">
      <div>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-serif)] text-4xl font-semibold leading-[1.08] text-ink md:text-5xl lg:text-[3.35rem]"
        >
          Curiosity makes the best birthdays.
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md font-[family-name:var(--font-serif)] text-lg leading-relaxed text-muted md:text-xl"
        >
          We deliver, set up, and collect immersive birthday worlds — so kids can
          explore, invent, and wonder while you host the celebration.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <Button href="/#experiences">
            Explore experiences <span aria-hidden>→</span>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep md:aspect-[5/6]">
          <HeroIllustration />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--cream)] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 600" className="h-full w-full" role="img" aria-label="Child explorer with magnifying glass and field tent">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8EDE4" />
          <stop offset="100%" stopColor="#F0E8DF" />
        </linearGradient>
      </defs>
      <rect width="480" height="600" fill="url(#sky)" />
      <path d="M40 420 L240 180 L440 420 Z" fill="#BCC5B1" opacity="0.55" />
      <path d="M70 420 L240 210 L410 420 Z" fill="#F9F8F3" opacity="0.45" />
      <rect x="55" y="420" width="90" height="70" fill="#D9B49D" opacity="0.75" />
      <rect x="160" y="430" width="70" height="55" fill="#A4B8C4" opacity="0.65" />
      <text x="68" y="458" fill="#1A1A1A" opacity="0.45" fontSize="9" letterSpacing="1.5">
        ADVENTURE
      </text>
      <text x="68" y="472" fill="#1A1A1A" opacity="0.45" fontSize="9" letterSpacing="1.5">
        LIVES HERE
      </text>
      <ellipse cx="300" cy="390" rx="70" ry="90" fill="#4A5D45" opacity="0.2" />
      <circle cx="300" cy="300" r="42" fill="#F3E8DF" />
      <path d="M260 350c10 55 30 90 40 110h40c8-30 28-70 36-110" fill="#A4B8C4" opacity="0.85" />
      <circle cx="360" cy="340" r="48" fill="none" stroke="#4A5D45" strokeWidth="6" opacity="0.55" />
      <line x1="395" y1="375" x2="430" y2="415" stroke="#4A5D45" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
      <ellipse cx="355" cy="420" rx="22" ry="30" fill="#BCC5B1" opacity="0.8" />
      <circle cx="355" cy="410" r="6" fill="#4A5D45" opacity="0.5" />
      <text x="250" y="545" fill="#1A1A1A" opacity="0.4" fontSize="11" letterSpacing="2">
        SMALL EXPLORERS,
      </text>
      <text x="250" y="562" fill="#1A1A1A" opacity="0.4" fontSize="11" letterSpacing="2">
        BIG QUESTIONS
      </text>
    </svg>
  );
}
