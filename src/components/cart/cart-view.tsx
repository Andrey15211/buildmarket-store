"use client";

import {Link} from "@/i18n/navigation";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ProductVisual } from "@/components/products/product-visual";
import { localizeProduct } from "@/data/product-translations";
import { useLocale } from "@/i18n/locale-provider";
import { calculateDelivery, formatPrice, FREE_DELIVERY_THRESHOLD } from "@/lib/pricing";
import { useCartStore } from "@/store/cart-store";

export function CartView() {
  const { dictionary, locale } = useLocale();
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="loading-state">{dictionary.cart.loading}</div>;
  }

  if (items.length === 0) {
    return (
      <div className="empty-state cart-empty">
        <ShoppingCart size={48} />
        <h2>{dictionary.cart.emptyTitle}</h2>
        <p>{dictionary.cart.emptyText}</p>
        <Link className="button button-primary" href="/catalog">{dictionary.home.goCatalog}</Link>
      </div>
    );
  }

  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const delivery = calculateDelivery(subtotal);
  const total = subtotal + delivery;

  return (
    <div className="cart-layout">
      <div className="cart-items">
        {items.map(({ product, quantity }) => {
          const displayProduct = localizeProduct(product, locale);
          return (
          <article className="cart-item" key={product.id}>
            <div className="cart-item-visual">
              <ProductVisual category={product.category} name={displayProduct.name} />
            </div>
            <div className="cart-item-info">
              <Link href={`/product/${product.slug}`}>{displayProduct.name}</Link>
              <span>{formatPrice(product.price)} / {displayProduct.unit}</span>
              <button type="button" onClick={() => removeItem(product.id)}>
                <Trash2 size={16} />
                {dictionary.cart.remove}
              </button>
            </div>
            <div className="quantity-control" aria-label={displayProduct.name}>
              <button
                type="button"
                aria-label={dictionary.cart.decrease}
                onClick={() => updateQuantity(product.id, quantity - 1)}
              >
                <Minus size={17} />
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                aria-label={dictionary.cart.increase}
                onClick={() => updateQuantity(product.id, quantity + 1)}
              >
                <Plus size={17} />
              </button>
            </div>
            <strong className="cart-line-total">{formatPrice(product.price * quantity)}</strong>
          </article>
          );
        })}
      </div>
      <aside className="order-summary">
        <h2>{dictionary.cart.order}</h2>
        <div><span>{dictionary.cart.products}</span><strong>{formatPrice(subtotal)}</strong></div>
        <div><span>{dictionary.cart.delivery}</span><strong>{delivery === 0 ? dictionary.cart.free : formatPrice(delivery)}</strong></div>
        {subtotal < FREE_DELIVERY_THRESHOLD ? (
          <p>{dictionary.cart.freeLeft.replace("{amount}", formatPrice(FREE_DELIVERY_THRESHOLD - subtotal))}</p>
        ) : (
          <p className="summary-success">{dictionary.cart.freeReached}</p>
        )}
        <div className="summary-total"><span>{dictionary.cart.total}</span><strong>{formatPrice(total)}</strong></div>
        <Link className="button button-primary button-large" href="/checkout">
          {dictionary.cart.checkout}
        </Link>
        <span className="summary-note">{dictionary.cart.manager}</span>
      </aside>
    </div>
  );
}
