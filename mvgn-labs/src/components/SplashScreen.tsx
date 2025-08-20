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
        {/* Background Elements - Sutil */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
            className="absolute bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
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
        <div className="relative z-10 w-full max-w-4xl mx-4">
          {/* Logo y Título */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center shadow-2xl border border-primary/20">
                <img 
                  src="/favicon.ico" 
                  alt="MVGN Labs Logo" 
                  className="w-20 h-20"
                />
              </div>
            </motion.div>
            
            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-white mb-4 leading-tight"
            >
              MVGN <span className="text-gradient">Labs</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/70 font-poppins"
            >
              Sistema de Portfolio Profesional
            </motion.p>
          </motion.div>

          {/* Panel de Sistema */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-br from-surface/80 to-surface-dark/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-8"
          >
            {/* Header del Sistema */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white/60 text-sm font-poppins ml-3">sistema_mvgn_labs</span>
              </div>
              <div className="text-white/40 text-xs font-mono">v2.0.24</div>
            </div>
            
            {/* Pasos de Boot */}
            <div className="space-y-4 font-mono text-sm">
              {bootSteps.slice(0, currentStep + 1).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className={`w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-primary/30`}>
                    <step.icon className={`w-4 h-4 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <span className="text-white/90">{step.text}</span>
                    {index === currentStep && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-primary ml-2"
                      >
                        █
                      </motion.span>
                    )}
                  </div>
                  <div className="text-white/40 text-xs">
                    {index === currentStep ? 'ejecutando...' : 'completado'}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Barra de Progreso Elegante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            {/* Barra de Progreso */}
            <div className="w-full max-w-md mx-auto mb-4">
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/20">
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
              className="space-y-2"
            >
              <span className="text-white/60 font-poppins text-sm">
                {Math.round(progress)}% completado
              </span>
              <div className="text-white/40 text-xs font-mono">
                {progress < 100 ? 'Inicializando sistema...' : 'Sistema listo'}
              </div>
            </motion.div>
          </motion.div>

          {/* Mensaje de Bienvenida */}
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="text-center mt-12"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl mb-4"
                >
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-primary font-medium">Sistema Inicializado</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-fraunces font-semibold text-white mb-2"
                >
                  ¡Bienvenido a MVGN Labs!
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
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
