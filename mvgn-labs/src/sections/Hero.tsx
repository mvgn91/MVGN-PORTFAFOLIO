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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 -right-20 w-80 h-80 bg-[var(--accent-primary)]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 -left-20 w-60 h-60 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
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
      <div className="relative z-10 container text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-[var(--bg-surface)]/80 backdrop-blur-xl rounded-3xl border border-[var(--border-primary)] shadow-2xl px-6 py-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-fraunces font-bold text-2xl text-[var(--text-primary)]">
                MVGN Labs
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-fraunces font-black text-[var(--text-primary)] mb-6 leading-tight"
          >
            Armando{' '}
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              Ibañez
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-fraunces font-semibold text-[var(--text-secondary)] mb-8 leading-relaxed"
          >
            Consultor de Tecnologías y Marketing
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-[var(--text-tertiary)] max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Transformo ideas en soluciones tecnológicas que generan resultados reales para mis clientes. 
            Especializado en desarrollo web, branding y marketing digital.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('proyectos')}
              className="group bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-10 py-5 rounded-3xl font-semibold text-xl shadow-2xl hover:shadow-[var(--accent-primary)]/25 transition-all duration-300 flex items-center gap-3 min-h-[64px]"
            >
              <span>Ver Proyectos</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contacto')}
              className="group bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-primary)] px-10 py-5 rounded-3xl font-semibold text-xl hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-accent)] transition-all duration-300 flex items-center gap-3 min-h-[64px]"
            >
              <span>Contactar</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-[var(--text-tertiary)] cursor-pointer"
              onClick={() => scrollToSection('sobre-mi')}
            >
              <span className="text-sm font-medium">Scroll</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
