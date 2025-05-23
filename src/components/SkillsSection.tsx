import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'other';
}

const skills: Skill[] = [
  { name: 'JavaScript', percentage: 95, category: 'frontend' },
  { name: 'React', percentage: 90, category: 'frontend' },
  { name: 'React Native', percentage: 85, category: 'frontend' },
  { name: 'HTML/CSS', percentage: 90, category: 'frontend' },
  { name: 'TypeScript', percentage: 85, category: 'frontend' },
  { name: 'Redux', percentage: 85, category: 'frontend' },
  { name: 'Node.js', percentage: 80, category: 'backend' },
  { name: 'Express.js', percentage: 80, category: 'backend' },
  { name: 'MongoDB', percentage: 75, category: 'backend' },
  { name: 'SQL', percentage: 70, category: 'backend' },
  { name: 'Firebase', percentage: 75, category: 'backend' },
  { name: 'Git/GitHub', percentage: 85, category: 'other' },
  { name: 'Agile/Scrum', percentage: 80, category: 'other' },
  { name: 'REST APIs', percentage: 85, category: 'other' },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<'all' | 'frontend' | 'backend' | 'other'>('all');
  
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start skills animation when section is visible
            skillRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.style.setProperty('--progress-width', `${skills[index]?.percentage}%`);
                  ref.classList.add('animate-progress');
                }, index * 100); // Stagger animation
              }
            });
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
  }, [selectedCategory]);
  
  return (
    <section id="skills" ref={sectionRef} className="section-container bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white shadow-md rounded-full p-1">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-portfolio-blue text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              All Skills
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'frontend'
                  ? 'bg-portfolio-blue text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory('frontend')}
            >
              Frontend
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'backend'
                  ? 'bg-portfolio-blue text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory('backend')}
            >
              Backend
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'other'
                  ? 'bg-portfolio-blue text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory('other')}
            >
              Other
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="bg-white rounded-lg shadow-md p-6 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <span className="text-portfolio-blue font-medium">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  ref={(el) => (skillRefs.current[index] = el)}
                  className="h-2.5 rounded-full"
                  style={{
                    width: '0%', // Start at 0%, will be animated
                    backgroundColor: 
                      skill.category === 'frontend' ? '#3B82F6' :
                      skill.category === 'backend' ? '#10B981' : 
                      '#6366F1'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
