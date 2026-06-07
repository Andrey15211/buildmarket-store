"use client";

import { ArrowLeft, Check, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import {Link} from "@/i18n/navigation";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { ProductCard } from "@/components/products/product-card";
import { ProductVisual } from "@/components/products/product-visual";
import { localizeProduct } from "@/data/product-translations";
import { useLocale } from "@/i18n/locale-provider";
import { formatPrice } from "@/lib/pricing";
import type { Product } from "@/types/product";

export function ProductDetailsView({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { dictionary, locale } = useLocale();
  const displayProduct = localizeProduct(product, locale);

  return (
    <>
      <Link className="back-link" href="/catalog">
        <ArrowLeft size={17} /> {dictionary.product.back}
      </Link>
      <div className="product-details">
        <ProductVisual category={displayProduct.category} name={displayProduct.name} large />
        <div className="product-info">
          <span className="product-category">{dictionary.categories[displayProduct.category][0]}</span>
          <h1>{displayProduct.name}</h1>
          <div className="product-stock">
            <span className={product.inStock ? "stock-dot" : "stock-dot stock-dot-off"} />
            {product.inStock
              ? `${dictionary.product.stockWarehouse} ${product.stockCount} ${displayProduct.unit}`
              : dictionary.product.expected}
          </div>
          <p className="product-description">{displayProduct.description}</p>
          <div className="product-price">
            <strong>{formatPrice(product.price)}</strong>
            <span>{dictionary.product.per} {displayProduct.unit}</span>
          </div>
          <AddToCartButton product={product} large />
          <ul className="purchase-points">
            <li><Truck size={20} /><span><b>{dictionary.product.deliveryTitle}</b>{dictionary.product.deliveryText}</span></li>
            <li><PackageCheck size={20} /><span><b>{dictionary.product.checkTitle}</b>{dictionary.product.checkText}</span></li>
            <li><ShieldCheck size={20} /><span><b>{dictionary.product.docsTitle}</b>{dictionary.product.docsText}</span></li>
          </ul>
        </div>
      </div>
      <div className="specifications">
        <div>
          <span>{dictionary.product.specs}</span>
          <h2>{dictionary.product.parameters}</h2>
        </div>
        <dl>
          {Object.entries(displayProduct.specifications).map(([label, value]) => (
            <div key={label}><dt>{label}</dt><dd><Check size={16} />{value}</dd></div>
          ))}
        </dl>
      </div>
      {related.length > 0 ? (
        <div className="related-products">
          <div className="section-heading">
            <div><span>{dictionary.product.related}</span><h2>{dictionary.product.categoryMore}</h2></div>
          </div>
          <div className="product-grid">
            {related.map((item) => <ProductCard product={item} key={item.id} />)}
          </div>
        </div>
      ) : null}
    </>
  );
}
