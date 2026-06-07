export const FREE_DELIVERY_THRESHOLD = 50_000;
export const STANDARD_DELIVERY_PRICE = 1490;

export function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);
}

export function calculateDelivery(subtotal: number) {
  if (subtotal <= 0 || subtotal >= FREE_DELIVERY_THRESHOLD) {
    return 0;
  }

  return STANDARD_DELIVERY_PRICE;
}
