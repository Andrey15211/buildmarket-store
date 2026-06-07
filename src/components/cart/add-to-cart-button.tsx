"use client";

import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/i18n/locale-provider";
import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
  large?: boolean;
}

export function AddToCartButton({ product, large = false }: AddToCartButtonProps) {
  const { dictionary } = useLocale();
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      className={`button button-primary${large ? " button-large" : ""}`}
      type="button"
      onClick={handleAdd}
      disabled={!product.inStock}
    >
      {added ? <Check size={19} /> : <ShoppingCart size={19} />}
      {product.inStock
        ? (added ? dictionary.common.added : dictionary.common.addToCart)
        : dictionary.common.unavailable}
    </button>
  );
}
