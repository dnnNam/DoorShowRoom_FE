import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";

export default function Header(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Trang Chủ', to: '/' },
    { label: 'Dự Án', to: '/projects' },
    { label: 'Danh Mục', to: '/products' },
    { label: 'Liên Hệ', to: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-black/10 backdrop-blur-md ${
        isScrolled ? 'h-16 bg-[#f9f9f9]/95 shadow-sm' : 'h-20 bg-[#f9f9f9]/80'
      }`}
    >
      <div className="flex justify-between items-center h-full px-[20px] md:px-[80px] max-w-[1440px] mx-auto">
        <Link className="text-[32px] font-serif font-bold tracking-tight text-black" to="/">
          Đại Nam
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <motion.div key={item.to} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                className="text-[12px] font-semibold tracking-widest text-[#444748] hover:text-black uppercase transition-colors"
                to={item.to}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
          <Link
            to="/contact"
            className="inline-block bg-black text-white px-6 py-3 text-[12px] font-semibold tracking-widest uppercase hover:bg-[#775a19] transition-colors duration-300"
          >
            Nhận Báo Giá
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}