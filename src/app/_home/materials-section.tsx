import Image from "next/image";

export function MaterialsSection() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 md:mb-16">
          <p className="mb-4 font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Ingeniería Superior
          </p>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
            Nuestros Materiales
          </h2>
        </div>
        <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12 md:gap-8">
          <div className="relative min-h-[220px] overflow-hidden bg-surface-container-low md:col-span-8 md:min-h-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUm3iSkQ3SSNLtSAEtjTn3EZEGKrgeeDOvqh1d9pBdz6YhmaT2m9fNA-N_-JyFVRWi46dl8jbpZ161urUxnSjycUPhAFdRukpSNITpORTMIgkA070OHVSEtuZqlPlZrxOpP8T3Dhse8FnUxGUcyeUMpQUe5oe2C-o7ZwfUy8A6Vy3x5ymP-t_sdJ1HJa9N4C58Ojh54LLbdE1KF8byV9bjaloQqoVD0zyKnFaLUflbwRUkQTyRQBRgexgpqyjRhRSVfqUXSmSZ5cQ"
              alt="Detalle de perfil de aluminio antracita con líneas minimalistas."
              fill
              className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
              sizes="(min-width: 768px) 65vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-6 sm:p-10">
              <h3 className="mb-2 font-headline text-3xl font-bold text-white">
                Aluminio
              </h3>
              <p className="max-w-md font-light text-white/80">
                Resistencia estructural extrema con perfiles ultra-delgados para
                una máxima entrada de luz natural.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 text-xs tracking-widest text-white uppercase backdrop-blur-sm">
                  Minimalista
                </span>
                <span className="bg-white/20 px-3 py-1 text-xs tracking-widest text-white uppercase backdrop-blur-sm">
                  Térmico
                </span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden bg-surface-container-low md:col-span-4 md:min-h-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwl4agm2mg2mIs2z0HS1164f1F5zY6QLx_0SDewygL5eD_PL0u4hGauDY7dm-qxxCjzU333SaM7H-V5nYuR2hN1gSvEkJiEuuNHaWlKMxEvDaFogDUcNnnCgO9BAZzOnDMpGOsVKSlYVGaeFQiQt_8m_Qay-xbi01T0eULqoMdmHtz2Sp0AEUxJf1Y-QulWlK02XH6OJFdqZm0-yFUt3tMIWE126iowyxoZQ4vyri48zaqsn_dtDAiacHUCbJIE7sc9yN9lMUawWY"
              alt="Ventana de PVC de alta eficiencia térmica y acústica."
              fill
              className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
              sizes="(min-width: 768px) 35vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-6 sm:p-10">
              <h3 className="mb-2 font-headline text-3xl font-bold text-white">
                PVC
              </h3>
              <p className="font-light text-white/80">
                La máxima eficiencia térmica y aislamiento acústico para un
                confort inigualable en el hogar.
              </p>
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden bg-surface-container-low md:col-span-12 md:h-[300px] md:min-h-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-yb2hPv94Fhb2JvXEs8k9Fc2NYQWZdQrftbZxTl9klGErYH0b2rOfD0qgtHRN5zryomciLyJi0FOe9W8wY-BRdBPpymo_Y4xs4jVzHJ44tAe7PN7SIobkBsiR95fVUinofwGqQfn61NJjYHdPIv4w6IrGYEcGy04VHwEl0pXKa2-2r8jtB-qvZb7HsHKtMUTDvaFaDS0sZJzswI6duvpuOgJDGwl3a-UMbFqQUTEzvoA2VKq2RZuUkmliQAUcD-rtHobYfwR8fw"
              alt="Marco de madera noble con acabado premium."
              fill
              className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 via-transparent to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-2xl flex-col justify-center p-6 sm:p-12">
              <h3 className="mb-2 font-headline text-4xl font-bold text-white">
                Madera Noble
              </h3>
              <p className="font-light text-white/80">
                Calidez orgánica y artesanía tradicional combinada con
                tecnología de sellado contemporánea.
              </p>
              <a
                href="#"
                className="mt-6 w-fit border-b border-white/30 pb-1 text-sm font-bold tracking-widest text-white uppercase transition-all hover:border-white"
              >
                Explorar Acabados
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
