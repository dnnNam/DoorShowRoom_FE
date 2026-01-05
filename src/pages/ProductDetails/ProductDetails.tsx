import { useState } from "react";

import {
  ShoppingCart,
  Phone,
  ArrowLeft,
  Check,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import type { Product } from "@/types/api/product.type";
import type { Color } from "@/components/FilterSideBar/FilterSideBar";
import Image360Viewer from "@/components/ProductImage";
import Button from "@/components/ui/button";
import ProductSpecs from "@/components/ProductSpecs/ProductSpecs";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
interface ProductDetailProps {
  product: Product;
  allProducts: Product[];
  onBack: () => void;
  onProductClick: (id: string) => void;
}
const COLOR_MAP: Record<Color, string> = {
  Trắng: "#FFFFFF",
  Nâu: "#8B4513",
  Đen: "#000000",
  Xám: "#808080",
  "Tự nhiên": "#D2B48C",
};
export default function ProductDetail({
  product,
  allProducts,
  onBack,
  onProductClick,
}: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState<Color>(
    product.Color as Color
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Breadcrumb & Back Button */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-orange-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Quay lại danh sách
        </button>
        <div className="text-sm text-gray-500 hidden sm:block">
          Sản phẩm / {product.Categories?.CategoryName} /{" "}
          <span className="text-gray-900 font-medium">
            {product?.ProductName}
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Images */}
        <div className="lg:col-span-7">
          <Image360Viewer
            src={product?.ProductImages[0]?.ImageUrl || ""}
            alt={product?.ProductName || "Product Image"}
          />
        </div>
        {/* Right Column: Product Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wide">
                {product.Categories?.CategoryName}
              </span>
              {/* {product.isNew && (
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                  MỚI
                </span>
              )}
              {product.isBestSeller && (
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
                  BÁN CHẠY
                </span>
              )} */}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {product?.ProductName}
            </h1>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-orange-600">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(Number(product?.Price) || 0)}
              </span>
              <span className="text-sm text-gray-500">Giá đã bao gồm VAT</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {product?.Description} Thiết kế hiện đại, phù hợp với mọi không
              gian sống. Sản phẩm được bảo hành chính hãng 5 năm.
            </p>
          </div>
          <div className="h-px bg-gray-200" />
          {/* Selectors */}
          <div className="space-y-6">
            {/* Size Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Kích thước:
              </label>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 text-sm border border-orange-600 bg-orange-50 text-orange-700 ring-1 ring-orange-600 rounded-md">
                  {product.Size}
                </button>
              </div>
            </div>
            {/* Color Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Màu sắc:{" "}
                <span className="text-gray-500 font-normal ml-1">
                  {selectedColor}
                </span>
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedColor(product.Color as Color)}
                  className="w-10 h-10 rounded-full border shadow-sm relative ring-2 ring-offset-2 ring-orange-500 scale-110 transition-transform hover:scale-110"
                  style={{ backgroundColor: COLOR_MAP[product.Color as Color] }}
                  title={product.Color}
                >
                  {product.Color === "Trắng" && (
                    <span className="sr-only">White</span>
                  )}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Check
                      className={`w-5 h-5 ${
                        product.Color === "Trắng" ||
                        product.Color === "Tự nhiên"
                          ? "text-black"
                          : "text-white"
                      }`}
                    />
                  </span>
                </button>
              </div>
            </div>
            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Số lượng:
              </label>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <div className="flex-1 text-center font-medium text-gray-900">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="flex-1 gap-2 text-base"
              onClick={() => alert("Đã thêm vào giỏ hàng!")}
            >
              <ShoppingCart className="w-5 h-5" />
              Thêm vào giỏ hàng
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 gap-2 text-base border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              <Phone className="w-5 h-5" />
              Liên hệ tư vấn
            </Button>
          </div>
          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-xs font-medium text-gray-900">
                Bảo hành 5 năm
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-2">
                <Truck className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-xs font-medium text-gray-900">
                Miễn phí vận chuyển
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-2">
                <Wrench className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-xs font-medium text-gray-900">
                Lắp đặt chuyên nghiệp
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Product Specs & Details */}
      <ProductSpecs product={product} />
      {/* Related Products */}
      <RelatedProducts
        currentProduct={product}
        allProducts={allProducts}
        onProductClick={onProductClick}
      />
    </div>
  );
}
