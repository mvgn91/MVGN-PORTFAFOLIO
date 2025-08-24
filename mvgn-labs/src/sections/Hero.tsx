import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-desktop relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] opacity-60" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 -right-20 w-80 h-80 bg-[var(--accent-primary)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 -left-20 w-60 h-60 bg-[var(--accent-secondary)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 glass px-6 py-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-fraunces font-bold text-2xl text-[var(--text-primary)]">
                Mvgn Labs
              </span>
            </div>
          </motion.div>

          {/* Main Heading - Fraunces 64px */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl font-fraunces font-black text-[var(--text-primary)] mb-8 leading-[1.2]"
          >
            Armando{' '}
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              Ibañez
            </span>
          </motion.h1>

          {/* Subtitle - Helvetica 20px */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl font-helvetica font-normal text-[var(--text-secondary)] mb-12 leading-[1.5]"
          >
            Consultor de Tecnologías y Marketing
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-[var(--text-tertiary)] mb-12 max-w-2xl mx-auto leading-[1.6]"
          >
            Técnico y creativo con experiencia en tecnología, ventas y marketing digital. 
            Transformo ideas en soluciones tecnológicas y estrategias de comunicación que generan resultados reales.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {/* CTA Principal - 180px × 60px */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('proyectos')}
              className="cta-desktop group"
            >
              Ver Proyectos
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* CTA Secundario */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-3 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] font-fraunces font-semibold rounded-lg hover:bg-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-all duration-300"
            >
              Contactar
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-fraunces font-bold text-[var(--accent-primary)] mb-2">15+</div>
              <div className="text-sm text-[var(--text-tertiary)]">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-fraunces font-bold text-[var(--accent-primary)] mb-2">8+</div>
              <div className="text-sm text-[var(--text-tertiary)]">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-fraunces font-bold text-[var(--accent-primary)] mb-2">2+</div>
              <div className="text-sm text-[var(--text-tertiary)]">Años</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('sobre-mi')}
              className="flex flex-col items-center text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors duration-300"
              whileHover={{ y: 5 }}
            >
              <span className="text-sm mb-2">Scroll</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
