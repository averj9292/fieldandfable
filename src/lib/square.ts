/**
 * Square checkout scaffolding.
 * Live credentials are optional — the booking flow demos without them.
 *
 * Env placeholders (set in Vercel Hobby / local `.env.local`):
 * - SQUARE_ACCESS_TOKEN
 * - SQUARE_LOCATION_ID
 * - SQUARE_ENVIRONMENT = sandbox | production
 * - NEXT_PUBLIC_SQUARE_APPLICATION_ID (Web Payments SDK, later)
 */

export type CheckoutLineItem = {
  name: string;
  amountCents: number;
  quantity?: number;
  note?: string;
};

export type CheckoutRequest = {
  experienceId: string;
  experienceName: string;
  partyDate: string;
  guestEmail: string;
  guestName: string;
  packagePriceCents: number;
  depositCents: number;
  lineItems: CheckoutLineItem[];
};

export type CheckoutResult =
  | {
      mode: "live";
      checkoutUrl: string;
      orderId: string;
    }
  | {
      mode: "stub";
      message: string;
      summary: CheckoutRequest;
    };

export function squareConfigured() {
  return Boolean(
    process.env.SQUARE_ACCESS_TOKEN && process.env.SQUARE_LOCATION_ID,
  );
}

/**
 * Creates a Square Checkout (Payment Link) when credentials exist.
 * Otherwise returns a demo stub payload so the UX can be walked end-to-end.
 */
export async function createCheckout(
  request: CheckoutRequest,
): Promise<CheckoutResult> {
  if (!squareConfigured()) {
    return {
      mode: "stub",
      message:
        "Square credentials are not configured. Booking summary captured for demo — add SQUARE_ACCESS_TOKEN and SQUARE_LOCATION_ID to enable live checkout.",
      summary: request,
    };
  }

  // Live path: wire Square Checkout API here (Payment Links / Orders).
  // Kept as a clear extension point without requiring the SDK until keys exist.
  const totalCents = request.lineItems.reduce(
    (sum, item) => sum + item.amountCents * (item.quantity ?? 1),
    0,
  );

  // Placeholder for real API call — fail soft with structured guidance.
  console.info("[square] live checkout requested", {
    totalCents,
    locationId: process.env.SQUARE_LOCATION_ID,
    environment: process.env.SQUARE_ENVIRONMENT ?? "sandbox",
  });

  return {
    mode: "stub",
    message:
      "Square env vars are present, but the live Checkout API call is not wired yet. Replace createCheckout() with Square Payment Links / Orders.",
    summary: request,
  };
}
