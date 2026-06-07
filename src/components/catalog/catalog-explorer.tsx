"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/products/product-card";
import { localizeProducts } from "@/data/product-translations";
import { useLocale } from "@/i18n/locale-provider";
import { filterAndSortProducts } from "@/lib/catalog";
import {
  categories,
  type CatalogFilters,
  type Product,
  type ProductCategory,
} from "@/types/product";

const MAX_PRICE = 10_000;

interface CatalogExplorerProps {
  products: Product[];
  initialCategory?: ProductCategory;
}

export function CatalogExplorer({
  products,
  initialCategory,
}: CatalogExplorerProps) {
  const { dictionary, locale } = useLocale();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<CatalogFilters>({
    search: "",
    category: initialCategory ?? "all",
    minPrice: 0,
    maxPrice: MAX_PRICE,
    sort: "popular",
  });

  const localizedProducts = useMemo(
    () => localizeProducts(products, locale),
    [locale, products],
  );
  const filteredProducts = useMemo(
    () => filterAndSortProducts(localizedProducts, filters),
    [filters, localizedProducts],
  );

  function resetFilters() {
    setFilters({
      search: "",
      category: "all",
      minPrice: 0,
      maxPrice: MAX_PRICE,
      sort: "popular",
    });
  }

  return (
    <div className="catalog-layout">
      <button
        className="mobile-filter-button"
        type="button"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <SlidersHorizontal size={18} />
        {dictionary.catalog.filters}
      </button>
      {mobileFiltersOpen ? (
        <button
          className="filter-backdrop"
          type="button"
          aria-label={dictionary.catalog.close}
          onClick={() => setMobileFiltersOpen(false)}
        />
      ) : null}
      <aside className={`catalog-filters${mobileFiltersOpen ? " catalog-filters-open" : ""}`}>
        <div className="filter-heading">
          <h2>{dictionary.catalog.filters}</h2>
          <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label={dictionary.catalog.close}>
            <X size={22} />
          </button>
        </div>
        <label className="field">
          <span>{dictionary.catalog.search}</span>
          <input
            type="search"
            value={filters.search}
            placeholder={dictionary.catalog.searchPlaceholder}
            onChange={(event) =>
              setFilters((current) => ({ ...current, search: event.target.value }))
            }
          />
        </label>
        <fieldset className="filter-group">
          <legend>{dictionary.catalog.category}</legend>
          <label className="radio-row">
            <input
              type="radio"
              name="category"
              checked={filters.category === "all"}
              onChange={() => setFilters((current) => ({ ...current, category: "all" }))}
            />
            <span>{dictionary.catalog.allCategories}</span>
            <b>{products.length}</b>
          </label>
          {categories.map((category) => (
            <label className="radio-row" key={category}>
              <input
                type="radio"
                name="category"
                checked={filters.category === category}
                onChange={() => setFilters((current) => ({ ...current, category }))}
              />
              <span>{dictionary.categories[category][0]}</span>
              <b>{products.filter((product) => product.category === category).length}</b>
            </label>
          ))}
        </fieldset>
        <fieldset className="filter-group">
          <legend>{dictionary.catalog.price}</legend>
          <div className="price-inputs">
            <label>
              <span>{dictionary.catalog.from}</span>
              <input
                type="number"
                min="0"
                value={filters.minPrice}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    minPrice: Number(event.target.value),
                  }))
                }
              />
            </label>
            <label>
              <span>{dictionary.catalog.to}</span>
              <input
                type="number"
                min="0"
                value={filters.maxPrice}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    maxPrice: Number(event.target.value),
                  }))
                }
              />
            </label>
          </div>
        </fieldset>
        <button className="button button-secondary filter-reset" type="button" onClick={resetFilters}>
          {dictionary.catalog.reset}
        </button>
      </aside>
      <div className="catalog-results">
        <div className="catalog-toolbar">
          <span>{dictionary.catalog.found} <b>{filteredProducts.length}</b></span>
          <label>
            <span>{dictionary.catalog.sorting}</span>
            <select
              value={filters.sort}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  sort: event.target.value as CatalogFilters["sort"],
                }))
              }
            >
              <option value="popular">{dictionary.catalog.popular}</option>
              <option value="price-asc">{dictionary.catalog.cheaper}</option>
              <option value="price-desc">{dictionary.catalog.expensive}</option>
            </select>
          </label>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="product-grid catalog-product-grid">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <SlidersHorizontal size={42} />
            <h2>{dictionary.catalog.emptyTitle}</h2>
            <p>{dictionary.catalog.emptyText}</p>
            <button className="button button-primary" type="button" onClick={resetFilters}>
              {dictionary.catalog.reset}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
