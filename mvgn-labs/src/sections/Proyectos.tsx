import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Star, Calendar, Globe } from 'lucide-react';

const Proyectos: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filters = [
    { id: 'todos', label: 'Todos', count: projects.length },
    { id: 'web', label: 'Sitios Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'catalogo', label: 'Catálogos', count: projects.filter(p => p.category === 'catalogo').length },
    { id: 'multimedia', label: 'Multimedia', count: projects.filter(p => p.category === 'multimedia').length }
  ];

  const handleFilter = (filterId: string) => {
    setActiveFilter(filterId);
    if (filterId === 'todos') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filterId));
    }
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-40 -right-40 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
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
            Proyectos <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Una selección de mis mejores trabajos que demuestran mi capacidad para crear soluciones 
            creativas y funcionales que generan resultados reales
          </p>
        </motion.div>

        {/* Filtros - Móvil First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilter(filter.id)}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base min-h-[44px] ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary hover:text-text-primary border border-border-primary'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-xs opacity-75">({filter.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Grid de Proyectos - Móvil First */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 md:mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border border-border-primary rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/30">
                    
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay con información */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center justify-between text-white text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {project.year}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star size={14} className="text-yellow-400" />
                              Destacado
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 md:p-6">
                      {/* Header */}
                      <div className="mb-3">
                        <h3 className="text-lg md:text-xl font-fraunces font-semibold text-text-primary mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-text-tertiary text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies - Solo las primeras 3 */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-surface-tertiary text-text-tertiary text-xs rounded-lg">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {project.link && project.link !== '#' && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg hover:bg-primary/20 transition-colors duration-300"
                            >
                              <Globe size={14} />
                              <span className="hidden sm:inline">Ver</span>
                            </a>
                          )}
                          {project.github && project.github !== '#' && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-2 bg-surface-tertiary text-text-secondary text-sm rounded-lg hover:bg-surface-accent transition-colors duration-300"
                            >
                              <Github size={14} />
                              <span className="hidden sm:inline">Código</span>
                            </a>
                          )}
                        </div>
                        
                        {/* Category Badge */}
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.category === 'web' ? 'bg-blue-500/20 text-blue-400' :
                          project.category === 'catalogo' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {project.category === 'web' ? 'Web' :
                           project.category === 'catalogo' ? 'Catálogo' : 'Multimedia'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action - Móvil First */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-fraunces font-semibold text-text-primary text-center">
                ¿Te gustó lo que viste?
              </h3>
            </div>
            <p className="text-text-secondary text-sm md:text-base mb-4 max-w-2xl mx-auto leading-relaxed">
              Permíteme crear algo similar para tu proyecto. Cada trabajo es único y se adapta 
              a las necesidades específicas de cada cliente
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Conversar sobre mi proyecto</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Datos de proyectos
const projects = [
  {
    id: 1,
    title: 'Notaría 80 GDL',
    category: 'web',
    description: 'Diseño y desarrollo completo del sitio web corporativo para Notaría 80 de Guadalajara con implementación de diseño moderno enfocado en confianza y profesionalismo.',
    image: '/assets/captura notaria80.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Diseño Responsivo'],
    features: ['Diseño corporativo', 'Información de servicios', 'Diseño responsivo', 'Enfoque en confianza'],
    link: 'https://www.notaria80gdl.mx/',
    github: '#',
    year: '2024'
  },
  {
    id: 2,
    title: 'Pietrafina MX',
    category: 'web',
    description: 'Diseño, desarrollo y mantenimiento continuo del sitio web corporativo con implementación de funcionalidades avanzadas y optimización SEO.',
    image: '/assets/captura pietrafina.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
    features: ['Sitio corporativo', 'Funcionalidades avanzadas', 'Optimización SEO', 'Mantenimiento continuo'],
    link: 'https://www.pietrafina.mx/',
    github: '#',
    year: '2024'
  },
  {
    id: 3,
    title: 'CRM de Prospección - Pietrafina',
    category: 'web',
    description: 'Sistema de gestión de clientes desarrollado para Pietrafina MX con funcionalidades para seguimiento de prospectos, gestión de ventas e integración con WhatsApp.',
    image: '/assets/crm captura.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'WhatsApp API'],
    features: ['Gestión de prospectos', 'Seguimiento de ventas', 'Integración WhatsApp', 'Dashboard funcional'],
    link: '#',
    github: '#',
    year: '2024'
  },
  {
    id: 4,
    title: 'Sabor y Salud YouTube',
    category: 'multimedia',
    description: 'Editor y productor del programa de YouTube "Sabor y Salud", auspiciado por Pietrafina MX. Producción de contenido digital, edición de video y estrategia de marketing.',
    image: '/assets/miniatura youtube.png',
    technologies: ['YouTube', 'Edición de Video', 'Marketing Digital', 'Producción'],
    features: ['Producción de contenido', 'Edición de video', 'Estrategia marketing', 'Canal corporativo'],
    link: 'https://www.youtube.com/@pietrafinamx',
    github: '#',
    year: '2024'
  },
  {
    id: 5,
    title: 'Catálogo Online - JULDRA UNIFORMES',
    category: 'catalogo',
    description: 'Catálogo digital interactivo para JULDRA UNIFORMES con diseño profesional, navegación intuitiva, galería de productos y sistema de contacto integrado.',
    image: '/assets/mapa.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Diseño Responsivo', 'UX/UI'],
    features: ['Navegación intuitiva', 'Galería de productos', 'Sistema de contacto', 'Diseño responsivo'],
    link: 'https://mvgn91.github.io/JULDRA-CATALOGO-VIRTUAL/',
    github: '#',
    year: '2024'
  }
];

export default Proyectos;
