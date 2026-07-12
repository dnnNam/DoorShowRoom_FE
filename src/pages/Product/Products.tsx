import FilterSidebar from "~/components/FilterSideBar";
import ProductCard from "~/components/ProductCard";
import { useAllProducts } from "~/hooks/productHooks";
import type { FilterState, OrderByOption } from "~/types/domain/product.type";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { SlidersHorizontal, X } from "lucide-react";
import Seo from "~/components/seo/Seo";

export default function Products() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    CategoryId: [],
    Materials: [],
    Colors: [],
    OrderBy: "",
    Sort: "",
    page: 1,
    limit: 6,
  });

  // Gọi API lấy danh sách sản phẩm chính dựa theo bộ lọc
  const { data: products } = useAllProducts(filters);

  // Gọi API lấy dữ liệu tiêu biểu cho khối Gợi Ý Sản Phẩm dưới Sidebar
  const { data: recommendedData } = useAllProducts({
    page: 1,
    limit: 3, 
    Sort: "best_selling",
  });

  const totalProducts = Number(products?.total) || 0;
  const totalPages = Math.ceil(totalProducts / filters?.limit);

  return (
    <div className="bg-[#f9f9f9] font-['Inter'] text-[#1a1c1c] selection:bg-[#fed488] min-h-screen">
      <Seo
        title="Danh Mục Sản Phẩm"
        description="Khám phá đầy đủ danh mục cửa nhôm Xingfa, cửa kính cường lực, cửa cuốn của Đại Nam — lọc theo chất liệu, màu sắc, mức giá phù hợp với công trình của bạn."
        path="/products"
      />

      <main className="pt-32 pb-32">
        {/* Hero Section / Catalog Header */}
        <section className="max-w-[1440px] mx-auto px-20 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#775a19] mb-4 block">Hệ Thống Kiến Trúc</span>
              <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-medium leading-tight">Danh Mục Sản Phẩm</h1>
            </div>
            
            {/* Toolbar sắp xếp */}
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#eeeeee] text-xs font-semibold tracking-widest uppercase transition-colors"
                onClick={() => setIsMobileFilterOpen(true)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Bộ lọc
              </button>
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#444748]">Sắp xếp theo:</span>
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
                  className="bg-transparent border-none text-xs font-semibold tracking-widest uppercase text-black focus:ring-0 cursor-pointer pr-8"
                >
                  <option value="newest">Mới Nhất</option>
                  <option value="best_selling">Phổ Biến Nhất</option>
                  <option value="asc">Giá Tăng Dần</option>
                  <option value="desc">Giá Giảm Dần</option>
                </select>
              </div>
            </div>
          </div>
          <div className="text-xs text-[#444748] mt-4 font-semibold tracking-widest uppercase">
            Hiển thị <span className="text-black font-bold">{products?.items?.length || 0}</span> sản phẩm
          </div>
        </section>

        {/* Layout Danh mục chính */}
        <div className="max-w-[1440px] mx-auto px-20 grid grid-cols-12 gap-8">
          
          {/* Sidebar bộ lọc & Gợi ý sản phẩm - Desktop */}
          <aside className="col-span-12 lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-12">
              <FilterSidebar filters={filters} setFilters={setFilters} />

              {/* Phần GỢI Ý SẢN PHẨM dưới bộ lọc */}
              <div className="pt-8 border-t border-[#e2e2e2]">
                <h3 className="font-['Playfair_Display'] text-xl font-medium text-black mb-6 tracking-tight">
                  Bộ Sưu Tập Gợi Ý
                </h3>
                <div className="space-y-6">
                  {recommendedData?.items?.map((item) => (
                    <Link 
                      key={item.ProductId} 
                      to={`/products/${item.ProductId}-${item.Slug}`}
                      className="flex gap-4 group/rec items-center"
                    >
                      <div className="w-20 h-24 shrink-0 overflow-hidden bg-[#eeeeee]">
                        <img 
                            src={item?.Media?.[0]?.Url}
                          alt={item.ProductName} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/rec:scale-105"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <h4 className="text-sm font-medium text-black line-clamp-2 group-hover/rec:text-[#775a19] transition-colors">
                          {item.ProductName}
                        </h4>
                        <p className="text-[9px] text-[#444748] uppercase tracking-wider mt-0.5">
                          {item.Categories?.CategoryName || "Hệ Cao Cấp"}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Lưới sản phẩm chính */}
          <section className="col-span-12 lg:col-span-9">
            {products && products.items.length > 0 ? (
              <motion.div
                key={filters.page + JSON.stringify(filters)}
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06 } } }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
              >
                {products?.items?.map((product) => (
                  <motion.div
                    key={product.ProductId}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="border border-dashed border-[#c4c7c7] p-16 text-center">
                <h3 className="font-['Playfair_Display'] text-2xl mb-2 text-black">
                  Không tìm thấy sản phẩm
                </h3>
                <p className="text-sm text-[#444748] mb-6">
                  Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm của bạn.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      CategoryId: [],
                      Materials: [],
                      Colors: [],
                      OrderBy: "",
                      Sort: "",
                      page: 1,
                      limit: 6,
                    })
                  }
                  className="text-xs font-semibold tracking-widest uppercase text-[#775a19] underline hover:text-black"
                >
                  Xóa tất cả bộ lọc
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-20 flex justify-center">
                <nav>
                  <ul className="flex items-center gap-3">
                    <li>
                      <button
                        disabled={filters.page === 1}
                        onClick={() => setFilters((prev) => ({ ...prev, page: prev.page - 1 }))}
                        className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase border transition ${
                          filters.page === 1
                            ? "border-gray-200 text-gray-400 cursor-not-allowed"
                            : "border-black text-black hover:bg-black hover:text-white"
                        }`}
                      >
                        Trước
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => {
                      const pageNumber = index + 1;
                      const isActive = filters.page === pageNumber;
                      return (
                        <li key={pageNumber}>
                          <button
                            onClick={() => setFilters((prev) => ({ ...prev, page: pageNumber }))}
                            className={`w-10 h-10 text-xs font-semibold transition border ${
                              isActive
                                ? "bg-black text-white border-black"
                                : "bg-transparent text-black border-transparent hover:border-black"
                            }`}
                          >
                            {pageNumber}
                          </button>
                        </li>
                      );
                    })}
                    <li>
                      <button
                        disabled={filters.page === totalPages}
                        onClick={() => setFilters((prev) => ({ ...prev, page: prev.page + 1 }))}
                        className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase border transition ${
                          filters.page === totalPages
                            ? "border-gray-200 text-gray-400 cursor-not-allowed"
                            : "border-black text-black hover:bg-black hover:text-white"
                        }`}
                      >
                        Sau
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </section>
        </div>

     
      </main>

      {/* Mobile Filter Drawer Overlay */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileFilterOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between mb-6 border-b border-[#c4c7c7] pb-4">
                <h3 className="font-['Playfair_Display'] text-xl font-medium">Bộ lọc</h3>
                <button onClick={() => setIsMobileFilterOpen(false)} className="text-black">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}