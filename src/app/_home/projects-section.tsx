import Image from "next/image";

import { projects } from "@/app/_home/data";

export function ProjectsSection() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 flex items-end justify-between md:mb-16">
          <div>
            <p className="mb-4 font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Inspiración
            </p>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
              Proyectos Destacados
            </h2>
          </div>
          <button
            type="button"
            className="hidden items-center gap-2 border-b-2 border-primary/20 pb-1 font-headline text-xs font-bold tracking-widest text-on-surface uppercase transition-all hover:border-primary md:flex"
          >
            Ver Todos
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group cursor-pointer ${project.offset ? "md:mt-12" : ""}`}
            >
              <div className="relative mb-6 aspect-[3/4] overflow-hidden bg-surface-container-low">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <p className="mb-2 font-headline text-[10px] font-bold tracking-widest text-primary uppercase">
                {project.category} • {project.year}
              </p>
              <h4 className="font-headline text-xl font-bold transition-colors group-hover:text-primary">
                {project.title}
              </h4>
              <p className="mt-2 text-sm font-light text-on-surface-variant">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
