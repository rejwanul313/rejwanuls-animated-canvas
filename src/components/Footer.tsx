
import React from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-portfolio-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <a href="#home" className="text-2xl font-bold font-montserrat">
              Rejwanul<span className="text-portfolio-accent">.</span>
            </a>
            <p className="mt-2 text-gray-400">Building digital experiences that matter</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-portfolio-blue hover:bg-portfolio-lightBlue p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Rejwanul Islam. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm">Experience</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
