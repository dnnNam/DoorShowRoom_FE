import type {
  FilterState,
  ProductFilterStore,
} from "@/types/domain/product.type";
import { create } from "zustand";

export const useProductFilterStore = create<ProductFilterStore>((set) => ({
  Keyword: "",
  filters: {
    CategoryId: [],
    minPrice: 0,
    maxPrice: 8500000,
    Materials: [],
    Colors: [],
    OrderBy: "",
    Sort: "",
  },

  setKeyword: (keyword: string) =>
    set(() => ({
      Keyword: keyword,
    })),

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetAll: () =>
    set({
      Keyword: "",
      filters: {
        CategoryId: [],
        minPrice: 0,
        maxPrice: 8500000,
        Materials: [],
        Colors: [],
        OrderBy: "",
        Sort: "",
      },
    }),

  toggleArrayFilter: (
    key: keyof Pick<FilterState, "CategoryId" | "Materials" | "Colors">,
    value: string | number,
  ) =>
    set((state) => {
      const current = state.filters[key] as (string | number)[];

      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      return {
        filters: {
          ...state.filters,
          [key]: updated,
        },
      };
    }),

  setPrice: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),
}));
