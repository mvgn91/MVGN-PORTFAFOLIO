import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showBrand, setShowBrand] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Secuencia de animación elegante
    const timer1 = setTimeout(() => setShowBrand(true), 300);
    const timer2 = setTimeout(() => setShowSubtitle(true), 800);
    const timer3 = setTimeout(() => setShowProgress(true), 1200);
    
    // Barra de progreso sutil
    const progressTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete(), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(progressTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Fondo con gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Líneas de fondo minimalistas */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-px bg-white transform -translate-y-1/2" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-white transform -translate-y-1/2" />
          <div className="absolute left-1/4 top-0 w-px h-full bg-white transform -translate-x-1/2" />
          <div className="absolute left-3/4 top-0 w-px h-full bg-white transform -translate-x-1/2" />
        </div>

        {/* Contenedor principal centrado */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-16">
          
          {/* Logo y marca principal */}
          <AnimatePresence>
            {showBrand && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                className="text-center space-y-8"
              >
                {/* Logo minimalista */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                    <img 
                      src="/favicon.ico" 
                      alt="MVGN Labs" 
                      className="w-20 h-20 sm:w-24 sm:h-24"
                    />
                  </div>
                  
                  {/* Efecto de brillo sutil */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: 1
                    }}
                  />
                </motion.div>
                
                {/* Título principal */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-4"
                >
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-fraunces font-light text-white leading-none tracking-tight">
                    MVGN
                  </h1>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-fraunces font-light text-white/80 leading-none tracking-wider">
                    LABS
                  </h2>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtítulo */}
          <AnimatePresence>
            {showSubtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <p className="text-lg sm:text-xl text-white/60 font-poppins font-light tracking-widest uppercase">
                  Portfolio Digital
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Barra de progreso minimalista */}
          <AnimatePresence>
            {showProgress && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-64 sm:w-80"
              >
                <div className="relative">
                  {/* Barra de fondo */}
                  <div className="w-full h-px bg-white/20" />
                  
                  {/* Barra de progreso */}
                  <motion.div
                    className="absolute top-0 left-0 h-px bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progress / 100 }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                  
                  {/* Indicador de progreso */}
                  <motion.div
                    className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full transform -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  />
                </div>
                
                {/* Porcentaje */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-center text-sm text-white/40 font-poppins font-light mt-4 tracking-wider"
                >
                  {progress}%
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Indicador de estado en la esquina */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 right-8 text-white/30 font-poppins text-xs tracking-wider"
        >
          READY
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
