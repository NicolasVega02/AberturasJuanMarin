"use client";

import Image from "next/image";
import Link from "next/link";
import type { ItemCarritoDetallado } from "@/types";

interface CartItemsProps {
  items: ItemCarritoDetallado[];
  onCambiarCantidad: (productoId: string, delta: number) => void;
  onEliminarItem: (productoId: string) => void;
}

export function CartItems({
  items,
  onCambiarCantidad,
  onEliminarItem,
}: CartItemsProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-md border border-outline-variant/30 bg-surface-container-low p-8">
        <p className="text-sm text-on-surface-variant">
          No hay productos en el resumen todavía.
        </p>
        <Link
          href="/productos"
          className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <>
      {items.map((item) => (
        <article
          key={item.productoId}
          className="flex flex-col items-stretch bg-surface-container-low p-1 md:flex-row"
        >
          <div className="relative h-56 w-full overflow-hidden bg-surface-container-highest md:h-auto md:w-44">
            <Image
              src={item.producto.imagen_url}
              alt={item.producto.titulo}
              fill
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between p-5 sm:p-7">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                  {item.producto.linea ?? "Colección"}
                </p>
                <h2 className="font-headline text-xl font-bold leading-tight">
                  {item.producto.titulo}
                </h2>
                <p className="mt-2 text-sm text-on-surface-variant">
                  {item.producto.material ?? "Material a definir"} ·{" "}
                  {item.producto.vidrio ?? "Vidrio a definir"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onEliminarItem(item.productoId)}
                className="text-on-surface-variant transition-colors hover:text-error"
                aria-label={`Eliminar ${item.producto.titulo}`}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                  Cantidad
                </span>
                <div className="flex items-center border border-outline-variant/30 bg-surface-container-lowest">
                  <button
                    type="button"
                    onClick={() => onCambiarCantidad(item.productoId, -1)}
                    className="px-3 py-1 text-on-surface-variant transition-colors hover:text-primary"
                    aria-label="Restar cantidad"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-sm font-medium">
                    {item.cantidad}
                  </span>
                  <button
                    type="button"
                    onClick={() => onCambiarCantidad(item.productoId, 1)}
                    className="px-3 py-1 text-on-surface-variant transition-colors hover:text-primary"
                    aria-label="Sumar cantidad"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="font-headline text-lg font-bold tracking-tight text-primary">
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                  maximumFractionDigits: 0,
                }).format(item.precioUnitario * item.cantidad)}
              </p>
            </div>
          </div>
        </article>
      ))}

      <Link
        href="/productos"
        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Seguir seleccionando productos
      </Link>
    </>
  );
}
