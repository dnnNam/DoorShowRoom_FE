import React, { useEffect } from "react";
import { X } from "lucide-react";
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}
export default function VideoModal({
  isOpen,
  onClose,
  videoId,
  title,
}: VideoModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="absolute top-0 right-0 p-4 z-10">
          <button
            onClick={onClose}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors backdrop-blur-md"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="relative pt-[56.25%] w-full bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-4 bg-gray-900 text-white">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      </div>
    </div>
  );
}
