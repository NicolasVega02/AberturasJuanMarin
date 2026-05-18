import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockProductos } from "@/app/productos/_components/mock-productos";
import { formatearMoneda } from "@/utils/format";
import { PRECIOS_REFERENCIA } from "@/config/precios";

interface ProductoDetallePageProps {
  params: Promise<{ id: string }>;
}

function capitalizar(texto: string) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function generateStaticParams() {
  return mockProductos.map((producto) => ({ id: producto.id }));
}

export default async function ProductoDetallePage({
  params,
}: ProductoDetallePageProps) {
  const { id } = await params;
  const producto = mockProductos.find((item) => item.id === id);

  if (!producto) {
    notFound();
  }

  const imagenesSecundarias = [
    producto.imagen_url,
    ...mockProductos
      .filter((item) => item.id !== id)
      .map((item) => item.imagen_url),
  ].slice(0, 4);

  const relacionados = mockProductos
    .filter((item) => item.id !== id && item.categoria === producto.categoria)
    .slice(0, 3);

  const precioReferencia = PRECIOS_REFERENCIA[id];
  const tituloLinea = producto.linea
    ? `${producto.linea.toUpperCase()} // COLECCIÓN`
    : "COLECCIÓN PREMIUM";

  return (
    <main className="mx-auto max-w-7xl px-4 pt-28 pb-24 sm:px-8">
      <div className="mb-10 flex flex-wrap items-center gap-2 text-[10px] font-label tracking-widest text-on-surface-variant uppercase">
        <Link
          href="/productos"
          className="transition-colors hover:text-primary"
        >
          Productos
        </Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span>
          {producto.categoria ? capitalizar(producto.categoria) : "Detalle"}
        </span>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="font-semibold text-on-surface">{producto.titulo}</span>
      </div>

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-4 lg:col-span-7">
          <div className="group relative aspect-[4/5] overflow-hidden bg-surface-container">
            <Image
              src={producto.imagen_url}
              alt={producto.titulo}
              fill
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {imagenesSecundarias.map((imagen, index) => (
              <div
                key={`${imagen}-${index}`}
                className="relative aspect-square overflow-hidden bg-surface-container"
              >
                <Image
                  src={imagen}
                  alt={`Vista ${index + 1} de ${producto.titulo}`}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <aside className="self-start lg:sticky lg:top-28 lg:col-span-5">
          <div className="space-y-8">
            <div>
              <span className="font-label text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                {tituloLinea}
              </span>
              <h1 className="mt-2 font-headline text-4xl leading-[0.95] font-extrabold tracking-tighter text-on-surface sm:text-5xl">
                {producto.titulo}
              </h1>
              <p className="mt-6 max-w-md leading-relaxed text-on-surface-variant">
                {producto.descripcion ??
                  "Sistema de cerramiento de alta prestación, optimizado para diseño arquitectónico contemporáneo."}
              </p>
            </div>

            <div className="h-px bg-outline-variant/30" />

            <div className="space-y-6">
              <div className="flex items-end justify-between gap-4">
                <span className="font-label text-xs font-medium text-on-surface-variant uppercase">
                  Precio orientativo
                </span>
                <span className="font-headline text-3xl font-bold tracking-tight text-on-surface">
                  {precioReferencia
                    ? `${formatearMoneda(precioReferencia)}`
                    : "A cotizar"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-outline-variant/15">
                <div className="bg-surface-container-lowest p-4 sm:p-5">
                  <span className="mb-1 block text-[10px] font-label tracking-widest text-on-surface-variant uppercase">
                    Material
                  </span>
                  <span className="font-headline text-sm font-bold text-on-surface">
                    {producto.material
                      ? capitalizar(producto.material)
                      : "Sin dato"}
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-4 sm:p-5">
                  <span className="mb-1 block text-[10px] font-label tracking-widest text-on-surface-variant uppercase">
                    Vidrio
                  </span>
                  <span className="font-headline text-sm font-bold text-on-surface">
                    {producto.vidrio ?? "Sin dato"}
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-4 sm:p-5">
                  <span className="mb-1 block text-[10px] font-label tracking-widest text-on-surface-variant uppercase">
                    Ancho
                  </span>
                  <span className="font-headline text-sm font-bold text-on-surface">
                    {producto.ancho_cm ? `${producto.ancho_cm} cm` : "A medida"}
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-4 sm:p-5">
                  <span className="mb-1 block text-[10px] font-label tracking-widest text-on-surface-variant uppercase">
                    Alto
                  </span>
                  <span className="font-headline text-sm font-bold text-on-surface">
                    {producto.alto_cm ? `${producto.alto_cm} cm` : "A medida"}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/resumen"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-gradient-to-br from-primary to-primary-dim px-4 py-4 font-headline text-sm font-bold tracking-tight text-on-primary transition-all hover:opacity-90"
              >
                <span className="material-symbols-outlined text-sm">
                  shopping_cart
                </span>
                Agregar y ver resumen
              </Link>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-surface-container-low px-4 py-4 font-headline text-sm font-bold tracking-tight text-on-surface transition-colors hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined text-sm">
                  description
                </span>
                Descargar ficha técnica
              </button>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-surface-container-low p-5">
              <span className="material-symbols-outlined mt-0.5 text-secondary">
                verified_user
              </span>
              <div>
                <p className="font-headline text-sm font-bold">
                  Requiere instalación profesional
                </p>
                <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
                  Nuestro equipo técnico realiza relevamiento, ajuste y montaje
                  certificado para asegurar máxima performance.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-24 sm:mt-32">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="font-label text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
              También te puede interesar
            </span>
            <h2 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
              Productos relacionados
            </h2>
          </div>
          <Link
            href="/productos"
            className="text-xs font-label font-bold tracking-widest text-on-surface-variant uppercase transition-colors hover:text-on-surface"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {relacionados.map((item) => (
            <Link
              key={item.id}
              href={`/productos/${item.id}`}
              className="group block"
            >
              <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-surface-container-low">
                <Image
                  src={item.imagen_url}
                  alt={item.titulo}
                  fill
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] font-label font-bold tracking-widest text-primary uppercase">
                {item.categoria ? capitalizar(item.categoria) : "Producto"}
              </p>
              <h3 className="mt-1 font-headline text-xl font-bold tracking-tight text-on-surface">
                {item.titulo}
              </h3>
              <p className="mt-2 text-sm text-on-surface-variant">
                {PRECIOS_REFERENCIA[item.id]
                  ? `Desde ${formatearMoneda(PRECIOS_REFERENCIA[item.id])}`
                  : "Consultar precio"}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
