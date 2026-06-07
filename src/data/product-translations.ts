import type { Locale } from "@/i18n/dictionaries";
import type { Product } from "@/types/product";

const englishProducts: Record<string, Pick<Product, "name" | "unit" | "description">> = {
  "cement-1": { name: "CEM II/A-S 42.5N Cement", unit: "50 kg bag", description: "General-purpose Portland cement for foundations, screeds, masonry, and general construction." },
  "cement-2": { name: "CEM I 42.5R Cement", unit: "50 kg bag", description: "Rapid-hardening cement for structural concrete and cold-weather construction." },
  "cement-3": { name: "M400 D20 Cement", unit: "50 kg bag", description: "Practical cement for masonry mortar, plaster mixes, and low-rise construction." },
  "cement-4": { name: "M500 White Cement", unit: "25 kg bag", description: "White decorative cement for architectural concrete, grout, and finishing mortar." },
  "mix-1": { name: "Standard Tile Adhesive", unit: "25 kg bag", description: "Cement-based adhesive for ceramic tile in dry and wet indoor areas." },
  "mix-2": { name: "Machine-Applied Gypsum Plaster", unit: "30 kg bag", description: "Gypsum plaster for machine leveling of indoor walls and ceilings." },
  "mix-3": { name: "Fast-Setting Self-Leveling Floor", unit: "20 kg bag", description: "Self-leveling compound for preparing an even base under finish flooring." },
  "mix-4": { name: "Cement Facade Filler", unit: "20 kg bag", description: "Moisture-resistant finishing filler for facades, plinths, and wet areas." },
  "lumber-1": { name: "Edged Board 50×150×6000 mm", unit: "pc.", description: "Natural-moisture edged board for frames, floor systems, and rafters." },
  "lumber-2": { name: "Construction Beam 100×100×6000 mm", unit: "pc.", description: "Softwood beam for structural frames, binding, and utility buildings." },
  "lumber-3": { name: "FC Plywood 12 mm 1525×1525", unit: "sheet", description: "Birch plywood for indoor construction, furniture, and finishing." },
  "lumber-4": { name: "OSB-3 Board 9 mm 1250×2500", unit: "sheet", description: "Moisture-resistant board for frame sheathing, roof decking, and subfloors." },
  "insulation-1": { name: "Acoustic Mineral Wool 50 mm", unit: "6 m² pack", description: "Non-combustible boards for acoustic and thermal insulation of partitions, floors, and pitched roofs." },
  "insulation-2": { name: "Basalt Facade Board 100 mm", unit: "2.4 m² pack", description: "Rigid thermal insulation boards for rendered facade systems." },
  "insulation-3": { name: "XPS Insulation 50 mm", unit: "board", description: "Strong moisture-resistant insulation for foundations, plinths, floors, and flat roofs." },
  "insulation-4": { name: "Foil Insulation 10 mm", unit: "15 m² roll", description: "Reflective roll insulation for saunas, balconies, ducts, and underfloor heating." },
  "paint-1": { name: "Super White Interior Paint 14 kg", unit: "bucket", description: "Matt water-dispersion paint for walls and ceilings in dry rooms." },
  "paint-2": { name: "Weatherproof Facade Paint 9 L", unit: "bucket", description: "Durable facade coating for mineral substrates, plaster, and concrete." },
  "paint-3": { name: "Protective Wood Glaze 9 L", unit: "can", description: "Translucent protective coating for facades, fences, and timber structures." },
  "paint-4": { name: "3-in-1 Direct-to-Rust Enamel", unit: "2.5 kg can", description: "Primer enamel for metal surfaces without complete rust removal." },
  "tools-1": { name: "125 mm Angle Grinder 1100 W", unit: "pc.", description: "Compact angle grinder for cutting and grinding metal, stone, and concrete." },
  "tools-2": { name: "SDS-plus Rotary Hammer 800 W", unit: "pc.", description: "Three-mode rotary hammer for concrete drilling, regular drilling, and light demolition." },
  "tools-3": { name: "16-Line Green Laser Level", unit: "set", description: "Self-leveling green laser for wall, floor, and ceiling layout." },
  "tools-4": { name: "Reinforced Construction Wheelbarrow 110 L", unit: "pc.", description: "Heavy-duty single-wheel barrow for mortar, soil, and bulk materials." },
};

const specificationKeys: Record<string, string> = {
  Марка: "Grade",
  Вес: "Weight",
  ГОСТ: "Standard",
  Производитель: "Manufacturer",
  Тип: "Type",
  Добавки: "Additives",
  Цвет: "Color",
  Класс: "Class",
  Расход: "Coverage",
  Слой: "Layer",
  Основа: "Base",
  Хождение: "Walkable",
  Морозостойкость: "Frost resistance",
  Порода: "Wood",
  Сорт: "Grade",
  Влажность: "Moisture",
  Размер: "Size",
  Обработка: "Finish",
  Толщина: "Thickness",
  Формат: "Format",
  Кромка: "Edge",
  Площадь: "Area",
  Горючесть: "Fire rating",
  Плотность: "Density",
  Прочность: "Strength",
  Фольга: "Foil",
  Ширина: "Width",
  Блеск: "Finish",
  Объем: "Volume",
  "Срок службы": "Service life",
  Нанесение: "Application",
  Защита: "Protection",
  Сушка: "Drying time",
  Мощность: "Power",
  Диск: "Disc",
  Обороты: "Speed",
  Гарантия: "Warranty",
  "Энергия удара": "Impact energy",
  Патрон: "Chuck",
  Кейс: "Case",
  Линии: "Lines",
  Дальность: "Range",
  Точность: "Accuracy",
  Питание: "Power supply",
  Грузоподъемность: "Load capacity",
  Кузов: "Tray",
  Колесо: "Wheel",
};

const specificationValues: Record<string, string> = {
  "Быстротвердеющий": "Rapid-hardening",
  "Серый": "Gray",
  "Белый": "White",
  "Гипсовая": "Gypsum",
  "Цементная": "Cement",
  "Ель/сосна": "Spruce/pine",
  "Пиленый": "Sawn",
  "Береза": "Birch",
  "Прямая": "Square",
  "Односторонняя": "Single-sided",
  "Акриловая": "Acrylic",
  "Матовый": "Matt",
  "Сосна": "Pine",
  "УФ и влага": "UV and moisture",
  "Графитовый": "Graphite",
  "Алкидная": "Alkyd",
  "В комплекте": "Included",
  "Аккумулятор": "Battery",
  "Оцинкованный": "Galvanized",
  "Пневматическое": "Pneumatic",
  "через 4 часа": "after 4 hours",
  "до 10 лет": "up to 10 years",
  "2 слоя": "2 coats",
  "6 часов": "6 hours",
  "2 года": "2 years",
};

export function localizeProduct(product: Product, locale: Locale): Product {
  if (locale === "ru") return product;
  const translation = englishProducts[product.id];

  return {
    ...product,
    ...translation,
    specifications: Object.fromEntries(
      Object.entries(product.specifications).map(([key, value]) => [
        specificationKeys[key] ?? key,
        specificationValues[value] ?? value,
      ]),
    ),
  };
}

export function localizeProducts(products: Product[], locale: Locale) {
  return products.map((product) => localizeProduct(product, locale));
}
