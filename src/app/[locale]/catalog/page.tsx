import { CatalogExplorer } from "@/components/catalog/catalog-explorer";
import { products } from "@/data/products";
import {dictionaries} from "@/i18n/dictionaries";
import type {AppLocale} from "@/i18n/routing";
import { categories, type ProductCategory } from "@/types/product";

interface CatalogPageProps {
  params: Promise<{locale: AppLocale}>;
  searchParams: Promise<{category?: string}>;
}

export default async function CatalogPage({
  params,
  searchParams,
}: CatalogPageProps) {
  const {locale} = await params;
  const dictionary = dictionaries[locale];
  const requestedCategory = (await searchParams).category;
  const initialCategory = categories.includes(requestedCategory as ProductCategory)
    ? (requestedCategory as ProductCategory)
    : undefined;

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <span>{dictionary.catalog.headingMeta}</span>
          <h1>{dictionary.catalog.title}</h1>
          <p>{dictionary.catalog.intro}</p>
        </div>
        <CatalogExplorer
          key={initialCategory ?? "all"}
          products={products}
          initialCategory={initialCategory}
        />
      </div>
    </section>
  );
}
