import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { scrollToSection } from '../lib/utils';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary" />
        
        {/* Elementos decorativos */}
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

      {/* VERSIÓN MÓVIL */}
      <div className="md:hidden w-full px-4">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
          
          {/* Content Móvil */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <div className="space-y-3">
              <p className="text-lg text-primary font-semibold tracking-wide">
                ¡Hola! Soy
              </p>
              <h1 className="text-4xl font-fraunces font-bold text-text-primary leading-tight">
                Armando{' '}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
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
              <span className="inline-flex items-center px-4 py-2 bg-surface-secondary/50 backdrop-blur-sm rounded-full border border-border-primary text-text-secondary text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                MVGN Labs
              </span>
            </motion.div>

            {/* Profession */}
            <div className="space-y-4">
              <h2 className="text-lg font-poppins font-medium text-text-secondary leading-relaxed max-w-2xl mx-auto">
                Desarrollador Web y{' '}
                <span className="text-primary font-semibold">Técnico en Computación</span>
              </h2>
              <p className="text-base text-text-tertiary max-w-2xl mx-auto leading-relaxed px-2">
                Transformando ideas en soluciones tecnológicas que generan resultados reales para mis clientes
              </p>
            </div>

            {/* Stats - Solo en móvil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center space-x-6"
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

            {/* CTA Buttons - Móvil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-3 justify-center items-center pt-4"
            >
              <button
                onClick={() => scrollToSection('contacto')}
                className="w-full bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Mail size={20} />
                <span>Contáctame</span>
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="w-full bg-transparent border-2 border-border-primary text-text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface-secondary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Ver Proyectos</span>
                <ChevronDown size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* VERSIÓN DESKTOP */}
      <div className="hidden md:block w-full">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-12">
            
            {/* Content Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Greeting */}
              <div className="space-y-4">
                <p className="text-2xl text-primary font-semibold tracking-wide">
                  ¡Hola! Soy
                </p>
                <h1 className="text-6xl lg:text-7xl font-fraunces font-bold text-text-primary leading-tight">
                  Armando{' '}
                  <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
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
                <span className="inline-flex items-center px-6 py-3 bg-surface-secondary/50 backdrop-blur-sm rounded-full border border-border-primary text-text-secondary text-lg font-medium">
                  <span className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></span>
                  MVGN Labs
                </span>
              </motion.div>

              {/* Profession */}
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-poppins font-medium text-text-secondary leading-relaxed max-w-3xl mx-auto">
                  Desarrollador Web y{' '}
                  <span className="text-primary font-semibold">Técnico en Computación</span>
                </h2>
                <p className="text-lg lg:text-xl text-text-tertiary max-w-3xl mx-auto leading-relaxed">
                  Transformando ideas en soluciones tecnológicas que generan resultados reales para mis clientes
                </p>
              </div>

              {/* CTA Buttons - Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-4 justify-center pt-6"
              >
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="bg-gradient-to-r from-primary to-primary-light text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 min-h-[52px]"
                >
                  <Mail size={22} />
                  <span>Contáctame</span>
                </button>
                <button
                  onClick={() => scrollToSection('proyectos')}
                  className="bg-transparent border-2 border-border-primary text-text-primary px-10 py-4 rounded-xl font-semibold text-lg hover:bg-surface-secondary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 min-h-[52px]"
                >
                  <span>Ver Proyectos</span>
                  <ChevronDown size={22} />
                </button>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator - Solo en desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-text-tertiary hover:text-text-secondary cursor-pointer transition-colors w-14 h-14 flex items-center justify-center rounded-full hover:bg-surface-secondary/50"
                onClick={() => scrollToSection('sobre-mi')}
              >
                <ChevronDown size={28} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
