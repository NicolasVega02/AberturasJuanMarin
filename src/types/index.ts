export type Categoria = "ventana" | "puerta" | "porton";
export type Material = "aluminio" | "pvc" | "chapa" | "madera";

export interface Producto {
  id: string;
  titulo: string;
  categoria: Categoria | null;
  material: Material | null;
  linea: string | null;
  ancho_cm: number | null;
  alto_cm: number | null;
  vidrio: string | null;
  imagen_url: string;
  descripcion: string | null;
  created_at: string;
  updated_at: string;
}

export interface FilterState {
  categories: Categoria[];
  materials: Material[];
  lines: string[];
  searchQuery: string;
}

export interface ItemCarrito {
  productoId: string;
  cantidad: number;
}

export interface ItemCarritoDetallado extends ItemCarrito {
  producto: Producto;
  precioUnitario: number;
}

export interface SummaryData {
  cantidadTotal: number;
  subtotal: number;
  costoLogistica: number;
  total: number;
  linkWhatsApp: string;
}
