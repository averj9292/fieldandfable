"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/config";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
      <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <SectionLabel>Say hello</SectionLabel>
          <h1 className="mt-8 font-[family-name:var(--font-serif)] text-4xl font-semibold text-ink md:text-5xl">
            Tell us about the birthday.
          </h1>
          <p className="mt-5 max-w-md font-[family-name:var(--font-serif)] text-lg text-muted">
            Questions about dates, guest counts, or a custom setup? Send a note.
            We are moms in {SITE.region}, and we usually reply within one business
            day.
          </p>
          <dl className="mt-10 space-y-4 text-sm text-muted">
            <div>
              <dt className="tracked text-[10px] text-olive">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${SITE.email}`} className="hover:text-ink">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="tracked text-[10px] text-olive">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-ink">
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="tracked text-[10px] text-olive">Service area</dt>
              <dd className="mt-1">{SITE.region}</dd>
            </div>
          </dl>
        </FadeIn>

        <FadeIn delay={0.1}>
          {sent ? (
            <div className="border border-olive/25 bg-sage/30 p-8">
              <p className="tracked text-[10px] text-olive">Received</p>
              <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl font-semibold text-ink">
                Thank you. We will be in touch.
              </h2>
              <p className="mt-3 text-sm text-muted">
                Prefer to talk it through? Call or text{" "}
                <a href={`tel:${SITE.phoneTel}`} className="text-olive underline-offset-2 hover:underline">
                  {SITE.phone}
                </a>
                .
              </p>
              <div className="mt-6">
                <Button href="/booking">Or book now →</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5 border border-ink/10 bg-cream/50 p-6 md:p-8">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Party date (optional)" name="date" type="date" />
              <label className="block">
                <span className="tracked text-[10px] text-muted">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full border border-ink/15 bg-cream px-3 py-3 text-sm text-ink outline-none focus:border-olive"
                />
              </label>
              <Button type="submit" className="w-full md:w-auto">
                Send inquiry →
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="tracked text-[10px] text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-ink/15 bg-cream px-3 py-3 text-sm text-ink outline-none focus:border-olive"
      />
    </label>
  );
}
