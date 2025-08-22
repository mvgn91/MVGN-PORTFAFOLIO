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
    { id: 'web', label: 'Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'branding', label: 'Branding', count: projects.filter(p => p.category === 'branding').length },
    { id: 'catalogo', label: 'Catálogos', count: projects.filter(p => p.category === 'catalogo').length }
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
          className="absolute bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-text-primary mb-8 leading-tight">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Una selección de mis mejores trabajos que demuestran mi capacidad para crear soluciones 
            creativas y funcionales que generan resultados reales
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
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

        {/* Grid de Proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid-system grid-3"
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
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 border border-primary/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center">
                <ArrowRight className="icon-xl text-white" />
              </div>
              <h3 className="text-3xl font-fraunces font-semibold text-text-primary">
                ¿Te gustó lo que viste?
              </h3>
            </div>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Permíteme crear algo similar para tu proyecto. Cada trabajo es único y se adapta 
              perfectamente a las necesidades específicas de cada cliente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary btn-xl group"
              >
                Solicitar Proyecto
                <ArrowRight className="icon group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('servicios');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary btn-xl group"
              >
                Ver Servicios
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
    title: 'CRM PietraFina',
    category: 'web',
    description: 'Sistema de gestión de clientes completo con dashboard, gestión de prospectos, seguimiento de ventas y reportes analíticos.',
    image: '/assets/crm captura.png',
    technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    features: ['Dashboard interactivo', 'Gestión de prospectos', 'Seguimiento de ventas', 'Reportes analíticos'],
    link: '#',
    github: '#',
    year: '2024'
  },
  {
    id: 2,
    title: 'Notaria 80',
    category: 'web',
    description: 'Sitio web corporativo para notaría con diseño elegante, información de servicios y formularios de contacto integrados.',
    image: '/assets/captura notaria80.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: ['Diseño corporativo', 'Información de servicios', 'Formularios de contacto', 'Diseño responsivo'],
    link: '#',
    github: '#',
    year: '2024'
  },
  {
    id: 3,
    title: 'PietraFina Branding',
    category: 'branding',
    description: 'Identidad visual completa incluyendo logo, paleta de colores, tipografías y aplicaciones en diferentes medios.',
    image: '/assets/captura pietrafina.png',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Guidelines', 'Color Theory'],
    features: ['Logo principal', 'Paleta de colores', 'Tipografías', 'Aplicaciones'],
    link: '#',
    github: '#',
    year: '2024'
  },
  {
    id: 4,
    title: 'Catálogo Digital',
    category: 'catalogo',
    description: 'Catálogo interactivo en PDF con navegación intuitiva, imágenes de alta calidad y información detallada de productos.',
    image: '/assets/mapa.png',
    technologies: ['Adobe InDesign', 'Adobe Photoshop', 'PDF Interactivo', 'Diseño Editorial'],
    features: ['Navegación intuitiva', 'Imágenes HD', 'Información detallada', 'Formato profesional'],
    link: '#',
    github: '#',
    year: '2024'
  }
];

export default Proyectos;
