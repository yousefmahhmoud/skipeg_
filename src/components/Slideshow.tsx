import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/33055330/pexels-photo-33055330.jpeg',
      title: 'Premium SKIP Basics Collection',
      subtitle: 'Think globally, wear locally'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/33055329/pexels-photo-33055329.jpeg',
      title: 'Comfortable SKIP Pants',
      subtitle: 'Innovation meets comfort'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/33055336/pexels-photo-33055336.jpeg',
      title: 'SKIP Style',
      subtitle: 'Quality and innovation in every piece'
    }
    ,
    {
      id: 4,
      image: 'https://images.pexels.com/photos/33055335/pexels-photo-33055335.jpeg',
      title: 'SKIP Style',
      subtitle: 'Quality and innovation in every piece'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/33055328/pexels-photo-33055328.jpeg',
      title: 'SKIP Style',
      subtitle: 'Quality and innovation in every piece'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/33055333/pexels-photo-33055333.jpeg',
      title: 'SKIP Style',
      subtitle: 'Quality and innovation in every piece'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/33055331/pexels-photo-33055331.jpeg',
      title: 'SKIP Style',
      subtitle: 'Quality and innovation in every piece'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/33055337/pexels-photo-33055337.jpeg',
      title: 'SKIP Style',
      subtitle: 'Quality and innovation in every piece'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/33055332/pexels-photo-33055332.jpeg',
      title: 'SKIP Style',
      subtitle: 'Quality and innovation in every piece'
    }, 
    {
      id: 10,
      image: 'https://images.pexels.com/photos/33055334/pexels-photo-33055334.jpeg',
      title: 'SKIP Style',
      subtitle: 'Quality and innovation in every piece'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl opacity-90">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200"
      >
        <ChevronRight className="text-white" size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;