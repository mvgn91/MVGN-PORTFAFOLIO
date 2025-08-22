import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Zap, Music, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-bg-primary via-surface-secondary to-bg-secondary relative overflow-hidden border-t border-border-primary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="footer-grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  opacity="0.4"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#footer-grid)" />
          </svg>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-5 -right-5 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-5 -left-5 w-16 h-16 bg-primary-light/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="py-8 sm:py-12">
          {/* Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          >
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg">
                  <img 
                    src="/assets/favicon.png" 
                    alt="MVGN Labs Logo" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-white font-fraunces font-bold text-xl">
                  Mvgn Labs
                </span>
              </div>
              <p className="text-text-tertiary text-sm leading-relaxed">
                Transformando ideas en soluciones tecnológicas que generan resultados reales.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-text-primary font-semibold text-base">Enlaces Rápidos</h4>
              <div className="space-y-2">
                {['Inicio', 'Sobre Mí', 'Servicios', 'Proyectos', 'Flujo de Trabajo', 'Contacto'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(' ', '-').replace('flujo-de-trabajo', 'flujo-trabajo'));
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-text-tertiary hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-text-primary font-semibold text-base">Servicios</h4>
              <div className="space-y-2">
                {['Diseño Web', 'Branding', 'Catálogos Digitales', 'Soporte IT'].map((service) => (
                  <span key={service} className="block text-text-tertiary text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-text-primary font-semibold text-base">Contacto</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-text-tertiary text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>jazzfatale@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-text-tertiary text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>33 2262 1939</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-primary/20"
          >
            {/* Made With Section */}
            <motion.div
              className="group cursor-pointer order-1 sm:order-none"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-surface-primary/30 backdrop-blur-sm border border-border-primary/30 rounded-2xl hover:border-primary/50 transition-all duration-500">
                <span className="text-text-secondary text-sm sm:text-base font-medium">Hecho con</span>
                
                {/* Lightning Icon */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-light transition-colors duration-300" />
                  <motion.div
                    className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <span className="text-text-secondary text-sm sm:text-base font-medium">y</span>
                
                {/* Music Note Icon */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Music className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-light transition-colors duration-300" />
                  <motion.div
                    className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full blur-sm"
                    animate={{
                      scale: [1.5, 1, 1.5],
                      opacity: [0.8, 0.5, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Copyright */}
            <div className="text-center sm:text-left order-3 sm:order-none">
              <p className="text-text-tertiary text-xs sm:text-sm">
                © {currentYear} <span className="text-primary font-medium">Mvgn Labs</span>. Todos los derechos reservados.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3 order-2 sm:order-none">
              <motion.a
                href="https://wa.me/523322621939"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-surface-primary/50 backdrop-blur-sm border border-border-primary/50 rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.86 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.86 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.86 0 0020.885 3.488"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="mailto:jazzfatale@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-surface-primary/50 backdrop-blur-sm border border-border-primary/50 rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </div>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 order-4 sm:order-none"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
