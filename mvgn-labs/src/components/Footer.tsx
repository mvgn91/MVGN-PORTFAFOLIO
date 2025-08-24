import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20" />
      </div>



      <div className="max-w-7xl relative z-10 mx-auto px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          {/* Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
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
              <p className="text-gray-300 text-base leading-relaxed max-w-xs">
                Transformando ideas en soluciones tecnológicas que generan resultados reales para mis clientes.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Enlaces Rápidos</h4>
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
                    className="block text-gray-300 hover:text-red-400 transition-colors text-base hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Servicios</h4>
              <div className="space-y-3">
                {['Diseño Web', 'Branding', 'Catálogos Digitales', 'Soporte IT'].map((service) => (
                  <span key={service} className="block text-gray-300 text-base">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 text-base">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span>jazzfatale@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-base">
                  <Phone className="w-5 h-5 text-red-400" />
                  <span>33 2262 1939</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-base">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span>Sur de la ZMG</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700/50"
          >
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="text-red-400 font-medium">Mvgn Labs</span>. Todos los derechos reservados.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://wa.me/523322621939"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 border border-gray-700 hover:border-red-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.86 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.86 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.86 0 0020.885 3.488"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="mailto:jazzfatale@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 border border-gray-700 hover:border-red-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
