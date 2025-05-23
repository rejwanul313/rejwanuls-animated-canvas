
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) imageRef.current.classList.add('animate-fade-in-right');
            if (contentRef.current) contentRef.current.classList.add('animate-fade-in-left');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="section-container min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div 
          ref={imageRef}
          className="relative opacity-0 order-2 md:order-1"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-portfolio-blue to-portfolio-lightBlue mx-auto overflow-hidden shadow-xl border-4 border-white">
            <Avatar className="w-full h-full">
              <AvatarImage 
                src="/lovable-uploads/f1ec3e43-6f2c-40f9-aed1-b643b9e80e53.png" 
                alt="Rejwanul Islam" 
                className="w-full h-full object-cover"
              />
              <AvatarFallback className="text-2xl">RI</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-20 bg-white rounded-lg shadow-lg p-4 animate-float">
            <span className="block text-portfolio-blue font-bold text-xl">6+</span>
            <span className="text-sm text-gray-600">Years Experience</span>
          </div>
          
          <div className="absolute -top-4 -left-4 md:top-4 md:left-20 bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: '2s' }}>
            <span className="block text-portfolio-accent font-bold text-xl">30+</span>
            <span className="text-sm text-gray-600">Projects Completed</span>
          </div>
        </div>
        
        <div 
          ref={contentRef}
          className="md:pl-8 order-1 md:order-2 opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-blue">
            About Me
          </h2>
          
          <p className="text-gray-700 mb-6">
            I am Rejwanul Islam, a passionate Software Developer with expertise in creating digital solutions that solve real-world problems. With over 6 years of experience in web development, I blend technical knowledge with creative problem-solving.
          </p>
          
          <p className="text-gray-700 mb-8">
            My goal is to build applications that are not only functional but also provide exceptional user experiences. I specialize in web and mobile app development, with a focus on efficient, scalable, and maintainable code. I continuously stay updated with the latest technologies and best practices in the industry.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-portfolio-accent" />
              <span>Full Stack Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-portfolio-accent" />
              <span>React & React Native</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-portfolio-accent" />
              <span>Node.js & Express</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-portfolio-accent" />
              <span>MongoDB & SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
