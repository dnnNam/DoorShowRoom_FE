import React from "react";

import { FilterX, Loader2 } from "lucide-react";
import Checkbox from "~/components/ui/checkbox";
import type { FilterState } from "~/types/domain/product.type";
import { useFilterOptions } from "~/hooks/productHooks";
import { toggleFilterItem } from "~/utils/products.helper";

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
  const { categories, colors, materials, isLoading } = useFilterOptions();

  const handleToggleChange = <
    T extends keyof Pick<FilterState, "CategoryId" | "Materials" | "Colors">,
  >(
    key: T,
    value: FilterState[T][number], // Lấy type của phần tử trong array
  ) => {
    setFilters((prev) => {
      const currentValue = prev[key] as FilterState[T][number][];
      // ép generic tường minh để khớp với FilterState[T][number]
      const updatedValue = toggleFilterItem<FilterState[T][number]>(
        currentValue,
        value,
      );
      return {
        ...prev,
        [key]: updatedValue,
        page: 1,
      };
    });
  };

  const clearFilters = () => {
    setFilters({
      CategoryId: [],
      Materials: [],
      Colors: [],
      OrderBy: "",
      Sort: "",
      page: 1,
      limit: 6,
    });
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

      {isLoading ? (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Loader2 className="w-4 h-4 animate-spin" />
          Đang tải bộ lọc...
        </div>
      ) : (
        <>
          {/* Categories */}
          {categories.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Danh mục</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <Checkbox
                    key={cat.CategoryId}
                    label={cat.CategoryName}
                    checked={filters.CategoryId.includes(cat.CategoryId)}
                    onChange={() =>
                      handleToggleChange("CategoryId", cat.CategoryId)
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {/* Materials */}
          {materials.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Chất liệu</h4>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <Checkbox
                    key={mat}
                    label={mat}
                    checked={filters.Materials.includes(mat)}
                    onChange={() => handleToggleChange("Materials", mat)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {colors.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Màu sắc</h4>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => {
                  const isActive = filters.Colors.includes(color);
                  return (
                    <button
                      key={color}
                      onClick={() => handleToggleChange("Colors", color)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                        isActive
                          ? "bg-orange-600 text-white border-orange-600"
                          : "bg-white text-gray-700 border-gray-300 hover:border-orange-400"
                      }`}
                    >
                      {color}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default FilterSidebar;