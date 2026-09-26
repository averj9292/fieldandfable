"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Booking" },
  { href: "/inventory", label: "Inventory" },
  { href: "/contact", label: "Contact" },
];

const MANIFESTO = ["Explore", "Discover", "Create", "Belong"];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header className="relative z-40 px-5 pt-6 md:px-10 md:pt-8">
      <div className="mx-auto flex max-w-6xl items-start justify-between gap-4">
        <div className="hidden w-28 md:block" aria-hidden />

        <div className={`flex flex-1 flex-col items-center ${isHome ? "pt-2" : ""}`}>
          <Logo size={isHome ? "lg" : "md"} showTagline={isHome} />
        </div>

        <div className="flex w-auto flex-col items-end gap-3 md:w-40">
          <button
            type="button"
            className="tracked rounded-full border border-ink/10 bg-cream/70 px-3 py-1.5 text-[10px] text-ink backdrop-blur md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>

          <nav
            aria-label="Primary"
            className="hidden text-right md:block"
          >
            <ul className="space-y-1">
              {MANIFESTO.map((word) => (
                <li key={word}>
                  <span className="tracked text-[10px] font-medium text-muted md:text-[11px]">
                    {word}
                  </span>
                </li>
              ))}
            </ul>
            <div className="ml-auto mt-2 h-px w-10 bg-ink/25" />
          </nav>
        </div>
      </div>

      <nav
        aria-label="Site"
        className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-y border-ink/10 py-3"
      >
        {NAV.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`tracked text-[10px] transition-colors md:text-[11px] ${
                active ? "text-olive" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-5 right-5 top-[4.5rem] z-50 rounded-sm border border-ink/10 bg-cream p-5 shadow-lg md:hidden"
          >
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="tracked text-xs text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
