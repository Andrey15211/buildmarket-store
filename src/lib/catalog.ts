import type { CatalogFilters, Product } from "@/types/product";

export function filterAndSortProducts(
  products: Product[],
  filters: CatalogFilters,
) {
  const normalizedSearch = filters.search.trim().toLocaleLowerCase("ru");

  return products
    .filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLocaleLowerCase("ru").includes(normalizedSearch);
      const matchesCategory =
        filters.category === "all" || product.category === filters.category;
      const matchesPrice =
        product.price >= filters.minPrice && product.price <= filters.maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    })
    .toSorted((first, second) => {
      if (filters.sort === "price-asc") return first.price - second.price;
      if (filters.sort === "price-desc") return second.price - first.price;
      return second.popularity - first.popularity;
    });
}
