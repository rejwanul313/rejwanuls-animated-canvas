
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import AnimatedScrollObserver from '@/components/AnimatedScrollObserver';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Rejwanul Islam - Portfolio";
  }, []);
  
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <HeroSection />
      
      <AboutSection />
      
      <SkillsSection />
      
      <ProjectsSection />
      
      <ExperienceSection />
      
      <ContactSection />
      
      <Footer />
      
      <ScrollToTop />
      
      <AnimatedScrollObserver />
    </div>
  );
};

export default Index;
