import Image from "next/image";

import { ArrowRightIcon } from "@/components/ui/icons";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[740px] items-center overflow-hidden md:min-h-[921px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh9j6vJjLtS4wcs26ilx-SUI2GkXXfedaymbPPC2kYHzG7OYBGrFrIojNCuT2_FwCiJko2ULRFn7FMknXjUkKBo2uuhzraLdy_zlKdYtBWoevGzVzWhYXLK3gDzBcBv0ty4o0GWFPEDWlL0iaXZ11TERL0XQGsGBOOv2AhEanxtfcQ0jYqpINTTAdlhdgnYA--Fa-O-hs46wIFtB18JWGCP4VHHaacutbxSykbNrK2LRIXM3G0wtD-pTpJNEivN5Skm49yebQ6PAY"
          alt="Villa moderna con ventanales de piso a techo al atardecer."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/60 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 sm:px-8">
        <div className="max-w-2xl">
          <h1 className="text-shadow-sm mb-6 font-headline text-5xl leading-tight font-extrabold tracking-[-0.02em] text-white md:text-7xl">
            Elegancia y Durabilidad en cada Apertura
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed font-light text-white/90 sm:text-xl">
            Transformamos espacios a través de la luz y la precisión
            estructural. Soluciones de cerramientos de alto rendimiento para
            proyectos exigentes.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="flex items-center gap-2 rounded-md bg-gradient-to-br from-primary to-primary-dim px-8 py-4 font-medium text-on-primary shadow-xl transition-transform hover:scale-[0.98]"
            >
              Ver Catálogo
              <ArrowRightIcon className="size-5" />
            </button>
            <button
              type="button"
              className="rounded-md border border-white/20 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Contactar Asesor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
