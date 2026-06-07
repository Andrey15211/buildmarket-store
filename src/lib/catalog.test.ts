import { describe, expect, it } from "vitest";
import { filterAndSortProducts } from "./catalog";
import type { Product } from "@/types/product";

const products: Product[] = [
  {
    id: "1",
    slug: "cement",
    name: "Цемент М500",
    category: "cement",
    price: 510,
    unit: "мешок",
    description: "Тест",
    specifications: {},
    inStock: true,
    stockCount: 40,
    popularity: 90,
    image: "cement",
  },
  {
    id: "2",
    slug: "paint",
    name: "Краска фасадная",
    category: "paint",
    price: 3200,
    unit: "ведро",
    description: "Тест",
    specifications: {},
    inStock: true,
    stockCount: 12,
    popularity: 70,
    image: "paint",
  },
];

describe("filterAndSortProducts", () => {
  it("filters by a case-insensitive name fragment", () => {
    const result = filterAndSortProducts(products, {
      search: "ЦЕМЕНТ",
      category: "all",
      minPrice: 0,
      maxPrice: 10000,
      sort: "popular",
    });

    expect(result.map((product) => product.slug)).toEqual(["cement"]);
  });

  it("combines category and price filters", () => {
    const result = filterAndSortProducts(products, {
      search: "",
      category: "paint",
      minPrice: 3000,
      maxPrice: 4000,
      sort: "popular",
    });

    expect(result.map((product) => product.slug)).toEqual(["paint"]);
  });

  it("sorts by ascending price without mutating source data", () => {
    const result = filterAndSortProducts(products, {
      search: "",
      category: "all",
      minPrice: 0,
      maxPrice: 10000,
      sort: "price-asc",
    });

    expect(result.map((product) => product.price)).toEqual([510, 3200]);
    expect(products[0].slug).toBe("cement");
  });
});
