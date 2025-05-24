import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold tracking-wider">GÖK</h3>
            <p className="text-gray-600 mt-2">"Wear bold. Stay simple. Be GÖK."</p>
          </div>
          
          <div className="flex flex-col mb-6 md:mb-0">
            <h4 className="font-medium mb-3">Contact Us</h4>
            <a 
              href="http://wa.me/201111359219" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="https://www.instagram.com/gok.store/?igsh=YnJxdG90M2t3OTYy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center mt-2 text-gray-600 hover:text-black transition-colors"
            >
              <Instagram className="w-4 h-4 mr-2" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GÖK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;