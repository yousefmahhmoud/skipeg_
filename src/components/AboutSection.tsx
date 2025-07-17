import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-4xl">S</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About SKIP
            </h2>
            <p className="text-lg text-orange-600 font-medium italic">
              "think globally, wear locally"
            </p>
          </div>
          
          {/* Main About Content */}
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                <path d="M50 200 Q 200 50 350 200 Q 200 350 50 200" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                <path d="M100 150 Q 200 100 300 150 Q 200 200 100 150" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
                <path d="M100 250 Q 200 200 300 250 Q 200 300 100 250" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="bg-black bg-opacity-90 rounded-2xl p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">About Us</h3>
                <p className="text-base md:text-lg leading-relaxed text-center">
                  "At SKIP, we strive to deliver high-quality products and services that meet and exceed our customers' expectations. 
                  We believe in innovation, excellence, and attention to detail to ensure a unique experience for every customer. 
                  We are dedicated to building long-lasting relationships based on trust and respect, with a strong commitment to 
                  contributing to our community and promoting sustainability."
                </p>
              </div>
            </div>
          </div>

          {/* Mission and Vision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Brand Mission */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 300 300" fill="none">
                  <circle cx="150" cy="150" r="100" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                  <circle cx="150" cy="150" r="60" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="bg-black bg-opacity-90 rounded-2xl p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Brand Mission</h3>
                  <p className="text-sm md:text-base leading-relaxed text-center">
                    "Our mission is to provide high quality products and services that meet our customers' needs 
                    and enhance their daily lives. We are committed to continuous innovation, delivering exceptional 
                    customer experiences, and operating with transparency and responsibility to achieve sustainability 
                    and sustainable growth."
                  </p>
                </div>
              </div>
            </div>

            {/* Brand Vision */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 300 300" fill="none">
                  <path d="M50 150 L150 50 L250 150 L150 250 Z" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                  <path d="M80 150 L150 80 L220 150 L150 220 Z" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="bg-black bg-opacity-90 rounded-2xl p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Brand Vision</h3>
                  <p className="text-sm md:text-base leading-relaxed text-center">
                    "To be the leading brand in our industry, globally recognized for our quality and innovation. 
                    We aim to make a positive, lasting impact on the lives of our customers and our community by 
                    delivering products and services that enhance everyday life."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Innovation & Excellence</h3>
              <p className="text-gray-600">Continuous innovation and attention to detail in every product</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Trust & Respect</h3>
              <p className="text-gray-600">Building long-lasting relationships based on trust and mutual respect</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Community & Sustainability</h3>
              <p className="text-gray-600">Strong commitment to our community and promoting sustainability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;