"use server";

import { mockProductos } from "./_components/mock-productos";
import { ProductsCatalog } from "./_components/products-catalog";

// Mañana esto puede ser: const { data: productos } = await supabase.from('productos').select('*')

export default async function ProductosPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pt-28 pb-24 sm:px-8">
      <div className="mb-12 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-4 -ml-1">
          Nuestra Colección.
        </h1>
        <p className="text-on-surface-variant leading-relaxed max-w-md">
          Soluciones de marcos de precisión diseñadas para cerrar la brecha
          entre la comodidad interior y la vista arquitectónica.
        </p>
      </div>

      <ProductsCatalog inicialProducts={mockProductos} />
    </main>
  );
}
