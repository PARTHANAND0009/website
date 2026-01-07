import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <Zap className="w-6 h-6 text-black fill-current" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-prime-gold transition-colors">
            PRIME STUDIOS
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider hover:scale-105 transform duration-200"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://discord.gg/example"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full text-sm font-bold transition-all duration-300 backdrop-blur-sm border border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            DISCORD
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-fade-in shadow-2xl">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-medium text-white/80 hover:text-prime-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://discord.gg/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-prime-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            JOIN DISCORD
          </a>
        </div>
      )}
    </nav>
  );
};