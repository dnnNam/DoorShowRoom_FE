import type { CATEGORY } from "@/constants/enum";

export interface UseProductsParams {
  categroryId?: number;
  page?: number;
  minPrice?: number;
  maxPrice?: number;
  Material?: Material;
  Size?: Size;
  Color?: Color;
}

export interface FilterState {
  CategoryId: number | null;
  minPrice: number;
  maxPrice: number;
  Materials: Material | null;
  Sizes: Size | null;
  Colors: Color | null;
}

export type CategoryId = (typeof CATEGORY)[keyof typeof CATEGORY];

export type Material =
  | "Gỗ tự nhiên"
  | "Gỗ công nghiệp"
  | "Nhôm"
  | "Kính"
  | "Thép";
export type Size = "80x200cm" | "90x200cm" | "100x200cm" | "120x200cm";
export type Color = "Trắng" | "Nâu" | "Đen" | "Xám" | "Tự nhiên";
