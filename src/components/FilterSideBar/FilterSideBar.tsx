import React from "react";

import { FilterX } from "lucide-react";
import Checkbox from "../ui/checkbox";
import type { FilterState } from "@/types/domain/product.type";
import { CATEGORIES, COLOR_MAP, COLORS, MATERIALS } from "@/constants/filter";
import { toggleFilterItem } from "@/utils/products.helper";

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  className?: string;
}

export function FilterSidebar({
  filters,
  setFilters,
  className = "",
}: FilterSidebarProps) {
  const handleToggleChange = <
    T extends keyof Pick<FilterState, "CategoryId" | "Materials" | "Colors">
  >(
    key: T,
    value: FilterState[T][number] // Lấy type của phần tử trong array
  ) => {
    setFilters((prev) => {
      const currentValue = prev[key] as FilterState[T][number][];
      const updatedValue = toggleFilterItem(currentValue, value);
      return {
        ...prev,
        [key]: updatedValue,
      };
    });
  };

  const handlePriceChange = (key: "minPrice" | "maxPrice", value: number) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      CategoryId: [],
      minPrice: 0,
      maxPrice: 8500000,
      Materials: [],
      Colors: [],
      OrderBy: "",
      Sort: "",
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
              key={cat?.id}
              label={cat?.label}
              checked={filters.CategoryId.includes(cat?.id)}
              onChange={() => handleToggleChange("CategoryId", cat?.id)}
            />
          ))}
        </div>
      </div>
      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Khoảng giá</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{formatPrice(filters.minPrice)}</span>
            <span>{formatPrice(filters.maxPrice)}</span>
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div
              className="absolute h-full bg-orange-500 rounded-full"
              style={{
                left: `${(filters.minPrice / 50000000) * 100}%`,
                right: `${100 - (filters.maxPrice / 50000000) * 100}%`,
              }}
            />
            <input
              type="range"
              min="0"
              max="50000000"
              step="500000"
              value={filters.minPrice}
              onChange={(e) => {
                const val = Math.min(
                  parseInt(e.target.value),
                  filters.maxPrice - 1000000
                );
                handlePriceChange("minPrice", val);
              }}
              className="absolute w-full h-full opacity-0 cursor-pointer z-10"
            />
            <input
              type="range"
              min="0"
              max="50000000"
              step="500000"
              value={filters.maxPrice}
              onChange={(e) => {
                const val = Math.max(
                  parseInt(e.target.value),
                  filters.minPrice + 1000000
                );
                handlePriceChange("maxPrice", val);
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
              checked={filters.Materials.includes(mat)}
              onChange={() => handleToggleChange("Materials", mat)}
            />
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
              onClick={() => handleToggleChange("Colors", color)}
              className={`w-8 h-8 rounded-full border shadow-sm relative transition-transform hover:scale-110 ${
                filters.Colors.includes(color)
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
