import {
  Clock,
  DoorOpen,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-amber-700 p-1.5 rounded-lg">
                <DoorOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CỬA ĐẸP VN</span>
            </div>
            <p className="text-sm text-stone-400 mb-6 leading-relaxed">
              Chuyên cung cấp các loại cửa gỗ, cửa thép, cửa nhựa cao cấp. Mang
              đến vẻ đẹp sang trọng và sự an toàn cho ngôi nhà của bạn.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-amber-500 transition-colors"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-amber-500 transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Chính sách bảo hành
                </a>
              </li>
            </ul>
          </div>
          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sản phẩm chính</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/products?category=wood"
                  className="hover:text-amber-500 transition-colors"
                >
                  Cửa gỗ tự nhiên
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=steel"
                  className="hover:text-amber-500 transition-colors"
                >
                  Cửa thép vân gỗ
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=glass"
                  className="hover:text-amber-500 transition-colors"
                >
                  Cửa kính cường lực
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=fire"
                  className="hover:text-amber-500 transition-colors"
                >
                  Cửa chống cháy
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=plastic"
                  className="hover:text-amber-500 transition-colors"
                >
                  Cửa nhựa Composite
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <span>123 Đường Nguyễn Trãi, Quận Thanh Xuân, Hà Nội</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <span>0912.345.678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <span>contact@cuadepvn.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <span>8:00 - 18:00 (Thứ 2 - Thứ 7)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Cửa Đẹp Việt Nam. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
