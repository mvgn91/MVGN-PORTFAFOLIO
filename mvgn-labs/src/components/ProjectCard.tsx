import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Star, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies,
  url,
  githubUrl,
  featured = false,
  category = 'web',
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'web': return 'from-blue-500 to-cyan-500';
      case 'app': return 'from-green-500 to-emerald-500';
      case 'marketing': return 'from-purple-500 to-pink-500';
      default: return 'from-primary to-accent';
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'web': return '🌐';
      case 'app': return '📱';
      case 'marketing': return '📢';
      default: return '⚡';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-3xl transition-all duration-500",
        "bg-gradient-to-br from-surface/60 to-surface-dark/60 backdrop-blur-sm",
        "border border-white/10 hover:border-primary/30",
        "hover:shadow-2xl hover:shadow-primary/20",
        className
      )}
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20"
        >
          <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg">
            <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-current" />
            <span className="hidden sm:inline">Destacado</span>
          </div>
        </motion.div>
      )}

      {/* Category Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20"
      >
        <div className={`flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r ${getCategoryColor(category)} text-white text-xs font-semibold rounded-full shadow-lg`}>
          <span>{getCategoryIcon(category)}</span>
          <span className="hidden sm:inline">
            {category === 'web' ? 'Web' : category === 'app' ? 'App' : category === 'marketing' ? 'Marketing' : 'Otro'}
          </span>
        </div>
      </motion.div>

      {/* Project Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent flex items-center justify-center"
        >
          <div className="flex gap-2 sm:gap-3">
            {url && (
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6">
        {/* Title and Description */}
        <div className="mb-4 sm:mb-6">
          <motion.h3 
            className="text-xl sm:text-2xl font-fraunces font-semibold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-white/70 leading-relaxed text-xs sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Technologies */}
        <motion.div 
          className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="px-2 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/10 text-white/60 text-xs font-medium rounded-full border border-white/20">
              +{technologies.length - 4}
            </span>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {url && (
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 group-hover:shadow-primary/25 text-xs sm:text-sm"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Ver Proyecto</span>
              <span className="sm:hidden">Ver</span>
            </motion.a>
          )}
          
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-surface hover:bg-surface-dark text-white font-medium rounded-xl border border-surface-dark/30 transition-all duration-300 hover:border-primary/30 text-xs sm:text-sm"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Código</span>
              <span className="sm:hidden">Code</span>
            </motion.a>
          )}
        </motion.div>

        {/* Hover Arrow Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -10
          }}
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-primary"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
