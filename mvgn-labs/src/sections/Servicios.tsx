import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Palette, 
  FileText, 
  Settings,
  Code,
  Smartphone,
  Search,
  ArrowRight,
  Database,
  Zap,
  X
} from 'lucide-react';

import BackgroundLines from '../components/BackgroundLines';

const Servicios: React.FC = () => {
  const [selectedTech, setSelectedTech] = React.useState<string | null>(null);
  
  const services = [
    {
      icon: Globe,
      title: 'Diseño Web',
      subtitle: 'Sitios Web Modernos',
      description: 'Creo sitios web profesionales, responsivos y optimizados para SEO que convierten visitantes en clientes.',
      features: ['Diseño Responsivo', 'SEO Optimizado', 'HTML5/CSS3', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Palette,
      title: 'Branding',
      subtitle: 'Identidad Visual',
      description: 'Desarrollo identidades visuales completas que diferencian tu marca y generan confianza en tu audiencia.',
      features: ['Logo Design', 'Identidad Visual', 'Brand Guidelines', 'Posicionamiento'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: FileText,
      title: 'Catálogos Digitales',
      subtitle: 'PDFs Interactivos',
      description: 'Diseño catálogos profesionales e interactivos que presentan tus productos de manera atractiva y funcional.',
      features: ['InDesign', 'Photoshop', 'Illustrator', 'PDF Interactivo'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      icon: Settings,
      title: 'Soporte Tecnológico',
      subtitle: 'Soporte IT Integral',
      description: 'Ofrezco servicios técnicos completos para mantener tu tecnología funcionando de manera óptima.',
      features: ['Reparación PC', 'Conexiones Remotas', 'Instalación Software', 'Optimización'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    }
  ];

  const technologyGroups = [
    {
      title: 'Frontend Development',
      icon: Code,
      technologies: ['JavaScript', 'HTML5/CSS3', 'Responsive Design', 'UX/UI'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Interfaces modernas y responsivas'
    },
    {
      title: 'Backend & Database',
      icon: Database,
      technologies: ['Firebase', 'WhatsApp API', 'REST APIs', 'Real-time Data'],
      color: 'from-green-500 to-emerald-500',
      description: 'Arquitectura robusta y escalable'
    },
    {
      title: 'Mobile & Responsive',
      icon: Smartphone,
      technologies: ['Mobile First', 'Cross-platform', 'Touch Optimized', 'Performance'],
      color: 'from-purple-500 to-pink-500',
      description: 'Experiencia perfecta en todos los dispositivos'
    },
    {
      title: 'Performance & SEO',
      icon: Search,
      technologies: ['SEO Optimization', 'Analytics', 'Performance Monitoring', 'Core Web Vitals'],
      color: 'from-red-500 to-pink-500',
      description: 'Optimización integral para resultados'
    }
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-40 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Líneas geométricas de fondo */}
      <BackgroundLines className="opacity-20" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-text-primary mb-6 sm:mb-8 leading-tight px-4">
            Mis <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Soluciones tecnológicas integrales que transforman tu negocio digital
          </p>
        </motion.div>

        {/* Grid de Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border border-border-primary rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl ${service.bgColor} ${service.borderColor}`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="icon-xl text-white" />
                  </div>
                  
                  <h3 className="text-xl font-fraunces font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {service.subtitle}
                  </p>
                  <p className="text-text-tertiary text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stack Tecnológico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-fraunces font-semibold text-text-primary mb-4">
              Stack Tecnológico
            </h3>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto px-4">
              Selecciona una categoría para explorar las tecnologías y habilidades específicas
            </p>
          </div>
          
          {/* Grid de Tecnologías - Uniforme */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {technologyGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedTech(group.title)}
              >
                <div className={`bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border-2 rounded-2xl p-4 sm:p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedTech === group.title 
                    ? 'border-primary/50 bg-primary/10' 
                    : 'border-border-primary hover:border-primary/30'
                }`}>
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${group.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <group.icon className="icon-lg sm:icon-xl text-white" />
                  </div>
                  <h4 className="text-text-primary font-semibold text-center mb-2 text-sm sm:text-base line-clamp-2">{group.title}</h4>
                  <p className="text-text-tertiary text-xs sm:text-sm text-center mb-3 line-clamp-2">{group.description}</p>
                  <div className="text-center">
                    <span className="text-xs text-text-muted">
                      {group.technologies.length} tecnologías
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Overlay de Tecnologías Detalladas - Estilo Samsung Apps */}
        <AnimatePresence>
          {selectedTech && (
            <>
              {/* Fondo difuminado */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
                onClick={() => setSelectedTech(null)}
              />
              
              {/* Panel de tecnologías al frente */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="fixed inset-0 z-50 overflow-hidden"
              >
                {/* Header flotante */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary/20 to-primary-light/20 backdrop-blur-sm border-b border-border-primary/30 p-4 sm:p-6 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${
                        technologyGroups.find(group => group.title === selectedTech)?.color
                      } rounded-2xl flex items-center justify-center`}>
                        {React.createElement(
                          technologyGroups.find(group => group.title === selectedTech)?.icon || Code,
                          { className: "icon-lg text-white" }
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-fraunces font-semibold text-text-primary">
                          {selectedTech}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {technologyGroups.find(group => group.title === selectedTech)?.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedTech(null)}
                      className="w-10 h-10 bg-surface-secondary/50 hover:bg-surface-secondary border border-border-primary rounded-xl flex items-center justify-center text-text-tertiary hover:text-text-primary transition-all duration-300 hover:scale-110"
                    >
                      <X className="icon" />
                    </button>
                  </div>
                </div>
                
                {/* Contenido de tecnologías distribuido en el fondo */}
                <div className="pt-24 sm:pt-28 p-4 sm:p-6 h-full">
                  {/* Grid de tecnologías distribuido por toda la pantalla */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 h-full">
                    {technologyGroups
                      .find(group => group.title === selectedTech)
                      ?.technologies.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                          className="group flex items-center justify-center"
                        >
                          <div className="bg-gradient-to-br from-primary/20 to-primary-light/20 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 sm:p-6 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-xl max-w-xs w-full text-center">
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                              <span className="text-text-primary font-semibold text-base sm:text-lg leading-tight">{tech}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                  
                  {/* Información adicional flotante en la parte inferior */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 sm:p-6 text-center">
                      <h5 className="text-lg font-fraunces font-semibold text-text-primary mb-2">
                        Experiencia en {selectedTech}
                      </h5>
                      <p className="text-text-secondary text-sm leading-relaxed max-w-2xl mx-auto">
                        He aplicado estas tecnologías en proyectos reales, asegurando la más alta calidad y rendimiento. 
                        Cada herramienta es seleccionada cuidadosamente para maximizar la eficiencia y resultados.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 border border-primary/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <Zap className="icon-lg sm:icon-xl text-primary" />
              <h3 className="text-xl sm:text-2xl font-fraunces font-semibold text-text-primary text-center">
                ¿Tienes un proyecto en mente?
              </h3>
            </div>
            <p className="text-text-secondary text-sm sm:text-base mb-4 max-w-2xl mx-auto leading-relaxed px-4">
              Permíteme crear una solución personalizada que se adapte a tus necesidades
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary btn-lg group min-h-[44px]"
              >
                Conversar sobre tu proyecto
                <ArrowRight className="icon group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;
