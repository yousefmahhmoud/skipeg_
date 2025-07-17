import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      name: 'SKIP Basics',
      images: {
        'Pink': [
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        'Gray': [
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        'Black': [
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        'White': [
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
      },
      description: 'Experience ultimate comfort with our premium SKIP Basics collection. Crafted from the finest materials, this versatile piece offers a perfect blend of style and comfort. Ideal for casual outings or relaxed days at home.',
      colors: ['Pink', 'Gray', 'Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
      
      price: '350EGP'
    },
    {
      name: 'SKIP Pants',
      images: {
        'Black': [
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        'Blue': [
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        'Olive': [
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325574/pexels-photo-5325574.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/5325578/pexels-photo-5325578.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
      },
      description: 'Luxury meets comfort in our signature SKIP Pants. Made with premium cotton blend fabric, these pants provide exceptional softness and durability. Perfect for workouts, lounging, or casual everyday wear.',
      colors: ['Black', 'Blue', 'Olive'],
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