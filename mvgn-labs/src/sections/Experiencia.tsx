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
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-40 w-80 h-80 bg-red-100/30 rounded-full blur-3xl"
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

      <div className="max-w-7xl relative z-10 mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-gray-900 mb-8 leading-tight">
            Mi <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Experiencia</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-200 hover:border-gray-300">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-fraunces font-bold text-red-600 mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2 text-base lg:text-lg">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
            <h3 className="text-3xl font-fraunces font-semibold text-gray-900 mb-6">
              Experiencia Laboral
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto px-4">
              Mi trayectoria profesional en el mundo de la tecnología y el diseño digital
            </p>
          </div>

          {/* Navegación de Experiencias */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveExperience(index)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 min-h-[48px] ${
                  activeExperience === index
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/25'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{exp.title}</div>
                  <div className="text-xs opacity-75">{exp.company}</div>
                </div>
              </motion.button>
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
              className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 max-w-6xl mx-auto shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Información Principal */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl lg:text-2xl font-fraunces font-semibold text-gray-900 mb-2">
                        {experiences[activeExperience].title}
                      </h4>
                      <p className="text-lg text-red-600 font-medium">
                        {experiences[activeExperience].company}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-5 h-5 text-red-500" />
                        <span className="text-base">{experiences[activeExperience].period}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-red-500" />
                        <span className="text-base">{experiences[activeExperience].location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-base">
                    {experiences[activeExperience].description}
                  </p>
                  
                  {/* Tecnologías */}
                  <div>
                    <h5 className="text-gray-900 font-semibold mb-3 text-base">Tecnologías:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeExperience].technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Logros */}
                <div className="space-y-6">
                  <h5 className="text-gray-900 font-semibold text-lg">Logros Principales:</h5>
                  <div className="space-y-4">
                    {experiences[activeExperience].achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-base leading-relaxed">
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
          <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-fraunces font-semibold text-gray-900">
                ¿Listo para impulsar tu proyecto?
              </h3>
            </div>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Con mi experiencia y pasión por la excelencia, puedo ayudarte a alcanzar 
              tus objetivos
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 min-h-[56px]"
              >
                Iniciar conversación
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiencia;