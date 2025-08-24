import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-desktop text-[var(--text-primary)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="grid-12 w-full">
          {/* Footer Content - Ocupa 12 columnas */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl flex items-center justify-center shadow-lg">
                  <img 
                    src="/assets/favicon.png" 
                    alt="MVGN Labs Logo" 
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <span className="font-fraunces font-bold text-2xl">
                  Mvgn Labs
                </span>
              </div>
              <p className="text-[var(--text-tertiary)] text-base leading-[1.6] max-w-xs">
                Transformando ideas en soluciones tecnológicas que generan resultados reales para mis clientes.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-[var(--text-primary)]">Enlaces Rápidos</h4>
              <div className="space-y-3">
                {[
                  { label: 'Inicio', href: '#inicio' },
                  { label: 'Sobre Mí', href: '#sobre-mi' },
                  { label: 'Servicios', href: '#servicios' },
                  { label: 'Proyectos', href: '#proyectos' },
                  { label: 'Contacto', href: '#contacto' }
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors text-base hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-[var(--text-primary)]">Servicios</h4>
              <div className="space-y-3">
                {['Diseño Web', 'Branding', 'Catálogos Digitales', 'Soporte IT'].map((service) => (
                  <span key={service} className="block text-[var(--text-tertiary)] text-base">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-[var(--text-primary)]">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[var(--text-tertiary)] text-base">
                  <Mail className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span>jazzfatale@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--text-tertiary)] text-base">
                  <Phone className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span>33 2262 1939</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--text-tertiary)] text-base">
                  <MapPin className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span>Sur de la ZMG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Ocupa 12 columnas */}
          <div className="col-span-12 mt-8 pt-8 border-t border-[var(--border-primary)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-[var(--text-tertiary)] text-sm">
                © {currentYear} MVGN Labs. Todos los derechos reservados.
              </div>

              {/* Social Links - 24x24px desktop, 20x20px mobile */}
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://wa.me/523322621939"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-6 h-6 md:w-6 md:h-6 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors duration-300"
                >
                  <ExternalLink size={24} className="w-full h-full" />
                </motion.a>
                
                <motion.a
                  href="https://www.youtube.com/@pietrafinamx"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-6 h-6 md:w-6 md:h-6 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors duration-300"
                >
                  <ExternalLink size={24} className="w-full h-full" />
                </motion.a>
              </div>

              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[var(--accent-primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent-secondary)] transition-colors duration-300 shadow-lg"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
