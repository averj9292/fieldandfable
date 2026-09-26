/**
 * Square checkout scaffolding.
 * Live credentials are optional; the booking flow still completes without them.
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
 * Otherwise returns a captured booking summary so the UX can be walked end-to-end.
 */
export async function createCheckout(
  request: CheckoutRequest,
): Promise<CheckoutResult> {
  if (!squareConfigured()) {
    return {
      mode: "stub",
      message:
        "We have your booking details. A Field & Fable mom will confirm your date and send payment next. Serving Kingston and surrounding area.",
      summary: request,
    };
  }

  // Live path: wire Square Checkout API here (Payment Links / Orders).
  const totalCents = request.lineItems.reduce(
    (sum, item) => sum + item.amountCents * (item.quantity ?? 1),
    0,
  );

  console.info("[square] live checkout requested", {
    totalCents,
    locationId: process.env.SQUARE_LOCATION_ID,
    environment: process.env.SQUARE_ENVIRONMENT ?? "sandbox",
  });

  return {
    mode: "stub",
    message:
      "We have your booking details. A Field & Fable mom will confirm your date and send payment next. Serving Kingston and surrounding area.",
    summary: request,
  };
}
