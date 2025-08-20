import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import ThemeToggle from './ThemeToggle';
import { scrollToSection } from '../lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navegación simplificada y agrupada
  const navItems = [
    { name: 'Inicio', href: 'inicio' },
    { name: 'Sobre Mí', href: 'sobre-mi' },
    { name: 'Servicios', href: 'servicios' },
    { name: 'Proyectos', href: 'proyectos' },
    { name: 'Contacto', href: 'contacto' },
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-surface-dark/30 shadow-lg dark:bg-surface/90 dark:border-surface-dark/30 light:bg-white/90 light:border-gray-200/30"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo - Responsivo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/assets/favicon.png"
              alt="MVGN Labs"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-lg sm:text-xl font-fraunces font-bold text-white dark:text-white light:text-gray-900">
              MVGN Labs
            </span>
          </div>

          {/* Desktop Navigation - Responsivo */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-white dark:text-white light:text-gray-900 hover:text-primary transition-colors duration-300 font-medium relative group text-sm xl:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white dark:text-white light:text-gray-900 hover:text-primary transition-colors"
              aria-label="Menú móvil"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Completamente responsivo */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-surface/95 backdrop-blur-md border-t border-surface-dark/30 overflow-hidden dark:bg-surface/95 dark:border-surface-dark/30 light:bg-white/95 light:border-gray-200/30"
            >
              <div className="px-4 py-4 sm:py-6 space-y-2 sm:space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-white dark:text-white light:text-gray-900 hover:text-primary transition-colors duration-300 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-surface-dark/50 dark:hover:bg-surface-dark/50 light:hover:bg-gray-100/50 text-sm sm:text-base"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
