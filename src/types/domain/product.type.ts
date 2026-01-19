import type { CATEGORY } from "@/constants/enum";

export interface FilterState {
  CategoryId: number[];
  minPrice: number;
  maxPrice: number;
  Materials: string[];
  Colors: string[];
  OrderBy: OrderByOption;
  Sort: SortOption;
}

export interface UseProductsParams extends FilterState {
  page?: number;
}

export type CategoryId = (typeof CATEGORY)[keyof typeof CATEGORY];

export type Material =
  | "Gỗ tự nhiên"
  | "Gỗ công nghiệp"
  | "Nhôm"
  | "Kính"
  | "Thép";

export type Color = "Trắng" | "Nâu" | "Đen" | "Xám" | "Tự nhiên";

export type SortOption = "newest" | "best_selling" | "";
export type OrderByOption = "asc" | "desc" | "";

export interface ProductFilterStore {
  Keyword: string;
  filters: FilterState;
  //  Partial<FilterState> cho phép chỉ truyền một phần của FilterState
  setFilters: (filters: Partial<FilterState>) => void;
  setKeyword: (keyword: string) => void;
  resetAll: () => void;

  toggleArrayFilter: <
    T extends keyof Pick<FilterState, "CategoryId" | "Materials" | "Colors">,
  >(
    key: T,
    value: FilterState[T][number],
  ) => void;

  setPrice: (key: "minPrice" | "maxPrice", value: number) => void;
}
