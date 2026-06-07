import { z } from "zod";
import { dictionaries, type Locale } from "@/i18n/dictionaries";

const phonePattern = /^(\+7|8)[\s(-]?\d{3}[\s)-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

export function createCheckoutSchema(locale: Locale) {
  const errors = dictionaries[locale].checkout.errors;

  return z
  .object({
    name: z.string().trim().min(2, errors.name).max(80, errors.longName),
    phone: z.string().trim().regex(phonePattern, errors.phone),
    address: z.string().trim().max(200, errors.longAddress),
    deliveryType: z.enum(["delivery", "pickup"]),
    comment: z.string().trim().max(500, errors.comment),
  })
  .superRefine((data, context) => {
    if (data.deliveryType === "delivery" && data.address.length < 8) {
      context.addIssue({
        code: "custom",
        path: ["address"],
        message: errors.address,
      });
    }
  });
}

export const checkoutSchema = createCheckoutSchema("ru");
export type CheckoutFormValues = z.infer<ReturnType<typeof createCheckoutSchema>>;
