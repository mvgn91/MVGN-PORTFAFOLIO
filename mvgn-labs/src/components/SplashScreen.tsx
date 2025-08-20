import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setShowWelcome(true);
            setTimeout(() => onComplete(), 1200);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Background Elements - Muy sutiles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
            animate={{
              scale: [1.05, 1, 1.05],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        {/* Main Content - Centrado y minimalista */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-12 max-w-2xl mx-auto px-8">
          {/* Logo y Título - Minimalista */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            {/* Logo - Tu logo real */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-primary/20 backdrop-blur-sm">
                <img 
                  src="/favicon.ico" 
                  alt="MVGN Labs Logo" 
                  className="w-16 h-16"
                />
              </div>
            </motion.div>
            
            {/* Título - Elegante y minimalista */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl font-fraunces font-bold text-white leading-tight">
                MVGN <span className="text-gradient">Labs</span>
              </h1>
              <p className="text-lg text-white/60 font-poppins font-light">
                Portfolio Profesional
              </p>
            </motion.div>
          </motion.div>

          {/* Barra de Progreso - Elegante y minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full max-w-sm"
          >
            {/* Barra de Progreso */}
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
            
            {/* Texto de Progreso */}
            <div className="text-center mt-3">
              <span className="text-white/40 font-poppins text-sm font-light">
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>

          {/* Mensaje de Bienvenida - Minimalista */}
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-xl mb-3"
                >
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium text-sm">Listo</span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/60 font-poppins text-sm"
                >
                  Redirigiendo...
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
