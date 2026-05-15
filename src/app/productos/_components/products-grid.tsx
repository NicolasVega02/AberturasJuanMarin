"use client";

import { ProductCard } from "@/components/product-card";
import type { Producto } from "@/types";

interface ProductsGridProps {
  products: Producto[];
}

export function ProductsGrid({ products }: ProductsGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-on-surface-variant text-center">
          No se encontraron productos que coincidan con los filtros.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
