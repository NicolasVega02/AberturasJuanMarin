import Image from "next/image";

import { ArchitectureIcon, LeafIcon, ShieldIcon } from "@/components/ui/icons";

export function WhyChooseSection() {
  return (
    <section className="bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-surface-container-highest">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlwL8WaHVf8Vpx0Y6yJ-mzAp3h8Rr3VB1-SA7aO_01sxk44T1n-R8udog8vx2_KSMRtiQ-raazXf95CnY61-15R5QsPcyA5AItaUkm70cnD83_qkT6-dRv5u9S0b2hip4-HDzUnS9V2PViXT0ZDOSYCCJWN8H25hbELmJbuBOc4jUTFgvcrydIip6BF28u-fFPkmHlwGAFsF6QeOygImG7lIGC-trPwTdlxP_ua8F5tZgb_Ibm6cUBSzuoNdHJeGJeqQ9GCKaBRcw"
              alt="Detalle de fachada moderna en vidrio y acero."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="absolute -right-6 -bottom-6 hidden w-48 bg-primary p-8 text-on-primary md:block lg:-right-10 lg:-bottom-10 lg:w-64 lg:p-12">
            <span className="mb-2 block font-headline text-4xl leading-none font-extrabold lg:text-5xl">
              25+
            </span>
            <p className="text-xs tracking-widest uppercase opacity-80">
              Años de Excelencia Estructural
            </p>
          </div>
        </div>
        <div>
          <p className="mb-4 font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Nuestra Diferencia
          </p>
          <h2 className="mb-8 font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
            ¿Por qué Aberturas Juan Marin?
          </h2>
          <div className="space-y-10 md:space-y-12">
            <div className="flex gap-5 sm:gap-6">
              <div className="flex size-12 shrink-0 items-center justify-center bg-surface-container-highest">
                <ArchitectureIcon className="size-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-2 font-headline text-lg font-bold">
                  Diseño a Medida
                </h4>
                <p className="leading-relaxed text-on-surface-variant">
                  Cada marco es una pieza única, fabricada bajo las
                  especificaciones exactas de su visión arquitectónica.
                </p>
              </div>
            </div>
            <div className="flex gap-5 sm:gap-6">
              <div className="flex size-12 shrink-0 items-center justify-center bg-surface-container-highest">
                <LeafIcon className="size-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-2 font-headline text-lg font-bold">
                  Eficiencia Energética
                </h4>
                <p className="leading-relaxed text-on-surface-variant">
                  Nuestros sistemas de ruptura de puente térmico reducen el
                  consumo energético hasta en un 40%.
                </p>
              </div>
            </div>
            <div className="flex gap-5 sm:gap-6">
              <div className="flex size-12 shrink-0 items-center justify-center bg-surface-container-highest">
                <ShieldIcon className="size-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-2 font-headline text-lg font-bold">
                  Garantía Extendida
                </h4>
                <p className="leading-relaxed text-on-surface-variant">
                  Utilizamos componentes de grado industrial que aseguran un
                  funcionamiento suave durante décadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
