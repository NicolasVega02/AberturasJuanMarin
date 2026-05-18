"use client";

import { useMemo, useState } from "react";
import { CartItems } from "./cart-items";
import { OrderSummary } from "./order-summary";
import { mockProductos } from "@/app/productos/_components/mock-productos";
import { formatearMoneda } from "@/utils/format";
import { COSTO_LOGISTICA_ESTIMADO, PRECIOS_REFERENCIA } from "@/config/precios";
import type { ItemCarritoDetallado } from "@/types";

interface ItemCarrito {
  productoId: string;
  cantidad: number;
}

const ITEMS_INICIALES: ItemCarrito[] = [
  { productoId: "2", cantidad: 1 },
  { productoId: "4", cantidad: 1 },
];

const NUMERO_WHATSAPP = "5491132164542";

export default function ResumenPage() {
  const [carrito, setCarrito] = useState<ItemCarrito[]>(ITEMS_INICIALES);

  const itemsDetallados = useMemo(() => {
    return carrito
      .map((item) => {
        const producto = mockProductos.find(
          (entry) => entry.id === item.productoId,
        );
        if (!producto) {
          return null;
        }
        const precioUnitario = PRECIOS_REFERENCIA[item.productoId] ?? 0;
        return { ...item, producto, precioUnitario };
      })
      .filter((item): item is ItemCarritoDetallado => item !== null);
  }, [carrito]);

  const summaryData = useMemo(() => {
    const cantidadTotal = itemsDetallados.reduce(
      (total, item) => total + item.cantidad,
      0,
    );
    const subtotal = itemsDetallados.reduce(
      (total, item) => total + item.cantidad * item.precioUnitario,
      0,
    );
    const costoLogistica =
      itemsDetallados.length > 0 ? COSTO_LOGISTICA_ESTIMADO : 0;
    const total = subtotal + costoLogistica;

    const detalleItems = itemsDetallados
      .map(
        (item) =>
          `- ${item.producto.titulo} x${item.cantidad} (${formatearMoneda(item.precioUnitario)})`,
      )
      .join("\n");

    const mensajeWhatsApp = [
      "Hola, quiero solicitar una cotización con estos productos:",
      detalleItems || "- Sin productos",
      "",
      `Subtotal: ${formatearMoneda(subtotal)}`,
      `Logística estimada: ${formatearMoneda(costoLogistica)}`,
      `Total estimado: ${formatearMoneda(total)}`,
    ].join("\n");

    const linkWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
      mensajeWhatsApp,
    )}`;

    return {
      cantidadTotal,
      subtotal,
      costoLogistica,
      total,
      linkWhatsApp,
    };
  }, [itemsDetallados]);

  const cambiarCantidad = (productoId: string, delta: number) => {
    setCarrito((prev) =>
      prev
        .map((item) => {
          if (item.productoId !== productoId) {
            return item;
          }
          return { ...item, cantidad: Math.max(1, item.cantidad + delta) };
        })
        .filter((item) => item.cantidad > 0),
    );
  };

  const eliminarItem = (productoId: string) => {
    setCarrito((prev) => prev.filter((item) => item.productoId !== productoId));
  };

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 pt-28 pb-24 sm:px-8">
      <header className="mb-10 sm:mb-12">
        <h1 className="mb-2 font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          Resumen de orden
        </h1>
        <p className="font-body text-on-surface-variant">
          Revisá tu selección antes de enviar la solicitud de cotización.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <section className="space-y-6 lg:col-span-8">
          <CartItems
            items={itemsDetallados}
            onCambiarCantidad={cambiarCantidad}
            onEliminarItem={eliminarItem}
          />
        </section>

        <aside className="lg:col-span-4">
          <OrderSummary summary={summaryData} />
        </aside>
      </div>
    </main>
  );
}
