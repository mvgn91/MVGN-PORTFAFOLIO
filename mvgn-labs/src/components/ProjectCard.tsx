import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  link: string;
  github: string;
  year: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web':
        return 'from-blue-500 to-cyan-500';
      case 'branding':
        return 'from-purple-500 to-pink-500';
      case 'catalogo':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-primary to-primary-light';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'web':
        return 'Desarrollo Web';
      case 'branding':
        return 'Branding';
      case 'catalogo':
        return 'Catálogo Digital';
      default:
        return 'Proyecto';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      <div className="bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border border-border-primary rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
        {/* Image Container - Tamaño optimizado */}
        <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
              <div className="flex flex-col sm:flex-row gap-2">
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm group/btn flex-1 sm:flex-none justify-center min-h-[44px]"
                  >
                    <ExternalLink className="icon-sm group-hover/btn:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Ver Demo</span>
                    <span className="sm:hidden">Demo</span>
                  </a>
                )}
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm group/btn flex-1 sm:flex-none justify-center min-h-[44px]"
                  >
                    <Github className="icon-sm group-hover/btn:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Código</span>
                    <span className="sm:hidden">Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(project.category)}`}>
              {getCategoryLabel(project.category)}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-text-primary bg-surface-primary/80 backdrop-blur-sm border border-border-primary">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content - Espaciado optimizado */}
        <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-fraunces font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-text-tertiary text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Features - Reducido para mejor balance */}
          <div className="space-y-2">
            <h4 className="text-text-primary font-medium text-sm">Características:</h4>
            <div className="space-y-1">
              {project.features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-text-tertiary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
              {project.features.length > 2 && (
                <div className="text-xs text-text-muted">
                  +{project.features.length - 2} más...
                </div>
              )}
            </div>
          </div>

          {/* Technologies - Reducido para mejor balance */}
          <div className="space-y-2">
            <h4 className="text-text-primary font-medium text-sm">Tecnologías:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-lg text-xs text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-surface-accent/50 border border-border-secondary rounded-lg text-xs text-text-muted">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button className="w-full btn btn-primary group/btn text-sm sm:text-base min-h-[44px]">
              <span className="hidden sm:inline">Ver Detalles</span>
              <span className="sm:hidden">Detalles</span>
              <ArrowRight className="icon-sm group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
