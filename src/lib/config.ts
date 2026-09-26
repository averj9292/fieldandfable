/** Site-wide configurable values. */
export const SITE = {
  name: "Field & Fable",
  tagline: "Immersive birthday experiences for curious kids",
  email: "hello@fieldandfable.com",
  phone: "249-387-0252",
  phoneTel: "2493870252",
  region: "Kingston and surrounding area",
} as const;

/** Refundable damage deposit collected with each booking (cents). */
export const DAMAGE_DEPOSIT_CENTS = Number(
  process.env.NEXT_PUBLIC_DAMAGE_DEPOSIT_CENTS ?? 25000,
);

export const DAMAGE_DEPOSIT_DOLLARS = DAMAGE_DEPOSIT_CENTS / 100;
