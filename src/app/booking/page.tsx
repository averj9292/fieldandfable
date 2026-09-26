import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingWizard } from "@/components/booking/BookingWizard";

export const metadata: Metadata = {
  title: "Booking",
};

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl px-5 py-20 text-center text-muted">
          Loading booking…
        </div>
      }
    >
      <BookingWizard />
    </Suspense>
  );
}
