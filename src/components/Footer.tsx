import React from 'react';
import { Facebook, Instagram, MessageCircle, Heart } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">SKIP</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium casual wear that combines comfort, style, and quality. 
              Discover clothing that moves with your lifestyle.
            </p>
            <p className="text-orange-400 font-medium italic mt-2">
              "think globally, wear locally"
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/16f346dtK2/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/skipeg_?igsh=Nzg2aDloY21rM203"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@skipeg__?_t=ZS-8y6w4VC8BY0&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors duration-200"
              >
                <SiTiktok size={20} />
              </a>
              <a
                href="https://wa.me/201143813707"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors duration-200"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              Follow us on social media for updates and exclusive content
            </p>
            <p className="text-gray-400">
              Customer service available through our social channels
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2025 SKIP. Made with</span>
            <Heart className="text-orange-500" size={16} />
            <span>for comfort and style.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;