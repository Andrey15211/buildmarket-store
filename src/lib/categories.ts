import type { ProductCategory } from "@/types/product";

export const categoryLabels: Record<ProductCategory, string> = {
  cement: "Цемент",
  "dry-mixes": "Сухие смеси",
  lumber: "Пиломатериалы",
  insulation: "Утеплитель",
  paint: "Краски",
  tools: "Инструменты",
};

export const categoryDescriptions: Record<ProductCategory, string> = {
  cement: "Для фундамента, кладки и бетонных работ",
  "dry-mixes": "Штукатурки, клеи, шпаклевки и наливные полы",
  lumber: "Доска, брус и листовые материалы",
  insulation: "Минеральная вата и теплоизоляционные плиты",
  paint: "Интерьерные, фасадные и защитные составы",
  tools: "Ручной и электроинструмент для стройплощадки",
};
