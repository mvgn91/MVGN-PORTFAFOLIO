import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/utils';
import BackgroundLines from '../components/BackgroundLines';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente de fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary" />
        
        {/* Elementos decorativos */}
        <motion.div
          className="absolute top-20 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-primary-light/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5],
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
      <BackgroundLines className="opacity-20" />

      <div className="container relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto space-y-6 sm:space-y-8 px-4"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary font-semibold tracking-wide">
                ¡Hola! Soy
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-fraunces font-bold text-text-primary leading-tight">
                Armando{' '}
                <span className="text-gradient">Ibañez</span>
              </h1>
            </motion.div>

            {/* Profession */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-poppins font-medium text-text-secondary leading-relaxed">
                Desarrollador Web y{' '}
                <span className="text-primary font-semibold">Técnico en Computación</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-tertiary max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-4">
                Transformando ideas en soluciones tecnológicas que generan resultados reales
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8"
            >
              <button
                onClick={() => scrollToSection('contacto')}
                className="btn btn-primary btn-lg sm:btn-xl group w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Contáctame</span>
                <span className="sm:hidden">Contacto</span>
                <ArrowRight className="icon group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="btn btn-secondary btn-lg sm:btn-xl group w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Ver Proyectos</span>
                <span className="sm:hidden">Proyectos</span>
                <ChevronDown className="icon group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-text-tertiary hover:text-text-secondary cursor-pointer transition-colors"
            onClick={() => scrollToSection('sobre-mi')}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
