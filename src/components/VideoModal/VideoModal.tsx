import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 right-0 p-4 z-10">
              <button
                onClick={onClose}
                className="bg-black/50 hover:bg-[#775a19] text-white rounded-full p-2 transition-colors duration-300 backdrop-blur-md"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative pt-[56.25%] w-full bg-black">
              {videoUrl ? (
                <video
                  key={videoUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  src={videoUrl}
                  controls
                  autoPlay
                  playsInline
                >
                  Trình duyệt của bạn không hỗ trợ phát video.
                </video>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                  Không tìm thấy video
                </div>
              )}
            </div>

            <div className="p-5 bg-[#111111] text-white">
              <h3 className="font-['Playfair_Display'] text-lg md:text-xl font-medium">
                {title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}