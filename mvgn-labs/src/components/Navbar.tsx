import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

interface NavbarProps {
  onThemeToggle?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Solo 4 accesos principales para mejor organización
  const navItems = [
    { href: '#inicio', label: 'Inicio', icon: Home },
    { href: '#sobre-mi', label: 'Sobre Mí', icon: User },
    { href: '#servicios', label: 'Servicios', icon: Briefcase },
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
    <>
      {/* Navbar Principal - Desktop */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block ${
          isScrolled 
            ? 'bg-surface/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo MVGN Labs */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <img 
                  src="/assets/favicon.png" 
                  alt="MVGN Labs Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-white font-fraunces font-bold text-2xl">
                Mvgn Labs
              </span>
            </motion.div>

            {/* Desktop Navigation - 4 items centrados */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ y: -2 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-base px-4 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Espacio balanceado */}
            <div className="w-32" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation Bar - 4 items */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-surface/95 backdrop-blur-md border-t border-white/10 shadow-lg"
      >
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.button
                key={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.href)}
                className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 group hover:bg-white/10"
              >
                <IconComponent className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                <span className="text-xs text-white/70 group-hover:text-white transition-colors duration-300 font-medium">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Spacer para móvil */}
      <div className="lg:hidden h-20" />
    </>
  );
};

export default Navbar;
