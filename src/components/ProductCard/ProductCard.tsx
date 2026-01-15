import { Eye, ShoppingCart } from "lucide-react";
import Button from "../ui/button";
import type { Product } from "@/types/api/product.type";
import { isNewProduct } from "@/utils/products.helper";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.ProductImages[0]?.ImageUrl}
          alt="Product Image"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {(isNewProduct(product.CreatedAt) || product.IsBestSeller) && (
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNewProduct(product.CreatedAt) && (
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                MỚI
              </span>
            )}
            {product.IsBestSeller && (
              <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
                HOT
              </span>
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-4 h-4 mr-1" /> Xem nhanh
          </Button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
          {product.Categories.CategoryName}
        </div>
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem] group-hover:text-orange-600 transition-colors">
          {product.ProductName}
        </h3>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-orange-600">
              {product?.Price
                ? Number(product.Price).toLocaleString("vi-VN") + " đ"
                : "0 đ"}
            </span>
          </div>

          <Button variant="primary" fullWidth className="group/btn">
            <span className="mr-2">Chi tiết</span>
            <ShoppingCart className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
