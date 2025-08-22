import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';

interface NavbarProps {
  onThemeToggle?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    // Cerrar menú móvil si está abierto
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
            ? 'bg-surface/80 backdrop-blur-md border-b border-white/10 shadow-xl' 
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
              <img 
                src="/assets/favicon.png" 
                alt="MVGN Labs Logo" 
                className="w-10 h-10 object-contain"
              />
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
                  className="text-white/90 hover:text-white transition-all duration-300 font-medium text-base px-4 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg"
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

      {/* Mobile Top Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          isScrolled 
            ? 'bg-surface/90 backdrop-blur-md border-b border-white/10 shadow-xl' 
            : 'bg-surface/95 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo MVGN Labs - Mobile */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <img 
              src="/assets/favicon.png" 
              alt="MVGN Labs Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-white font-fraunces font-bold text-lg">
              Mvgn Labs
            </span>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="w-10 h-10 bg-surface-secondary/50 backdrop-blur-sm border border-border-primary/30 rounded-xl flex items-center justify-center text-white hover:bg-surface-secondary hover:border-primary/50 transition-all duration-300"
            aria-label="Abrir menú de navegación"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-surface/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-left hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary-light/30 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-light transition-colors duration-300" />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-lg group-hover:text-primary-light transition-colors duration-300">
                          {item.label}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer para móvil */}
      <div className="lg:hidden h-20" />
    </>
  );
};

export default Navbar;
