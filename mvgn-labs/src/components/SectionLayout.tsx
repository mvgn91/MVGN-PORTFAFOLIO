import React from 'react';
import { motion } from 'framer-motion';

interface SectionLayoutProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'light' | 'dark' | 'none';
  padding?: 'small' | 'medium' | 'large' | 'hero';
  container?: boolean;
  fullHeight?: boolean;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  background = 'default',
  padding = 'medium',
  container = true,
  fullHeight = false
}) => {
  const backgroundClasses = {
    default: 'bg-surface',
    light: 'bg-surface-light/30',
    dark: 'bg-surface-dark',
    none: ''
  };

  const paddingClasses = {
    small: 'py-12 sm:py-16 lg:py-20',
    medium: 'py-16 sm:py-20 lg:py-32',
    large: 'py-20 sm:py-24 lg:py-40',
    hero: 'min-h-screen flex items-center'
  };

  const heightClass = fullHeight ? 'min-h-screen' : '';

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${backgroundClasses[background]} ${paddingClasses[padding]} ${heightClass} ${className}`}
    >
      {/* Background Pattern - Solo para secciones con background */}
      {background !== 'none' && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        </div>
      )}

      <div className={`${container ? 'container mx-auto px-4 sm:px-6 lg:px-8' : ''} relative z-10`}>
        {/* Section Header */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-white mb-4 sm:mb-6">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Section Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionLayout;
