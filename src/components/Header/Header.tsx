import { DoorOpen, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/products" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Liên hệ", path: "/contact" },
  ];
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-amber-700 p-2 rounded-lg">
              <DoorOpen className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-stone-900 leading-none">
                CỬA ĐẸP
              </span>
              <span className="text-xs text-amber-700 font-medium tracking-wider">
                VIỆT NAM
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                  isActive(link.path) ? "text-amber-700" : "text-stone-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden lg:flex items-center text-stone-500 mr-2">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">0912.345.678</span>
            </div>
            <Button size="sm" className="hidden lg:inline-flex">
              Nhận báo giá
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-500 hover:text-stone-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "bg-amber-50 text-amber-700"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-stone-100">
              <div className="flex items-center px-3 py-2 text-stone-600 mb-3">
                <Phone className="h-5 w-5 mr-3" />
                <span className="font-medium">Hotline: 0912.345.678</span>
              </div>
              <Button className="w-full justify-center">
                Nhận báo giá ngay
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
