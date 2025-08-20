import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

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
          className="absolute bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 bg-primary/5 rounded-full blur-3xl"
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
        <div className="py-8 sm:py-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-8"
          >
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-2xl font-fraunces font-bold text-white">
                Mvgn Labs
              </h3>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed max-w-md mx-auto">
              Transformando ideas en soluciones tecnológicas excepcionales.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-6" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center sm:text-left"
            >
              <p className="text-white/60 text-sm">
                © {currentYear} Mvgn Labs. Todos los derechos reservados.
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
