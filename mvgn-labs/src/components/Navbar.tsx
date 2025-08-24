import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Inicio', icon: Home },
    { href: '#sobre-mi', label: 'Sobre Mí', icon: User },
    { href: '#servicios', label: 'Servicios', icon: Briefcase },
    { href: '#proyectos', label: 'Proyectos', icon: Briefcase },
    { href: '#contacto', label: 'Contacto', icon: Mail }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`header-desktop transition-all duration-500 ${
        isScrolled 
          ? 'bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-primary)] shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo MVGN Labs - 48px × 48px */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={scrollToTop}
        >
          <img 
            src="/assets/favicon.png" 
            alt="MVGN Labs Logo" 
            className="w-12 h-12 object-contain" // 48px × 48px
          />
          <span className={`font-fraunces font-bold text-2xl transition-colors duration-500 ${
            isScrolled ? 'text-[var(--text-primary)]' : 'text-[var(--text-primary)]'
          }`}>
            Mvgn Labs
          </span>
        </motion.div>

        {/* Desktop Navigation - Fraunces 18px, espaciado 32px */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              whileHover={{ y: -2 }}
              onClick={() => handleNavClick(item.href)}
              className={`transition-all duration-300 font-fraunces font-medium text-lg px-4 py-2 rounded-xl hover:bg-[var(--bg-surface-hover)] hover:shadow-md ${
                isScrolled 
                  ? 'text-[var(--text-primary)] hover:text-[var(--text-primary)]' 
                  : 'text-[var(--text-primary)]/90 hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]/10'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* CTA Button - 180px × 60px */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('#contacto')}
          className="hidden lg:block cta-desktop"
        >
          Ver Proyectos
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
