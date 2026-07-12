import { Eye, ShoppingCart } from "lucide-react";
import Button from "~/components/ui/button"; // Component Button dự án của bạn
import type { Product } from "~/types/api/product.type";
import { isNewProduct } from "~/utils/products.helper";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();
  
  const handleNavigateToProductDetail = () => {
    navigate(`/products/${product.ProductId}-${product.Slug}`);
  };

  return (
    <div 
      onClick={handleNavigateToProductDetail}
      className="product-card group cursor-pointer flex flex-col h-full bg-transparent"
    >
      {/* Khung chứa ảnh tỉ lệ 3:4 cao cấp */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#eeeeee] mb-6">
        <img
           src={product?.Media?.[0]?.Url}
          alt={product.ProductName}
          className="zoom-img w-full h-full object-cover transition-transform duration-700 cubic-bezier-[0.2,0,0,1] group-hover:scale-105"
        />

        {/* Trạng thái Badge (Mới / Bán chạy) phong cách tối giản hình chữ nhật */}
        {(isNewProduct(product.CreatedAt) || product.IsBestSeller) && (
          <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
            {isNewProduct(product.CreatedAt) && (
              <span className="bg-black text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
                Mới
              </span>
            )}
            {product.IsBestSeller && (
              <span className="bg-[#775a19] text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
                Hot
              </span>
            )}
          </div>
        )}

        {/* Lớp phủ Hover Xem Nhanh kiến trúc */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Ngăn sự kiện click bọt lên thẻ cha
              handleNavigateToProductDetail();
            }}
            className="bg-white/90 backdrop-blur-sm text-white px-5 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 flex items-center gap-2"
          >
            <Eye className="w-3.5 h-3.5" />
            Xem Nhanh
          </button>
        </div>
      </div>

      {/* Thông tin sản phẩm bên dưới */}
      <div className="space-y-3 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4">
          <h4 className="font-['Playfair_Display'] text-2xl leading-tight text-black line-clamp-2 min-h-[3rem] group-hover:text-[#775a19] transition-colors">
            {product.ProductName}
          </h4>
          <span className="font-['Inter'] text-lg font-medium text-black shrink-0 whitespace-nowrap">
            {product?.Price
              ? Number(product.Price).toLocaleString("vi-VN") + " đ"
              : "Liên hệ"}
          </span>
        </div>

        {/* Phân loại / Thể loại sản phẩm viết hoa thanh lịch */}
        <p className="text-[10px] text-[#444748] uppercase tracking-widest font-semibold">
          {product.Categories?.CategoryName || "Hệ Kiến Trúc"}
        </p>

        {/* Nút Chi tiết tích hợp vào luồng tương tác kiến trúc */}
        <div className="pt-2 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="primary"
            fullWidth
            className="bg-black hover:bg-[#775a19] text-white text-xs font-semibold tracking-widest uppercase py-3 transition-colors flex items-center justify-center gap-2"
            onClick={(e) => {
              e.stopPropagation();
              handleNavigateToProductDetail();
            }}
          >
            <span>Chi tiết không gian</span>
            <ShoppingCart className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;