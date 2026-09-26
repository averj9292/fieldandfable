"use client";

import { FadeIn } from "@/components/motion/FadeIn";

const SERVICES = [
  {
    label: "Local delivery",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
        <path d="M6 30h26v-12h-10l-4-6H6v18z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 24h6l4 6v6h-10v-12z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="36" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="34" cy="36" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Setup",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
        <path d="M8 36 L24 12 L40 36 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 36v-8h16v8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Pickup",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
        <rect x="10" y="16" width="28" height="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 22h28M24 16v20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 16v-4h12v4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function ServiceStrip() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-10 md:px-10 md:py-14">
      <FadeIn>
        <ul className="grid grid-cols-3 gap-6 text-center">
          {SERVICES.map((service) => (
            <li key={service.label} className="flex flex-col items-center gap-3 text-olive">
              {service.icon}
              <span className="tracked text-[10px] font-medium text-muted md:text-[11px]">
                {service.label}
              </span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
