import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  id: number;
  image: string;
  title?: string;
  subtitle?: string;
  alt: string;
}

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const slides: SlideData[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/33055330/pexels-photo-33055330.jpeg',
      title: 'Premium Skip Collection',
      subtitle: 'Think Globally, Wear Locally',
      alt: 'SKIP Premium Collection - Quality casual wear for modern lifestyle'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/33055329/pexels-photo-33055329.jpeg',
      alt: 'SKIP casual wear collection - comfortable and stylish clothing'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/33055336/pexels-photo-33055336.jpeg',
      alt: 'SKIP premium clothing - modern casual wear design'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/33055335/pexels-photo-33055335.jpeg',
      alt: 'SKIP collection - quality materials and comfortable fit'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/33055328/pexels-photo-33055328.jpeg',
      alt: 'SKIP casual wear - versatile clothing for everyday comfort'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/33055333/pexels-photo-33055333.jpeg',
      alt: 'SKIP premium collection - stylish and comfortable clothing'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/33055331/pexels-photo-33055331.jpeg',
      alt: 'SKIP clothing line - modern design meets comfort'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/33055337/pexels-photo-33055337.jpeg',
      alt: 'SKIP casual collection - quality clothing for active lifestyle'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/33055332/pexels-photo-33055332.jpeg',
      alt: 'SKIP premium wear - comfortable and stylish everyday clothing'
    },
    {
      id: 10,
      image: 'https://images.pexels.com/photos/33055334/pexels-photo-33055334.jpeg',
      alt: 'SKIP collection - modern casual wear for contemporary lifestyle'
    }
  ];

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      slides.forEach((slide) => {
        const img = new Image();
        img.src = slide.image;
      });
    };
    preloadImages();
  }, [slides]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsLoading(false), 300);
  }, [slides.length, isLoading]);

  const prevSlide = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsLoading(false), 300);
  }, [slides.length, isLoading]);

  const goToSlide = useCallback((index: number) => {
    if (isLoading || index === currentSlide) return;
    setIsLoading(true);
    setCurrentSlide(index);
    setTimeout(() => setIsLoading(false), 300);
  }, [currentSlide, isLoading]);

  // Touch handlers for mobile swipe
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
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-label="Product slideshow"
      aria-live="polite"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30"></div>
            
            {/* Loading indicator */}
            {isLoading && index === currentSlide && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}
            
            {/* Content overlay - only show on first slide */}
            {index === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h2 
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
                    id={`slide-title-${slide.id}`}
                  >
                    {slide.title}
                  </h2>
                  <p 
                    className="text-lg md:text-xl lg:text-2xl opacity-90 drop-shadow-md leading-relaxed font-medium"
                    id={`slide-subtitle-${slide.id}`}
                  >
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            )}

            {/* Hidden image for accessibility */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="sr-only"
              loading="lazy"
            />
          </div>
        </div>
      ))}
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        disabled={isLoading}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
        aria-describedby={currentSlide === 0 ? `slide-title-${slides[currentSlide]?.id}` : undefined}
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isLoading}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
        aria-describedby={currentSlide === 0 ? `slide-title-${slides[currentSlide]?.id}` : undefined}
      >
        <ChevronRight className="text-white" size={24} />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            disabled={isLoading}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide 
                ? 'bg-orange-500 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div 
          className="h-full bg-orange-500 transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          role="progressbar"
          aria-valuenow={currentSlide + 1}
          aria-valuemin={1}
          aria-valuemax={slides.length}
          aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}
        />
      </div>
    </div>
  );
};

export default Slideshow;