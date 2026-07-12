import { Link } from "react-router-dom";
import { motion, } from "motion/react";
import { ArrowRight, Wrench, Palette, VolumeX } from "lucide-react";
import type { Variants } from "motion/react";

import { useAllProducts } from "~/hooks/productHooks";
import Seo from "~/components/seo/Seo";

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
  // Lấy 3 sản phẩm bán chạy nhất để hiển thị ở khối "Sản Phẩm Nổi Bật"
  const { data: featuredData, isLoading } = useAllProducts({
    page: 1,
    limit: 3,
    Sort: "best_selling",
  });

  const featuredProducts = featuredData?.items ?? [];

  return (
   <main>
        <Seo
          title="Trang Chủ"
          description="Đại Nam - Chuyên sản xuất, lắp đặt cửa cuốn, cửa nhôm Xingfa, cửa kính cường lực và cầu thang kính cao cấp. Giải pháp cửa nhôm đẳng cấp cho không gian sống hiện đại."
          path="/"
        />

        {/* Hero Section */}
        <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
            alt="Cửa hàng Cửa Cuốn - Nhôm Xingfa Đại Nam"
            src="https://res.cloudinary.com/dainam/image/upload/v1783785079/1783784986819_182700253967333157_6913400209933374045_69f5e8ea045a06fd34374baf8acf11e9_iobml2.jpg"
          />

          {/* Overlay tối đều toàn ảnh để chữ luôn tương phản tốt, không cần khung hộp */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

          {/* Nội dung */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-[20px]"
          >
            <motion.span
              variants={heroItem}
              className="text-[11px] md:text-[13px] font-semibold tracking-[0.35em] text-[#e0bd7e] uppercase mb-6 [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]"
            >
              Hệ Thống Cửa Nhôm Cao Cấp
            </motion.span>
            <motion.h1
              variants={heroItem}
              className="text-white text-[34px] md:text-[64px] font-serif font-semibold leading-tight mb-6 max-w-4xl [text-shadow:0_4px_24px_rgba(0,0,0,0.85)]"
            >
              Giải Pháp Cửa Nhôm <br /> Đẳng Cấp
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="text-white/90 text-[15px] md:text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]"
            >
              Khám phá sự hoàn hảo giữa độ bền bỉ của hợp kim nhôm và vẻ đẹp tinh tế của vân gỗ tự nhiên. Hệ thống cửa nhôm của chúng tôi mang đến giải pháp tối ưu cho không gian sống hiện đại.
            </motion.p>
            <motion.div variants={heroItem} className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link className="block bg-white text-black px-10 py-5 text-[12px] font-semibold tracking-widest uppercase hover:bg-opacity-90 transition-all shadow-lg" to="/products">
                  Khám Phá Cửa Nhôm
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link className="block border border-white text-white px-10 py-5 text-[12px] font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all" to="/about">
                  Ưu Điểm Sản Phẩm
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Curated Collections Section - Sản phẩm bán chạy từ API */}
        <section className="py-[120px] bg-[#f9f9f9] px-[20px] md:px-[80px] max-w-[1440px] mx-auto" id="collections">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 text-center md:text-left"
          >
            <p className="text-[12px] font-semibold tracking-widest text-[#775a19] mb-4 uppercase">Giải Pháp Nhôm Kính</p>
            <h2 className="text-[48px] font-serif font-medium text-black">Sản Phẩm Nổi Bật</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoading &&
              Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/5] bg-[#eeeeee] animate-pulse"
                />
              ))}

            {!isLoading && featuredProducts.length === 0 && (
              <div className="col-span-3 text-center text-[#444748] py-16 border border-dashed border-[#c4c7c7]">
                Chưa có sản phẩm nổi bật để hiển thị.
              </div>
            )}

            {!isLoading &&
              featuredProducts.map((product, index) => (
                <motion.div
                  key={product.ProductId}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    className="group relative aspect-[4/5] overflow-hidden bg-[#eeeeee] block"
                    to={`/products/${product.ProductId}-${product.Slug}`}
                  >
                    <img
                      className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-110"
                      alt={product.ProductName}
                      src={product?.Media?.[0]?.Url}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10">
                      <h3 className="text-[28px] md:text-[32px] font-serif font-medium text-white mb-2 line-clamp-2">
                        {product.ProductName}
                      </h3>
                      <p className="text-[12px] font-semibold text-white/70 uppercase tracking-widest">
                        {product.Categories?.CategoryName || "Hệ Kiến Trúc"}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Link className="inline-flex items-center text-[12px] font-semibold text-black border-b border-black pb-2 hover:opacity-60 transition-all uppercase tracking-widest" to="/products">
              Xem Toàn Bộ Danh Mục
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </section>

        {/* Brand Excellence Section */}
        <section className="bg-[#f9f9f9] py-[120px] border-t border-[#c4c7c7]/30 overflow-hidden">
          <div className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="order-2 lg:order-1"
              >
                <p className="text-[12px] font-semibold tracking-widest text-[#775a19] mb-6 uppercase">Ưu Điểm Vượt Trội</p>
                <h2 className="text-[48px] font-serif font-medium text-black mb-8">Bền Bỉ & Thẩm Mỹ Tối Ưu</h2>
                <p className="text-[18px] text-[#444748] mb-12 leading-relaxed">
                  Cửa nhôm Đại Nam là sự kết hợp hoàn hảo giữa thiết kế hiện đại và vật liệu nhôm cao cấp. Với lớp vân gỗ sống động như thật cùng khả năng chống chịu thời tiết, chúng tôi mang đến giải pháp bền vững cho mọi công trình.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      Icon: Wrench,
                      title: "Khung Nhôm Bền Bỉ",
                      desc: "Hợp kim nhôm định hình chất lượng cao, chịu lực tốt, không cong vênh hay mối mọt.",
                    },
                    {
                      Icon: Palette,
                      title: "Màu Sắc & Vân Gỗ",
                      desc: "Công nghệ sơn tĩnh điện và phủ vân gỗ tiên tiến, màu sắc tự nhiên, chống phai màu theo thời gian.",
                    },
                    {
                      Icon: VolumeX,
                      title: "Cách Âm & Cách Nhiệt",
                      desc: "Thiết kế khoang rỗng đa lớp kết hợp hệ gioăng cao cấp cung cấp khả năng cách âm, cách nhiệt hiệu quả.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center text-white">
                        <feature.Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h4 className="text-[32px] text-xl font-serif font-medium text-black mb-2">{feature.title}</h4>
                        <p className="text-[16px] text-[#444748]">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative order-1 lg:order-2 h-[600px] bg-[#eeeeee] overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="A extreme close-up of a high-tech door hinge system."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9-4I1jHYz9u_9WIRJMQTSOXyVds4nSJ-zhH9ArF9NzyEIC7gJOouTQGVkWPcjC7YOva-cS6u5ErmC3R2jqoQ0_-Xf_9FyI_RTPWjF-WCLLNELr4PyyWq4TgoEOAFjY4UXBrnDA2XmgMYbjzFSA370GquSLlfdmDmKa8wWqKUWz8W6CTb4Oz65Q3ydfkjWwjZqPZdeOMe3LDwUeP60O96JaVe8Am0innDE_9jOEcQOXIEYt7w4zyUIlCNMo-3mXJVykL771ZcI_LE"
                />
                <div className="absolute inset-0 border-[20px] border-[#f9f9f9]/50 pointer-events-none"></div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
  );
}