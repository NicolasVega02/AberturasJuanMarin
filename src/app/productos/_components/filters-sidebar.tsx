"use client";

import type { Categoria, Material, FilterState } from "@/types";

interface FiltersSidebarProps {
  filters: FilterState;
  onCategoryChange: (category: Categoria, checked: boolean) => void;
  onMaterialChange: (material: Material, checked: boolean) => void;
  onClearFilters: () => void;
}

const CATEGORIES: { label: string; value: Categoria }[] = [
  { label: "Ventanas", value: "ventana" },
  { label: "Puertas", value: "puerta" },
  { label: "Portones", value: "porton" },
];

const MATERIALS: { label: string; value: Material }[] = [
  { label: "Aluminio", value: "aluminio" },
  { label: "PVC", value: "pvc" },
  { label: "Chapa", value: "chapa" },
  { label: "Madera", value: "madera" },
];

export function FiltersSidebar({
  filters,
  onCategoryChange,
  onMaterialChange,
  onClearFilters,
}: FiltersSidebarProps) {
  return (
    <aside className="w-full md:w-64 space-y-10 shrink-0">
      <div>
        <h3 className="font-headline text-xs font-bold uppercase tracking-widest text-primary mb-6">
          Categoría
        </h3>
        <div className="space-y-3">
          {CATEGORIES.map((category) => (
            <label
              key={category.value}
              className="flex items-center group cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(category.value)}
                onChange={(e) =>
                  onCategoryChange(category.value, e.target.checked)
                }
                className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-transparent accent-primary"
              />
              <span className="ml-3 text-sm font-medium group-hover:text-primary transition-colors">
                {category.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-headline text-xs font-bold uppercase tracking-widest text-primary mb-6">
          Material
        </h3>
        <div className="space-y-3">
          {MATERIALS.map((material) => (
            <label
              key={material.value}
              className="flex items-center group cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.materials.includes(material.value)}
                onChange={(e) =>
                  onMaterialChange(material.value, e.target.checked)
                }
                className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-transparent accent-primary"
              />
              <span className="ml-3 text-sm font-medium group-hover:text-primary transition-colors">
                {material.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {(filters.categories.length > 0 ||
        filters.materials.length > 0 ||
        filters.searchQuery) && (
        <div className="pt-4">
          <button
            onClick={onClearFilters}
            className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-dim transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </aside>
  );
}
