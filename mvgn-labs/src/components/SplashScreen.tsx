import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Code, Shield, Database } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const bootSteps = [
  { text: 'Inicializando sistema...', icon: Shield, color: 'text-green-400' },
  { text: 'Cargando módulos...', icon: Code, color: 'text-blue-400' },
  { text: 'Verificando componentes...', icon: Database, color: 'text-purple-400' },
  { text: 'Preparando interfaz...', icon: Zap, color: 'text-primary' },
  { text: 'Sistema listo', icon: Zap, color: 'text-accent' }
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
        {/* Background Elements - Sutil y responsivo */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 -right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl"
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
            className="absolute bottom-10 -left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-accent/5 rounded-full blur-3xl"
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

        {/* Main Content - Completamente responsivo */}
        <div className="relative z-10 w-full max-w-4xl mx-4 px-4 sm:px-6 lg:px-8">
          {/* Logo y Título */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            {/* Logo - Responsivo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 sm:mb-8"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl border border-primary/20">
                <img 
                  src="/favicon.ico" 
                  alt="MVGN Labs Logo" 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
            </motion.div>
            
            {/* Título - Completamente responsivo */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-fraunces font-bold text-white mb-3 sm:mb-4 leading-tight"
            >
              MVGN <span className="text-gradient">Labs</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-poppins px-2"
            >
              Sistema de Portfolio Profesional
            </motion.p>
          </motion.div>

          {/* Panel de Sistema - Responsivo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-br from-surface/80 to-surface-dark/80 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8"
          >
            {/* Header del Sistema */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white/60 text-xs sm:text-sm font-poppins ml-2 sm:ml-3">sistema_mvgn_labs</span>
              </div>
              <div className="text-white/40 text-xs font-mono">v2.0.24</div>
            </div>
            
            {/* Pasos de Boot - Responsivos */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 font-mono text-xs sm:text-sm">
              {bootSteps.slice(0, currentStep + 1).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl border border-white/10"
                >
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-primary/30 flex-shrink-0`}>
                    <step.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${step.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-white/90 text-xs sm:text-sm truncate">{step.text}</span>
                    {index === currentStep && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-primary ml-1 sm:ml-2"
                      >
                        █
                      </motion.span>
                    )}
                  </div>
                  <div className="text-white/40 text-xs flex-shrink-0">
                    {index === currentStep ? 'ejecutando...' : 'completado'}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Barra de Progreso Elegante - Responsiva */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            {/* Barra de Progreso */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-3 sm:mb-4">
              <div className="w-full bg-white/10 rounded-full h-2 sm:h-3 overflow-hidden border border-white/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full relative"
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
            </div>
            
            {/* Texto de Progreso */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-1 sm:space-y-2"
            >
              <span className="text-white/60 font-poppins text-xs sm:text-sm">
                {Math.round(progress)}% completado
              </span>
              <div className="text-white/40 text-xs font-mono">
                {progress < 100 ? 'Inicializando sistema...' : 'Sistema listo'}
              </div>
            </motion.div>
          </motion.div>

          {/* Mensaje de Bienvenida - Responsivo */}
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="text-center mt-8 sm:mt-10 md:mt-12"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-xl sm:rounded-2xl mb-3 sm:mb-4"
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-primary font-medium text-sm sm:text-base">Sistema Inicializado</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl font-fraunces font-semibold text-white mb-2"
                >
                  ¡Bienvenido a MVGN Labs!
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-white/70 font-poppins text-sm sm:text-base"
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
