import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { navItems } from '../config/navigation';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-soft-gray/50'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#inicio" onClick={() => setIsOpen(false)}>
          <Logo />
        </a>
        <nav className="hidden md:flex items-center space-x-7 font-medium">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-gray-700 hover:text-deep-blue transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#contacto" className="bg-deep-blue text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-colors">
            Demo Gratuita
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 z-50">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};
