"use client";

import {
  ArrowRight,
  BadgeRussianRuble,
  Boxes,
  ClipboardCheck,
  Headset,
  Truck,
} from "lucide-react";
import {Link} from "@/i18n/navigation";
import { ProductCard } from "@/components/products/product-card";
import { popularProducts, products } from "@/data/products";
import { useLocale } from "@/i18n/locale-provider";
import { categories } from "@/types/product";

export default function HomePage() {
  const { dictionary } = useLocale();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>{dictionary.home.title}</h1>
            <p>{dictionary.home.intro}</p>
            <div className="hero-actions">
              <Link className="button button-primary button-large" href="/catalog">
                {dictionary.home.openCatalog} <ArrowRight size={20} />
              </Link>
              <a className="button button-dark button-large" href="tel:+74951234567">
                +7 (495) 123-45-67
              </a>
            </div>
            <div className="hero-facts">
              {dictionary.home.facts.map(([value, label]) => (
                <div key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
          <div className="hero-warehouse" aria-label={dictionary.home.warehouseAria}>
            <div className="warehouse-sign">{dictionary.home.warehouse}</div>
            <Boxes size={118} strokeWidth={1.2} />
            <div className="warehouse-lines" />
            <div className="hero-delivery">
              <Truck size={34} />
              <span><b>{dictionary.home.deliveryToday}</b>{dictionary.home.orderBefore}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span>{dictionary.home.categoriesIndex}</span><h2>{dictionary.home.categoriesTitle}</h2></div>
            <Link href="/catalog">{dictionary.home.allCatalog} <ArrowRight size={18} /></Link>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link className={`category-card category-${category}`} href={`/catalog?category=${category}`} key={category}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{dictionary.categories[category][0]}</h3>
                  <p>{dictionary.categories[category][1]}</p>
                  <b>{products.filter((product) => product.category === category).length} {dictionary.common.products}</b>
                </div>
                <ArrowRight size={24} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section" id="benefits">
        <div className="container">
          <div className="section-heading section-heading-light">
            <div><span>{dictionary.home.benefitsIndex}</span><h2>{dictionary.home.benefitsTitle}</h2></div>
          </div>
          <div className="benefits-grid">
            {dictionary.home.benefits.map(([title, text], index) => {
              const Icon = [Truck, BadgeRussianRuble, ClipboardCheck, Headset][index];
              return (
              <article key={title}>
                <span>0{index + 1}</span>
                <Icon size={34} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span>{dictionary.home.popularIndex}</span><h2>{dictionary.home.popularTitle}</h2></div>
            <Link href="/catalog">{dictionary.home.viewAll} <ArrowRight size={18} /></Link>
          </div>
          <div className="product-grid">
            {popularProducts.map((product) => <ProductCard product={product} key={product.id} />)}
          </div>
        </div>
      </section>

      <section className="catalog-cta" id="delivery">
        <div className="container catalog-cta-inner">
          <div>
            <span>{dictionary.home.ctaLead}</span>
            <h2>{dictionary.home.ctaTitle}</h2>
          </div>
          <Link className="button button-dark button-large" href="/catalog">
            {dictionary.home.goCatalog} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
