import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundLines from '../components/BackgroundLines';

const ZonaTrabajo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('desarrollo');

  const tabs = [
    { id: 'desarrollo', label: 'Desarrollo Web', icon: '💻' },
    { id: 'diseno', label: 'Diseño UX/UI', icon: '🎨' },
    { id: 'marketing', label: 'Marketing Digital', icon: '📱' },
    { id: 'soporte', label: 'Soporte Técnico', icon: '🔧' }
  ];

  const workProcesses = {
    desarrollo: [
      {
        step: '01',
        title: 'Análisis y Planificación',
        description: 'Evaluamos tus necesidades y creamos una estrategia técnica detallada',
        details: ['Reunión de descubrimiento', 'Análisis de requisitos', 'Arquitectura técnica', 'Cronograma del proyecto']
      },
      {
        step: '02',
        title: 'Diseño y Prototipado',
        description: 'Creamos wireframes y prototipos interactivos para validar la experiencia',
        details: ['Wireframes de baja fidelidad', 'Prototipos interactivos', 'Validación de UX', 'Iteraciones de diseño']
      },
      {
        step: '03',
        title: 'Desarrollo y Implementación',
        description: 'Construimos tu solución usando las mejores prácticas y tecnologías modernas',
        details: ['Desarrollo frontend', 'Integración backend', 'Testing y QA', 'Optimización de rendimiento']
      },
      {
        step: '04',
        title: 'Lanzamiento y Soporte',
        description: 'Desplegamos tu proyecto y proporcionamos soporte continuo',
        details: ['Despliegue en producción', 'Configuración de hosting', 'Capacitación del equipo', 'Soporte post-lanzamiento']
      }
    ],
    diseno: [
      {
        step: '01',
        title: 'Investigación de Usuarios',
        description: 'Analizamos a tu audiencia objetivo para crear experiencias centradas en el usuario',
        details: ['Personas y user journey', 'Análisis de competencia', 'Investigación de mercado', 'Entrevistas con usuarios']
      },
      {
        step: '02',
        title: 'Arquitectura de Información',
        description: 'Organizamos la estructura y navegación de tu plataforma digital',
        details: ['Mapa del sitio', 'Flujos de usuario', 'Taxonomía de contenido', 'Estructura de navegación']
      },
      {
        step: '03',
        title: 'Diseño Visual y Prototipado',
        description: 'Creamos la identidad visual y prototipos interactivos',
        details: ['Sistema de diseño', 'Paleta de colores', 'Tipografía', 'Prototipos de alta fidelidad']
      },
      {
        step: '04',
        title: 'Testing y Refinamiento',
        description: 'Validamos el diseño con usuarios reales y refinamos la experiencia',
        details: ['Testing de usabilidad', 'Análisis de métricas', 'Iteraciones de diseño', 'Documentación final']
      }
    ],
    marketing: [
      {
        step: '01',
        title: 'Análisis de Mercado',
        description: 'Investigamos tu industria y competencia para identificar oportunidades',
        details: ['Análisis de competencia', 'Investigación de mercado', 'Análisis de audiencia', 'Identificación de oportunidades']
      },
      {
        step: '02',
        title: 'Estrategia de Marketing',
        description: 'Desarrollamos un plan integral para alcanzar tus objetivos de negocio',
        details: ['Definición de objetivos', 'Estrategia de canales', 'Plan de contenido', 'Cronograma de campañas']
      },
      {
        step: '03',
        title: 'Implementación y Ejecución',
        description: 'Ejecutamos las campañas y estrategias definidas',
        details: ['Creación de contenido', 'Gestión de redes sociales', 'Campañas publicitarias', 'Email marketing']
      },
      {
        step: '04',
        title: 'Análisis y Optimización',
        description: 'Monitoreamos resultados y optimizamos continuamente las estrategias',
        details: ['Análisis de métricas', 'Reportes de rendimiento', 'A/B testing', 'Optimización continua']
      }
    ],
    soporte: [
      {
        step: '01',
        title: 'Diagnóstico Inicial',
        description: 'Evaluamos el estado actual de tus sistemas y identificamos problemas',
        details: ['Análisis de sistemas', 'Identificación de problemas', 'Evaluación de rendimiento', 'Recomendaciones iniciales']
      },
      {
        step: '02',
        title: 'Implementación de Soluciones',
        description: 'Aplicamos las soluciones técnicas necesarias para resolver los problemas',
        details: ['Instalación de software', 'Configuración de sistemas', 'Optimización de rendimiento', 'Resolución de problemas']
      },
      {
        step: '03',
        title: 'Capacitación del Equipo',
        description: 'Entrenamos a tu equipo en el uso y mantenimiento de los sistemas',
        details: ['Sesiones de capacitación', 'Documentación técnica', 'Procedimientos de mantenimiento', 'Soporte inicial']
      },
      {
        step: '04',
        title: 'Soporte Continuo',
        description: 'Proporcionamos soporte técnico continuo y mantenimiento preventivo',
        details: ['Monitoreo de sistemas', 'Mantenimiento preventivo', 'Soporte técnico', 'Actualizaciones de seguridad']
      }
    ]
  };

  return (
    <section id="zona-trabajo" className="section-padding bg-surface-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-white leading-tight mb-4 sm:mb-6">
            Mi <span className="text-gradient">Zona de Trabajo</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Descubre cómo trabajo y los procesos que sigo para entregar resultados excepcionales
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-surface/50 text-white/70 hover:bg-surface/70 hover:text-white border border-white/10'
              }`}
            >
              <span className="text-lg sm:text-xl">{tab.icon}</span>
              <span className="text-sm sm:text-base">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 sm:mb-20"
          >
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {workProcesses[activeTab as keyof typeof workProcesses].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-surface/50 to-surface-dark/50 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 h-full">
                    {/* Step Number */}
                    <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                        {process.step}
                      </div>
                      <h3 className="text-lg sm:text-xl font-fraunces font-semibold text-white">
                        {process.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                      {process.description}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-2 sm:space-y-3">
                      {process.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (detailIndex * 0.05) }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-white/70 text-xs sm:text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-fraunces font-semibold text-white mb-3 sm:mb-4">
                ¿Te gusta mi forma de trabajar?
              </h3>
              <p className="text-white/80 mb-6 sm:mb-8 text-base sm:text-lg px-2">
                Cada proyecto es único y merece la misma atención al detalle y profesionalismo. 
                Trabajemos juntos para crear algo extraordinario.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contacto');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary group flex items-center justify-center"
                >
                  Iniciar Proyecto
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('proyectos');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-secondary group flex items-center justify-center"
                >
                  Ver Proyectos
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    →
                  </motion.span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Lines */}
      <BackgroundLines className="opacity-30" />
    </section>
  );
};

export default ZonaTrabajo;
