import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Truck, PenTool, Star } from "lucide-react";

import Button from "@/components/ui/button";
import { products } from "@/data/product";
import ProductCard from "@/components/ProductCard";
export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-amber-700" />,
      title: "Chất lượng đảm bảo",
      description:
        "Cam kết sản phẩm chính hãng, độ bền cao, bảo hành dài hạn lên đến 10 năm.",
    },
    {
      icon: <Truck className="h-8 w-8 text-amber-700" />,
      title: "Vận chuyển toàn quốc",
      description:
        "Hỗ trợ vận chuyển và lắp đặt tận nơi trên toàn lãnh thổ Việt Nam.",
    },
    {
      icon: <PenTool className="h-8 w-8 text-amber-700" />,
      title: "Thiết kế theo yêu cầu",
      description:
        "Tùy chỉnh kích thước, màu sắc và kiểu dáng theo ý muốn của khách hàng.",
    },
    {
      icon: <Star className="h-8 w-8 text-amber-700" />,
      title: "Giá cả cạnh tranh",
      description:
        "Trực tiếp từ xưởng sản xuất đến tay người tiêu dùng, không qua trung gian.",
    },
  ];
  const categories = [
    {
      name: "Cửa Gỗ",
      image:
        "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&q=80&w=600",
      count: "120+ mẫu",
    },
    {
      name: "Cửa Thép",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=600",
      count: "80+ mẫu",
    },
    {
      name: "Cửa Kính",
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600",
      count: "50+ mẫu",
    },
    {
      name: "Cửa Nhựa",
      image:
        "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=600",
      count: "45+ mẫu",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-stone-900 h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Door Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nâng Tầm Vẻ Đẹp <br />
              <span className="text-amber-500">Ngôi Nhà Của Bạn</span>
            </h1>
            <p className="text-lg text-stone-300 mb-8 leading-relaxed">
              Khám phá bộ sưu tập cửa cao cấp với thiết kế tinh tế, chất liệu
              bền bỉ. Giải pháp hoàn hảo cho không gian sống hiện đại và sang
              trọng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="w-full sm:w-auto text-base">
                  Xem sản phẩm
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base text-white border-white hover:bg-white hover:text-stone-900"
                >
                  Liên hệ tư vấn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-stone-50 hover:bg-amber-50 transition-colors duration-300"
              >
                <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Danh Mục Sản Phẩm
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Đa dạng các loại cửa phù hợp với mọi nhu cầu và phong cách kiến
              trúc
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <Link
                key={index}
                to="/products"
                className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-stone-300 text-sm">{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">
                Sản Phẩm Nổi Bật
              </h2>
              <p className="text-stone-600">
                Những mẫu cửa được khách hàng yêu thích nhất
              </p>
            </div>
            <Link
              to="/products"
              className="hidden sm:flex items-center text-amber-700 font-medium hover:text-amber-800"
            >
              Xem tất cả <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/products">
              <Button variant="outline" className="w-full">
                Xem tất cả sản phẩm
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bạn cần tư vấn giải pháp cửa cho công trình?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Đội ngũ kỹ thuật viên giàu kinh nghiệm của chúng tôi sẵn sàng hỗ trợ
            bạn lựa chọn sản phẩm phù hợp nhất.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-amber-800 hover:bg-stone-100"
            >
              Gọi ngay: 0912.345.678
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Gửi yêu cầu tư vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
