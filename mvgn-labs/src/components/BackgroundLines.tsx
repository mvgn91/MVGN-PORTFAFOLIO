import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundLinesProps {
  className?: string;
}

const BackgroundLines: React.FC<BackgroundLinesProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Líneas horizontales muy sutiles */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[var(--border-primary)]/30 to-transparent"
            style={{
              top: `${(i + 1) * 25}%`,
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Líneas verticales muy sutiles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-[var(--border-primary)]/30 to-transparent"
            style={{
              left: `${(i + 1) * 16.67}%`,
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.15,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Puntos de intersección extremadamente sutiles */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          [...Array(4)].map((_, j) => (
            <motion.div
              key={`point-${i}-${j}`}
              className="absolute w-0.5 h-0.5 bg-[var(--border-secondary)]/50 rounded-full"
              style={{
                left: `${(i + 1) * 33.33}%`,
                top: `${(j + 1) * 25}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: (i + j) * 0.1,
                ease: "easeOut"
              }}
            />
          ))
        ))}
      </div>
    </div>
  );
};

export default BackgroundLines;
