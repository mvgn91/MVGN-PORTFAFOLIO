import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';

// Datos de proyectos basados en info.md
const projects = [
  {
    id: 1,
    title: 'Notaría 80 GDL',
    description: 'Diseño y desarrollo completo del sitio web corporativo para Notaría 80 de Guadalajara',
    image: '/assets/captura notaria80.png',
    url: 'https://www.notaria80gdl.mx/',
    category: 'web',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Diseño Responsivo'],
    featured: true
  },
  {
    id: 2,
    title: 'Pietrafina MX',
    description: 'Diseño, desarrollo y mantenimiento continuo del sitio web corporativo',
    image: '/assets/captura pietrafina.png',
    url: 'https://www.pietrafina.mx/',
    category: 'web',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
    featured: true
  },
  {
    id: 3,
    title: 'Sabor y Salud YouTube',
    description: 'Editor y productor del programa de YouTube "Sabor y Salud", auspiciado por Pietrafina MX',
    image: '/assets/miniatura youtube.png',
    url: 'https://www.youtube.com/@pietrafinamx',
    category: 'multimedia',
    technologies: ['YouTube', 'Edición de Video', 'Marketing Digital', 'Producción'],
    featured: true
  },
  {
    id: 4,
    title: 'CRM de Prospección - Pietrafina',
    description: 'Sistema de gestión de clientes desarrollado para Pietrafina MX',
    image: '/assets/crm captura.png',
    category: 'web',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'WhatsApp API'],
    featured: false
  },
  {
    id: 5,
    title: 'Catálogo Online - JULDRA UNIFORMES',
    description: 'Catálogo digital interactivo para JULDRA UNIFORMES',
    image: '/assets/captura notaria80.png', // Placeholder
    url: 'https://mvgn91.github.io/JULDRA-CATALOGO-VIRTUAL/',
    category: 'catalogo',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Diseño Responsivo', 'UX/UI'],
    featured: false
  }
];

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
    <section className="section-padding bg-[var(--bg-primary)]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-40 -right-40 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-[var(--accent-primary)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="grid-12">
        {/* Header - Ocupa 12 columnas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="col-span-12 text-center mb-20"
        >
          <h2 className="text-5xl font-fraunces font-bold text-[var(--text-primary)] mb-6 leading-tight">
            Proyectos <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-[1.5]">
            Una selección de mis mejores trabajos que demuestran mi capacidad para crear soluciones 
            creativas y funcionales que generan resultados reales
          </p>
        </motion.div>

        {/* Filtros - Ocupa 12 columnas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-12 flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 text-base min-h-[48px] ${
                activeFilter === filter.id
                  ? 'bg-[var(--accent-primary)] text-[var(--text-primary)] shadow-lg shadow-[var(--accent-primary)]/25'
                  : 'glass text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-primary)]'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-sm opacity-75">({filter.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Proyectos - 3 columnas con gap 32px */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-span-12 mb-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-[var(--bg-secondary)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--border-primary)]"
                >
                  {/* Imagen del proyecto - 300x200px */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-[var(--accent-primary)] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star size={12} />
                        Destacado
                      </div>
                    )}
                  </div>

                  {/* Contenido del proyecto */}
                  <div className="p-6">
                    <h3 className="text-xl font-fraunces font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-[var(--text-tertiary)] text-sm leading-[1.6] mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-[var(--bg-surface)] text-[var(--text-tertiary)] text-xs rounded-md border border-[var(--border-primary)]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-[var(--bg-surface)] text-[var(--text-tertiary)] text-xs rounded-md border border-[var(--border-primary)]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Botones de acción */}
                    <div className="flex gap-3">
                      {project.url && (
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-[var(--accent-primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--accent-secondary)] transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Ver Proyecto
                        </motion.a>
                      )}
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 border border-[var(--border-primary)] text-[var(--text-secondary)] rounded-lg text-sm font-medium hover:bg-[var(--bg-surface)] transition-colors duration-300"
                      >
                        Detalles
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA Section - Ocupa 12 columnas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="col-span-12 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-fraunces font-semibold text-[var(--text-primary)] mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Conversemos sobre cómo puedo ayudarte a hacer realidad tu visión
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="cta-desktop"
            >
              Iniciar Conversación
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Proyectos;
