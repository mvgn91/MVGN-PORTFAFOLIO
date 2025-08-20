import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  onThemeToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#zona-trabajo', label: 'Zona de Trabajo' },
    { href: '#contacto', label: 'Contacto' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Principal */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-surface/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">M</span>
              </div>
              <span className="text-white font-fraunces font-bold text-lg sm:text-xl">
                Mvgn Labs
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ y: -2 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-sm sm:text-base"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Right Side - Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onThemeToggle}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-surface/50 border border-white/10 rounded-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-surface/70 transition-all duration-300"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 bg-surface/50 border border-white/10 rounded-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-surface/70 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-surface/95 backdrop-blur-md border-l border-white/10 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <span className="text-white font-fraunces font-bold text-xl">
                      Mvgn Labs
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-10 h-10 bg-surface/50 border border-white/10 rounded-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-surface/70 transition-all duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 p-6">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-surface/70 rounded-xl transition-all duration-300 font-medium"
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-white/10">
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-4">
                      ¿Listo para crear algo extraordinario?
                    </p>
                    <button
                      onClick={() => {
                        handleNavClick('#contacto');
                      }}
                      className="w-full btn-primary"
                    >
                      Iniciar Proyecto
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
