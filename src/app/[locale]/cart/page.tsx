"use client";

import { CartView } from "@/components/cart/cart-view";
import { useLocale } from "@/i18n/locale-provider";

export default function CartPage() {
  const { dictionary } = useLocale();

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading compact-heading">
          <span>{dictionary.cart.meta}</span>
          <h1>{dictionary.cart.title}</h1>
        </div>
        <CartView />
      </div>
    </section>
  );
}
