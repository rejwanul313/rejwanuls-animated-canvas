
import React, { useRef, useEffect } from 'react';
import { FileDown } from 'lucide-react';

export function ResumeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) contentRef.current.classList.add('animate-fade-in-up');
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
    <section id="resume" ref={sectionRef} className="section-container bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">My Resume</h2>
        
        <div ref={contentRef} className="opacity-0 bg-white rounded-lg shadow-lg p-8 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-portfolio-blue mb-4">Education</h3>
              
              <div className="mb-6">
                <div className="font-medium text-lg">Bachelor of Science in Computer Science</div>
                <div className="text-gray-700">Daffodil International University</div>
                <div className="text-gray-600 text-sm mt-1">2013 - 2017</div>
              </div>
              
              <h3 className="text-xl font-bold text-portfolio-blue mb-4 mt-8">Certifications</h3>
              
              <div className="mb-4">
                <div className="font-medium">React Developer Certification</div>
                <div className="text-gray-600 text-sm">2020</div>
              </div>
              
              <div className="mb-4">
                <div className="font-medium">Full Stack JavaScript Development</div>
                <div className="text-gray-600 text-sm">2019</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-portfolio-blue mb-4">Languages</h3>
              
              <div className="mb-6 space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800">English</span>
                    <span className="text-portfolio-blue font-medium">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-portfolio-blue" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800">Bengali</span>
                    <span className="text-portfolio-blue font-medium">Native</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-portfolio-blue" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#" 
                  className="flex items-center justify-center px-6 py-3 bg-portfolio-blue text-white rounded-lg hover:bg-portfolio-lightBlue transition-colors shine-effect"
                >
                  <FileDown className="mr-2" size={18} />
                  <span>Download Full Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
