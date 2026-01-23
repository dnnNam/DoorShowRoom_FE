import { useState, useRef, useEffect } from "react";
import { Rotate3d, ZoomIn, Play, Pause, MousePointer2 } from "lucide-react";

interface Image360ViewerProps {
  src: string;
  alt: string;
}
export default function Image360Viewer({ src, alt }: Image360ViewerProps) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef<number | null>(null);
  // Handle auto-rotation
  useEffect(() => {
    if (isAutoRotating) {
      autoRotateRef.current = window.setInterval(() => {
        setRotation((prev) => (prev + 1) % 360);
      }, 50);
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }
    }
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [isAutoRotating]);
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsAutoRotating(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotation((prev) => (prev + deltaX * 0.5) % 360);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setIsAutoRotating(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setRotation((prev) => (prev + deltaX * 0.5) % 360);
    setStartX(e.touches[0].clientX);
  };

  return (
    <div className="space-y-4">
      <div
        className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200 cursor-grab active:cursor-grabbing group"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* 360 Indicator Overlay */}
        <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 flex items-center gap-2 shadow-sm pointer-events-none">
          <Rotate3d className="w-4 h-4 text-orange-600" />
          <span>{Math.round(Math.abs(rotation) % 360)}°</span>
        </div>
        {/* Drag Instruction */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${
            isDragging || isAutoRotating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-sm">
            <MousePointer2 className="w-4 h-4 animate-bounce-horizontal" />
            Kéo để xoay 360°
          </div>
        </div>
        {/* Main Image with 3D Transform */}
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
          style={{
            transform: `perspective(1000px) rotateY(${rotation}deg) scale(${
              isZoomed ? 1.5 : 1
            })`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Face */}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain pointer-events-none select-none"
            style={{ backfaceVisibility: "visible" }}
          />
          {/* Back Face (mirrored for 3D effect) */}
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>
        {/* Controls Overlay */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(!isZoomed);
            }}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 text-gray-700 transition-colors"
            title={isZoomed ? "Thu nhỏ" : "Phóng to"}
          >
            <ZoomIn
              className={`w-5 h-5 ${isZoomed ? "text-orange-600" : ""}`}
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsAutoRotating(!isAutoRotating);
            }}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 text-gray-700 transition-colors"
            title={isAutoRotating ? "Dừng xoay" : "Tự động xoay"}
          >
            {isAutoRotating ? (
              <Pause className="w-5 h-5 text-orange-600" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {[0, 90, 180, 270].map((angle, i) => (
          <button
            key={i}
            onClick={() => {
              setRotation(angle);
              setIsAutoRotating(false);
            }}
            className={`aspect-square rounded-lg border-2 overflow-hidden transition-all ${
              Math.abs(Math.round(rotation) % 360) === angle
                ? "border-orange-500 ring-2 ring-orange-200"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={src}
                alt={`Angle ${angle}`}
                className="w-full h-full object-cover"
                style={{ transform: `rotateY(${angle}deg)` }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
