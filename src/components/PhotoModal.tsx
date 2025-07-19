import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex: number;
  productName: string;
  selectedColor: string;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex,
  productName,
  selectedColor
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const nextImage = useCallback(() => {
    if (images.length > 1) {
      setImageLoading(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsZoomed(false);
      setTimeout(() => setImageLoading(false), 200);
    }
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (images.length > 1) {
      setImageLoading(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsZoomed(false);
      setTimeout(() => setImageLoading(false), 200);
    }
  }, [images.length]);

  // Touch handlers for swipe navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          onClose();
          break;
        case ' ':
          e.preventDefault();
          setIsZoomed(!isZoomed);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, nextImage, prevImage, onClose, isZoomed]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      {/* Backdrop overlay for click-to-close */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-label="Close photo viewer by clicking backdrop"
      />
      
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-3 bg-black bg-opacity-60 hover:bg-opacity-80 backdrop-blur-sm rounded-full transition-all duration-200 z-20 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Close photo viewer"
          title="Close (Esc)"
          tabIndex={0}
        >
          <X 
            className="text-white group-hover:scale-110 transition-transform duration-200" 
            size={24} 
            strokeWidth={2.5}
          />
        </button>

        {/* Image counter */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm z-10 border border-white border-opacity-20">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Zoom toggle */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-4 left-1/2 -translate-x-1/2 p-3 bg-black bg-opacity-60 hover:bg-opacity-80 backdrop-blur-sm rounded-full transition-all duration-200 z-10 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label={isZoomed ? "Zoom out" : "Zoom in"}
          title={isZoomed ? "Zoom out (Space)" : "Zoom in (Space)"}
          tabIndex={0}
        >
          {isZoomed ? 
            <ZoomOut className="text-white group-hover:scale-110 transition-transform duration-200" size={20} /> : 
            <ZoomIn className="text-white group-hover:scale-110 transition-transform duration-200" size={20} />
          }
        </button>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black bg-opacity-60 hover:bg-opacity-80 backdrop-blur-sm rounded-full transition-all duration-200 z-10 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Previous image"
              title="Previous image (←)"
              tabIndex={0}
            >
              <ChevronLeft className="text-white group-hover:scale-110 transition-transform duration-200" size={28} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black bg-opacity-60 hover:bg-opacity-80 backdrop-blur-sm rounded-full transition-all duration-200 z-10 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Next image"
              title="Next image (→)"
              tabIndex={0}
            >
              <ChevronRight className="text-white group-hover:scale-110 transition-transform duration-200" size={28} />
            </button>
          </>
        )}

        {/* Main image */}
        <div 
          className="relative max-w-full max-h-full flex items-center justify-center z-10"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}
          
          <img
            src={images[currentIndex]}
            alt={`${productName} - ${selectedColor} - Image ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain transition-all duration-300 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            } ${imageLoading ? 'opacity-50' : 'opacity-100'}`}
            onClick={() => setIsZoomed(!isZoomed)}
            onLoad={() => setImageLoading(false)}
            draggable={false}
          />
        </div>

        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setImageLoading(true);
                  setCurrentIndex(index);
                  setIsZoomed(false);
                  setTimeout(() => setImageLoading(false), 200);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Product info */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-white border-opacity-20 z-10">
          <p className="text-sm font-medium">{productName}</p>
          <p className="text-xs opacity-75">{selectedColor}</p>
        </div>
        
        {/* Mobile-specific close button for better touch accessibility */}
        <button
          onClick={onClose}
          className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-black bg-opacity-80 hover:bg-opacity-90 backdrop-blur-sm rounded-full transition-all duration-200 z-20 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Close photo viewer"
          title="Close"
          tabIndex={0}
        >
          <div className="flex items-center space-x-2">
            <X className="text-white group-hover:scale-110 transition-transform duration-200" size={20} />
            <span className="text-white text-sm font-medium">Close</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PhotoModal;