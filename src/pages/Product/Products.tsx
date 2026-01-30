import FilterSidebar from "~/components/FilterSideBar";
import ProductCard from "~/components/ProductCard";
import classNames from "classnames";
import { useAllProducts } from "~/hooks/productHooks";

import type { FilterState, OrderByOption } from "~/types/domain/product.type";

import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useQueryString } from "~/utils/utils";

export default function Products() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    CategoryId: [],
    minPrice: 0,
    maxPrice: 8500000,
    Materials: [],
    Colors: [],
    OrderBy: "",
    Sort: "",
    page: 1,
    limit: 6,
  });
  // lấy page từ query string
  const queryString: { page?: string } = useQueryString();
  const page = Number(queryString.page) || 1;
  // đồng bộ page từ query string vào filters

  // gọi APi lấy products
  const { data: products } = useAllProducts({
    ...filters,
    page: page,
  });

  console.log("data từ API: ", products);
  const totalProducts = Number(products?.total) || 0;
  const totalPage = Math.ceil(totalProducts / filters?.limit);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>
          </aside>
          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  // khi người màn hình dưới 1024px hiển thị moblie filter
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                  onClick={() => setIsMobileFilterOpen(true)}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Bộ lọc
                </button>
                <span className="text-sm text-gray-500">
                  Hiển thị{" "}
                  <span className="font-bold text-gray-900">
                    {products?.items?.length || 0}
                  </span>{" "}
                  sản phẩm
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 hidden sm:inline">
                  Sắp xếp theo:
                </span>
                <div className="relative group">
                  <select
                    value={filters.OrderBy || filters.Sort}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value === "newest" || value === "best_selling") {
                        setFilters((prev) => ({
                          ...prev,
                          Sort: value,
                          OrderBy: "",
                        }));
                      } else {
                        setFilters((prev) => ({
                          ...prev,
                          OrderBy: value as OrderByOption,
                          Sort: "",
                        }));
                      }
                    }}
                    className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <option value="newest">Mới nhất</option>
                    <option value="best_selling">Bán chạy nhất</option>
                    <option value="asc">Giá tăng dần</option>
                    <option value="desc">Giá giảm dần</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
            {/* Product Grid */}
            {products && products.items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.items?.map((product) => (
                  <ProductCard key={product.ProductId} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-lg border border-dashed border-gray-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <SlidersHorizontal className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Không tìm thấy sản phẩm
                </h3>
                <p className="text-gray-500 mb-6">
                  Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm của bạn
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      CategoryId: [],
                      minPrice: 0,
                      maxPrice: 8500000,
                      Materials: [],
                      Colors: [],
                      OrderBy: "",
                      Sort: "",
                      page: 1,
                      limit: 6,
                    })
                  }
                  className="text-orange-600 font-medium hover:underline"
                >
                  Xóa tất cả bộ lọc
                </button>
              </div>
            )}

            {/* Pagination */}

            <div className="mt-6 flex justify-center">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                  <li>
                    {page === 1 ? (
                      // nếu như page = 1 không cho previous thì ta trả về cho nó 1 thẻ span không click được
                      <span className="cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Previous
                      </span>
                    ) : (
                      // khác 1 thì trả về thẻ Link để click
                      <Link
                        className=" rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100
                     hover:text-gray-700 "
                        to={`/products/?page=${page - 1}`}
                      >
                        Previous
                      </Link>
                    )}
                  </li>
                  {Array(totalPage)
                    .fill(0)
                    .map((_, index) => {
                      const pageNumber = index + 1;
                      const isActive = page === pageNumber;
                      return (
                        <li key={pageNumber}>
                          <Link
                            className={classNames(
                              "border border-gray-300   py-2 px-3 leading-tight     hover:bg-gray-100  hover:text-gray-700",
                              {
                                "bg-gray-100 text-gray-700": isActive,
                                "bg-white  text-gray-500": !isActive, // khi không có active thì nó mới có bg-white
                              },
                            )}
                            to={`/products?page=${pageNumber}`}
                          >
                            {pageNumber}
                          </Link>
                        </li>
                      );
                    })}

                  <li>
                    {page === totalPage ? (
                      <span className="cursor-not-allowed rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Next
                      </span>
                    ) : (
                      <Link
                        className="rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        to={`/products/?page=${page + 1}`}
                      >
                        Next
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
      {/* Mobile Filter Overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Bộ lọc</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar filters={filters} setFilters={setFilters} />
            <div className="mt-8 pt-4 border-t border-gray-100">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-orange-600 text-white py-3 rounded-md font-medium hover:bg-orange-700"
              >
                {/* Xem {filteredProducts.length} kết quả */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
