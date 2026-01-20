import type {
  Color,
  Material,
  UseProductsParams,
} from "@/types/domain/product.type";
import { CATEGORY } from "./enum";

export const CATEGORIES = [
  { id: CATEGORY.CUA_GO, label: "Cửa gỗ" },
  { id: CATEGORY.CUA_NHOM_KINH, label: "Cửa nhôm kính" },
  { id: CATEGORY.CUA_KINH_CUONG_LUC, label: "Cửa kính cường lực" },
] as const;
export const MATERIALS: Material[] = [
  "Gỗ tự nhiên",
  "Gỗ công nghiệp",
  "Nhôm",
  "Kính",
  "Thép",
];

export const COLORS: Color[] = ["Trắng", "Nâu", "Đen", "Xám", "Tự nhiên"];
export const COLOR_MAP: Record<Color, string> = {
  Trắng: "#FFFFFF",
  Nâu: "#8B4513",
  Đen: "#000000",
  Xám: "#808080",
  "Tự nhiên": "#D2B48C",
};

export const defaultParams: UseProductsParams = {
  CategoryId: [],
  minPrice: 0,
  maxPrice: 50000000,
  Materials: [],
  Colors: [],
  OrderBy: "",
  Sort: "",
};
