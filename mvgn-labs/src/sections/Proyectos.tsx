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
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-40 -right-40 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-red-100/30 rounded-full blur-3xl"
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
            Proyectos <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Una selección de mis mejores trabajos que demuestran mi capacidad para crear soluciones 
            creativas y funcionales que generan resultados reales
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFilter(filter.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 text-base min-h-[48px] ${
                activeFilter === filter.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/25'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-sm opacity-75">({filter.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 lg:mb-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-200 hover:border-gray-300">
                    
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay con información */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center justify-between text-white text-sm">
                            <span className="flex items-center gap-2">
                              <Calendar size={16} />
                              {project.year}
                            </span>
                            <span className="flex items-center gap-2">
                              <Star size={16} className="text-yellow-400" />
                              Destacado
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-fraunces font-semibold text-gray-900 mb-3 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-2 bg-red-50 text-red-600 text-sm rounded-xl border border-red-200 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-3 py-2 bg-gray-100 text-gray-600 text-sm rounded-xl font-medium">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                          {project.link && project.link !== '#' && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 text-sm rounded-xl hover:bg-red-100 transition-colors duration-300 border border-red-200"
                            >
                              <Globe size={16} />
                              <span>Ver</span>
                            </motion.a>
                          )}
                          {project.github && project.github !== '#' && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-xl hover:bg-gray-200 transition-colors duration-300 border border-gray-200"
                            >
                              <Github size={16} />
                              <span>Código</span>
                            </motion.a>
                          )}
                        </div>
                        
                        {/* Category Badge */}
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                          project.category === 'web' ? 'bg-blue-100 text-blue-600 border border-blue-200' :
                          project.category === 'catalogo' ? 'bg-purple-100 text-purple-600 border border-purple-200' :
                          'bg-green-100 text-green-600 border border-green-200'
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-fraunces font-semibold text-gray-900 text-center">
                ¿Te gustó lo que viste?
              </h3>
            </div>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Permíteme crear algo similar para tu proyecto. Cada trabajo es único y se adapta 
              a las necesidades específicas de cada cliente
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
                <span>Conversar sobre mi proyecto</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
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
