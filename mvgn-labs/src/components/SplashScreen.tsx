import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Mostrar contenido después de un breve delay
    const showTimer = setTimeout(() => setShowContent(true), 300);
    
    // Iniciar progreso después de mostrar contenido
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
    }, 800);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(progressTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden"
      >
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center space-y-12"
            >
              {/* Título MVGN Labs */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl font-fraunces font-light text-white leading-none tracking-tight"
              >
                MVGN LABS
              </motion.h1>

              {/* Círculo de carga estilo Windows 11 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                  {/* Círculo de fondo */}
                  <div className="w-full h-full border-2 border-white/20 rounded-full" />
                  
                  {/* Círculo de progreso */}
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                      className="transition-all duration-100 ease-linear"
                    />
                  </svg>
                  
                  {/* Punto central */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
