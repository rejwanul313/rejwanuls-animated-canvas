
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (titleRef.current) {
        titleRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        titleRef.current.style.opacity = String(1 - scrollPosition * 0.002);
      }
      if (subtitleRef.current) {
        subtitleRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        subtitleRef.current.style.opacity = String(1 - scrollPosition * 0.002);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in"
        >
          Hi, I'm <span className="text-gradient">Rejwanul Islam</span>
        </h1>
        
        <h2 
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-8 text-gray-700 opacity-0 animate-fade-in-delayed"
        >
          I craft digital experiences that merge creativity with functionality
        </h2>
        
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 opacity-0 animate-fade-in-delayed-more"
        >
          <Button 
            className="bg-portfolio-blue hover:bg-portfolio-lightBlue text-white px-8 py-6 rounded-full transition-all duration-300 shine-effect"
            onClick={() => window.open('#contact', '_self')}
          >
            Get in Touch
          </Button>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/rejwanul7/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:text-portfolio-blue"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:text-portfolio-blue"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            
            <a
              href="mailto:contact@example.com"
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:text-portfolio-blue"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:text-portfolio-blue"
        aria-label="Scroll Down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
