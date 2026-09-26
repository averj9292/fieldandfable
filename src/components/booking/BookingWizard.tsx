"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCES, formatUsd, getExperience } from "@/lib/experiences";
import { DAMAGE_DEPOSIT_CENTS, DAMAGE_DEPOSIT_DOLLARS, SITE } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/motion/FadeIn";

type CheckoutResult = {
  mode: "stub" | "live";
  message?: string;
  checkoutUrl?: string;
  summary?: {
    experienceName: string;
    partyDate: string;
    packagePriceCents: number;
    depositCents: number;
    guestName: string;
    guestEmail: string;
  };
};

export function BookingWizard() {
  const params = useSearchParams();
  const initial = getExperience(params.get("experience"))?.id ?? "";

  const [experienceId, setExperienceId] = useState(initial);
  const [partyDate, setPartyDate] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [depositCents] = useState(DAMAGE_DEPOSIT_CENTS);
  const [step, setStep] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CheckoutResult | null>(null);

  const experience = useMemo(
    () => getExperience(experienceId),
    [experienceId],
  );

  const packageCents = experience?.packagePriceCents ?? 0;
  const totalCents = packageCents + depositCents;

  async function checkout() {
    if (!experience) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          experienceId: experience.id,
          experienceName: experience.name,
          partyDate,
          guestName,
          guestEmail,
          packagePriceCents: packageCents,
          depositCents,
          lineItems: [
            {
              name: `${experience.name} birthday package`,
              amountCents: packageCents,
            },
            {
              name: "Refundable damage deposit",
              amountCents: depositCents,
              note: "Covers damage to items; refunded after successful pickup",
            },
          ],
        }),
      });
      const data = (await res.json()) as CheckoutResult & { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Checkout failed");
        return;
      }
      if (data.mode === "live" && data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }
      setResult(data);
      setStep(3);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
      <FadeIn>
        <SectionLabel>Book an experience</SectionLabel>
        <h1 className="mt-8 max-w-3xl font-[family-name:var(--font-serif)] text-4xl font-semibold text-ink md:text-5xl">
          Choose the adventure. We handle the rest.
        </h1>
        <p className="mt-5 max-w-2xl font-[family-name:var(--font-serif)] text-lg text-muted">
          Made by moms who wanted birthdays that feel unique and stay simple.
          We deliver across {SITE.region}. Package price plus a ${DAMAGE_DEPOSIT_DOLLARS}{" "}
          damage deposit that covers damage to items and is refunded after a
          successful pickup.
        </p>
        <p className="mt-3 text-sm text-muted">
          Questions? Call or text{" "}
          <a href={`tel:${SITE.phoneTel}`} className="text-olive underline-offset-2 hover:underline">
            {SITE.phone}
          </a>
          .
        </p>
      </FadeIn>

      <ol className="mt-10 flex flex-wrap gap-4">
        {["Experience", "Details", "Review", "Checkout"].map((label, i) => (
          <li
            key={label}
            className={`tracked text-[10px] ${
              i === step ? "text-olive" : i < step ? "text-ink" : "text-muted"
            }`}
          >
            0{i + 1} {label}
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="min-h-[28rem] border border-ink/10 bg-cream/50 p-5 md:p-8">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <Step key="s0">
                <h2 className="font-[family-name:var(--font-serif)] text-2xl font-semibold">
                  Select an experience
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {EXPERIENCES.map((exp) => {
                    const active = exp.id === experienceId;
                    return (
                      <button
                        key={exp.id}
                        type="button"
                        onClick={() => setExperienceId(exp.id)}
                        className={`border p-4 text-left transition ${
                          active
                            ? "border-olive ring-1 ring-olive"
                            : "border-ink/10 hover:border-ink/25"
                        }`}
                        style={{
                          backgroundColor: active ? exp.accentSoft : "transparent",
                        }}
                      >
                        <span
                          className="mb-3 block h-2 w-full"
                          style={{ backgroundColor: exp.accent }}
                        />
                        <span className="font-[family-name:var(--font-serif)] text-xl font-semibold">
                          {exp.name}
                        </span>
                        <span className="mt-2 block text-xs text-muted">
                          {exp.ages} · {exp.duration} · {formatUsd(exp.packagePriceCents)}
                        </span>
                        <span className="mt-1 block text-[11px] text-muted/80">
                          {exp.capacity} · {exp.includes.slice(0, 2).join(" · ")}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-6 text-xs text-muted">
                  Looking for something else?{" "}
                  <a href="/inventory#request-setup" className="text-olive underline-offset-2 hover:underline">
                    Request a different setup
                  </a>
                  .
                </p>
                <div className="mt-8 flex justify-end">
                  <Button
                    disabled={!experienceId}
                    onClick={() => setStep(1)}
                  >
                    Continue →
                  </Button>
                </div>
              </Step>
            ) : null}

            {step === 1 ? (
              <Step key="s1">
                <h2 className="font-[family-name:var(--font-serif)] text-2xl font-semibold">
                  Party details
                </h2>
                <div className="mt-6 grid gap-4">
                  <label className="block">
                    <span className="tracked text-[10px] text-muted">Party date</span>
                    <input
                      type="date"
                      required
                      value={partyDate}
                      onChange={(e) => setPartyDate(e.target.value)}
                      className="mt-2 w-full border border-ink/15 bg-cream px-3 py-3 text-sm outline-none focus:border-olive"
                    />
                  </label>
                  <label className="block">
                    <span className="tracked text-[10px] text-muted">Your name</span>
                    <input
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="mt-2 w-full border border-ink/15 bg-cream px-3 py-3 text-sm outline-none focus:border-olive"
                    />
                  </label>
                  <label className="block">
                    <span className="tracked text-[10px] text-muted">Email</span>
                    <input
                      type="email"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="mt-2 w-full border border-ink/15 bg-cream px-3 py-3 text-sm outline-none focus:border-olive"
                    />
                  </label>
                  <div className="border border-ink/10 bg-cream p-4">
                    <p className="tracked text-[10px] text-olive">Damage deposit</p>
                    <p className="mt-2 font-[family-name:var(--font-serif)] text-2xl font-semibold text-ink">
                      {formatUsd(depositCents)}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      This deposit covers damage to items in the experience kit.
                      It is refunded after kits are picked up in good condition.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between gap-3">
                  <Button variant="ghost" onClick={() => setStep(0)}>
                    ← Back
                  </Button>
                  <Button
                    disabled={!partyDate || !guestName || !guestEmail}
                    onClick={() => setStep(2)}
                  >
                    Review →
                  </Button>
                </div>
              </Step>
            ) : null}

            {step === 2 ? (
              <Step key="s2">
                <h2 className="font-[family-name:var(--font-serif)] text-2xl font-semibold">
                  Review &amp; pay
                </h2>
                <p className="mt-3 text-sm text-muted">
                  Double-check the details. We serve {SITE.region}.
                </p>
                <dl className="mt-6 space-y-3 border border-ink/10 p-5 text-sm">
                  <Row label="Experience" value={experience?.name ?? "–"} />
                  <Row label="Date" value={partyDate || "–"} />
                  <Row label="Guest" value={`${guestName} · ${guestEmail}`} />
                  <Row label="Package" value={formatUsd(packageCents)} />
                  <Row
                    label="Damage deposit (covers item damage)"
                    value={formatUsd(depositCents)}
                  />
                  <div className="hairline my-2" />
                  <Row label="Total due today" value={formatUsd(totalCents)} strong />
                </dl>
                {error ? (
                  <p className="mt-4 text-sm text-red-700" role="alert">
                    {error}
                  </p>
                ) : null}
                <div className="mt-8 flex justify-between gap-3">
                  <Button variant="ghost" onClick={() => setStep(1)}>
                    ← Back
                  </Button>
                  <Button onClick={checkout} disabled={busy}>
                    {busy ? "Starting checkout…" : "Continue to checkout →"}
                  </Button>
                </div>
              </Step>
            ) : null}

            {step === 3 && result ? (
              <Step key="s3">
                <p className="tracked text-[10px] text-olive">Request received</p>
                <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl font-semibold">
                  We cannot wait for this birthday.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {result.message}
                </p>
                {result.summary ? (
                  <dl className="mt-6 space-y-2 border border-olive/20 bg-sage/20 p-5 text-sm">
                    <Row label="Experience" value={result.summary.experienceName} />
                    <Row label="Date" value={result.summary.partyDate} />
                    <Row
                      label="Package + deposit"
                      value={`${formatUsd(result.summary.packagePriceCents)} + ${formatUsd(result.summary.depositCents)}`}
                    />
                  </dl>
                ) : null}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    variant="olive-outline"
                    onClick={() => {
                      setResult(null);
                      setStep(0);
                    }}
                  >
                    Book another
                  </Button>
                  <Button href="/contact">Questions? Contact us</Button>
                </div>
              </Step>
            ) : null}
          </AnimatePresence>
        </div>

        <aside className="h-fit border border-ink/10 bg-cream/70 p-6">
          <p className="tracked text-[10px] text-muted">Order summary</p>
          {experience ? (
            <>
              <div
                className="mt-4 h-1.5 w-full"
                style={{ backgroundColor: experience.accent }}
              />
              <h3 className="mt-4 font-[family-name:var(--font-serif)] text-3xl font-semibold">
                {experience.name}
              </h3>
              <p className="tracked mt-2 text-[10px] text-muted">
                {experience.verbs}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {experience.blurb}
              </p>
              <p className="mt-4 text-xs text-muted">
                {experience.ages} · {experience.duration} · {experience.capacity}
              </p>
              <p className="mt-1 text-[11px] text-muted/80">
                Includes {experience.includes.join(" · ")}
              </p>
            </>
          ) : (
            <p className="mt-4 font-[family-name:var(--font-serif)] text-xl text-muted">
              Select an experience to see pricing.
            </p>
          )}
          <div className="mt-6 space-y-2 text-sm">
            <Row label="Package" value={experience ? formatUsd(packageCents) : "–"} />
            <Row label="Deposit" value={formatUsd(depositCents)} />
            <div className="hairline my-2" />
            <Row label="Total" value={formatUsd(totalCents)} strong />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            The damage deposit covers damage to items. It is refunded after kits
            are picked up in good condition. Serving {SITE.region}.
          </p>
        </aside>
      </div>
    </div>
  );
}

function Step({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className={`text-muted ${strong ? "font-medium text-ink" : ""}`}>
        {label}
      </dt>
      <dd
        className={`text-right ${
          strong
            ? "font-[family-name:var(--font-serif)] text-xl font-semibold text-ink"
            : "text-ink"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
