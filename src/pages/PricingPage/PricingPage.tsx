import React, { useState } from "react";
import {
  Check,
  Info,
  Phone,
  Home,
  Maximize,
  Shield,
  Settings,
} from "lucide-react";

import { Link } from "react-router-dom";
import Button from "~/components/ui/button";
interface ProductPrice {
  id: string;
  name: string;
  size: string;
  material: string;
  price: string;
  features: string[];
  image: string;
  category: string;
}
interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}
export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories: Category[] = [
    {
      id: "all",
      name: "Tất cả sản phẩm",
      icon: <Home className="h-5 w-5" />,
      description: "Xem toàn bộ danh mục",
    },
    {
      id: "wood",
      name: "Cửa gỗ",
      icon: <Home className="h-5 w-5" />,
      description: "Cửa gỗ tự nhiên cao cấp",
    },
    {
      id: "aluminum",
      name: "Cửa nhôm",
      icon: <Maximize className="h-5 w-5" />,
      description: "Cửa nhôm kính hiện đại",
    },
    {
      id: "steel",
      name: "Cửa thép",
      icon: <Shield className="h-5 w-5" />,
      description: "Cửa thép an toàn",
    },
    {
      id: "rolling",
      name: "Cửa cuốn",
      icon: <Settings className="h-5 w-5" />,
      description: "Cửa cuốn tự động",
    },
  ];
  const products: ProductPrice[] = [
    // Cửa gỗ
    {
      id: "1",
      name: "Cửa gỗ Lim Nam Phi 2 cánh",
      size: "1800 x 2200 mm",
      material: "Gỗ Lim Nam Phi tự nhiên",
      price: "12.000.000 ₫",
      features: ["Chống mối mọt", "Sơn PU 5 lớp", "Bảo hành 5 năm"],
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "wood",
    },
    {
      id: "5",
      name: "Cửa gỗ Sồi Mỹ 1 cánh",
      size: "900 x 2200 mm",
      material: "Gỗ Sồi Mỹ nhập khẩu",
      price: "8.500.000 ₫",
      features: ["Vân gỗ tự nhiên", "Chống cong vênh", "Bảo hành 3 năm"],
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "wood",
    },
    {
      id: "6",
      name: "Cửa gỗ HDF Veneer",
      size: "800 x 2100 mm",
      material: "HDF phủ Veneer",
      price: "3.200.000 ₫",
      features: ["Chống nước tốt", "Giá cả phải chăng", "Đa dạng màu sắc"],
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "wood",
    },
    // Cửa nhôm
    {
      id: "2",
      name: "Cửa nhôm Xingfa 1 cánh",
      size: "900 x 2200 mm",
      material: "Nhôm Xingfa nhập khẩu",
      price: "4.500.000 ₫",
      features: ["Kính cường lực 8mm", "Phụ kiện Kinlong", "Cách âm tốt"],
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "aluminum",
    },
    {
      id: "7",
      name: "Cửa nhôm kính 2 cánh",
      size: "1600 x 2200 mm",
      material: "Nhôm Xingfa + Kính Low-E",
      price: "7.800.000 ₫",
      features: ["Cách nhiệt cao", "Chống UV", "Tiết kiệm điện năng"],
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "aluminum",
    },
    {
      id: "8",
      name: "Cửa sổ nhôm trượt",
      size: "1200 x 1500 mm",
      material: "Nhôm Việt Pháp",
      price: "2.900.000 ₫",
      features: ["Trượt êm ái", "Lưới chống muỗi", "Dễ vệ sinh"],
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "aluminum",
    },
    // Cửa thép
    {
      id: "3",
      name: "Cửa thép chống cháy",
      size: "1000 x 2200 mm",
      material: "Thép mạ điện",
      price: "5.800.000 ₫",
      features: ["Chống cháy 60 phút", "Sơn tĩnh điện", "Lõi Honeycomb"],
      image:
        "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "steel",
    },
    {
      id: "9",
      name: "Cửa thép vân gỗ",
      size: "900 x 2100 mm",
      material: "Thép phủ vân gỗ",
      price: "3.500.000 ₫",
      features: ["Chống trộm cao", "Không gỉ sét", "Giả gỗ đẹp"],
      image:
        "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "steel",
    },
    {
      id: "10",
      name: "Cửa két sắt an toàn",
      size: "850 x 2000 mm",
      material: "Thép dày 2mm",
      price: "6.200.000 ₫",
      features: ["Khóa vân tay", "Chống phá 4 chiều", "Bảo mật cao"],
      image:
        "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "steel",
    },
    // Cửa cuốn
    {
      id: "4",
      name: "Cửa cuốn khe thoáng",
      size: "3000 x 3500 mm",
      material: "Hợp kim nhôm",
      price: "1.800.000 ₫/m²",
      features: ["Điều khiển từ xa", "Tự dừng khi gặp vật cản", "Êm ái"],
      image:
        "https://images.unsplash.com/photo-1517646331032-9e8563c520a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "rolling",
    },
    {
      id: "11",
      name: "Cửa cuốn Austdoor",
      size: "2500 x 3000 mm",
      material: "Thép mạ kẽm",
      price: "1.200.000 ₫/m²",
      features: ["Motor Đức", "Chống ồn", "Bền bỉ"],
      image:
        "https://images.unsplash.com/photo-1517646331032-9e8563c520a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "rolling",
    },
    {
      id: "12",
      name: "Cửa cuốn Đài Loan",
      size: "3500 x 4000 mm",
      material: "Nhôm Đài Loan",
      price: "2.200.000 ₫/m²",
      features: ["Chống gió mạnh", "Cảm biến thông minh", "Bảo hành 5 năm"],
      image:
        "https://images.unsplash.com/photo-1517646331032-9e8563c520a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "rolling",
    },
  ];
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bảng Giá Sản Phẩm
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bảng giá tham khảo các dòng sản phẩm phổ biến. Để có báo giá chính
            xác nhất cho công trình của bạn, vui lòng liên hệ trực tiếp.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12">
        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#FF6B35] text-white shadow-lg shadow-orange-200 scale-105"
                    : "bg-white text-gray-700 hover:bg-orange-50 hover:text-[#FF6B35] border border-gray-200"
                }`}
              >
                <span
                  className={`transition-transform duration-300 ${
                    activeCategory === category.id
                      ? "scale-110"
                      : "group-hover:scale-110"
                  }`}
                >
                  {category.icon}
                </span>
                <div className="text-left">
                  <div className="font-bold">{category.name}</div>
                  <div
                    className={`text-xs ${
                      activeCategory === category.id
                        ? "text-orange-100"
                        : "text-gray-500"
                    }`}
                  >
                    {category.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Product Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Hiển thị{" "}
            <span className="font-bold text-[#FF6B35]">
              {filteredProducts.length}
            </span>{" "}
            sản phẩm
          </p>
        </div>
        {/* Desktop Card Grid View */}
        <div className="hidden lg:grid grid-cols-1 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex gap-6 p-6">
                {/* Product Image */}
                <div className="shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 rounded-xl object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">
                    {product.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-1">
                        Kích thước
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {product.size}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-1">
                        Chất liệu
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {product.material}
                      </span>
                    </div>
                  </div>
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-lg text-xs font-medium text-green-700 border border-green-100"
                      >
                        <Check className="h-3.5 w-3.5" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Price and Actions */}
                <div className="shrink-0 flex flex-col items-end justify-between min-w-[200px]">
                  <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
                      Đơn giá
                    </div>
                    <div className="text-3xl font-bold text-[#FF6B35]">
                      {product.price}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <Button size="sm" className="w-full">
                      <Info className="h-4 w-4 mr-2" />
                      Chi tiết
                    </Button>
                    <Link to="/contact" className="w-full">
                      <Button size="sm" variant="secondary" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Liên hệ
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile Card View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="aspect-video relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  {product.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Kích thước</span>
                    <span className="font-medium text-gray-900">
                      {product.size}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Chất liệu</span>
                    <span className="font-medium text-gray-900">
                      {product.material}
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2 block">
                      Đặc điểm nổi bật
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                        >
                          <Check className="h-3 w-3 text-green-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <Info className="h-4 w-4 mr-2" />
                    Chi tiết
                  </Button>
                  <Link to="/contact" className="w-full">
                    <Button className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Liên hệ
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
