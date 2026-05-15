import { GlobeIcon, MailIcon } from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <h4 className="mb-6 font-headline text-lg font-bold text-white">
            Aberturas Juan Marin
          </h4>
          <p className="mb-8 max-w-xs text-sm leading-relaxed text-slate-400">
            La referencia en cerramientos de alta gama. Fusionando tecnología
            alemana con diseño arquitectónico.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-500 transition-colors hover:text-primary"
            >
              <GlobeIcon className="size-5" />
            </a>
            <a
              href="#"
              className="text-slate-500 transition-colors hover:text-primary"
            >
              <MailIcon className="size-5" />
            </a>
          </div>
        </div>
        <div>
          <h5 className="mb-6 font-headline text-sm font-semibold tracking-widest uppercase text-white">
            Información
          </h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li>
              <a href="#" className="transition-all hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:underline">
                Business Hours
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:underline">
                Sostenibilidad
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:underline">
                Garantías
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 font-headline text-sm font-semibold tracking-widest uppercase text-white">
            Redes Sociales
          </h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li>
              <a href="#" className="transition-all hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="transition-all hover:underline">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t px-4 py-8 sm:px-8 md:flex-row border-slate-800">
        <p className="text-xs text-slate-400">
          © 2024 Aberturas Juan Marin. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-slate-500">
          <a href="#" className="transition-colors hover:text-slate-900">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-slate-900">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
