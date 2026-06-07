import { describe, expect, it } from "vitest";
import { checkoutSchema } from "./checkout";

const validOrder = {
  name: "Иван Петров",
  phone: "+7 999 123-45-67",
  address: "Москва, ул. Строителей, д. 12",
  deliveryType: "delivery" as const,
  comment: "",
};

describe("checkoutSchema", () => {
  it("accepts a complete delivery order", () => {
    expect(checkoutSchema.safeParse(validOrder).success).toBe(true);
  });

  it("rejects an invalid phone number", () => {
    const result = checkoutSchema.safeParse({ ...validOrder, phone: "123" });
    expect(result.success).toBe(false);
  });

  it("requires an address for courier delivery", () => {
    const result = checkoutSchema.safeParse({ ...validOrder, address: "" });
    expect(result.success).toBe(false);
  });

  it("allows an empty address for pickup", () => {
    const result = checkoutSchema.safeParse({
      ...validOrder,
      deliveryType: "pickup",
      address: "",
    });
    expect(result.success).toBe(true);
  });
});
