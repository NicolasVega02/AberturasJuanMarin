import type { Producto } from "@/types";

export const mockProductos: Producto[] = [
  {
    id: "1",
    titulo: "Linear Horizon Window",
    categoria: "ventana",
    material: "aluminio",
    linea: "Minimal",
    ancho_cm: 120,
    alto_cm: 150,
    vidrio: "Low-E",
    imagen_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALp7QRW6BElzs2YXgt1nyzzvU5sGMjxwfqtrJ3rOwxQaw6wa1Z9p1W-f-jf7W-2He6lC7rF-Bn2xbyWcehsyZCPg8lF4WJ_TncRWMEvTSPjBsFsLhyBm5v0EgS9zQWS-NI4zP33pxmIoyGDT58hRsY_FVDMPYNnIdA2-BiEZ-D2FPtuFjQszUD_jfKCHXbd3tWYxmHptyGxiLAE_EYmaD7BVTqeqFZz774qBeqa6HTy45XWaDP9qpPNnANsoLdE7dSXyMEDJAoDCU",
    descripcion:
      "Sleek aluminum frame with thermal break technology and low-emissivity glass.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    titulo: "Monolith Pivot Door",
    categoria: "puerta",
    material: "chapa",
    linea: "Contemporary",
    ancho_cm: 100,
    alto_cm: 220,
    vidrio: "Frosted",
    imagen_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnmX9c0IR7PtPcvhNR0lwauzgGP2zfNvWUeq05JsEXBc2jYLq6d5VZAy_kea_j66zNocHyZqibh8AjcEn1ylu_YZgHM_DL3saNTjwA5LEZbSCysRILf9Yt8p2emrcugMsP8AtibqkgV_P1Cdi7BmkZyYFfQ_ojh8JGn3QL-LEDbY_3lKvoVXjrJs2iflAG6kYFQhLY1fya4xZG1EueMP_CYTWIKaI23DeJuWh5AnXHgicujMEWw1j16TRl2-hlpo-bnT2RN5SAVKE",
    descripcion:
      "Grand entrance system with floor-to-ceiling pivot mechanism and integrated smart locks.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    titulo: "Heritage Sash Series",
    categoria: "ventana",
    material: "pvc",
    linea: "Classic",
    ancho_cm: 90,
    alto_cm: 120,
    vidrio: "Double Pane",
    imagen_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjQGjHQiFWpshRb8XttpvX3DLU2sepbLrn9DEPFZ8Ry1E7ChaWTiQM2gZpZPeGccWd5WQpVitFMfcxolpK9VQgzx2sPtaGbxQxHbKIlZbtRlx1KhSH6QRxHRwRKSU8cDAre9K7ebyiF9Ub4R8GQsBu9uSyaAE6WV_fsNIDTrhxDww4wzn3BVCBcQuP04GvGfhZ9_bycbozd1QFRg23VTR3RlHWlhDc3KapRTXDxf9m4DIpDsGYE6iGpzbcGJj90tJ9eK9EDj5zSJ4",
    descripcion:
      "Traditional aesthetics combined with modern high-performance PVC insulation layers.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    titulo: "Vista Glide Wall",
    categoria: "ventana",
    material: "aluminio",
    linea: "Minimal",
    ancho_cm: 200,
    alto_cm: 200,
    vidrio: "Tempered",
    imagen_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATHYm5YGW6dHlagqX3mG5yk9c8HF1XP3VvBzdVSeaL6HzB9xZJ6LEokXAg72roWxClzAQOHrc90DcuvpJ6qhPGibAOpHyidbwPGd0miWOEGDM9pti_-z3XP01c2u3yp8xeGlzlkSf9qE2wF8dFXJ_JguB_Gn-7X71V8W5Rpjyn9L1D595Tdi5nsgxo6NVXYe2D7eepHLvE3TMvc3NBL4mXs_ft3wx-nffcBH9QGXdR5VL096oP-oKrdGOi1q5ap7uoiN0xhLBNfEQ",
    descripcion:
      "Extra-slim profile sliding system designed for seamless indoor-outdoor transition.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "5",
    titulo: "Timber Frame Casement",
    categoria: "ventana",
    material: "madera",
    linea: "Classic",
    ancho_cm: 85,
    alto_cm: 140,
    vidrio: "Triple Pane",
    imagen_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ3V_0uKtdIZs8Ypa5TzOyk9umZ7eV9tsi0DEZ9qayiF6xCWheQK0irVWCbQ4qNBpzH8BNKwmS6vyzrB5Zp4GIiOnEpYWqmRAeCpP47F8kdhGRo1-HvFqBYluNbf8gAfSCFOH2XqHLSAILgE0ugzAKg07Ro-3NXLxicS3fV86SfSjqutWy9kdfyH09cEVZy7UuRYp3veSMJfU02EVJHxhejZvCRzMVOxj61CjhfPp41U1XTSWGVok2Ii5EMUfQ-vLGrCG7yq9mpIQ",
    descripcion:
      "Sustainable oak framing with triple-pane acoustic glazing for ultimate tranquility.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "6",
    titulo: "Gridline Interior Door",
    categoria: "puerta",
    material: "chapa",
    linea: "Contemporary",
    ancho_cm: 95,
    alto_cm: 200,
    vidrio: "Frosted Grid",
    imagen_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCdAeMvX-IqAIrPsPbtMbkIcvdMM8mXbFSTgGClHIpISyRRWiJvh9S4f6Zs4Anwx1IOqs_5sMsQPu-FBx96RRx3_YTucFdV9srnX-S0osohOPFRA-DxrIDRlCDAwqKr90lkxIc7jEPLouKt-AcHo_QK4vtem7qkOqsDLY_Q_3x97xV5E6ufu2kyhXQTjX3sfIFO-SyUvSOYexVWO28Aa5c0Kd8Vl8Z8_NdMXxtwr4j8lWYtbGJ9IEGyLrwhHMbiQ-lsGS0SvAFB0s",
    descripcion:
      "Industrial-inspired steel grid patterns with textured frosted glass inserts.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
