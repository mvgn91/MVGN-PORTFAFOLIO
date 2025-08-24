import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <motion.div
          className="absolute top-20 -right-20 w-64 h-64 bg-red-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-56 h-56 bg-gray-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl relative z-10 mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-12 md:space-y-16">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 md:space-y-12"
          >
            {/* Greeting */}
            <div className="space-y-4 md:space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-red-600 font-medium tracking-wide"
              >
                ¡Hola! Soy
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-fraunces font-bold text-gray-900 leading-tight"
              >
                Armando{' '}
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Ibañez
                </span>
              </motion.h1>
            </div>

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 text-gray-700 text-base sm:text-lg font-medium shadow-lg">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></span>
                MVGN Labs
              </span>
            </motion.div>

            {/* Profession */}
            <div className="space-y-6 md:space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-helvetica font-medium text-gray-700 leading-relaxed max-w-3xl mx-auto"
              >
                Desarrollador Web y{' '}
                <span className="text-red-600 font-semibold">Técnico en Computación</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
              >
                Transformando ideas en soluciones tecnológicas que generan resultados reales para mis clientes
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contacto')}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 min-h-[56px]"
              >
                <Mail size={22} />
                <span>Contáctame</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('proyectos')}
                className="w-full sm:w-auto bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 min-h-[56px]"
              >
                <span>Ver Proyectos</span>
                <ArrowRight size={22} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-white/80 hover:shadow-lg"
              onClick={() => scrollToSection('sobre-mi')}
            >
              <ChevronDown size={28} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
