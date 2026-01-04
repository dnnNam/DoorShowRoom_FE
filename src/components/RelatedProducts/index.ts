import React from "react";
import { Product } from "../data/products";
import { ProductCard } from "./ProductCard";
interface RelatedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
  onProductClick: (id: string) => void;
}
export function RelatedProducts({
  currentProduct,
  allProducts,
  onProductClick,
}: RelatedProductsProps) {
  // Filter products in same category, excluding current product
  const relatedProducts = allProducts
    .filter(
      (p) =>
        p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .slice(0, 4);
  if (relatedProducts.length === 0) return null;
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-1 h-8 bg-orange-600 rounded-full"></span>
        Sản phẩm liên quan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => onProductClick(product.id)}
            className="cursor-pointer"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
