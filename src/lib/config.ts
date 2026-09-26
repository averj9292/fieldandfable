/** Site-wide configurable values. */
export const SITE = {
  name: "Field & Fable",
  tagline: "Immersive birthday experiences for curious kids",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://fieldandfable.ca",
  urlHost: "fieldandfable.ca",
  email: "hello@fieldandfable.ca",
  phone: "249-387-0252",
  phoneTel: "2493870252",
  region: "Kingston and surrounding area",
} as const;

const DEFAULT_DAMAGE_DEPOSIT_CENTS = 25000;

/** Parse deposit cents from env; empty/NaN/non-positive → $250 default. */
function parseDamageDepositCents(raw: string | undefined): number {
  const trimmed = raw?.trim();
  if (!trimmed) return DEFAULT_DAMAGE_DEPOSIT_CENTS;
  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed) || parsed <= 0) return DEFAULT_DAMAGE_DEPOSIT_CENTS;
  return parsed;
}

/** Refundable damage deposit collected with each booking (cents). */
export const DAMAGE_DEPOSIT_CENTS = parseDamageDepositCents(
  process.env.NEXT_PUBLIC_DAMAGE_DEPOSIT_CENTS,
);

export const DAMAGE_DEPOSIT_DOLLARS = DAMAGE_DEPOSIT_CENTS / 100;
