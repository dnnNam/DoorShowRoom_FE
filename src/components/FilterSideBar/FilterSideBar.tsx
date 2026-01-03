import React from "react";

import { FilterX } from "lucide-react";
import Checkbox from "../ui/checkbox";

export type Category =
  | "Cửa gỗ"
  | "Cửa kính"
  | "Cửa thép"
  | "Cửa cuốn"
  | "Cửa nhôm";

export type Material =
  | "Gỗ tự nhiên"
  | "Gỗ công nghiệp"
  | "Nhôm"
  | "Kính"
  | "Thép";
export type Size = "80x200cm" | "90x200cm" | "100x200cm" | "120x200cm";
export type Color = "Trắng" | "Nâu" | "Đen" | "Xám" | "Tự nhiên";
interface FilterState {
  categories: Category[];
  priceRange: [number, number];
  materials: Material[];
  sizes: Size[];
  colors: Color[];
}
interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  className?: string;
}
const CATEGORIES: Category[] = [
  "Cửa gỗ",
  "Cửa kính",
  "Cửa thép",
  "Cửa cuốn",
  "Cửa nhôm",
];
const MATERIALS: Material[] = [
  "Gỗ tự nhiên",
  "Gỗ công nghiệp",
  "Nhôm",
  "Kính",
  "Thép",
];
const SIZES: Size[] = ["80x200cm", "90x200cm", "100x200cm", "120x200cm"];
const COLORS: Color[] = ["Trắng", "Nâu", "Đen", "Xám", "Tự nhiên"];
const COLOR_MAP: Record<Color, string> = {
  Trắng: "#FFFFFF",
  Nâu: "#8B4513",
  Đen: "#000000",
  Xám: "#808080",
  "Tự nhiên": "#D2B48C",
};
export function FilterSidebar({
  filters,
  setFilters,
  className = "",
}: FilterSidebarProps) {
  const handleCategoryChange = (category: Category) => {
    setFilters((prev) => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: newCategories };
    });
  };
  const handleMaterialChange = (material: Material) => {
    setFilters((prev) => {
      const newMaterials = prev.materials.includes(material)
        ? prev.materials.filter((m) => m !== material)
        : [...prev.materials, material];
      return { ...prev, materials: newMaterials };
    });
  };
  const handleSizeChange = (size: Size) => {
    setFilters((prev) => {
      const newSizes = prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes: newSizes };
    });
  };
  const handleColorChange = (color: Color) => {
    setFilters((prev) => {
      const newColors = prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color];
      return { ...prev, colors: newColors };
    });
  };
  const handlePriceChange = (value: number, index: 0 | 1) => {
    setFilters((prev) => {
      const newRange: [number, number] = [...prev.priceRange];
      newRange[index] = value;
      return { ...prev, priceRange: newRange };
    });
  };
  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 50000000],
      materials: [],
      sizes: [],
      colors: [],
    });
  };
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(price);
  };
  return (
    <div className={`space-y-8 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-gray-900">Bộ lọc tìm kiếm</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-gray-500 hover:text-orange-600 flex items-center gap-1 transition-colors"
        >
          <FilterX className="w-3 h-3" /> Xóa
        </button>
      </div>
      {/* Categories */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-900">Danh mục</h4>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <Checkbox
              key={cat}
              label={cat}
              checked={filters.categories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
            />
          ))}
        </div>
      </div>
      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Khoảng giá</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{formatPrice(filters.priceRange[0])}</span>
            <span>{formatPrice(filters.priceRange[1])}</span>
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div
              className="absolute h-full bg-orange-500 rounded-full"
              style={{
                left: `${(filters.priceRange[0] / 50000000) * 100}%`,
                right: `${100 - (filters.priceRange[1] / 50000000) * 100}%`,
              }}
            />
            <input
              type="range"
              min="0"
              max="50000000"
              step="500000"
              value={filters.priceRange[0]}
              onChange={(e) => {
                const val = Math.min(
                  parseInt(e.target.value),
                  filters.priceRange[1] - 1000000
                );
                handlePriceChange(val, 0);
              }}
              className="absolute w-full h-full opacity-0 cursor-pointer z-10"
            />
            <input
              type="range"
              min="0"
              max="50000000"
              step="500000"
              value={filters.priceRange[1]}
              onChange={(e) => {
                const val = Math.max(
                  parseInt(e.target.value),
                  filters.priceRange[0] + 1000000
                );
                handlePriceChange(val, 1);
              }}
              className="absolute w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>
        </div>
      </div>
      {/* Materials */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-900">Chất liệu</h4>
        <div className="space-y-2">
          {MATERIALS.map((mat) => (
            <Checkbox
              key={mat}
              label={mat}
              checked={filters.materials.includes(mat)}
              onChange={() => handleMaterialChange(mat)}
            />
          ))}
        </div>
      </div>
      {/* Sizes */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-900">Kích thước</h4>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`px-3 py-1.5 text-xs rounded border transition-colors ${
                filters.sizes.includes(size)
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-orange-500"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      {/* Colors */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-900">Màu sắc</h4>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={`w-8 h-8 rounded-full border shadow-sm relative transition-transform hover:scale-110 ${
                filters.colors.includes(color)
                  ? "ring-2 ring-offset-2 ring-orange-500"
                  : ""
              }`}
              style={{ backgroundColor: COLOR_MAP[color] }}
              title={color}
            >
              {color === "Trắng" && <span className="sr-only">White</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FilterSidebar;
