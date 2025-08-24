import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Mobile Navigation - 60px alto, logo 36px */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="header-mobile fixed top-0 left-0 right-0 z-50 lg:hidden bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-primary)] shadow-lg"
      >
        <div className="flex items-center justify-between h-full px-6">
          {/* Logo MVGN Labs - 36px × 36px */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <img 
              src="/assets/favicon.png" 
              alt="MVGN Labs Logo" 
              className="w-9 h-9 object-contain" // 36px × 36px
            />
            <span className="text-[var(--text-primary)] font-fraunces font-bold text-lg">
              Mvgn Labs
            </span>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 glass border border-[var(--border-primary)] rounded-xl flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-all duration-300"
            aria-label="Abrir menú de navegación"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
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

        {/* Mobile Menu Overlay - Full Screen */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 top-[60px] bg-[var(--bg-primary)]/98 backdrop-blur-xl z-40 overflow-hidden"
            >
              <div className="h-full flex flex-col justify-center px-6 py-12">
                {/* Navigation Items */}
                <div className="space-y-8 mb-16">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.button
                        key={item.href}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full flex items-center gap-4 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-[var(--accent-primary)] group-hover:text-[var(--text-primary)] transition-all duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="font-fraunces font-semibold text-2xl group-hover:translate-x-2 transition-transform duration-300">
                          {item.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="space-y-6 text-center"
                >
                  <div className="glass p-6 rounded-2xl">
                    <h4 className="font-fraunces font-semibold text-[var(--text-primary)] mb-4 text-lg">
                      ¿Listo para tu proyecto?
                    </h4>
                    <p className="text-[var(--text-tertiary)] text-sm mb-4">
                      Conversemos sobre cómo puedo ayudarte
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavClick('#contacto')}
                      className="cta-mobile w-full"
                    >
                      Iniciar Conversación
                    </motion.button>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3 text-[var(--text-tertiary)] text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>jazzfatale@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>📱 33 2262 1939</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>📍 Sur de la ZMG, Guadalajara</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default MobileNavbar;
