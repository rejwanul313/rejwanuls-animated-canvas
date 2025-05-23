
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import AnimatedScrollObserver from '@/components/AnimatedScrollObserver';

const Index = () => {
  useEffect(() => {
    // Update page title and metadata
    document.title = "Rejwanul Islam - Frontend Developer Portfolio";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Portfolio website of Rejwanul Islam, Frontend Developer with expertise in React.js, Node.js, and modern web technologies.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Portfolio website of Rejwanul Islam, Frontend Developer with expertise in React.js, Node.js, and modern web technologies.";
      document.head.appendChild(meta);
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <HeroSection />
      
      <AboutSection />
      
      <SkillsSection />
      
      <ProjectsSection />
      
      <ExperienceSection />
      
      <ResumeSection />
      
      <ContactSection />
      
      <Footer />
      
      <ScrollToTop />
      
      <AnimatedScrollObserver />
    </div>
  );
};

export default Index;
