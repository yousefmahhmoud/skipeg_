import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';


const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800">SKIP</span>
              <span className="text-xs text-gray-500 italic">think globally, wear locally</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/share/16f346dtK2/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/skipeg_?igsh=Nzg2aDloY21rM203"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@skipeg__?_t=ZS-8y6w4VC8BY0&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              <SiTiktok size={20} />
            </a>
            <a
              href="https://wa.me/201108151772"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;