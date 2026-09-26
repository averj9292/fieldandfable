"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Soft botanical corner marks — calm sway, cream/olive atmosphere. */
export function OrganicMarks() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <motion.svg
        viewBox="0 0 200 280"
        className="absolute -left-6 top-[18%] h-44 w-32 text-olive/20 md:left-2 md:h-56 md:w-40"
        initial={reduce ? false : { opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <g className={reduce ? undefined : "mark-sway"}>
          <path
            d="M40 240c8-70 36-130 100-190-8 72-36 132-100 190Z"
            fill="currentColor"
            opacity="0.85"
          />
          <path
            d="M40 240C48 170 28 110 8 60c18 70 28 130 32 180Z"
            fill="currentColor"
            opacity="0.45"
          />
          <path
            d="M40 240V90"
            stroke="currentColor"
            strokeWidth="1.25"
            opacity="0.35"
          />
        </g>
      </motion.svg>

      <motion.svg
        viewBox="0 0 200 280"
        className="absolute -right-4 top-[42%] h-40 w-28 text-sage/40 md:right-4 md:h-52 md:w-36"
        initial={reduce ? false : { opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <g className={reduce ? undefined : "mark-sway-delay"}>
          <path
            d="M160 250c-10-75-40-140-110-200 10 78 42 138 110 200Z"
            fill="currentColor"
            opacity="0.7"
          />
          <path
            d="M160 250c-6-65 8-120 28-175-20 72-28 128-28 175Z"
            fill="currentColor"
            opacity="0.4"
          />
        </g>
      </motion.svg>

      <div className="atmosphere-orb absolute left-[8%] top-[70%] h-40 w-40 rounded-full bg-terracotta/10 blur-3xl md:h-56 md:w-56" />
      <div className="atmosphere-orb-delay absolute right-[12%] top-[22%] h-36 w-36 rounded-full bg-blue/15 blur-3xl md:h-48 md:w-48" />
    </div>
  );
}
