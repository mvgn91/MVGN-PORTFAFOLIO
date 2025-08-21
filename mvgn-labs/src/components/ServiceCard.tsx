import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
  color?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features = [],
  className,
  color = "from-primary to-accent"
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "card p-6 h-full transition-all duration-300",
        "hover:border-primary/30 hover:shadow-xl",
        className
      )}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Icon with custom color */}
        <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
          <Icon className="w-10 h-10 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-fraunces font-semibold text-white leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-white/70 leading-relaxed text-base">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="w-full space-y-3">
            <h4 className="text-sm font-medium text-primary/80 uppercase tracking-wide">
              Características
            </h4>
            <div className="space-y-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white/80 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
