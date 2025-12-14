import { Link } from "react-router-dom";

import type { Product } from "@/data/product";
import { ShoppingCart } from "lucide-react";
import Button from "../ui/button";
interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="aspect-[4/5] overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 text-xs font-medium text-amber-700">
          {product.category}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-stone-900 line-clamp-2">
          <Link to={`/products/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="mb-4 text-sm text-stone-500 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-stone-900">
            {product.price}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="z-10 relative text-amber-700 hover:text-amber-800 hover:bg-amber-50"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
}
