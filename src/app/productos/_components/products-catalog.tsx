"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SearchBar } from "@/components/ui/search-bar";
import { FiltersSidebar } from "./filters-sidebar";
import { ProductsGrid } from "./products-grid";
import type { Categoria, Material, FilterState, Producto } from "@/types";

interface ProductsCatalogProps {
  inicialProducts: Producto[];
}

export function ProductsCatalog({ inicialProducts }: ProductsCatalogProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    materials: [],
    lines: [],
    searchQuery: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts = useMemo(() => {
    return inicialProducts.filter((product) => {
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
  }, [filters, inicialProducts]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleMaterialChange = (material: Material, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      materials: checked
        ? [...prev.materials, material]
        : prev.materials.filter((m) => m !== material),
    }));
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: Categoria, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, category]
        : prev.categories.filter((c) => c !== category),
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
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:items-end justify-end">
        <SearchBar value={filters.searchQuery} onChange={handleSearchChange} />
      </div>

      <div className="flex flex-col md:flex-row gap-12 mt-6">
        <FiltersSidebar
          filters={filters}
          onCategoryChange={handleCategoryChange}
          onMaterialChange={handleMaterialChange}
          onClearFilters={handleClearFilters}
        />
        <section className="flex-grow">
          <ProductsGrid products={paginatedProducts} />
          {totalPages > 1 && (
            <div className="mt-20 flex items-center justify-center space-x-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
    </div>
  );
}
