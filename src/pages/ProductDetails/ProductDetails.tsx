import productApis from "~/apis/products.apis";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";

import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Ruler,
  Package,
  Clock,
  
  User,
  Maximize2,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";
import Seo from "~/components/seo/Seo";

export default function ProductDetail() {
  const { slugId } = useParams<{ slugId: string }>();
  const productId = Number(slugId?.split("-")[0]);

  const { data } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productApis.getProductById(productId),
    enabled: !!productId, // tránh gọi khi productId = NaN
  });

  const product = data?.data?.data;

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      {product && (
        <Seo
          title={product.ProductName}
          description={
            product.Description?.slice(0, 155) ||
            `${product.ProductName} - chất liệu ${product.Material}, hàng chính hãng, bảo hành 10 năm tại Đại Nam.`
          }
          path={`/products/${product.ProductId}-${product.Slug}`}
          image={product.Media?.[0]?.Url}
          type="product"
        />
      )}
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pt-32 pb-32"
      >
        <div className="container mx-auto px-4 lg:px-20 max-w-[1440px]">
          {/* Back Button */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#444748] hover:text-black mb-10 transition-colors duration-200 font-medium group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            Quay lại danh sách sản phẩm
          </Link>

          {/* Split Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Visual */}
            <div className="space-y-6 lg:sticky lg:top-32">
              <div className="relative group overflow-hidden bg-[#eeeeee] shadow-xl">
                <img
                  src={product?.Media?.[0]?.Url}
                  alt={product?.ProductName}
                  className="w-full h-[500px] lg:h-[700px] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-6 left-6">
                  <button className="bg-white/90 backdrop-blur-sm p-3 hover:bg-white transition-all">
                    <Maximize2 className="w-5 h-5 text-black" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-[#775a19] text-white px-4 py-2 text-xs font-semibold uppercase tracking-widest">
                  Sản phẩm cao cấp
                </div>
              </div>

              {/* Thumbnail gallery - chỉ hiện khi có nhiều hơn 1 ảnh */}
              {product?.Media && product.Media.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.Media.map((media, idx) => (
                    <div
                      key={media.MediaId}
                      className={`overflow-hidden cursor-pointer transition-all ${
                        idx === 0
                          ? "ring-2 ring-black"
                          : "bg-[#eeeeee] hover:opacity-80"
                      }`}
                    >
                      <img
                        src={media.Url}
                        alt={`${product.ProductName} ${idx + 1}`}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="lg:pl-8 space-y-10">
              <header className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest">
                    {product?.Category?.CategoryName}
                  </span>
                  <span className="h-px w-12 bg-[#c4c7c7]" />
                </div>
                <h1 className="font-['Playfair_Display'] text-4xl lg:text-6xl font-medium text-black leading-tight">
                  {product?.ProductName}
                </h1>

              </header>

              <p className="text-lg text-[#444748] leading-relaxed max-w-xl">
                {product?.ProductName} được chế tác từ{" "}
                <strong className="text-black">{product?.Material}</strong>,
                mang phong cách cổ điển sang trọng, phù hợp cho nhà phố, biệt
                thự và công trình cao cấp.
              </p>

              {/* Specs list */}
              <div className="space-y-6 border-y border-[#c4c7c7] py-8">
                {product?.Size && (
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#767586] uppercase tracking-widest">
                      Kích thước
                    </span>
                    <span className="text-black font-medium">
                      {product.Size}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-[#767586] uppercase tracking-widest">
                    Chất liệu
                  </span>
                  <span className="text-black font-medium">
                    {product?.Material}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-[#767586] uppercase tracking-widest">
                    Bảo hành
                  </span>
                  <span className="text-black font-medium">10 năm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-[#767586] uppercase tracking-widest">
                    Lắp đặt
                  </span>
                  <span className="text-black font-medium">
                    Tư vấn chuyên nghiệp
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="w-full bg-black hover:bg-[#775a19] text-white text-sm font-semibold uppercase tracking-widest py-6 transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <span>Yêu cầu báo giá</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div >
                  <Link
                    to="/contact"
                    className="border border-[#c4c7c7] hover:border-black hover:bg-[#f9f9f9] py-4 flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <User className="w-5 h-5" />
                    <div className="text-xs font-semibold uppercase tracking-widest">
                      Liên hệ tư vấn
                    </div>
                  </Link>
                 
                </div>
              </div>

              {/* Feature card */}
              <div className="bg-white border border-[#c4c7c7] p-8 flex items-start gap-6">
                <div className="bg-[#775a19]/10 p-4 rounded-full">
                  <ShieldCheck className="w-8 h-8 text-[#775a19]" />
                </div>
                <div>
                  <h4 className="font-['Playfair_Display'] text-xl mb-2 text-black">
                    Cam kết chất lượng
                  </h4>
                  <p className="text-[#444748] text-sm leading-relaxed">
                    Chính hãng 100%, bảo hành 10 năm, lắp đặt miễn phí bởi đội
                    ngũ kỹ thuật viên chuyên nghiệp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description & warranty section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
            <div className="lg:col-span-2 bg-white p-8 lg:p-10 border border-[#c4c7c7]">
              <h2 className="font-['Playfair_Display'] text-3xl mb-6 text-black flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#775a19]"></span>
                Mô tả sản phẩm
              </h2>

              <div className="space-y-6">
                <p className="text-[#444748] leading-relaxed text-lg">
                  {product?.Description}
                </p>

                <div className="bg-[#f9f9f9] p-6 border border-[#c4c7c7]">
                  <h3 className="font-semibold text-xl text-black mb-4">
                    Bảo hành &amp; Dịch vụ
                  </h3>
                  <div className="space-y-3 text-[#444748]">
                    <p className="flex items-start gap-2">
                      <span className="text-[#775a19]">✓</span>
                      <span>
                        Bảo hành chính hãng <strong>10 năm</strong> đối với
                        lỗi kỹ thuật và vật liệu
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#775a19]">✓</span>
                      <span>
                        Lắp đặt miễn phí bởi đội ngũ kỹ thuật viên chuyên
                        nghiệp
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#775a19]">✓</span>
                      <span>
                        Tư vấn thiết kế và chọn sản phẩm phù hợp không mất phí
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#775a19]">✓</span>
                      <span>
                        Hỗ trợ bảo trì định kỳ và chăm sóc sau bán hàng chu
                        đáo
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications sidebar */}
            <div className="bg-white p-8 lg:p-10 border border-[#c4c7c7]">
              <h2 className="text-2xl font-semibold mb-6 text-black">
                Thông số kỹ thuật
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 p-4 bg-[#f9f9f9] border border-[#c4c7c7]">
                  <Package className="w-6 h-6 text-[#775a19] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#767586] font-semibold mb-1">
                      Chất liệu
                    </p>
                    <p className="text-black font-semibold">
                      {product?.Material}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-[#f9f9f9] border border-[#c4c7c7]">
                  <Ruler className="w-6 h-6 text-[#775a19] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#767586] font-semibold mb-1">
                      Kích thước
                    </p>
                    <p className="text-black font-semibold">
                      {product?.Size || "Đang cập nhật"}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-[#f9f9f9] border border-[#c4c7c7]">
                  <Clock className="w-6 h-6 text-[#775a19] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#767586] font-semibold mb-1">
                      Bảo hành
                    </p>
                    <p className="text-black font-semibold">10 năm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}