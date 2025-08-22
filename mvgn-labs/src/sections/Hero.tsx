import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/utils';
import BackgroundLines from '../components/BackgroundLines';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Animation - Optimizado para rendimiento */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-accent/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh]">
          {/* Content - Jerarquía visual clara y responsiva */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8 md:space-y-10 max-w-5xl mx-auto"
          >
            {/* Greeting - Jerarquía principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary font-bold tracking-wide font-fraunces">
                ¡Hola! Soy
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-fraunces font-bold text-white leading-tight">
                Armando{' '}
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ibañez
                </span>
              </h1>
            </motion.div>

            {/* Profession - Jerarquía secundaria */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-medium text-white/90 leading-relaxed">
                Desarrollador Web &{' '}
                <span className="text-primary font-semibold">Diseñador Digital</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-8">
                Transformando ideas en soluciones tecnológicas que generan resultados reales
              </p>
            </motion.div>

            {/* CTA Buttons - Jerarquía de acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6"
            >
              <button
                onClick={() => scrollToSection('contacto')}
                className="btn-primary group flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contáctame
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="btn-secondary group flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300"
              >
                Ver Proyectos
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Solo en desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 hover:text-white/80 cursor-pointer"
            onClick={() => scrollToSection('sobre-mi')}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
