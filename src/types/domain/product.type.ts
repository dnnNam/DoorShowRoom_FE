import type { CATEGORY } from "~/constants/enum";
import type { Product } from "~/types/api/product.type";

export interface FilterState {
  CategoryId: number[];
  minPrice: number;
  maxPrice: number;
  Materials: string[];
  Colors: string[];
  OrderBy: OrderByOption;
  Sort: SortOption;
  page: number;
  limit: number;
}

export interface UseProductsParams extends Partial<FilterState> {
  page?: number;
  Keyword?: string;
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
export interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  clearProducts: () => void;
}
