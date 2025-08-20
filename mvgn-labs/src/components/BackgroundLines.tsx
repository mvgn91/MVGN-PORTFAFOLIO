import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundLinesProps {
  className?: string;
}

const BackgroundLines: React.FC<BackgroundLinesProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Líneas horizontales */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{
              top: `${(i + 1) * 12.5}%`,
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Líneas verticales */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"
            style={{
              left: `${(i + 1) * 8.33}%`,
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{
              duration: 1.5,
              delay: i * 0.08,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Líneas diagonales */}
      <div className="absolute inset-0">
        {/* Diagonal principal */}
        <motion.div
          className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-white/3 to-transparent transform -rotate-45 origin-center"
          style={{
            top: '50%',
            left: '-50%',
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "easeOut"
          }}
        />
        
        {/* Diagonal secundaria */}
        <motion.div
          className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-white/3 to-transparent transform rotate-45 origin-center"
          style={{
            top: '50%',
            left: '-50%',
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 2,
            delay: 0.7,
            ease: "easeOut"
          }}
        />
      </div>

      {/* Puntos de intersección */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          [...Array(8)].map((_, j) => (
            <motion.div
              key={`point-${i}-${j}`}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${(i + 1) * 16.67}%`,
                top: `${(j + 1) * 12.5}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: (i + j) * 0.05,
                ease: "easeOut"
              }}
            />
          ))
        ))}
      </div>

      {/* Líneas de borde */}
      <div className="absolute inset-0">
        {/* Borde superior */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut"
          }}
        />
        
        {/* Borde inferior */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: "easeOut"
          }}
        />
        
        {/* Borde izquierdo */}
        <motion.div
          className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeOut"
          }}
        />
        
        {/* Borde derecho */}
        <motion.div
          className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: "easeOut"
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundLines;
