"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import {Link} from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { localizeProduct } from "@/data/product-translations";
import { useLocale } from "@/i18n/locale-provider";
import { createCheckoutSchema, type CheckoutFormValues } from "@/lib/checkout";
import { calculateDelivery, formatPrice } from "@/lib/pricing";
import { useCartStore } from "@/store/cart-store";

export function CheckoutForm() {
  const { dictionary, locale } = useLocale();
  const [mounted, setMounted] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(createCheckoutSchema(locale)),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      deliveryType: "delivery",
      comment: "",
    },
  });

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="loading-state">{dictionary.checkout.loading}</div>;

  if (orderNumber) {
    return (
      <div className="checkout-success">
        <CheckCircle2 size={58} />
        <span>{dictionary.checkout.accepted}</span>
        <h2>{dictionary.checkout.thanks}</h2>
        <p>{dictionary.checkout.request.replace("{number}", orderNumber)}</p>
        <Link className="button button-primary" href="/catalog">{dictionary.checkout.back}</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <h2>{dictionary.checkout.emptyTitle}</h2>
        <p>{dictionary.checkout.emptyText}</p>
        <Link className="button button-primary" href="/catalog">{dictionary.home.goCatalog}</Link>
      </div>
    );
  }

  const deliveryType = watch("deliveryType");
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const delivery = deliveryType === "pickup" ? 0 : calculateDelivery(subtotal);

  async function onSubmit() {
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    setOrderNumber(`BM-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`);
    clearCart();
  }

  return (
    <div className="checkout-layout">
      <form className="checkout-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <section className="form-section">
          <div className="form-section-number">01</div>
          <div className="form-section-content">
            <h2>{dictionary.checkout.contact}</h2>
            <div className="form-grid">
              <label className="field">
                <span>{dictionary.checkout.name}</span>
                <input autoComplete="name" {...register("name")} placeholder={dictionary.checkout.namePlaceholder} />
                {errors.name ? <small className="field-error">{errors.name.message}</small> : null}
              </label>
              <label className="field">
                <span>{dictionary.checkout.phone}</span>
                <input autoComplete="tel" {...register("phone")} placeholder="+7 999 123-45-67" />
                {errors.phone ? <small className="field-error">{errors.phone.message}</small> : null}
              </label>
            </div>
          </div>
        </section>
        <section className="form-section">
          <div className="form-section-number">02</div>
          <div className="form-section-content">
            <h2>{dictionary.checkout.deliveryMethod}</h2>
            <div className="delivery-options">
              <label>
                <input type="radio" value="delivery" {...register("deliveryType")} />
                <span><strong>{dictionary.checkout.courier}</strong><small>{dictionary.checkout.courierText}</small></span>
              </label>
              <label>
                <input type="radio" value="pickup" {...register("deliveryType")} />
                <span><strong>{dictionary.checkout.pickup}</strong><small>{dictionary.checkout.pickupText}</small></span>
              </label>
            </div>
            {deliveryType === "delivery" ? (
              <label className="field">
                <span>{dictionary.checkout.address}</span>
                <input autoComplete="street-address" {...register("address")} placeholder={dictionary.checkout.addressPlaceholder} />
                {errors.address ? <small className="field-error">{errors.address.message}</small> : null}
              </label>
            ) : (
              <input type="hidden" {...register("address")} />
            )}
          </div>
        </section>
        <section className="form-section">
          <div className="form-section-number">03</div>
          <div className="form-section-content">
            <h2>{dictionary.checkout.comment}</h2>
            <label className="field">
              <span>{dictionary.checkout.commentLabel}</span>
              <textarea {...register("comment")} rows={5} placeholder={dictionary.checkout.commentPlaceholder} />
              {errors.comment ? <small className="field-error">{errors.comment.message}</small> : null}
            </label>
          </div>
        </section>
        <button className="button button-primary button-large checkout-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? dictionary.checkout.submitting : dictionary.checkout.submit}
        </button>
      </form>
      <aside className="order-summary checkout-summary">
        <h2>{dictionary.checkout.composition}</h2>
        <div className="checkout-product-list">
          {items.map((item) => {
            const displayProduct = localizeProduct(item.product, locale);
            return (
            <p key={item.product.id}>
              <span>{displayProduct.name} × {item.quantity}</span>
              <strong>{formatPrice(item.product.price * item.quantity)}</strong>
            </p>
            );
          })}
        </div>
        <div><span>{dictionary.cart.products}</span><strong>{formatPrice(subtotal)}</strong></div>
        <div><span>{deliveryType === "pickup" ? dictionary.checkout.pickup : dictionary.checkout.courier}</span><strong>{delivery === 0 ? dictionary.cart.free : formatPrice(delivery)}</strong></div>
        <div className="summary-total"><span>{dictionary.checkout.payment}</span><strong>{formatPrice(subtotal + delivery)}</strong></div>
      </aside>
    </div>
  );
}
