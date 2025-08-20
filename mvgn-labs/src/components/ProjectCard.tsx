import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies,
  url,
  githubUrl,
  className
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "card overflow-hidden transition-all duration-300",
        "hover:border-primary/30 hover:shadow-xl",
        className
      )}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-fraunces font-semibold text-white mb-3">
          {title}
        </h3>
        
        <p className="text-white/70 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Proyecto
            </a>
          )}
          
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-dark text-white rounded-lg border border-surface-dark/30 transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              Código
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
