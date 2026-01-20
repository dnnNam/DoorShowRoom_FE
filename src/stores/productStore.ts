import type { ProductStore } from "@/types/domain/product.type";
import { create } from "zustand";

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  clearProducts: () => set({ products: [] }),
}));
