
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id') || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="text-portfolio-blue font-bold text-2xl font-montserrat"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          Rejwanul<span className="text-portfolio-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-portfolio-accent relative',
                activeSection === item.href.slice(1) 
                  ? 'text-portfolio-accent' 
                  : 'text-portfolio-blue'
              )}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-portfolio-accent" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden text-portfolio-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed top-16 left-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300 ease-in-out transform',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="flex flex-col p-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'py-3 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors',
                activeSection === item.href.slice(1) 
                  ? 'text-portfolio-accent' 
                  : 'text-portfolio-blue'
              )}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
