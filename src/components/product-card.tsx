"use client";

import Image from "next/image";
import type { Producto } from "@/types";

interface ProductCardProps {
  product: Producto;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-surface-container-low p-4 border border-outline/10 hover:shadow-[0_12px_40px_rgba(43,52,55,0.06)] transition-all duration-500 cursor-pointer">
      <div className="aspect-[4/5] bg-surface-container-lowest overflow-hidden relative">
        <Image
          src={product.imagen_url}
          alt={product.titulo}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.linea && (
          <div className="absolute top-4 right-4 bg-surface-container-lowest px-3 py-1 text-[10px] font-bold uppercase tracking-tighter text-on-surface">
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
    </div>
  );
}
