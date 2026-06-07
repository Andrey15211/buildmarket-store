import { describe, expect, it } from "vitest";
import { calculateDelivery, formatPrice } from "./pricing";

describe("calculateDelivery", () => {
  it("charges standard delivery below the free-delivery threshold", () => {
    expect(calculateDelivery(49_999)).toBe(1490);
  });

  it("returns free delivery at the threshold", () => {
    expect(calculateDelivery(50_000)).toBe(0);
  });

  it("returns zero for an empty cart", () => {
    expect(calculateDelivery(0)).toBe(0);
  });
});

describe("formatPrice", () => {
  it("formats Russian ruble prices", () => {
    expect(formatPrice(12500)).toContain("12");
    expect(formatPrice(12500)).toContain("500");
    expect(formatPrice(12500)).toContain("₽");
  });
});
