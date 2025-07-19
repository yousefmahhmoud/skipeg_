import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      name: 'SKIP Basics',
      images: {
        'Pink': [
          'https://images.pexels.com/photos/33055458/pexels-photo-33055458.jpeg',
          'https://images.pexels.com/photos/33055459/pexels-photo-33055459.jpeg',
          'https://images.pexels.com/photos/33055456/pexels-photo-33055456.jpeg',
          'https://images.pexels.com/photos/33055336/pexels-photo-33055336.jpeg'
        ],
        'Gray': [
          'https://images.pexels.com/photos/33055488/pexels-photo-33055488.jpeg',
          'https://images.pexels.com/photos/33055328/pexels-photo-33055328.jpeg',
          'https://images.pexels.com/photos/33064878/pexels-photo-33064878.jpeg'
        ],
        'Black': [
          'https://images.pexels.com/photos/33055520/pexels-photo-33055520.jpeg',
          'https://images.pexels.com/photos/33055337/pexels-photo-33055337.jpeg',
          'https://images.pexels.com/photos/33055457/pexels-photo-33055457.jpeg',
          'https://images.pexels.com/photos/33055519/pexels-photo-33055519.jpeg'
        ],
        'White': [
         
        ]
      },
description: `Simple Style That Stands Out
A practical top with soft, comfortable fabric and a casual design that fits any look. One of those everyday essentials you’ll always reach for!`,
      colors: ['Pink', 'Gray', 'Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
      
      price: '350EGP'
    },
    {
      name: 'SKIP Pants',
      images: {
        'Black': [
          'https://images.pexels.com/photos/33055601/pexels-photo-33055601.jpeg',
          'https://images.pexels.com/photos/33055598/pexels-photo-33055598.jpeg',
          'https://images.pexels.com/photos/33055597/pexels-photo-33055597.jpeg',
          'https://images.pexels.com/photos/33055600/pexels-photo-33055600.jpeg'
        ],
        'Blue': [
          'https://images.pexels.com/photos/33055335/pexels-photo-33055335.jpeg',
          'https://images.pexels.com/photos/33055620/pexels-photo-33055620.jpeg',
          'https://images.pexels.com/photos/33055619/pexels-photo-33055619.jpeg',
          'https://images.pexels.com/photos/33055618/pexels-photo-33055618.jpeg'
        ],
        'Olive': [
          'https://images.pexels.com/photos/33055634/pexels-photo-33055634.jpeg',
          'https://images.pexels.com/photos/33055635/pexels-photo-33055635.jpeg',
          'https://images.pexels.com/photos/33055636/pexels-photo-33055636.jpeg',
          'https://images.pexels.com/photos/33055633/pexels-photo-33055633.jpeg'
        ]
      },
      description: 'These wide-leg pants bring chill vibes with serious style. High waist, soft flow, and made to flex with your vibe—whether you’re out or just vibing.',
      colors: ['Blue', 'Olive', 'Black'],
      sizes: ['S', 'M', 'L', 'XL'],
      price: '550EGP'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated SKIP collection designed for comfort and style. Think globally, wear locally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              {...product} 
              productType={product.name === 'SKIP Basics' ? 'tops' : 'pants'}
            />
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-r-lg inline-block">
            <p className="text-orange-700 font-semibold text-lg">
              🎒 Accessories coming soon!
            </p>
            <p className="text-orange-600 mt-2">
              Stay tuned for our upcoming collection of premium accessories to complete your look.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;