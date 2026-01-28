import React, { useState } from "react";
import { Play, MapPin, Calendar } from "lucide-react";
import VideoModal from "~/components/VideoModal";

interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  thumbnail: string;
  videoId: string; // YouTube Video ID
  category: string;
}
export default function ProjectPage() {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const projects: Project[] = [
    {
      id: "1",
      title: "Biệt thự hiện đại ven sông",
      location: "Quận 2, TP.HCM",
      year: "2023",
      thumbnail:
        "https://images.unsplash.com/photo-1600596542815-27b88e57e62f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "ysz5S6PUM-U", // Placeholder ID
      category: "Biệt thự",
    },
    {
      id: "2",
      title: "Nhà phố thương mại Shophouse",
      location: "Quận 7, TP.HCM",
      year: "2023",
      thumbnail:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "LXb3EKWsInQ",
      category: "Nhà phố",
    },
    {
      id: "3",
      title: "Căn hộ Duplex cao cấp",
      location: "Thủ Đức, TP.HCM",
      year: "2022",
      thumbnail:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "tgbNymZ7vqY",
      category: "Căn hộ",
    },
    {
      id: "4",
      title: "Villa nghỉ dưỡng Đà Lạt",
      location: "Đà Lạt, Lâm Đồng",
      year: "2023",
      thumbnail:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "ysz5S6PUM-U",
      category: "Biệt thự",
    },
    {
      id: "5",
      title: "Showroom Cửa Đẹp Việt Nam",
      location: "Quận 10, TP.HCM",
      year: "2024",
      thumbnail:
        "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "LXb3EKWsInQ",
      category: "Showroom",
    },
    {
      id: "6",
      title: "Penthouse View Sông Sài Gòn",
      location: "Bình Thạnh, TP.HCM",
      year: "2023",
      thumbnail:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "tgbNymZ7vqY",
      category: "Căn hộ",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dự Án Nhà Mẫu</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tham quan thực tế các công trình tiêu biểu đã được Cửa Đẹp Việt Nam
            thi công và hoàn thiện.
          </p>
        </div>
      </div>
      {/* Gallery Grid */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div
                className="relative aspect-video cursor-pointer overflow-hidden"
                onClick={() =>
                  setSelectedVideo({
                    id: project.videoId,
                    title: project.title,
                  })
                }
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                    <Play className="h-8 w-8 text-white fill-current ml-1" />
                  </div>
                </div>
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#FF6B35] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo?.id || ""}
        title={selectedVideo?.title || ""}
      />
    </div>
  );
}
