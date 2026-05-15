import { CartIcon } from "@/components/ui/icons";

export function TopNav() {
  return (
    <nav className="glass-nav fixed top-0 z-50 h-20 w-full shadow-sm bg-slate-900/90">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-8">
        <div className="font-headline text-base font-bold tracking-tight sm:text-xl text-slate-100">
          Aberturas Juan Marin
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="border-b-2 border-slate-400 pb-1 font-headline text-xs font-bold tracking-tighter uppercase text-white"
          >
            Products
          </a>
          <a
            href="#"
            className="font-headline text-xs font-bold tracking-tighter uppercase transition-colors text-slate-400 hover:text-slate-200"
          >
            About Us
          </a>
        </div>
        <button
          type="button"
          className="rounded-full p-2 transition-opacity hover:opacity-80"
          aria-label="Carrito"
        >
          <CartIcon className="size-5 text-slate-300" />
        </button>
      </div>
    </nav>
  );
}
