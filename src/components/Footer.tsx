import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Goli Veera Venkata Naga Durga Vasanti</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Computer Science Engineering Student passionate about creating innovative solutions 
            through technology and making a positive impact in the tech industry.
          </p>
          
          <div className="flex justify-center items-center space-x-2 text-gray-400 mb-8">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and</span>
            <Code size={16} className="text-blue-400" />
            <span>powered by</span>
            <Coffee size={16} className="text-yellow-500" />
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Vasanti Goli. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;