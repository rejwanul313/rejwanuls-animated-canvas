
import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    position: 'Senior Software Developer',
    company: 'KhaoDao Technology Ltd',
    period: 'Jan 2021 - Present',
    location: 'Dhaka, Bangladesh',
    description: [
      'Lead the development of multiple web and mobile applications using React, React Native, and Node.js',
      'Designed and implemented scalable architecture for mission-critical applications',
      'Mentored junior developers and conducted code reviews to maintain code quality',
      'Collaborated with cross-functional teams to deliver projects on time and within budget',
    ],
  },
  {
    id: 2,
    position: 'Full Stack Developer',
    company: 'BJIT Ltd',
    period: 'Mar 2018 - Dec 2020',
    location: 'Dhaka, Bangladesh',
    description: [
      'Developed responsive web applications using React, Redux, and Node.js',
      'Built RESTful APIs and integrated third-party services',
      'Implemented database design and optimization using MongoDB and SQL',
      'Participated in daily stand-ups and sprint planning following Agile methodologies',
    ],
  },
  {
    id: 3,
    position: 'Web Developer',
    company: 'Smart Software Ltd',
    period: 'Jun 2017 - Feb 2018',
    location: 'Dhaka, Bangladesh',
    description: [
      'Created client websites using HTML, CSS, JavaScript, and PHP',
      'Collaborated with designers to implement responsive designs',
      'Maintained and updated existing web applications',
      'Troubleshot and resolved website issues and bugs',
    ],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate timeline when section is visible
            timelineRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.classList.add('animate-fade-in');
                }, index * 300); // Stagger animation
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
    <section id="experience" ref={sectionRef} className="section-container bg-gray-50 py-24">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => (timelineRefs.current[index] = el)}
              className={`relative flex flex-col md:flex-row mb-12 opacity-0 ${
                index % 2 === 0 ? 'md:text-right' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-portfolio-blue border-4 border-white shadow-md flex items-center justify-center z-10">
                <span className="text-white font-bold text-sm">{experiences.length - index}</span>
              </div>
              
              {/* Content container */}
              <div
                className={`ml-16 md:ml-0 p-6 rounded-lg shadow-md bg-white md:w-5/12 ${
                  index % 2 === 0
                    ? 'md:mr-auto md:pr-8'
                    : 'md:ml-auto md:pl-8'
                }`}
              >
                <h3 className="text-xl font-bold text-portfolio-blue mb-1">{exp.position}</h3>
                <h4 className="text-lg font-medium mb-4">{exp.company}</h4>
                
                <div className="flex items-center space-x-4 text-gray-600 mb-2">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i} className={`${index % 2 === 0 ? 'md:text-right' : ''}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
