import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Shield, Zap, Database, Globe, Code, Lock } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [terminalText, setTerminalText] = useState('');
  const [showGlitch, setShowGlitch] = useState(false);

  const bootSequence = [
    { text: 'INICIANDO SISTEMA MVGN_LABS v2.0.24...', icon: Cpu, color: 'text-blue-400' },
    { text: 'VERIFICANDO INTEGRIDAD DEL SISTEMA...', icon: Shield, color: 'text-green-400' },
    { text: 'CARGANDO MÓDULOS DE DESARROLLO...', icon: Code, color: 'text-purple-400' },
    { text: 'INICIALIZANDO BASE DE DATOS...', icon: Database, color: 'text-yellow-400' },
    { text: 'ESTABLECIENDO CONEXIONES REMOTAS...', icon: Globe, color: 'text-cyan-400' },
    { text: 'ACTIVANDO PROTOCOLOS DE SEGURIDAD...', icon: Lock, color: 'text-red-400' },
    { text: 'SISTEMA LISTO - BIENVENIDO AL PORTFOLIO', icon: Zap, color: 'text-primary' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= bootSequence.length - 1) {
          clearInterval(stepInterval);
          return bootSequence.length - 1;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 150);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      const currentStepData = bootSequence[currentStep];
      if (currentStepData) {
        setTerminalText(prev => prev + currentStepData.text + '\n');
      }
    }, 100);

    return () => clearInterval(textInterval);
  }, [currentStep]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 grid-pattern"></div>
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scanline"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-4xl mx-4">
          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{ 
                scale: showGlitch ? [1, 1.02, 1] : 1,
                filter: showGlitch ? 'hue-rotate(90deg)' : 'hue-rotate(0deg)'
              }}
              transition={{ duration: 0.15 }}
              className="inline-block"
            >
              <Terminal className="w-16 h-16 text-primary mx-auto mb-4" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-mono tracking-wider mb-2">
              <span className="text-primary">MVGN</span>
              <span className="text-white">_LABS</span>
            </h1>
            <p className="text-green-400 font-mono text-sm tracking-wider">
              SYSTEM BOOT SEQUENCE INITIALIZED
            </p>
          </motion.div>

          {/* Terminal Output */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-black/80 border border-green-500/50 rounded-lg p-6 mb-8 font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-green-400 h-48 overflow-y-auto">
              <pre className="whitespace-pre-wrap">{terminalText}</pre>
              <span className="animate-pulse">█</span>
            </div>
          </motion.div>

          {/* Current Step Display */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-8"
          >
            {bootSequence[currentStep] && (
              <div className="flex items-center justify-center gap-3 mb-4">
                <bootSequence[currentStep].icon className={`w-6 h-6 ${bootSequence[currentStep].color}`} />
                <span className={`font-mono text-lg ${bootSequence[currentStep].color}`}>
                  {bootSequence[currentStep].text}
                </span>
              </div>
            )}
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-gray-800 rounded-full h-3 mb-4 overflow-hidden"
          >
            <div className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </motion.div>

          {/* Progress Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center"
          >
            <p className="text-white/70 font-mono text-sm mb-2">
              PROGRESO DEL SISTEMA: {progress}%
            </p>
            <p className="text-green-400 font-mono text-xs tracking-wider">
              {progress < 100 ? 'INICIALIZANDO...' : 'SISTEMA LISTO'}
            </p>
          </motion.div>

          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, opacity: 0 }}
                animate={{ 
                  y: ['100vh', '-100vh'],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
                className="absolute text-green-400/30 font-mono text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
