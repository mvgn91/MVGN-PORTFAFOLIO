import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface border-t border-surface-dark/30 py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/favicon.png"
              alt="MVGN Labs"
              className="w-6 h-6"
            />
            <span className="text-lg font-fraunces font-bold text-white">
              MVGN Labs
            </span>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {currentYear} Desarrollado por Armando Ibañez
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
