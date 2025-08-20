import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Shield, Zap, Database, Globe, Code, Lock } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const bootSequence = [
  { text: 'INICIANDO SISTEMA MVGN_LABS v2.0.24...', icon: Cpu, color: 'text-blue-400' },
  { text: 'VERIFICANDO INTEGRIDAD DEL SISTEMA...', icon: Shield, color: 'text-green-400' },
  { text: 'CARGANDO MÓDULOS DE DESARROLLO...', icon: Code, color: 'text-purple-400' },
  { text: 'INICIALIZANDO BASE DE DATOS...', icon: Database, color: 'text-yellow-400' },
  { text: 'ESTABLECIENDO CONEXIONES REMOTAS...', icon: Globe, color: 'text-cyan-400' },
  { text: 'ACTIVANDO PROTOCOLOS DE SEGURIDAD...', icon: Lock, color: 'text-red-400' },
  { text: 'SISTEMA LISTO - BIENVENIDO AL PORTFOLIO', icon: Zap, color: 'text-primary' }
];

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [terminalText, setTerminalText] = useState('');
  const [showGlitch, setShowGlitch] = useState(false);

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
    }, 4000);

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
        className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)`
            }}
          />
        </div>

        {/* Elegant Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            animate={{ y: ['0vh', '100vh'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-3xl mx-4">
          {/* Header - Minimalist */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ 
                scale: showGlitch ? [1, 1.02, 1] : 1,
                filter: showGlitch ? 'hue-rotate(90deg)' : 'hue-rotate(0deg)'
              }}
              transition={{ duration: 0.2 }}
              className="inline-block mb-6"
            >
              <Terminal className="w-12 h-12 text-primary/80" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-light text-white font-mono tracking-widest mb-3"
              animate={{ letterSpacing: showGlitch ? '0.5em' : '0.1em' }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-primary/90">MVGN</span>
              <span className="text-white/90">_LABS</span>
            </motion.h1>
            
            <motion.p 
              className="text-primary/60 font-mono text-xs tracking-widest uppercase"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              System Boot Sequence
            </motion.p>
          </motion.div>

          {/* Terminal Output - Cleaner */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8 font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-red-400/60 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-400/60 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-400/60 rounded-full"></div>
            </div>
            <div className="text-green-400/80 h-32 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-xs leading-relaxed">{terminalText}</pre>
              <motion.span 
                className="text-primary"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                █
              </motion.span>
            </div>
          </motion.div>

          {/* Current Step - Elegant */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-center mb-8"
          >
            {bootSequence[currentStep] && (() => {
              const CurrentIcon = bootSequence[currentStep].icon;
              return (
                <motion.div 
                  className="flex items-center justify-center gap-3 mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CurrentIcon className={`w-5 h-5 ${bootSequence[currentStep].color}`} />
                  <span className={`font-mono text-sm ${bootSequence[currentStep].color} tracking-wide`}>
                    {bootSequence[currentStep].text}
                  </span>
                </motion.div>
              );
            })()}
          </motion.div>

          {/* Progress Bar - Minimalist */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full bg-white/5 rounded-full h-1.5 mb-6 overflow-hidden backdrop-blur-sm"
          >
            <div className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Progress Text - Clean */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-center"
          >
            <p className="text-white/50 font-mono text-xs mb-2 tracking-wide">
              PROGRESO: {progress}%
            </p>
            <motion.p 
              className="text-primary/70 font-mono text-xs tracking-widest uppercase"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {progress < 100 ? 'INICIALIZANDO...' : 'SISTEMA LISTO'}
            </motion.p>
          </motion.div>
        </div>

        {/* Subtle Matrix Rain - Minimalist */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{ 
                y: ['100vh', '-100vh'],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
              className="absolute text-primary/20 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </motion.div>
          ))}
        </div>

        {/* Corner Decorations - Subtle */}
        <motion.div 
          className="absolute top-6 left-6 w-6 h-6 border-l border-t border-primary/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-6 right-6 w-6 h-6 border-r border-t border-primary/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.div 
          className="absolute bottom-6 left-6 w-6 h-6 border-l border-b border-primary/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.div 
          className="absolute bottom-6 right-6 w-6 h-6 border-r border-b border-primary/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
