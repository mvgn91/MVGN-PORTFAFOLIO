import React from 'react';
import { motion } from 'framer-motion';

interface SectionLayoutProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  background?: 'default' | 'alternate' | 'dark';
  padding?: 'small' | 'medium' | 'large';
  className?: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  title,
  subtitle,
  children,
  background = 'default',
  padding = 'medium',
  className = ''
}) => {
  const getBackgroundClasses = () => {
    switch (background) {
      case 'alternate':
        return 'bg-surface-secondary';
      case 'dark':
        return 'bg-bg-secondary';
      default:
        return 'bg-bg-primary';
    }
  };

  const getPaddingClasses = () => {
    switch (padding) {
      case 'small':
        return 'py-16';
      case 'large':
        return 'py-32';
      default:
        return 'py-24';
    }
  };

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${getBackgroundClasses()} ${getPaddingClasses()} ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-primary font-medium text-sm">Sección</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-text-primary mb-8 leading-tight">
            {title}
          </h2>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Section Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionLayout;
