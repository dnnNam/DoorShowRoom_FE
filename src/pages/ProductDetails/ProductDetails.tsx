import productApis from "@/apis/products.apis";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  Phone,
  Mail,
  ShieldCheck,
  Ruler,
  Package,
  Clock,
  Star,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

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
    <div className="bg-gradient-to-br from-stone-50 via-amber-50/20 to-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-700 mb-8 transition-colors duration-200 font-medium group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          Quay lại danh sách sản phẩm
        </Link>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="aspect-square relative">
              <img
                src={product?.ProductImages[0]?.ImageUrl}
                alt={product?.ProductName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Sản phẩm cao cấp
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            {/* Category Badge */}
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 text-sm font-semibold rounded-full mb-4 w-fit border border-amber-200">
              {product?.Categories?.CategoryName}
            </span>

            {/* Product Name */}
            <h1 className="text-3xl lg:text-5xl font-extrabold text-stone-900 leading-tight mb-4 tracking-tight">
              {product?.ProductName}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
                <Star className="w-5 h-5 fill-stone-200 text-stone-200" />
              </div>
              <span className="text-stone-600 font-medium">
                4.0 <span className="text-stone-400">(128 đánh giá)</span>
              </span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl lg:text-5xl font-extrabold text-amber-700">
                  {Number(product?.Price).toLocaleString("vi-VN")}₫
                </span>
              </div>
              <p className="text-sm text-stone-600">
                <span className="font-semibold">*</span> Giá đã bao gồm VAT
              </p>
            </div>

            {/* Description */}
            <p className="text-stone-700 leading-relaxed mb-6 text-lg">
              {product?.ProductName} được chế tác từ{" "}
              <strong className="text-amber-800">{product?.Material}</strong>,
              mang phong cách cổ điển sang trọng, phù hợp cho nhà phố, biệt thự
              và công trình cao cấp.
            </p>

            {/* Trust Badges */}
            <div className="bg-white border-2 border-stone-100 rounded-2xl p-6 mb-6 shadow-sm">
              <h3 className="font-bold text-lg flex items-center gap-2 mb-4 text-stone-900">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
                Cam kết chất lượng
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-stone-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span className="font-medium">Chính hãng 100%</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span className="font-medium">Bảo hành 10 năm</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span className="font-medium">Lắp đặt miễn phí</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all duration-300 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
              >
                <Phone className="w-5 h-5" />
                Liên hệ ngay
              </Link>
              <Link
                to="/contact"
                className="flex-1 border-2 border-stone-300 hover:border-amber-600 hover:bg-amber-50 transition-all duration-300 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 text-stone-700 hover:text-amber-700"
              >
                <Mail className="w-5 h-5" />
                Yêu cầu báo giá
              </Link>
            </div>
          </div>
        </div>

        {/* Description & Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2 bg-white p-8 lg:p-10 rounded-3xl shadow-lg border border-stone-100">
            <h2 className="text-3xl font-bold mb-6 text-stone-900 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-amber-600 rounded-full"></span>
              Mô tả sản phẩm
            </h2>

            <div className="space-y-6">
              {/* Main Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-stone-700 leading-relaxed text-lg">
                  {product?.Description}
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-amber-600">
                <h3 className="font-bold text-xl text-stone-900 mb-4">
                  Điểm nổi bật
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span className="text-stone-700">
                      <strong>Chất liệu cao cấp:</strong> Được làm từ{" "}
                      {product?.Material} nguyên khối, đảm bảo độ bền vượt trội
                      và khả năng chống chịu thời tiết tốt.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span className="text-stone-700">
                      <strong>Thiết kế tinh xảo:</strong> Mỗi chi tiết được chạm
                      khắc và hoàn thiện bởi những nghệ nhân lành nghề với hơn
                      20 năm kinh nghiệm.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span className="text-stone-700">
                      <strong>Phong cách đa năng:</strong> Phù hợp với nhiều
                      phong cách kiến trúc từ cổ điển, hiện đại đến tân cổ điển.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span className="text-stone-700">
                      <strong>Tiêu chuẩn xuất khẩu:</strong> Đạt chứng nhận chất
                      lượng quốc tế, an toàn tuyệt đối cho sức khỏe người sử
                      dụng.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Application Areas */}
              <div>
                <h3 className="font-bold text-xl text-stone-900 mb-4">
                  Ứng dụng
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                    <p className="font-semibold text-stone-800 mb-1">Nhà phố</p>
                    <p className="text-sm text-stone-600">
                      Tăng tính thẩm mỹ và giá trị cho căn nhà
                    </p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                    <p className="font-semibold text-stone-800 mb-1">
                      Biệt thự
                    </p>
                    <p className="text-sm text-stone-600">
                      Tôn vinh đẳng cấp và sự sang trọng
                    </p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                    <p className="font-semibold text-stone-800 mb-1">
                      Khách sạn
                    </p>
                    <p className="text-sm text-stone-600">
                      Tạo ấn tượng mạnh mẽ cho khách hàng
                    </p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                    <p className="font-semibold text-stone-800 mb-1">
                      Showroom
                    </p>
                    <p className="text-sm text-stone-600">
                      Thể hiện sự chuyên nghiệp và đẳng cấp
                    </p>
                  </div>
                </div>
              </div>

              {/* Warranty & Service */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="font-bold text-xl text-stone-900 mb-4">
                  Bảo hành & Dịch vụ
                </h3>
                <div className="space-y-3 text-stone-700">
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      Bảo hành chính hãng <strong>10 năm</strong> đối với lỗi kỹ
                      thuật và vật liệu
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      Lắp đặt miễn phí bởi đội ngũ kỹ thuật viên chuyên nghiệp
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      Tư vấn thiết kế và chọn sản phẩm phù hợp không mất phí
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      Hỗ trợ bảo trì định kỳ và chăm sóc sau bán hàng chu đáo
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-gradient-to-br from-white to-amber-50/30 p-8 lg:p-10 rounded-3xl shadow-lg border border-stone-100">
            <h2 className="text-2xl font-bold mb-6 text-stone-900">
              Thông số kỹ thuật
            </h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <Package className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-stone-500 font-semibold mb-1">
                    Chất liệu
                  </p>
                  <p className="text-stone-800 font-bold">
                    {product?.Material}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <Ruler className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-stone-500 font-semibold mb-1">
                    Kích thước
                  </p>
                  <p className="text-stone-800 font-bold">{product?.Size}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-stone-500 font-semibold mb-1">
                    Bảo hành
                  </p>
                  <p className="text-stone-800 font-bold">10 năm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
