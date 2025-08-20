import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundLinesProps {
  className?: string;
}

const BackgroundLines: React.FC<BackgroundLinesProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="w-full h-full">
        {/* Definiciones de gradientes */}
        <defs>
          <linearGradient id="radarCircleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
          <linearGradient id="radarCircleGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
          </linearGradient>
          <linearGradient id="radarCircleGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
          </linearGradient>
          
          <linearGradient id="radarLineGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.4)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
          </linearGradient>
          <linearGradient id="radarLineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
          <linearGradient id="radarLineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.4)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
          </linearGradient>
          <linearGradient id="radarLineGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.4)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
          </linearGradient>
          
          <linearGradient id="radarDiagonalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
          <linearGradient id="radarDiagonalGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
          </linearGradient>
          <linearGradient id="radarDiagonalGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.3)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
          </linearGradient>
          <linearGradient id="radarDiagonalGradient4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
        </defs>

        {/* Círculos concéntricos tipo radar */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="0"
          fill="none"
          stroke="url(#radarCircleGradient1)"
          strokeWidth="2"
          strokeDasharray="20,10"
          initial={{ r: 0, opacity: 0 }}
          animate={{
            r: [0, 150, 0],
            opacity: [0, 0.4, 0],
            strokeWidth: [2, 3, 2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.circle
          cx="50%"
          cy="50%"
          r="0"
          fill="none"
          stroke="url(#radarCircleGradient2)"
          strokeWidth="1.5"
          strokeDasharray="15,8"
          initial={{ r: 0, opacity: 0 }}
          animate={{
            r: [0, 250, 0],
            opacity: [0, 0.3, 0],
            strokeWidth: [1.5, 2.5, 1.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.circle
          cx="50%"
          cy="50%"
          r="0"
          fill="none"
          stroke="url(#radarCircleGradient3)"
          strokeWidth="1"
          strokeDasharray="25,15"
          initial={{ r: 0, opacity: 0 }}
          animate={{
            r: [0, 350, 0],
            opacity: [0, 0.2, 0],
            strokeWidth: [1, 2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Líneas verticales y horizontales */}
        <motion.line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="0%"
          stroke="url(#radarLineGradient1)"
          strokeWidth="1.5"
          strokeDasharray="8,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.5, 0],
            strokeWidth: [1.5, 2.5, 1.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="100%"
          stroke="url(#radarLineGradient2)"
          strokeWidth="1.5"
          strokeDasharray="8,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.5, 0],
            strokeWidth: [1.5, 2.5, 1.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.line
          x1="50%"
          y1="50%"
          x2="0%"
          y2="50%"
          stroke="url(#radarLineGradient3)"
          strokeWidth="1.5"
          strokeDasharray="8,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.5, 0],
            strokeWidth: [1.5, 2.5, 1.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.line
          x1="50%"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#radarLineGradient4)"
          strokeWidth="1.5"
          strokeDasharray="8,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.5, 0],
            strokeWidth: [1.5, 2.5, 1.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Líneas diagonales */}
        <motion.line
          x1="50%"
          y1="50%"
          x2="0%"
          y2="0%"
          stroke="url(#radarDiagonalGradient1)"
          strokeWidth="1"
          strokeDasharray="6,3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0],
            strokeWidth: [1, 2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        <motion.line
          x1="50%"
          y1="50%"
          x2="100%"
          y2="0%"
          stroke="url(#radarDiagonalGradient2)"
          strokeWidth="1"
          strokeDasharray="6,3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0],
            strokeWidth: [1, 2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        <motion.line
          x1="50%"
          y1="50%"
          x2="0%"
          y2="100%"
          stroke="url(#radarDiagonalGradient3)"
          strokeWidth="1"
          strokeDasharray="6,3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0],
            strokeWidth: [1, 2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
        
        <motion.line
          x1="50%"
          y1="50%"
          x2="100%"
          y2="100%"
          stroke="url(#radarDiagonalGradient4)"
          strokeWidth="1"
          strokeDasharray="6,3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0],
            strokeWidth: [1, 2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5
          }}
        />
      </svg>
    </div>
  );
};

export default BackgroundLines;
