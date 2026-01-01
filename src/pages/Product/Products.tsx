import ProductCard from "@/components/ProductCard";
import { useAllProducts } from "@/hooks/productHooks";

import { Search, X } from "lucide-react";
import { useState } from "react";

const categories = ["Tất cả", "Cửa Gỗ", "Cửa Kính", "Cửa Cuốn", "Cửa Nhôm"];
export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const { data } = useAllProducts();
  console.log(data);

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">
            Danh Mục Sản Phẩm
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập cửa đa dạng về mẫu mã, chất liệu và phong cách.
            Chúng tôi tự tin đáp ứng mọi yêu cầu khắt khe nhất của bạn.
          </p>
        </div>

        {/* Search Bar */}

        <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-sm py-3 border-b mb-4 border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative mt-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 " />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm theo tên, loại cửa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#C4661F] transition-colors"
                />
                {searchQuery && (
                  <span
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2
             p-1 cursor-pointer
             text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-amber-600 text-white shadow-md transform scale-105"
                  : "bg-white text-stone-600 hover:bg-amber-50 hover:text-amber-700 border border-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {data?.data && data?.data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.data.map((product) => (
              <ProductCard key={product.ProductId} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">
              Không tìm thấy sản phẩm nào trong danh mục này.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
