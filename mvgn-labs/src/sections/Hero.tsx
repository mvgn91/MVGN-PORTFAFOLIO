import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/utils';
import BackgroundLines from '../components/BackgroundLines';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
          className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-primary-light/10 rounded-full blur-3xl"
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

      <div className="container relative z-10">
        <div className="flex items-center justify-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh]">
          {/* Content - Jerarquía visual clara y responsiva */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-xl max-w-5xl mx-auto"
          >
            {/* Greeting - Jerarquía principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-lg"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-bold tracking-wide font-fraunces">
                ¡Hola! Soy
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-fraunces font-bold text-white leading-tight">
                Armando{' '}
                <span className="text-gradient">
                  Ibañez
                </span>
              </h1>
            </motion.div>

            {/* Profession - Jerarquía secundaria */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-lg"
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
              className="flex flex-col sm:flex-row gap-md justify-center items-center pt-lg"
            >
              <button
                onClick={() => scrollToSection('contacto')}
                className="btn btn-primary btn-lg group"
              >
                Contáctame
                <ArrowRight className="icon group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="btn btn-secondary btn-lg group"
              >
                Ver Proyectos
                <ChevronDown className="icon group-hover:translate-y-1 transition-transform" />
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
