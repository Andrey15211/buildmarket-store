"use client";

import { CheckoutForm } from "@/components/checkout/checkout-form";
import { useLocale } from "@/i18n/locale-provider";

export default function CheckoutPage() {
  const { dictionary } = useLocale();

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading compact-heading">
          <span>{dictionary.checkout.meta}</span>
          <h1>{dictionary.checkout.title}</h1>
        </div>
        <CheckoutForm />
      </div>
    </section>
  );
}
