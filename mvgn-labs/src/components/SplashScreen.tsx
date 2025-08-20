import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const bootSteps = [
  'Inicializando sistema...',
  'Cargando módulos...',
  'Verificando componentes...',
  'Preparando interfaz...',
  'Sistema listo'
];

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setShowWelcome(true);
            setTimeout(() => onComplete(), 1500);
          }, 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= bootSteps.length - 1) {
          clearInterval(stepInterval);
          return bootSteps.length - 1;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(stepInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Background Elements - Sutil */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 -left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"
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

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-2xl mx-4">
          {/* Logo y Título */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Logo Real */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src="/favicon.ico" 
                alt="MVGN Labs Logo" 
                className="w-24 h-24 mx-auto"
              />
            </motion.div>
            
            {/* Título */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-fraunces font-bold text-white mb-2"
            >
              MVGN Labs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/70 font-poppins"
            >
              Sistema de Portfolio
            </motion.p>
          </motion.div>

          {/* Círculo de Carga - Estilo Sistema Operativo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {/* Círculo de Fondo */}
              <div className="w-32 h-32 rounded-full border-4 border-white/10 bg-surface/20 backdrop-blur-sm"></div>
              
              {/* Círculo de Progreso */}
              <svg className="absolute inset-0 w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="url(#progressGradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
                  className="transition-all duration-300 ease-out"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Porcentaje en el Centro */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-fraunces font-bold text-white">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Pasos de Boot - Estilo Sistema Operativo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-surface/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8"
          >
            {/* Header del Sistema */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white/60 text-sm font-poppins ml-2">sistema</span>
            </div>
            
            {/* Pasos de Boot */}
            <div className="space-y-2 font-mono text-sm">
              {bootSteps.slice(0, currentStep + 1).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary">●</span>
                  <span className="text-white/90">{step}</span>
                  {index === currentStep && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-primary"
                    >
                      |
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mensaje de Bienvenida */}
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center mt-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-fraunces font-semibold text-white mb-2"
                >
                  ¡Bienvenido!
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/70 font-poppins"
                >
                  Redirigiendo al portfolio...
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
