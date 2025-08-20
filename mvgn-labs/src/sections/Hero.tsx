import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/utils';
import BackgroundLines from '../components/BackgroundLines';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background dark:bg-background light:bg-light-background">
      {/* Background Animation - Simplificado y responsivo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Líneas geométricas de fondo */}
      <BackgroundLines className="opacity-30" />

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center min-h-[75vh] sm:min-h-[80vh]">
          {/* Content - Centrado y enfocado, completamente responsivo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8 max-w-4xl px-4"
          >
            {/* Greeting - Responsivo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold tracking-wide font-fraunces">
                ¡Hola! Soy
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-fraunces font-bold text-white dark:text-white light:text-light-text leading-tight">
                Armando{' '}
                <span className="text-gradient">Ibañez</span>
              </h1>
            </motion.div>

            {/* Profession - Más conciso y responsivo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-medium text-white/90 dark:text-white/90 light:text-light-text-secondary leading-relaxed">
                Desarrollador Web &{' '}
                <span className="text-primary">Diseñador Digital</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 dark:text-white/70 light:text-light-text-muted max-w-3xl mx-auto leading-relaxed px-4">
                Transformando ideas en soluciones tecnológicas que generan resultados reales
              </p>
            </motion.div>

            {/* CTA Buttons - Enfocados y responsivos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              <button
                onClick={() => scrollToSection('contacto')}
                className="btn-primary group flex items-center justify-center w-full sm:w-auto"
              >
                Contáctame
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="btn-secondary group flex items-center justify-center w-full sm:w-auto"
              >
                Ver Proyectos
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>

            {/* Scroll Indicator - Responsivo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8 sm:pt-12"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex flex-col items-center text-white/40 dark:text-white/40 light:text-light-text-muted"
              >
                <span className="text-xs sm:text-sm font-poppins mb-2">Desliza para explorar</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
