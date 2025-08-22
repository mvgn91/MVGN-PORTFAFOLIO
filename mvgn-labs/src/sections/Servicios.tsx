import React from 'react';
import { motion } from 'framer-motion';
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
  Zap
} from 'lucide-react';

import BackgroundLines from '../components/BackgroundLines';

const Servicios: React.FC = () => {
  const [selectedTech, setSelectedTech] = React.useState<string | null>(null);
  const [activeService, setActiveService] = React.useState(0);
  
  const services = [
    {
      icon: Globe,
      title: 'Diseño Web',
      subtitle: 'Sitios Web Modernos',
      description: 'Creo sitios web profesionales, responsivos y optimizados para SEO que convierten visitantes en clientes.',
      features: ['Diseño Responsivo', 'SEO Optimizado', 'HTML5/CSS3', 'JavaScript'],
      benefits: ['Mejora la imagen de marca', 'Aumenta las conversiones', 'Optimizado para móviles'],
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
      benefits: ['Diferenciación competitiva', 'Reconocimiento de marca', 'Consistencia visual'],
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
      benefits: ['Presentación profesional', 'Fácil distribución', 'Experiencia interactiva'],
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
      benefits: ['Tecnología optimizada', 'Menos tiempo de inactividad', 'Soporte experto'],
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
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
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
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-text-primary mb-6 sm:mb-8 leading-tight px-4">
            Mis <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Soluciones integrales que combinan creatividad, tecnología y resultados medibles para impulsar tu negocio
          </p>
        </motion.div>

        {/* Servicios Principales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <div className="grid-system grid-1 lg:grid-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className={`${service.bgColor} ${service.borderColor} border-2 rounded-3xl p-6 sm:p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  activeService === index ? 'ring-2 ring-primary/50 shadow-xl' : ''
                }`}>
                  {/* Header del Servicio */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="icon-lg sm:icon-xl text-white" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-fraunces font-semibold text-text-primary mb-1">
                        {service.title}
                      </h3>
                      <p className="text-primary/80 font-medium text-sm sm:text-base">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Descripción */}
                  <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  {/* Características */}
                  <div className="mb-6">
                    <h4 className="text-text-primary font-semibold mb-3 text-sm sm:text-base">Características:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-text-tertiary">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Beneficios */}
                  <div className="mb-6">
                    <h4 className="text-text-primary font-semibold mb-3 text-sm sm:text-base">Beneficios:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-text-tertiary">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="line-clamp-2">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-fraunces font-semibold text-text-primary mb-4 sm:mb-6">
              Stack Tecnológico
            </h3>
            <p className="text-text-tertiary text-base sm:text-lg max-w-2xl mx-auto px-4">
              Tecnologías y herramientas que utilizo para crear soluciones excepcionales
            </p>
          </div>
          
          {/* Grid de Tecnologías */}
          <div className="grid-system grid-2 lg:grid-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {technologyGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedTech(group.title)}
              >
                <div className={`bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border-2 rounded-2xl p-4 sm:p-6 h-full transition-all duration-300 hover:scale-105 ${
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
          
          {/* Panel de Tecnologías Detalladas */}
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-md border border-border-primary rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto"
            >
              <div className="text-center mb-6 sm:mb-8">
                <h4 className="text-xl sm:text-2xl font-fraunces font-semibold text-text-primary mb-2">
                  {selectedTech}
                </h4>
                <p className="text-text-tertiary text-sm sm:text-base">
                  {technologyGroups.find(group => group.title === selectedTech)?.description}
                </p>
              </div>
              
              <div className="grid-system grid-1 sm:grid-2 gap-3 sm:gap-4">
                {technologyGroups
                  .find(group => group.title === selectedTech)
                  ?.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-primary/10 to-primary-light/10 border border-primary/20 rounded-xl p-3 sm:p-4 hover:bg-primary/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-text-primary font-medium text-sm sm:text-base">{tech}</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
              
              <div className="text-center mt-6 sm:mt-8">
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-text-tertiary hover:text-text-secondary transition-colors text-sm"
                >
                  ← Volver a categorías
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 border border-primary/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Zap className="icon-lg sm:icon-xl text-primary" />
              <h3 className="text-2xl sm:text-3xl font-fraunces font-semibold text-text-primary text-center">
                ¿Tienes un proyecto específico en mente?
              </h3>
            </div>
            <p className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Permíteme crear una solución personalizada que se adapte perfectamente a tus necesidades y objetivos de negocio
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary btn-lg sm:btn-xl group w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Solicitar Cotización</span>
                <span className="sm:hidden">Cotización</span>
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
