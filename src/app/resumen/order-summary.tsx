"use client";

import type { SummaryData } from "@/types";
import { formatearMoneda } from "@/utils/format";

interface OrderSummaryProps {
  summary: SummaryData;
}

export function OrderSummary({ summary }: OrderSummaryProps) {
  return (
    <div className="rounded-md bg-surface-container-high p-6 shadow-sm sm:p-8 lg:sticky lg:top-28">
      <h2 className="mb-8 font-headline text-2xl font-bold tracking-tight">
        Cálculo estimado
      </h2>

      <div className="mb-8 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">
            Subtotal ({summary.cantidadTotal} ítems)
          </span>
          <span className="font-medium">
            {formatearMoneda(summary.subtotal)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Logística estimada</span>
          <span className="font-medium">
            {formatearMoneda(summary.costoLogistica)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Documentación técnica</span>
          <span className="text-[10px] font-bold tracking-wider text-primary uppercase">
            Incluida
          </span>
        </div>
        <div className="flex items-baseline justify-between border-t border-outline-variant/20 pt-4">
          <span className="text-lg font-bold">Total estimado</span>
          <div className="text-right">
            <p className="font-headline text-3xl font-extrabold tracking-tighter text-primary">
              {formatearMoneda(summary.total)}
            </p>
            <p className="mt-1 text-[10px] tracking-widest text-on-surface-variant uppercase">
              Impuestos no incluidos
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <a
          href={summary.linkWhatsApp}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-3 rounded-md bg-gradient-to-br from-primary to-primary-dim px-6 py-4 text-on-primary transition-all active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-xl">send</span>
          <span className="text-sm font-bold tracking-tight uppercase">
            Enviar pedido por WhatsApp
          </span>
        </a>
        <div className="border border-outline-variant/10 bg-surface-container-lowest p-4 text-xs leading-relaxed text-on-surface-variant">
          Al enviar, nuestro equipo comercial confirma medidas, tipo de vidrio,
          tiempos de fabricación e instalación.
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant/80">
          <span className="material-symbols-outlined text-base">
            verified_user
          </span>
          <span className="text-[10px] font-bold tracking-[0.12em] uppercase">
            Motor seguro de cotización arquitectónica
          </span>
        </div>
      </div>
    </div>
  );
}
