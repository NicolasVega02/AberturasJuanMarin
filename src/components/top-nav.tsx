import { CartIcon } from "@/components/ui/icons";

export function TopNav() {
  return (
    <nav className="glass-nav fixed top-0 z-50 h-20 w-full bg-white/70 shadow-sm dark:bg-slate-900/70">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-8">
        <div className="font-headline text-base font-bold tracking-tight text-slate-800 sm:text-xl dark:text-slate-100">
          Aberturas Juan Marin
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="border-b-2 border-slate-400 pb-1 font-headline text-xs font-bold tracking-tighter uppercase text-slate-900 dark:text-white"
          >
            Products
          </a>
          <a
            href="#"
            className="font-headline text-xs font-bold tracking-tighter uppercase text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          >
            About Us
          </a>
        </div>
        <button
          type="button"
          className="rounded-full p-2 transition-opacity hover:opacity-80"
          aria-label="Carrito"
        >
          <CartIcon className="size-5 text-slate-600 dark:text-slate-300" />
        </button>
      </div>
    </nav>
  );
}
