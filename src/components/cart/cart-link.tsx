"use client";

import {Link} from "@/i18n/navigation";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/locale-provider";
import { useCartStore } from "@/store/cart-store";

export function CartLink() {
  const { dictionary } = useLocale();
  const [mounted, setMounted] = useState(false);
  const count = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

  useEffect(() => setMounted(true), []);

  return (
    <Link className="header-cart" href="/cart">
      <ShoppingCart size={20} strokeWidth={2} />
      <span>{dictionary.common.cart}</span>
      <b>{mounted ? count : 0}</b>
    </Link>
  );
}
