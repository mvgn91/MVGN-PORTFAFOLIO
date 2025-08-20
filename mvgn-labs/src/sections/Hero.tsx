import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/utils';
import BackgroundLines from '../components/BackgroundLines';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Animation - Simplificado */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
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
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Content - Centrado y enfocado */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-4xl"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold tracking-wide font-fraunces">
                ¡Hola! Soy
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-fraunces font-bold text-white leading-tight">
                Armando{' '}
                <span className="text-gradient">Ibañez</span>
              </h1>
            </motion.div>

            {/* Profession - Más conciso */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-medium text-white/90 leading-relaxed">
                Desarrollador Web &{' '}
                <span className="text-primary">Diseñador Digital</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Transformando ideas en soluciones tecnológicas que generan resultados reales
              </p>
            </motion.div>

            {/* CTA Buttons - Enfocados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection('contacto')}
                className="btn-primary group flex items-center justify-center"
              >
                Contáctame
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="btn-secondary group flex items-center justify-center"
              >
                Ver Proyectos
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Mejorado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/60 cursor-pointer group"
          onClick={() => scrollToSection('sobre-mi')}
        >
          <span className="text-lg md:text-xl font-medium mb-3 group-hover:text-primary transition-colors">Descubre más</span>
          <ChevronDown className="w-5 h-5 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
