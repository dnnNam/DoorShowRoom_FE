import { Menu, Phone, Search } from "lucide-react";
import Button from "../ui/button";
import { NavLink, useMatch } from "react-router-dom";

export default function Header() {
  const navItems = [
    { to: "/", label: "Trang chủ" },
    { to: "/products", label: "Sản phẩm" },
    { to: "/projects", label: "Dự án" },
    { to: "/pricing", label: "Bảng giá" },
    { to: "/about", label: "Giới thiệu" },
    { to: "/contact", label: "Liên hệ" },
  ];

  const isMatch = useMatch("/products/*");

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>Chào mừng đến với Cửa Đẹp Việt Nam - Chất lượng tạo niềm tin</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-400">
              Tin tức
            </a>
            <a href="#" className="hover:text-orange-400">
              Tuyển dụng
            </a>
            <a href="#" className="hover:text-orange-400">
              Liên hệ
            </a>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 text-white p-2 rounded-lg">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18M5 21V7l8-4 8 4v14" />
                    <path d="M13 11v10" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-none">
                    CỬA ĐẸP
                  </h1>
                  <span className="text-xs text-orange-600 font-bold tracking-widest">
                    VIỆT NAM
                  </span>
                </div>
              </div>

              <button className="md:hidden p-2 text-gray-600">
                <Menu className="w-6 h-6" />
              </button>
            </div>
            {/* Search */}

            {isMatch && (
              <div className="flex-1 max-w-xl mx-auto w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm theo tên, loại cửa..."
                    className="w-full pl-4 pr-12 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  />
                  <button
                    type="button"
                    className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  bg-none! bg-transparent!  border-none! outline-none! shadow-none!
           
                  p-0 m-0
                  text-gray-500 hover:text-orange-600
                "
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-right">
                <div className="p-2 bg-orange-50 rounded-full text-orange-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Hotline tư vấn</p>
                  <p className="font-bold text-gray-900">0912.345.678</p>
                </div>
              </div>
              <Button variant="primary" size="sm">
                Nhận báo giá
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="hidden md:block border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `block py-4 no-underline !text-gray-900 transition-colors ${
                      isActive
                        ? "border-b-2 border-orange-600"
                        : "hover:text-orange-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
