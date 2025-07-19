import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Ruler, Maximize2 } from 'lucide-react';
import SizeChart from './SizeChart';
import PhotoModal from './PhotoModal';

interface ProductCardProps {
  name: string;
  images: { [color: string]: string[] };
  description: string;
  colors: string[];
  sizes: string[];
  price: string;
  productType?: 'tops' | 'pants';
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  images, 
  description, 
  colors, 
  sizes, 
  price,
  productType = 'tops'
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const currentImages = images[selectedColor] || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const handleColorChange = (color: string) => {
    if (color !== selectedColor) {
      setImageLoading(true);
      setSelectedColor(color);
      setCurrentImageIndex(0);
      
      // Simulate image loading time for smooth transition
      setTimeout(() => {
        setImageLoading(false);
      }, 300);
    }
  };

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'Pink': 'bg-pink-400',
      'Gray': 'bg-gray-400',
      'Black': 'bg-black',
      'White': 'bg-white border-2 border-gray-300',
      'Blue': 'bg-blue-500',
      'Olive': 'bg-green-600'
    };
    return colorMap[color] || 'bg-gray-400';
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

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

    if (isLeftSwipe && currentImages.length > 1) {
      nextImage();
    } else if (isRightSwipe && currentImages.length > 1) {
      prevImage();
    }
  };

  const handleMaximizeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPhotoModal(true);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div 
          className="relative overflow-hidden group bg-gray-100"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {currentImages.length > 0 && (
            <>
              <div className={`transition-opacity duration-300 ${imageLoading ? 'opacity-50' : 'opacity-100'}`}>
                <img
                  src={currentImages[currentImageIndex]}
                  alt={`${name} - ${selectedColor}`}
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-300 hover:scale-105"
                  onLoad={handleImageLoad}
                  style={{ minHeight: '500px' }}
                  draggable={false}
                />
              </div>
              
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                </div>
              )}
              
              {/* Maximize button */}
              <button
                onClick={handleMaximizeClick}
                className="absolute top-3 right-3 p-2 bg-black bg-opacity-40 hover:bg-opacity-60 backdrop-blur-sm rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="View full size image"
              >
                <Maximize2 className="text-white" size={18} />
              </button>
              
              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="text-white" size={20} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="text-white" size={20} />
                  </button>
                  
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    {currentImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-orange-500' : 'bg-white bg-opacity-50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
          
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {price}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-3">Available Colors:</h4>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`relative w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 ${getColorClass(color)} ${
                    selectedColor === color ? 'ring-2 ring-orange-500 ring-offset-2' : ''
                  }`}
                  title={color}
                  aria-label={`Select ${color} color`}
                >
                  {selectedColor === color && (
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500"></div>
                  )}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">Selected: {selectedColor}</p>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-700">Available Sizes:</h4>
              <button
                onClick={() => setShowSizeChart(true)}
                className="flex items-center space-x-1 text-orange-500 hover:text-orange-600 transition-colors duration-200 text-sm"
              >
                <Ruler size={16} />
                <span>Size Chart</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          
          <button 
  onClick={() => (window.location.href = "https://wa.me/201143813707")}
  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
>
  Contact us to place your order.
</button>
        </div>
      </div>

      <PhotoModal
        isOpen={showPhotoModal}
        onClose={() => setShowPhotoModal(false)}
        images={currentImages}
        initialIndex={currentImageIndex}
        productName={name}
        selectedColor={selectedColor}
      />

      <SizeChart 
        isOpen={showSizeChart} 
        onClose={() => setShowSizeChart(false)} 
        productType={productType}
      />
    </>
  );
};

export default ProductCard;