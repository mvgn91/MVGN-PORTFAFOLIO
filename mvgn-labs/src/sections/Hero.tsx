import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download, Mail } from 'lucide-react';
import { scrollToSection } from '../lib/utils';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-primary px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente de fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary" />
        
        {/* Elementos decorativos - Optimizados para móvil */}
        <motion.div
          className="absolute top-16 -right-16 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-2xl"
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
          className="absolute bottom-16 -left-16 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-primary-light/5 rounded-full blur-2xl"
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

      <div className="container relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 md:space-y-12">
          
          {/* Profile Image - Solo en desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative hidden md:block"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/assets/profile.jpg"
                alt="Armando Ibañez - MVGN Labs"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge de estado */}
            <div className="absolute -bottom-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full border-2 border-bg-primary flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Greeting */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold tracking-wide">
                ¡Hola! Soy
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-text-primary leading-tight">
                Armando{' '}
                <span className="text-gradient bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Ibañez
                </span>
              </h1>
            </div>

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-2 bg-surface-secondary/50 backdrop-blur-sm rounded-full border border-border-primary text-text-secondary text-sm sm:text-base font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                MVGN Labs
              </span>
            </motion.div>

            {/* Profession */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins font-medium text-text-secondary leading-relaxed max-w-2xl mx-auto">
                Desarrollador Web y{' '}
                <span className="text-primary font-semibold">Técnico en Computación</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-text-tertiary max-w-2xl mx-auto leading-relaxed px-2">
                Transformando ideas en soluciones tecnológicas que generan resultados reales para mis clientes
              </p>
            </div>

            {/* Stats - Solo en móvil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center space-x-6 md:hidden"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-text-tertiary">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-xs text-text-tertiary">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-xs text-text-tertiary">Años</div>
              </div>
            </motion.div>

            {/* CTA Buttons - Optimizados para móvil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4"
            >
              <button
                onClick={() => scrollToSection('contacto')}
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Mail size={20} />
                <span>Contáctame</span>
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="w-full sm:w-auto bg-transparent border-2 border-border-primary text-text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface-secondary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Ver Proyectos</span>
                <ChevronDown size={20} />
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator - Solo en desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-text-tertiary hover:text-text-secondary cursor-pointer transition-colors w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-secondary/50"
              onClick={() => scrollToSection('sobre-mi')}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
