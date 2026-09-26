"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

export function RequestSetupForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <FadeIn
      id="request-setup"
      className="mt-16 scroll-mt-24 border border-ink/10 bg-cream/60 p-6 md:p-10"
    >
      <p className="tracked text-[10px] text-olive">Something else in mind?</p>
      <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-serif)] text-3xl font-semibold text-ink md:text-4xl">
        Request a different setup
      </h2>
      <p className="mt-4 max-w-2xl font-[family-name:var(--font-serif)] text-lg leading-relaxed text-muted">
        We started Field &amp; Fable because the same party formulas got tired
        fast. If you do not see the world you are dreaming up, tell us. Unique
        and simple to set up is exactly our love language, mom to mom.
      </p>

      {sent ? (
        <div className="mt-8 border border-olive/25 bg-sage/25 p-6">
          <p className="tracked text-[10px] text-olive">Request received</p>
          <h3 className="mt-3 font-[family-name:var(--font-serif)] text-2xl font-semibold text-ink">
            Thank you. We will be in touch soon.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            We serve {SITE.region}. Call or text{" "}
            <a href={`tel:${SITE.phoneTel}`} className="text-olive underline-offset-2 hover:underline">
              {SITE.phone}
            </a>{" "}
            if you want to chat through ideas sooner.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/booking">Book a listed experience →</Button>
            <Button href="/contact" variant="olive-outline">
              Contact us
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="block md:col-span-1">
            <span className="tracked text-[10px] text-muted">Your name</span>
            <input
              name="name"
              required
              className="mt-2 w-full border border-ink/15 bg-cream px-3 py-3 text-sm text-ink outline-none focus:border-olive"
            />
          </label>
          <label className="block md:col-span-1">
            <span className="tracked text-[10px] text-muted">Email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full border border-ink/15 bg-cream px-3 py-3 text-sm text-ink outline-none focus:border-olive"
            />
          </label>
          <label className="block md:col-span-1">
            <span className="tracked text-[10px] text-muted">Phone (optional)</span>
            <input
              name="phone"
              type="tel"
              placeholder={SITE.phone}
              className="mt-2 w-full border border-ink/15 bg-cream px-3 py-3 text-sm text-ink outline-none focus:border-olive"
            />
          </label>
          <label className="block md:col-span-1">
            <span className="tracked text-[10px] text-muted">Preferred party date</span>
            <input
              name="date"
              type="date"
              className="mt-2 w-full border border-ink/15 bg-cream px-3 py-3 text-sm text-ink outline-none focus:border-olive"
            />
          </label>
          <label className="block md:col-span-2">
            <span className="tracked text-[10px] text-muted">
              What setup are you hoping for?
            </span>
            <textarea
              name="request"
              required
              rows={5}
              placeholder="Theme, ages, guest count, space (yard, basement, garage), and anything that makes this birthday feel like them…"
              className="mt-2 w-full border border-ink/15 bg-cream px-3 py-3 text-sm text-ink outline-none focus:border-olive"
            />
          </label>
          <div className="md:col-span-2">
            <Button type="submit">Send setup request →</Button>
            <p className="mt-3 text-xs text-muted">
              Serving {SITE.region}. We will reply within one business day.
            </p>
          </div>
        </form>
      )}
    </FadeIn>
  );
}
