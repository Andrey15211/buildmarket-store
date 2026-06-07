"use client";

import {Link} from "@/i18n/navigation";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { ProductVisual } from "@/components/products/product-visual";
import { localizeProduct } from "@/data/product-translations";
import { useLocale } from "@/i18n/locale-provider";
import { formatPrice } from "@/lib/pricing";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const { dictionary, locale } = useLocale();
  const displayProduct = localizeProduct(product, locale);

  return (
    <article className="product-card">
      <Link href={`/product/${product.slug}`} className="product-card-image">
        <ProductVisual category={displayProduct.category} name={displayProduct.name} />
      </Link>
      <div className="product-card-body">
        <span className="product-category">{dictionary.categories[displayProduct.category][0]}</span>
        <Link className="product-name" href={`/product/${product.slug}`}>
          {displayProduct.name}
        </Link>
        <div className="stock-line">
          <span className={product.inStock ? "stock-dot" : "stock-dot stock-dot-off"} />
          {product.inStock
            ? `${dictionary.common.inStock}: ${product.stockCount}`
            : dictionary.product.expected}
        </div>
        <div className="product-card-footer">
          <div>
            <strong>{formatPrice(product.price)}</strong>
            <span>/ {displayProduct.unit}</span>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
