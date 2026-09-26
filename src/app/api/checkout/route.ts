import { NextResponse } from "next/server";
import { createCheckout, type CheckoutRequest } from "@/lib/square";

export async function POST(request: Request) {
  let body: CheckoutRequest;
  try {
    body = (await request.json()) as CheckoutRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (
    !body.experienceId ||
    !body.experienceName ||
    !body.partyDate ||
    !body.guestEmail ||
    !body.guestName ||
    typeof body.packagePriceCents !== "number" ||
    typeof body.depositCents !== "number"
  ) {
    return NextResponse.json(
      { error: "Missing required booking fields" },
      { status: 400 },
    );
  }

  const lineItems =
    body.lineItems?.length > 0
      ? body.lineItems
      : [
          {
            name: `${body.experienceName} birthday package`,
            amountCents: body.packagePriceCents,
          },
          {
            name: "Refundable damage deposit",
            amountCents: body.depositCents,
            note: "Refunded after successful pickup",
          },
        ];

  const result = await createCheckout({ ...body, lineItems });
  return NextResponse.json(result);
}
