import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  CheckCircle,
  Briefcase,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';
import BackgroundLines from '../components/BackgroundLines';

const Experiencia: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const stats = [
    {
      icon: Briefcase,
      number: '2+',
      label: 'Años de Experiencia',
      description: 'En desarrollo web y diseño digital'
    },
    {
      icon: Users,
      number: '8+',
      label: 'Clientes Satisfechos',
      description: 'Proyectos exitosos entregados'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Proyectos Completados',
      description: 'Cumplimiento de objetivos'
    },
    {
      icon: TrendingUp,
      number: '100%',
      label: 'Tasa de Éxito',
      description: 'Proyectos entregados a tiempo'
    }
  ];

  const experiences = [
    {
      title: 'Consultor de Tecnologías y Marketing',
      company: 'Pietrafina',
      period: 'Feb 2024 - Actual',
      location: 'Guadalajara, México',
      description: 'Coordinación, desarrollo y gestión de contenido y publicidad para página web y redes sociales. Asesoría en uso de tecnologías, servicios de reparación y actualización de equipos electrónicos.',
      achievements: [
        'Desarrollo de proyectos freelance como catálogos digitales y sitios web',
        'Gestión de contenido web y publicidad en redes sociales',
        'Asesoría tecnológica y servicios de reparación',
        'Coordinación de estrategias de marketing digital'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Marketing Digital', 'SEO']
    },
    {
      title: 'Técnico Reparador Express y Ventas',
      company: 'CompuCenter7',
      period: '2022 - 2024',
      location: 'Guadalajara, México',
      description: 'Diagnóstico y reparación de computadoras, venta de consumibles y accesorios, diseño de publicidad y atención a clientes.',
      achievements: [
        'Diagnóstico y reparación de equipos informáticos',
        'Venta de consumibles y accesorios',
        'Diseño de publicidad para la empresa',
        'Atención directa al cliente'
      ],
      technologies: ['Reparación PC', 'Hardware', 'Software', 'Ventas', 'Diseño']
    },
    {
      title: 'Auxiliar Administrativo y Rastreo GPS',
      company: 'Empresa de Importación',
      period: '2020 - 2022',
      location: 'Guadalajara, México',
      description: 'Revisión y clasificación de documentos, seguimiento de rutas, capacitación en tecnología para operadores de transporte.',
      achievements: [
        'Revisión y clasificación de documentos',
        'Seguimiento de rutas GPS',
        'Capacitación tecnológica para operadores',
        'Gestión administrativa'
      ],
      technologies: ['GPS', 'Administración', 'Capacitación', 'Logística']
    }
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-text-primary mb-8 leading-tight">
            Mi <span className="text-gradient">Experiencia</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Una trayectoria profesional marcada por la innovación, la calidad y el compromiso 
            con los resultados de mis clientes
          </p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid-system grid-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border border-border-primary rounded-3xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-primary/30">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <stat.icon className="icon-2xl text-white" />
                  </div>
                  <div className="text-4xl font-fraunces font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-text-primary font-semibold mb-2 text-lg">
                    {stat.label}
                  </h3>
                  <p className="text-text-tertiary text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experiencia Laboral */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-fraunces font-semibold text-text-primary mb-6">
              Experiencia Laboral
            </h3>
            <p className="text-text-tertiary text-lg max-w-2xl mx-auto px-4">
              Mi trayectoria profesional en el mundo de la tecnología y el diseño digital
            </p>
          </div>

          {/* Navegación de Experiencias */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveExperience(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeExperience === index
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary hover:text-text-primary border border-border-primary'
                }`}
              >
                {exp.title}
              </button>
            ))}
          </div>

          {/* Experiencia Activa */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExperience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-md border border-border-primary rounded-3xl p-8 max-w-5xl mx-auto"
            >
              <div className="grid-system grid-2 gap-8">
                {/* Información Principal */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-fraunces font-semibold text-text-primary">
                      {experiences[activeExperience].title}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Calendar className="icon-sm text-primary-light" />
                        <span className="text-sm">{experiences[activeExperience].period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <MapPin className="icon-sm text-secondary" />
                        <span className="text-sm">{experiences[activeExperience].location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {experiences[activeExperience].description}
                  </p>
                  
                  {/* Tecnologías */}
                  <div>
                    <h5 className="text-text-primary font-semibold mb-3 text-base">Tecnologías:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeExperience].technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Logros */}
                <div className="space-y-6">
                  <h5 className="text-text-primary font-semibold text-lg">Logros Principales:</h5>
                  <div className="space-y-3">
                    {experiences[activeExperience].achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-secondary text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
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
                <TrendingUp className="icon-xl text-white" />
              </div>
              <h3 className="text-3xl font-fraunces font-semibold text-text-primary">
                ¿Listo para impulsar tu proyecto?
              </h3>
            </div>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Con mi experiencia y pasión por la excelencia, puedo ayudarte a alcanzar 
              tus objetivos y superar tus expectativas
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary btn-xl group"
              >
                Iniciar Proyecto
                <ArrowRight className="icon group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiencia;