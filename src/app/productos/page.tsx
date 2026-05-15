"use client";

import { useState, useMemo } from "react";
import { SearchBar } from "@/components/ui/search-bar";
import { FiltersSidebar } from "@/app/productos/_components/filters-sidebar";
import { ProductsGrid } from "@/app/productos/_components/products-grid";
import { mockProductos } from "@/app/productos/_components/mock-productos";
import type { Categoria, Material, FilterState } from "@/types";

export default function ProductosPage() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    materials: [],
    lines: [],
    searchQuery: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts = useMemo(() => {
    return mockProductos.filter((product) => {
      const matchesCategory =
        filters.categories.length === 0 ||
        (product.categoria && filters.categories.includes(product.categoria));

      const matchesMaterial =
        filters.materials.length === 0 ||
        (product.material && filters.materials.includes(product.material));

      const matchesSearch =
        filters.searchQuery === "" ||
        product.titulo
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
        product.descripcion
          ?.toLowerCase()
          .includes(filters.searchQuery.toLowerCase());

      return matchesCategory && matchesMaterial && matchesSearch;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleCategoryChange = (category: Categoria, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, category]
        : prev.categories.filter((c) => c !== category),
    }));
    setCurrentPage(1);
  };

  const handleMaterialChange = (material: Material, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      materials: checked
        ? [...prev.materials, material]
        : prev.materials.filter((m) => m !== material),
    }));
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      materials: [],
      lines: [],
      searchQuery: "",
    });
    setCurrentPage(1);
  };

  return (
    <>
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        {/* Search & Title Section */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-4 -ml-1">
                Nuestra Colección.
              </h1>
              <p className="text-on-surface-variant leading-relaxed max-w-md">
                Soluciones de marcos de precisión diseñadas para cerrar la
                brecha entre la comodidad interior y la vista arquitectónica.
              </p>
            </div>
            <SearchBar
              value={filters.searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filter */}
          <FiltersSidebar
            filters={filters}
            onCategoryChange={handleCategoryChange}
            onMaterialChange={handleMaterialChange}
            onClearFilters={handleClearFilters}
          />

          {/* Product Grid Section */}
          <section className="flex-grow">
            <ProductsGrid products={paginatedProducts} />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-20 flex items-center justify-center space-x-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 text-outline-variant hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <span className="font-headline font-bold text-xs uppercase tracking-widest text-primary">
                  Página {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 text-outline-variant hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
