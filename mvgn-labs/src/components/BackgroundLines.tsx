import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundLinesProps {
  className?: string;
}

const BackgroundLines: React.FC<BackgroundLinesProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Líneas horizontales sutiles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-200/20 to-transparent"
            style={{
              top: `${(i + 1) * 16.67}%`,
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

      {/* Líneas verticales sutiles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-gray-200/20 to-transparent"
            style={{
              left: `${(i + 1) * 12.5}%`,
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

      {/* Puntos de intersección muy sutiles */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          [...Array(6)].map((_, j) => (
            <motion.div
              key={`point-${i}-${j}`}
              className="absolute w-0.5 h-0.5 bg-gray-300/30 rounded-full"
              style={{
                left: `${(i + 1) * 25}%`,
                top: `${(j + 1) * 16.67}%`,
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
    </div>
  );
};

export default BackgroundLines;
