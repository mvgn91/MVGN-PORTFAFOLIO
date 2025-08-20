import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl sm:text-2xl">M</span>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-fraunces font-bold text-white">
                      Mvgn Labs
                    </h3>
                    <p className="text-primary/80 text-sm sm:text-base">
                      Soluciones Tecnológicas Creativas
                    </p>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md">
                  Transformando ideas en soluciones tecnológicas excepcionales. 
                  Desarrollo web, diseño UX/UI y marketing digital con enfoque en resultados.
                </p>
                
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.getElementById('contacto');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-primary text-sm sm:text-base px-4 py-2.5 sm:px-6 sm:py-3"
                  >
                    Iniciar Proyecto
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 sm:space-y-6"
            >
              <h4 className="text-lg sm:text-xl font-fraunces font-semibold text-white">
                Enlaces Rápidos
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { href: '#inicio', label: 'Inicio' },
                  { href: '#sobre-mi', label: 'Sobre Mí' },
                  { href: '#servicios', label: 'Servicios' },
                  { href: '#proyectos', label: 'Proyectos' },
                  { href: '#experiencia', label: 'Experiencia' }
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform transition-transform"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <h4 className="text-lg sm:text-xl font-fraunces font-semibold text-white">
                Información de Contacto
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span>contacto@mvgnlabs.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span>+52 33 1234 5678</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span>ZMG, Jalisco, México</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span>www.mvgnlabs.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8 sm:mb-12" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center sm:text-left"
            >
              <p className="text-white/60 text-sm sm:text-base">
                © {currentYear} Mvgn Labs. Todos los derechos reservados.
              </p>
              <p className="text-white/50 text-xs sm:text-sm mt-1">
                Desarrollado con ❤️ y React
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
