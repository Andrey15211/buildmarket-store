import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailsView } from "@/components/products/product-details-view";
import {localizeProduct} from "@/data/product-translations";
import { getProductBySlug, products } from "@/data/products";
import {routing, type AppLocale} from "@/i18n/routing";

interface ProductPageProps {
  params: Promise<{locale: AppLocale; slug: string}>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((product) => ({locale, slug: product.slug})),
  );
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const {locale, slug} = await params;
  const product = getProductBySlug(slug);
  return {
    title: product
      ? localizeProduct(product, locale).name
      : locale === "ru"
        ? "Товар не найден"
        : "Product not found",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug((await params).slug);
  if (!product) notFound();

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return (
    <section className="page-section">
      <div className="container"><ProductDetailsView product={product} related={related} /></div>
    </section>
  );
}
