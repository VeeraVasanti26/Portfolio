import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Vasanti_Resume-Internships.pdf';
    link.download = 'Vasanti_Goli_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=vasantigoli2005@gmail.com&su=Regarding%20Your%20Portfolio&body=Hi%20Vasanti%2C%0D%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect.`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <h1 className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Vasanti Goli
            </h1>

            <div className="hidden sm:flex items-center space-x-4">
             <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=vasantigoli2005@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className={`p-2 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white ${
    isScrolled ? 'text-gray-600 hover:text-white' : 'text-white/80 hover:text-white'
  }`}
  title="Send Email"
>
  <Mail size={16} />
</a>


              <a
                href="tel:+919951980767"
                className={`p-2 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white ${
                  isScrolled ? 'text-gray-600 hover:text-white' : 'text-white/80 hover:text-white'
                }`}
                title="Call"
              >
                <Phone size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/vasanti-goli-348658259/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white ${
                  isScrolled ? 'text-gray-600 hover:text-white' : 'text-white/80 hover:text-white'
                }`}
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="https://github.com/VeeraVasanti26?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white ${
                  isScrolled ? 'text-gray-600 hover:text-white' : 'text-white/80 hover:text-white'
                }`}
                title="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              onClick={downloadResume}
              className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="flex items-center space-x-2 text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
