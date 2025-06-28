import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Goli Veera Venkata Naga
            <span className="block text-yellow-300">Durga Vasanti</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 font-light text-white/90 max-w-3xl mx-auto">
            Computer Science Engineering Student | Full Stack Developer | AI Enthusiast
          </p>
          
          <p className="text-lg mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed">
            Motivated and detail-oriented student with a strong commitment to collaboration, learning, and professional growth. 
            Understands responsibilities and priorities, and aims to excel in the tech industry through dedication and teamwork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <button
              onClick={scrollToAbout}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </button>
            
            <a
              href="mailto:vasantigoli2005@gmail.com"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Get In Touch
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;