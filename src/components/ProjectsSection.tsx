
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Health App',
    description: 'A comprehensive health monitoring application that helps users track their fitness goals, nutrition intake, and overall well-being. Features include personalized workout plans, calorie tracking, and health analytics.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['React Native', 'Firebase', 'Redux', 'Health API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/rejwanul7',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with product catalog, shopping cart, user authentication, payment processing, and order management. Includes admin dashboard for inventory and sales analytics.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/rejwanul7',
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A collaborative task management application for teams with real-time updates, task assignment, progress tracking, and deadline notifications. Includes reporting features and integration with calendar apps.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    tags: ['React', 'Firebase', 'Redux', 'Material UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/rejwanul7',
  },
  {
    id: 4,
    title: 'Social Media Analytics Dashboard',
    description: 'A comprehensive dashboard for social media analytics, helping businesses track performance across multiple platforms. Features include customizable reports, sentiment analysis, and competitor tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
    tags: ['React', 'Chart.js', 'Node.js', 'MongoDB', 'Social APIs'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/rejwanul7',
  },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const filters = ['all', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.tags.includes(activeFilter)));
    }
  }, [activeFilter]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate projects when section is visible
            projectRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.classList.add('animate-scale-up');
                }, index * 150); // Stagger animation
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
  }, [visibleProjects]);
  
  return (
    <section id="projects" ref={sectionRef} className="section-container">
      <h2 className="section-title">My Projects</h2>
      
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              activeFilter === filter
                ? 'bg-portfolio-blue text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="bg-white rounded-xl shadow-lg overflow-hidden opacity-0 transform translate-y-4"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-portfolio-blue">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-portfolio-blue hover:text-portfolio-lightBlue transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-portfolio-blue hover:text-portfolio-lightBlue transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
