import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import BackgroundLines from '../components/BackgroundLines';

const Proyectos: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      title: 'Notaría 80 GDL',
      description: 'Diseño y desarrollo completo del sitio web corporativo para Notaría 80 de Guadalajara. Implementación de diseño moderno con enfoque en la confianza y profesionalismo.',
      image: '/assets/captura notaria80.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Diseño Responsivo'],
      url: 'https://www.notaria80gdl.mx/',
      featured: true,
      category: 'web'
    },
    {
      title: 'Pietrafina MX',
      description: 'Diseño, desarrollo y mantenimiento continuo del sitio web corporativo. Implementación de funcionalidades avanzadas y optimización SEO.',
      image: '/assets/captura pietrafina.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
      url: 'https://www.pietrafina.mx/',
      featured: true,
      category: 'web'
    },
    {
      title: 'Sabor y Salud YouTube',
      description: 'Editor y productor del programa de YouTube "Sabor y Salud", auspiciado por Pietrafina MX. Producción de contenido digital, edición de video y estrategia de marketing.',
      image: '/assets/miniatura youtube.png',
      technologies: ['YouTube', 'Edición de Video', 'Marketing Digital', 'Producción'],
      url: 'https://www.youtube.com/@pietrafinamx',
      featured: true,
      category: 'marketing'
    },
    {
      title: 'CRM de Prospección - Pietrafina',
      description: 'Sistema de gestión de clientes desarrollado para Pietrafina MX. Aplicación funcional para seguimiento de prospectos, gestión de ventas e integración con WhatsApp.',
      image: '/assets/crm captura.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'WhatsApp API'],
      featured: false,
      category: 'app'
    },
    {
      title: 'Catálogo Online - JULDRA UNIFORMES',
      description: 'Catálogo digital interactivo para JULDRA UNIFORMES. Diseño profesional con navegación intuitiva, galería de productos y sistema de contacto integrado.',
      image: '/assets/captura pietrafina.png', // Usando imagen de referencia por ahora
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Diseño Responsivo', 'UX/UI'],
      url: 'https://mvgn91.github.io/JULDRA-CATALOGO-VIRTUAL/',
      featured: false,
      category: 'web'
    }
  ];

  const filters = [
    { key: 'todos', label: 'Todos' },
    { key: 'web', label: 'Sitios Web' },
    { key: 'app', label: 'Aplicaciones' },
    { key: 'marketing', label: 'Marketing Digital' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="proyectos" className="section-padding bg-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Líneas geométricas de fondo */}
      <BackgroundLines className="opacity-20" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-white mb-4 sm:mb-6 leading-tight">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto px-2">
            Una muestra de mi trabajo y las soluciones que he creado para diferentes clientes
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === filter.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-surface-dark/50 text-white/70 hover:bg-surface-dark/80 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  url={project.url}
                  featured={project.featured}
                  category={project.category}
                />
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
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-fraunces font-semibold text-white mb-3 sm:mb-4">
              ¿Te gustó mi trabajo?
            </h3>
            <p className="text-white/80 mb-4 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Cada proyecto es una oportunidad para crear algo único y funcional. 
              ¿Tienes una idea que te gustaría que desarrolle?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary group flex items-center justify-center"
            >
              Conversemos sobre tu Proyecto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Proyectos;
