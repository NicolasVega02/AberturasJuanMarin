"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartIcon } from "@/components/ui/icons";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/resumen", label: "Resumen" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="glass-nav fixed top-0 z-50 h-20 w-full bg-slate-900/90 shadow-sm">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          className="font-headline text-base font-bold tracking-tight text-slate-100 sm:text-xl"
        >
          Aberturas Juan Marin
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-1 font-headline text-xs font-bold tracking-tighter uppercase transition-colors ${
                  active
                    ? "border-b-2 border-slate-400 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/productos"
              className={`text-[10px] font-headline font-bold tracking-widest uppercase ${
                isActivePath(pathname, "/productos")
                  ? "text-white"
                  : "text-slate-300"
              }`}
            >
              Productos
            </Link>
            <Link
              href="/resumen"
              className={`text-[10px] font-headline font-bold tracking-widest uppercase ${
                isActivePath(pathname, "/resumen")
                  ? "text-white"
                  : "text-slate-300"
              }`}
            >
              Resumen
            </Link>
          </div>
          <Link
            href="/resumen"
            className="rounded-full p-2 transition-opacity hover:opacity-80"
            aria-label="Ir al resumen de la orden"
          >
            <CartIcon className="size-5 text-slate-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
