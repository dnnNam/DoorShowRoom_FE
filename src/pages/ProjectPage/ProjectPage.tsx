import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import Seo from "~/components/seo/Seo";
import VideoModal from "~/components/VideoModal";
import { useVideos } from "~/hooks/videoHooks";
import { cubicBezier } from "motion";

const PAGE_SIZE = 9;

const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
     duration: 0.5,
      ease: cubicBezier(0.22, 1, 0.36, 1),
}
  },
};

export default function ProjectPage() {
  const [page, setPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const { items: videos, total, isLoading, isError } = useVideos({
    page,
    limit: PAGE_SIZE,
  });

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const formatDate = (createdAt: string) => {
    const date = new Date(createdAt);
    return Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleDateString("vi-VN");
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Seo
        title="Dự Án Nhà Mẫu"
        description="Tham quan thực tế các công trình tiêu biểu đã được Đại Nam thi công và hoàn thiện — video thực tế cửa nhôm, cửa cuốn, cửa kính cường lực tại các dự án nhà ở, biệt thự."
        path="/projects"
      />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#111111] pt-40 pb-28 px-[20px] md:px-[80px]"
      >
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[11px] font-semibold tracking-[0.3em] text-[#c9a24a] uppercase mb-5 block"
          >
            Thư Viện Công Trình
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Playfair_Display'] text-[40px] md:text-[64px] font-medium text-white leading-tight mb-6"
          >
            Dự Án Nhà Mẫu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 max-w-2xl mx-auto text-[16px] md:text-[18px] font-light leading-relaxed"
          >
            Tham quan thực tế các công trình tiêu biểu đã được Đại Nam thi
            công và hoàn thiện.
          </motion.p>
        </div>
      </motion.section>

      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[80px] -mt-16 pb-32">
        {/* Loading state */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white border border-[#e8e6e1]">
                <div className="aspect-video bg-[#e8e6e1] animate-pulse" />
                <div className="p-6 md:p-8 space-y-3">
                  <div className="h-5 w-3/4 bg-[#e8e6e1] animate-pulse" />
                  <div className="h-3 w-1/3 bg-[#e8e6e1] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {!isLoading && isError && (
          <div className="bg-white border border-dashed border-[#c4c7c7] py-24 text-center">
            <p className="text-[#444748]">
              Không thể tải danh sách video. Vui lòng thử lại sau.
            </p>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !isError && videos.length === 0 && (
          <div className="bg-white border border-dashed border-[#c4c7c7] py-24 text-center">
            <p className="text-[#444748]">
              Chưa có video dự án nào được đăng tải.
            </p>
          </div>
        )}

        {/* Gallery Grid */}
        {!isLoading && !isError && videos.length > 0 && (
          <motion.div
            variants={gridContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videos.map((video) => {
              const title =  "Dự án Đại Nam";
              return (
                <motion.div
                  key={video.ImageId}
                  variants={gridItem}
                  className="group bg-white border border-[#e8e6e1] hover:border-[#775a19]/40 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]"
                >
                  {/* Video preview */}
                  <div
                    className="relative aspect-video cursor-pointer overflow-hidden bg-black"
                    onClick={() =>
                      setSelectedVideo({ url: video.Url, title })
                    }
                  >
                    <video
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105"
                      src={video.Url}
                      muted
                      playsInline
                      preload="metadata"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-lg">
                        <Play className="h-6 w-6 text-black fill-current ml-1" />
                      </div>
                    </div>

                    {/* Category Tag */}
                    {video.Product?.ProductName && (
                      <div className="absolute top-4 left-4 right-4">
                        <span className="inline-block max-w-full truncate bg-white/95 text-[#775a19] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                         Dự án Đại Nam
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-medium text-black leading-snug mb-4 line-clamp-2 group-hover:text-[#775a19] transition-colors duration-300">
                      {title}
                    </h3>

                    <div className="flex items-center justify-between pt-4 border-t border-[#e8e6e1]">
                      <div className="flex items-center gap-2 text-[#767586]">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="text-[11px] font-semibold uppercase tracking-widest">
                          {formatDate(video.CreatedAt)}
                        </span>
                      </div>

                      <button
                        onClick={() =>
                          setSelectedVideo({ url: video.Url, title })
                        }
                        className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                      >
                        Xem video
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Pagination */}
        {!isLoading && !isError && totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-3">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={`flex items-center gap-1 px-4 py-2.5 text-[11px] font-semibold tracking-widest uppercase border transition ${
                page === 1
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Trước
            </button>

            <span className="px-2 text-[13px] text-[#444748]">
              Trang <span className="font-semibold text-black">{page}</span> /{" "}
              {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className={`flex items-center gap-1 px-4 py-2.5 text-[11px] font-semibold tracking-widest uppercase border transition ${
                page === totalPages
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              Sau
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || ""}
      />
    </div>
  );
}