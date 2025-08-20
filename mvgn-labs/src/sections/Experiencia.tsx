import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Building2, 
  Target, 
  Code2, 
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';

const Experiencia: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      title: 'Freelancer - Consultor Tecnológico y Diseñador',
      company: 'MVGN Labs',
      period: 'Feb 2024 - Actual',
      location: 'Guadalajara, Jalisco',
      description: 'Servicios independientes de asesoría tecnológica, reparación de computadoras, desarrollo web y diseño digital. Trabajo con múltiples clientes ofreciendo soluciones personalizadas en tecnología y comunicación.',
      achievements: [
        'Desarrollo de sitios web corporativos y catálogos digitales',
        'Asesorías para uso óptimo de computadoras y tecnología',
        'Servicios de reparación y optimización de equipos',
        'Diseño de identidad visual y material publicitario',
        'Soporte técnico remoto y presencial'
      ],
      skills: ['React.js', 'Diseño Web', 'Reparación PC', 'Consultoría Tech', 'Adobe Creative', 'Soporte Remoto'],
      icon: Zap,
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      status: 'Activo'
    },
    {
      title: 'Consultor de Tecnologías y Marketing',
      company: 'Pietrafina',
      period: 'Feb 2024 - Actual',
      location: 'Guadalajara, Jalisco',
      description: 'Coordinación, desarrollo y gestión de contenido y publicidad para página web y redes sociales. Asesoría en uso de tecnologías, servicios de reparación y actualización de equipos electrónicos.',
      achievements: [
        'Desarrollo y mantenimiento del sitio web corporativo',
        'Gestión de contenido y publicidad digital',
        'Asesoría tecnológica integral para la empresa',
        'Producción de contenido para YouTube "Sabor y Salud"'
      ],
      skills: ['React.js', 'Marketing Digital', 'SEO', 'Diseño Web', 'Producción de Video'],
      icon: Target,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      status: 'Activo'
    },
    {
      title: 'Técnico Reparador Express y Ventas',
      company: 'CompuCenter7',
      period: '2022 - 2024',
      location: 'Guadalajara, Jalisco',
      description: 'Diagnóstico y reparación de computadoras, venta de consumibles y accesorios, diseño de publicidad y atención a clientes.',
      achievements: [
        'Diagnóstico y reparación de equipos informáticos',
        'Ventas y atención al cliente',
        'Diseño de material publicitario'
      ],
      skills: ['Reparación PC', 'Ventas', 'Diseño Gráfico', 'Atención al Cliente'],
      icon: Code2,
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      status: 'Completado'
    },
    {
      title: 'Auxiliar Administrativo y Rastreo GPS',
      company: 'Empresa de Importación',
      period: '2020 - 2022',
      location: 'Guadalajara, Jalisco',
      description: 'Revisión y clasificación de documentos, seguimiento de rutas, capacitación en tecnología para operadores de transporte.',
      achievements: [
        'Gestión administrativa y documental',
        'Seguimiento de operaciones logísticas',
        'Capacitación tecnológica'
      ],
      skills: ['Administración', 'Logística', 'Capacitación', 'GPS'],
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      status: 'Completado'
    }
  ];

  const stats = [
    { label: 'Años de Experiencia', value: '4+', icon: Calendar, color: 'text-primary' },
    { label: 'Proyectos Freelance', value: '20+', icon: Star, color: 'text-accent' },
    { label: 'Clientes Activos', value: '12+', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Servicios Ofrecidos', value: '8+', icon: Zap, color: 'text-blue-400' }
  ];

  return (
    <section id="experiencia" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-white mb-6 leading-tight">
            Experiencia <span className="text-gradient">Profesional</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Un recorrido de crecimiento y aprendizaje en tecnología, ventas y marketing digital
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-surface/50 hover:bg-surface/80 rounded-2xl p-6 border border-surface-dark/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-fraunces font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.title}
                onClick={() => setActiveExperience(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeExperience === index
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-surface-dark/50 text-white/70 hover:bg-surface-dark/80 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {exp.company}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Active Experience Display */}
        <motion.div
          key={activeExperience}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-surface/50 to-surface-dark/50 backdrop-blur-sm border border-surface-dark/30 rounded-3xl p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                                         <div className="flex items-center gap-3 mb-3">
                       <div className={`w-16 h-16 bg-gradient-to-br ${experiences[activeExperience].color} rounded-2xl flex items-center justify-center`}>
                         {React.createElement(experiences[activeExperience].icon, { className: "w-8 h-8 text-white" })}
                       </div>
                      <div>
                        <h3 className="text-2xl font-fraunces font-semibold text-white leading-tight">
                          {experiences[activeExperience].title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="text-white/70 font-medium">
                            {experiences[activeExperience].company}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{experiences[activeExperience].period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{experiences[activeExperience].location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`px-4 py-2 rounded-full text-xs font-medium ${
                    experiences[activeExperience].status === 'Activo'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {experiences[activeExperience].status}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed text-lg">
                  {experiences[activeExperience].description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-fraunces font-semibold text-white mb-3">
                    Habilidades Clave
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExperience].skills.map((skill, idx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Achievements */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
                  <h4 className="text-lg font-fraunces font-semibold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Logros Principales
                  </h4>
                  <div className="space-y-3">
                    {experiences[activeExperience].achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-fraunces font-semibold text-white mb-4">
              ¿Necesitas asesoría tecnológica o diseño?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Como freelancer activo, ofrezco servicios personalizados de consultoría tecnológica, 
              reparación de equipos, desarrollo web y diseño digital.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary group flex items-center justify-center"
            >
              Iniciar Colaboración
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiencia;