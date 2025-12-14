import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";
import { useState } from "react";

const categories = ["Tất cả", "Cửa Gỗ", "Cửa Kính", "Cửa Cuốn", "Cửa Nhôm"];
export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const filteredProducts =
    activeCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === activeCategory);
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
        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
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
