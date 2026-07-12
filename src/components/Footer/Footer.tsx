import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer(): React.JSX.Element {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full pt-[100px] pb-8 bg-[#f9f9f9] border-t border-[#c4c7c7]"
    >
      <div className="grid grid-cols-12 gap-8 px-[20px] md:px-[80px] max-w-[1440px] mx-auto">

        {/* Brand */}
        <div className="col-span-12 md:col-span-4">
          <Link
            to="/"
            className="text-[32px] font-['Playfair_Display'] font-bold text-black block mb-6"
          >
            Đại Nam
          </Link>

          <p className="text-[15px] text-[#444748] leading-relaxed mb-8 max-w-xs">
            Chuyên sản xuất, lắp đặt cửa cuốn, cửa nhôm Xingfa, cửa kính cường
            lực và cầu thang kính — đồng hành cùng mọi công trình 
          </p>

          <div className="space-y-3">
            <a
              href="tel:0917592668"
              className="flex items-center gap-3 text-[14px] text-[#444748] hover:text-black transition-colors"
            >
              <Phone className="w-4 h-4" />
                0913 845 613
            </a>

            <a
              href="mailto:lienhe@cuadepviet.com"
              className="flex items-center gap-3 text-[14px] text-[#444748] hover:text-black transition-colors"
            >
              <Mail className="w-4 h-4" />
              nguyenphatnam@gmail.com
            </a>

            <div className="flex items-start gap-3 text-[14px] text-[#444748]">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
               25 Phan Đình Phùng, Đức Trọng, Lâm Đồng
              </span>
            </div>
          </div>
        </div>

        {/* Sản phẩm */}
        <div className="col-span-12 md:col-span-4">
          <h4 className="text-[12px] font-semibold tracking-widest text-black mb-6 uppercase">
            Sản Phẩm
          </h4>

          <ul className="space-y-4">
            <li>
              <Link
                to="/products"
                className="text-[15px] text-[#444748] hover:text-black transition-colors"
              >
                Cửa Nhôm Xingfa
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="text-[15px] text-[#444748] hover:text-black transition-colors"
              >
                Cửa Kính Cường Lực
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="text-[15px] text-[#444748] hover:text-black transition-colors"
              >
                Cửa Cuốn
              </Link>
            </li>
          </ul>
        </div>

        {/* Công ty */}
        <div className="col-span-12 md:col-span-4">
          <h4 className="text-[12px] font-semibold tracking-widest text-black mb-6 uppercase">
            Công Ty
          </h4>

          <ul className="space-y-4">
            <li>
              <Link
                to="/about"
                className="text-[15px] text-[#444748] hover:text-black transition-colors"
              >
                Câu Chuyện Của Chúng Tôi
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="text-[15px] text-[#444748] hover:text-black transition-colors"
              >
                Dự Án
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-[15px] text-[#444748] hover:text-black transition-colors"
              >
                Showroom
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="col-span-12 mt-16 pt-8 border-t border-[#c4c7c7] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] tracking-widest text-[#747878] text-center md:text-left">
            © 2024 Hệ Thống Kiến Trúc Đại Nam. Đã đăng ký bản quyền.
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-[11px] tracking-widest text-[#747878] hover:text-black uppercase transition-colors"
            >
              Chính Sách Bảo Mật
            </a>

            <a
              href="#"
              className="text-[11px] tracking-widest text-[#747878] hover:text-black uppercase transition-colors"
            >
              Điều Khoản Dịch Vụ
            </a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}