import {
  Anvil,
  Blocks,
  Drill,
  PaintBucket,
  PanelsTopLeft,
  Warehouse,
} from "lucide-react";
import type { ProductCategory } from "@/types/product";

const icons = {
  cement: Blocks,
  "dry-mixes": Warehouse,
  lumber: PanelsTopLeft,
  insulation: Anvil,
  paint: PaintBucket,
  tools: Drill,
};

interface ProductVisualProps {
  category: ProductCategory;
  name: string;
  large?: boolean;
}

export function ProductVisual({ category, name, large = false }: ProductVisualProps) {
  const Icon = icons[category];

  return (
    <div className={`product-visual product-visual-${category}${large ? " product-visual-large" : ""}`}>
      <span className="visual-grid" aria-hidden="true" />
      <Icon aria-hidden="true" />
      <span>{name.split(" ").slice(0, 3).join(" ")}</span>
    </div>
  );
}
