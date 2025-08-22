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
      features: ['Diseño Responsivo', 'SEO Optimizado', 'React.js', 'Firebase Integration'],
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
      technologies: ['React.js', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Interfaces modernas y responsivas'
    },
    {
      title: 'Backend & Database',
      icon: Database,
      technologies: ['Firebase', 'Node.js', 'REST APIs', 'Real-time Data'],
      color: 'from-green-500 to-emerald-500',
      description: 'Arquitectura robusta y escalable'
    },
    {
      title: 'Mobile & Responsive',
      icon: Smartphone,
      technologies: ['Mobile First', 'Progressive Web Apps', 'Cross-platform', 'Touch Optimized'],
      color: 'from-purple-500 to-pink-500',
      description: 'Experiencia perfecta en todos los dispositivos'
    },
    {
      title: 'Performance & SEO',
      icon: Search,
      technologies: ['Core Web Vitals', 'SEO Optimization', 'Analytics', 'Performance Monitoring'],
      color: 'from-red-500 to-pink-500',
      description: 'Optimización integral para resultados'
    }
  ];

  return (
    <section id="servicios" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl"
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
        {/* Header Mejorado */}
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
            className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <Zap className="icon-sm text-primary" />
            <span className="text-primary font-medium text-xs sm:text-sm">Servicios Profesionales</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-white mb-8 leading-tight">
            Mis <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
            Soluciones integrales que combinan creatividad, tecnología y resultados medibles para impulsar tu negocio
          </p>
        </motion.div>

        {/* Servicios Principales - Grid Mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="section-grid section-grid-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className={`${service.bgColor} ${service.borderColor} border-2 rounded-3xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  activeService === index ? 'ring-2 ring-primary/50 shadow-xl' : ''
                }`}>
                  {/* Header del Servicio */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="icon-lg text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-fraunces font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-primary/80 font-medium text-base">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Descripción */}
                  <p className="text-white/80 leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>
                  
                  {/* Características */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-base">Características:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Beneficios */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-base">Beneficios:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Showcase - Rediseñado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-fraunces font-semibold text-white mb-6">
              Stack Tecnológico
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto px-2">
              Tecnologías y herramientas que utilizo para crear soluciones excepcionales
            </p>
          </div>
          
          {/* Grid de Tecnologías */}
          <div className="section-grid section-grid-3 mb-16">
            {technologyGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedTech(group.title)}
              >
                <div className={`bg-gradient-to-br from-surface/60 to-surface-dark/60 backdrop-blur-sm border-2 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 ${
                  selectedTech === group.title 
                    ? 'border-primary/50 bg-primary/10' 
                    : 'border-white/10 hover:border-primary/30'
                }`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${group.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <group.icon className="icon-lg text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-center mb-2 text-base">{group.title}</h4>
                  <p className="text-white/60 text-sm text-center mb-3">{group.description}</p>
                  <div className="text-center">
                    <span className="text-xs text-white/60">
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
              className="bg-gradient-to-br from-surface/80 to-surface-dark/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h4 className="text-2xl font-fraunces font-semibold text-white mb-2">
                  {selectedTech}
                </h4>
                <p className="text-white/70 text-base">
                  {technologyGroups.find(group => group.title === selectedTech)?.description}
                </p>
              </div>
              
              <div className="section-grid section-grid-2 gap-4">
                {technologyGroups
                  .find(group => group.title === selectedTech)
                  ?.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-primary/10 to-primary-light/10 border border-primary/20 rounded-xl p-4 hover:bg-primary/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-white font-medium text-base">{tech}</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
              
              <div className="text-center mt-8">
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  ← Volver a categorías
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action - Mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 border border-primary/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="icon-lg text-primary" />
              <h3 className="text-3xl font-fraunces font-semibold text-white">
                ¿Tienes un proyecto específico en mente?
              </h3>
            </div>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Permíteme crear una solución personalizada que se adapte perfectamente a tus necesidades y objetivos de negocio
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary btn-lg group"
              >
                Solicitar Cotización
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
