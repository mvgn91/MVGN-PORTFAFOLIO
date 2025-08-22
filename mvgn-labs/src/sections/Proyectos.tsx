import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import BackgroundLines from '../components/BackgroundLines';

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
    <section className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-40 -right-40 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-primary/5 rounded-full blur-3xl"
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
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Una selección de mis mejores trabajos que demuestran mi capacidad para crear soluciones 
            creativas y funcionales que generan resultados reales
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-4"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base min-h-[44px] ${
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

        {/* Grid de Proyectos - 2 columnas en desktop, 1 en móvil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 sm:mb-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 border border-primary/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center">
                <ArrowRight className="icon-lg sm:icon-xl text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-fraunces font-semibold text-text-primary text-center">
                ¿Te gustó lo que viste?
              </h3>
            </div>
            <p className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Permíteme crear algo similar para tu proyecto. Cada trabajo es único y se adapta 
              perfectamente a las necesidades específicas de cada cliente
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary btn-lg sm:btn-xl group w-full sm:w-auto min-h-[44px]"
              >
                <span className="hidden sm:inline">Solicitar Proyecto</span>
                <span className="sm:hidden">Solicitar</span>
                <ArrowRight className="icon group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('servicios');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary btn-lg sm:btn-xl group w-full sm:w-auto min-h-[44px]"
              >
                <span className="hidden sm:inline">Ver Servicios</span>
                <span className="sm:hidden">Servicios</span>
                <ArrowRight className="icon group-hover:translate-x-1 transition-transform" />
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
