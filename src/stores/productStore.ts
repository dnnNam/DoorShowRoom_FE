import { create } from "zustand";
// demo store for products
export const useProductStore = create(() => ({
  products: [],
}));
