"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const illustrationY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 48]);
  const washOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 pt-10 md:grid-cols-2 md:gap-14 md:px-10 md:pb-12 md:pt-14"
    >
      <motion.div
        aria-hidden
        style={{ opacity: washOpacity }}
        className="pointer-events-none absolute -left-10 top-0 h-64 w-64 rounded-full bg-sage/20 blur-3xl md:h-80 md:w-80"
      />

      <div className="relative z-[1]">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="tracked mb-4 text-[10px] font-medium text-olive md:text-[11px]"
        >
          Made by moms · {SITE.region}
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-serif)] text-4xl font-semibold leading-[1.08] text-ink md:text-5xl lg:text-[3.35rem]"
        >
          Curiosity makes the best birthdays.
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md font-[family-name:var(--font-serif)] text-lg leading-relaxed text-muted md:text-xl"
        >
          We were tired of the same party formulas. So we built immersive birthday
          worlds that feel unique, look beautiful, and stay simple to set up. We
          deliver, style, and collect across {SITE.region}, so your kids can wonder
          while you actually host.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button href="/#experiences">
            Explore experiences <span aria-hidden>→</span>
          </Button>
          <Button href="/#journey" variant="olive-outline">
            See the journey
          </Button>
        </motion.div>
      </div>

      <motion.div
        style={{ y: illustrationY }}
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[1]"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep md:aspect-[5/6]">
          <div className="absolute inset-0 bg-gradient-to-br from-sage/25 via-transparent to-terracotta/20" />
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
          <stop offset="55%" stopColor="#F0E8DF" />
          <stop offset="100%" stopColor="#EDE6F3" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="glow" cx="65%" cy="45%" r="40%">
          <stop offset="0%" stopColor="#F9F8F3" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F9F8F3" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="600" fill="url(#sky)" />
      <rect width="480" height="600" fill="url(#glow)" />
      <path d="M40 420 L240 180 L440 420 Z" fill="#BCC5B1" opacity="0.55" />
      <path d="M70 420 L240 210 L410 420 Z" fill="#F9F8F3" opacity="0.45" />
      <path d="M220 250 L240 220 L260 250" fill="none" stroke="#4A5D45" strokeWidth="2" opacity="0.35" />
      <rect x="55" y="420" width="90" height="70" fill="#D9B49D" opacity="0.75" />
      <rect x="160" y="430" width="70" height="55" fill="#A4B8C4" opacity="0.65" />
      <rect x="235" y="445" width="40" height="40" fill="#C4B4D4" opacity="0.45" />
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
      <path
        d="M40 520c40-30 90-20 130 0s90 20 140-10 90-10 130 15"
        fill="none"
        stroke="#4A5D45"
        strokeWidth="1"
        opacity="0.15"
      />
      <text x="250" y="545" fill="#1A1A1A" opacity="0.4" fontSize="11" letterSpacing="2">
        SMALL EXPLORERS,
      </text>
      <text x="250" y="562" fill="#1A1A1A" opacity="0.4" fontSize="11" letterSpacing="2">
        BIG QUESTIONS
      </text>
    </svg>
  );
}
