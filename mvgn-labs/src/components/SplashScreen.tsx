import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Database, Globe, Terminal, Zap } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const steps = [
    { icon: Cpu, text: 'Inicializando sistema...', color: 'from-slate-600 to-slate-500' },
    { icon: Database, text: 'Cargando base de datos...', color: 'from-slate-600 to-slate-500' },
    { icon: Code, text: 'Compilando componentes...', color: 'from-slate-600 to-slate-500' },
    { icon: Globe, text: 'Conectando servicios...', color: 'from-slate-600 to-slate-500' },
    { icon: Terminal, text: 'Verificando integridad...', color: 'from-slate-600 to-slate-500' },
    { icon: Zap, text: 'Sistema listo', color: 'from-primary to-primary/80' }
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setShowLogo(true);
            setTimeout(() => {
              setShowWelcome(true);
              setTimeout(() => onComplete(), 2000);
            }, 1000);
          }, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(stepInterval);
  }, [onComplete, steps.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Fondo sutil con patrón geométrico */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
        </div>

        {/* Contenedor principal centrado */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-8 sm:space-y-12 max-w-2xl mx-auto px-6 sm:px-8">
          
          {/* Logo y Título - Aparece después de los pasos */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center space-y-6"
              >
                {/* Logo minimalista */}
                <motion.div
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-200">
                      <img 
                        src="/favicon.ico" 
                        alt="MVGN Labs Logo" 
                        className="w-16 h-16 sm:w-20 sm:h-20"
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Título elegante */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-4"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-fraunces font-bold text-slate-800 leading-tight">
                    MVGN <span className="text-primary">Labs</span>
                  </h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-base sm:text-lg md:text-xl text-slate-600 font-poppins font-medium tracking-wide"
                  >
                    PORTFOLIO DIGITAL
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pasos de inicialización simplificados */}
          <div className="w-full max-w-lg">
            <div className="space-y-3">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ 
                    opacity: index <= currentStep ? 1 : 0.4,
                    x: index <= currentStep ? 0 : -15
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-white border-slate-200 shadow-sm' 
                      : 'bg-slate-50/50 border-slate-100'
                  }`}
                >
                  {/* Icono del paso */}
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center transition-all duration-300 ${
                      index <= currentStep ? 'scale-105 shadow-sm' : 'scale-100'
                    }`}
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Texto del paso */}
                  <div className="flex-1">
                    <p className={`font-medium transition-colors duration-300 text-sm sm:text-base ${
                      index <= currentStep ? 'text-slate-700' : 'text-slate-500'
                    }`}>
                      {step.text}
                    </p>
                  </div>
                  
                  {/* Indicador de estado */}
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index < currentStep ? 'bg-green-500' : 
                      index === currentStep ? 'bg-primary' : 'bg-slate-300'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mensaje de bienvenida final */}
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-xl mb-4"
                >
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold text-base">SISTEMA OPERATIVO</span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate-700 font-poppins text-base font-medium"
                >
                  Bienvenido al portfolio de MVGN Labs
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
