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
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Palette,
      title: 'Branding',
      subtitle: 'Identidad Visual',
      description: 'Desarrollo identidades visuales completas que diferencian tu marca y generan confianza en tu audiencia.',
      features: ['Logo Design', 'Identidad Visual', 'Brand Guidelines', 'Posicionamiento'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: FileText,
      title: 'Catálogos Digitales',
      subtitle: 'PDFs Interactivos',
      description: 'Diseño catálogos profesionales e interactivos que presentan tus productos de manera atractiva y funcional.',
      features: ['InDesign', 'Photoshop', 'Illustrator', 'PDF Interactivo'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Settings,
      title: 'Soporte Tecnológico',
      subtitle: 'Soporte IT Integral',
      description: 'Ofrezco servicios técnicos completos para mantener tu tecnología funcionando de manera óptima.',
      features: ['Reparación PC', 'Conexiones Remotas', 'Instalación Software', 'Optimización'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
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
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-40 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-red-100/30 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-gray-900 mb-6 leading-tight">
            Mis <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Soluciones tecnológicas integrales que transforman tu negocio digital
          </p>
        </motion.div>

        {/* Grid de Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`${service.bgColor} border ${service.borderColor} rounded-3xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-200`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-fraunces font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-base text-gray-700">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
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
          className="mb-16 lg:mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-fraunces font-semibold text-gray-900 mb-6">
              Stack Tecnológico
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Tecnologías y herramientas que utilizo para crear soluciones digitales
            </p>
          </div>
          
          {/* Grid de Tecnologías */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-3xl p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-200 hover:border-gray-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${group.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <group.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-gray-900 font-semibold text-center mb-4 text-lg">{group.title}</h4>
                  
                  {/* Tecnologías específicas */}
                  <div className="space-y-2">
                    {group.technologies.slice(0, 2).map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl lg:text-3xl font-fraunces font-semibold text-gray-900 text-center">
                ¿Tienes un proyecto en mente?
              </h3>
            </div>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Permíteme crear una solución personalizada que se adapte a tus necesidades
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 min-h-[56px]"
              >
                <span>Conversar sobre tu proyecto</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;
