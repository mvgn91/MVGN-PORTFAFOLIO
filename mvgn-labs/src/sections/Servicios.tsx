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
  Zap,
  FileCode,
  Monitor,
  Eye,
  TrendingUp,
  Wifi,
  Layers,
  Cpu,
  Target,
  BarChart3
} from 'lucide-react';

const Servicios: React.FC = () => {
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
      title: 'Frontend',
      icon: Code,
      technologies: [
        { name: 'JavaScript', icon: FileCode, color: 'from-yellow-400 to-orange-500' },
        { name: 'HTML5/CSS3', icon: FileCode, color: 'from-orange-500 to-red-500' },
        { name: 'Responsive', icon: Monitor, color: 'from-blue-500 to-cyan-500' },
        { name: 'UX/UI', icon: Eye, color: 'from-purple-500 to-pink-500' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: Database,
      technologies: [
        { name: 'Firebase', icon: Zap, color: 'from-orange-500 to-yellow-500' },
        { name: 'WhatsApp API', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
        { name: 'REST APIs', icon: Wifi, color: 'from-blue-500 to-indigo-500' },
        { name: 'Real-time', icon: Database, color: 'from-purple-500 to-pink-500' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      technologies: [
        { name: 'Mobile First', icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
        { name: 'Cross-platform', icon: Globe, color: 'from-green-500 to-emerald-500' },
        { name: 'Touch Optimized', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
        { name: 'Performance', icon: Zap, color: 'from-yellow-500 to-orange-500' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'SEO & Analytics',
      icon: Search,
      technologies: [
        { name: 'SEO Optimization', icon: Target, color: 'from-green-500 to-emerald-500' },
        { name: 'Analytics', icon: BarChart3, color: 'from-blue-500 to-indigo-500' },
        { name: 'Performance', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
        { name: 'Core Web Vitals', icon: Zap, color: 'from-yellow-500 to-orange-500' }
      ],
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-40 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-primary/5 rounded-full blur-2xl"
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

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-text-primary mb-6 leading-tight">
            Mis <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Soluciones tecnológicas integrales que transforman tu negocio digital
          </p>
        </motion.div>

        {/* Grid de Servicios - Móvil First */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border border-border-primary rounded-2xl p-4 md:p-6 lg:p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl ${service.bgColor} ${service.borderColor}`}>
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-fraunces font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                    {service.subtitle}
                  </p>
                  <p className="text-text-tertiary text-sm leading-relaxed mb-4 md:mb-6">
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

        {/* Stack Tecnológico - Simplificado para móvil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-fraunces font-semibold text-text-primary mb-4">
              Stack Tecnológico
            </h3>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
              Tecnologías y herramientas que utilizo para crear soluciones digitales
            </p>
          </div>
          
          {/* Grid de Tecnologías - Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {technologyGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border border-border-primary rounded-2xl p-3 md:p-4 lg:p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/30">
                  <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${group.color} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                    <group.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-text-primary font-semibold text-center mb-2 text-sm md:text-base line-clamp-2">{group.title}</h4>
                  
                  {/* Tecnologías específicas - Solo en desktop */}
                  <div className="hidden lg:block space-y-2 mt-3">
                    {group.technologies.slice(0, 2).map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-text-tertiary">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action - Móvil First */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <h3 className="text-xl md:text-2xl font-fraunces font-semibold text-text-primary text-center">
                ¿Tienes un proyecto en mente?
              </h3>
            </div>
            <p className="text-text-secondary text-sm md:text-base mb-4 max-w-2xl mx-auto leading-relaxed">
              Permíteme crear una solución personalizada que se adapte a tus necesidades
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Conversar sobre tu proyecto</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;
