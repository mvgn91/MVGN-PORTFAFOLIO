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
  Zap,
  ArrowRight,
  Database,
  Shield,
  Cpu
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Servicios: React.FC = () => {
  const [selectedTech, setSelectedTech] = React.useState<string | null>(null);
  
  const services = [
    {
      icon: Globe,
      title: 'Diseño Web',
      description: 'Sitios web modernos, responsivos y optimizados para SEO. Desarrollo con React, Firebase y tecnologías de vanguardia.',
      features: ['Diseño Responsivo', 'SEO Optimizado', 'React.js', 'Firebase Integration'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Identidad visual completa, posicionamiento de marca y diferenciación competitiva para tu negocio.',
      features: ['Logo Design', 'Identidad Visual', 'Brand Guidelines', 'Posicionamiento'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FileText,
      title: 'Catálogos Digitales',
      description: 'PDFs interactivos y catálogos profesionales diseñados con herramientas de Adobe Creative Suite.',
      features: ['InDesign', 'Photoshop', 'Illustrator', 'PDF Interactivo'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Settings,
      title: 'Soporte Tecnológico',
      description: 'Reparación de PC, conexiones remotas seguras e instalación de software con enfoque en optimización.',
      features: ['Reparación PC', 'Conexiones Remotas', 'Instalación Software', 'Optimización'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const technologyGroups = [
    {
      title: 'Frontend Development',
      icon: Code,
      technologies: ['React.js', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend & Database',
      icon: Database,
      technologies: ['Firebase', 'Node.js', 'REST APIs', 'Real-time Data'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile & Responsive',
      icon: Smartphone,
      technologies: ['Mobile First', 'Progressive Web Apps', 'Cross-platform', 'Touch Optimized'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Performance & SEO',
      icon: Search,
      technologies: ['Core Web Vitals', 'SEO Optimization', 'Analytics', 'Performance Monitoring'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Función helper para descripciones del stack
  const getStackDescription = (title: string) => {
    const descriptions: { [key: string]: string } = {
      'Frontend Development': 'Desarrollo de interfaces modernas y responsivas con las últimas tecnologías web, creando experiencias de usuario excepcionales.',
      'Backend & Database': 'Arquitectura robusta y escalable con bases de datos en tiempo real y APIs RESTful para aplicaciones de alto rendimiento.',
      'Mobile & Responsive': 'Diseño mobile-first que garantiza una experiencia perfecta en todos los dispositivos y plataformas.',
      'Performance & SEO': 'Optimización integral para velocidad, SEO y métricas Core Web Vitals que mejoran el posicionamiento y la experiencia del usuario.'
    };
    return descriptions[title] || 'Stack tecnológico optimizado para resultados excepcionales.';
  };

  return (
    <section id="servicios" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
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

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-white mb-8 leading-tight">
            Mis <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Soluciones integrales que combinan creatividad, tecnología y resultados medibles
          </p>
          <div className="w-32 h-1 bg-primary mx-auto rounded-full mt-8" />
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                color={service.color}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Showcase - Tarjetas Interactivas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-fraunces font-semibold text-white mb-6">
              Stack Tecnológico
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Selecciona una categoría para ver las tecnologías que manejo
            </p>
          </div>
          
          {/* Grid de Tarjetas Interactivas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                    <group.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-center mb-2">{group.title}</h4>
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
                <p className="text-white/70">
                  {getStackDescription(selectedTech)}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technologyGroups
                  .find(group => group.title === selectedTech)
                  ?.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4 hover:bg-primary/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-white font-medium">{tech}</span>
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-fraunces font-semibold text-white mb-6">
              ¿Tienes un proyecto específico en mente?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Permíteme crear una solución personalizada que se adapte perfectamente a tus necesidades
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary group"
            >
              Solicitar Cotización
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;
