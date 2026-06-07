export const categories = [
  "cement",
  "dry-mixes",
  "lumber",
  "insulation",
  "paint",
  "tools",
] as const;

export type ProductCategory = (typeof categories)[number];

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  unit: string;
  description: string;
  specifications: Record<string, string>;
  inStock: boolean;
  stockCount: number;
  popularity: number;
  image: ProductCategory;
}

export type CatalogSort = "popular" | "price-asc" | "price-desc";

export interface CatalogFilters {
  search: string;
  category: ProductCategory | "all";
  minPrice: number;
  maxPrice: number;
  sort: CatalogSort;
}
