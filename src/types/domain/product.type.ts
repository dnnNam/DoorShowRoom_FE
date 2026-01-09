import type { CATEGORY } from "@/constants/enum";

export interface FilterState {
  CategoryId: number[];
  minPrice: number;
  maxPrice: number;
  Materials: string[];
  Colors: string[];
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
