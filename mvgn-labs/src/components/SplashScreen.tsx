import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Zap, Terminal, Database, Globe } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const steps = [
    { icon: Cpu, text: 'Inicializando sistema...', color: 'from-blue-500 to-cyan-500' },
    { icon: Database, text: 'Cargando base de datos...', color: 'from-green-500 to-emerald-500' },
    { icon: Code, text: 'Compilando componentes...', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, text: 'Conectando servicios...', color: 'from-orange-500 to-red-500' },
    { icon: Terminal, text: 'Verificando integridad...', color: 'from-indigo-500 to-blue-500' },
    { icon: Zap, text: 'Sistema listo', color: 'from-yellow-500 to-orange-500' }
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
              setTimeout(() => onComplete(), 1500);
            }, 1000);
          }, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(stepInterval);
  }, [onComplete, steps.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Grid de fondo animado */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>

        {/* Partículas flotantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center space-y-16 max-w-4xl mx-auto px-8">
          
          {/* Logo y Título - Aparece después de los pasos */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="text-center space-y-6"
              >
                {/* Logo con efecto de construcción */}
                <motion.div
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="relative">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center border-2 border-primary/30 backdrop-blur-sm shadow-2xl shadow-primary/20">
                      <img 
                        src="/favicon.ico" 
                        alt="MVGN Labs Logo" 
                        className="w-20 h-20"
                      />
                    </div>
                    {/* Efecto de brillo */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>
                
                {/* Título con efecto de escritura */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-4"
                >
                  <h1 className="text-6xl font-fraunces font-bold text-white leading-tight">
                    MVGN <span className="text-gradient">Labs</span>
                  </h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl text-white/70 font-poppins font-light tracking-wider"
                  >
                    PORTFOLIO DIGITAL
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pasos de inicialización */}
          <div className="w-full max-w-2xl">
            <div className="grid grid-cols-1 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: index <= currentStep ? 1 : 0.3,
                    x: index <= currentStep ? 0 : -20
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-white/10 border-primary/30 shadow-lg shadow-primary/20' 
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  {/* Icono del paso */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center ${
                      index <= currentStep ? 'scale-110' : 'scale-100'
                    } transition-transform duration-300`}
                    animate={index <= currentStep ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5, repeat: index === currentStep ? Infinity : 0 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  {/* Texto del paso */}
                  <div className="flex-1">
                    <p className={`font-medium transition-colors duration-300 ${
                      index <= currentStep ? 'text-white' : 'text-white/50'
                    }`}>
                      {step.text}
                    </p>
                  </div>
                  
                  {/* Indicador de estado */}
                  <motion.div
                    className={`w-3 h-3 rounded-full ${
                      index < currentStep ? 'bg-green-400' : 
                      index === currentStep ? 'bg-yellow-400' : 'bg-white/20'
                    }`}
                    animate={index === currentStep ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1, repeat: index === currentStep ? Infinity : 0 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mensaje de bienvenida final */}
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 rounded-2xl mb-4 backdrop-blur-sm"
                >
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold text-lg">SISTEMA OPERATIVO</span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/80 font-poppins text-base font-medium"
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
