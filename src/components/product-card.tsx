"use client";

import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/types";

interface ProductCardProps {
  product: Producto;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/productos/${product.id}`}
      className="group block cursor-pointer border border-outline/10 bg-surface-container-low p-4 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(43,52,55,0.06)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-lowest">
        <Image
          src={product.imagen_url}
          alt={product.titulo}
          fill
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.linea && (
          <div className="absolute top-4 right-4 bg-surface-container-lowest px-3 py-1 text-[10px] font-bold tracking-tighter text-on-surface uppercase">
            {product.linea}
          </div>
        )}
      </div>
      <div className="mt-6 space-y-2 px-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-headline font-bold text-lg flex-1">
            {product.titulo}
          </h3>
        </div>
        {product.descripcion && (
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {product.descripcion}
          </p>
        )}
        <div className="pt-4 flex flex-wrap gap-2">
          {product.material && (
            <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 text-[10px] uppercase font-bold">
              {product.material.charAt(0).toUpperCase() +
                product.material.slice(1)}
            </span>
          )}
          {product.categoria && (
            <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 text-[10px] uppercase font-bold">
              {product.categoria.charAt(0).toUpperCase() +
                product.categoria.slice(1)}
            </span>
          )}
        </div>
        {(product.ancho_cm || product.alto_cm) && (
          <div className="pt-2 text-[10px] text-on-surface-variant">
            {product.ancho_cm && product.alto_cm
              ? `${product.ancho_cm} x ${product.alto_cm} cm`
              : product.ancho_cm
                ? `${product.ancho_cm} cm ancho`
                : `${product.alto_cm} cm alto`}
          </div>
        )}
      </div>
    </Link>
  );
}
