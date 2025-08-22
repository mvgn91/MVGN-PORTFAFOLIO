import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundLines from '../components/BackgroundLines';

const ZonaTrabajo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('zona');

  const tabs = [
    { id: 'zona', label: 'Zona de Trabajo', icon: '📍' },
    { id: 'servicios', label: 'Servicios Locales', icon: '🏢' },
    { id: 'disponibilidad', label: 'Disponibilidad', icon: '⏰' },
    { id: 'contacto', label: 'Contacto Directo', icon: '📞' }
  ];

  const workProcesses = {
    zona: [
      {
        step: '01',
        title: 'Zona Metropolitana de Guadalajara',
        description: 'Especialmente en el sur de la ZMG, donde tengo mayor presencia y conocimiento del mercado local',
        details: ['Sur de Guadalajara', 'Zona Metropolitana', 'Presencia local', 'Conocimiento del mercado']
      },
      {
        step: '02',
        title: 'Servicios Presenciales',
        description: 'Para instalaciones, reparaciones y consultoría técnica que requieren presencia física',
        details: ['Instalación de fibra óptica', 'Reparación de equipos', 'Configuración de cámaras', 'Consultoría técnica']
      },
      {
        step: '03',
        title: 'Servicios Remotos',
        description: 'Desarrollo web, diseño y soporte técnico que se pueden realizar desde cualquier ubicación',
        details: ['Desarrollo de sitios web', 'Diseño de catálogos', 'Soporte técnico remoto', 'Consultoría online']
      },
      {
        step: '04',
        title: 'Flexibilidad de Horarios',
        description: 'Adaptación a las necesidades de cada cliente y proyecto',
        details: ['Horarios flexibles', 'Atención personalizada', 'Respuesta rápida', 'Soporte continuo']
      }
    ],
    servicios: [
      {
        step: '01',
        title: 'Desarrollo Web Local',
        description: 'Sitios web para empresas de la zona con enfoque en el mercado local',
        details: ['Sitios corporativos', 'Landing pages', 'E-commerce básico', 'SEO local']
      },
      {
        step: '02',
        title: 'Soporte Técnico',
        description: 'Servicios de reparación y mantenimiento para empresas y particulares',
        details: ['Reparación de PC', 'Instalación de software', 'Configuración de redes', 'Mantenimiento preventivo']
      },
      {
        step: '03',
        title: 'Instalaciones Especializadas',
        description: 'Servicios de instalación para infraestructura tecnológica',
        details: ['Conexiones de fibra óptica', 'Cámaras de seguridad', 'Sistemas de red', 'Equipos informáticos']
      },
      {
        step: '04',
        title: 'Consultoría Digital',
        description: 'Asesoría en tecnología y marketing digital para negocios locales',
        details: ['Estrategia digital', 'Presencia online', 'Marketing local', 'Optimización de procesos']
      }
    ],
    disponibilidad: [
      {
        step: '01',
        title: 'Horarios de Atención',
        description: 'Disponibilidad flexible para adaptarme a las necesidades de cada cliente',
        details: ['Lunes a Viernes', '9:00 AM - 6:00 PM', 'Sábados por cita', 'Emergencias 24/7']
      },
      {
        step: '02',
        title: 'Respuesta Rápida',
        description: 'Compromiso de responder consultas en las primeras 24 horas',
        details: ['Respuesta en 24h', 'Consulta gratuita', 'Presupuesto rápido', 'Inicio inmediato']
      },
      {
        step: '03',
        title: 'Soporte Continuo',
        description: 'Acompañamiento durante todo el proceso del proyecto',
        details: ['Seguimiento continuo', 'Actualizaciones regulares', 'Soporte post-entrega', 'Mantenimiento']
      },
      {
        step: '04',
        title: 'Flexibilidad Total',
        description: 'Adaptación a horarios y necesidades específicas del cliente',
        details: ['Horarios flexibles', 'Visitas a domicilio', 'Capacitación del equipo', 'Soporte remoto']
      }
    ],
    contacto: [
      {
        step: '01',
        title: 'Contacto Directo',
        description: 'Comunicación directa y personalizada para cada proyecto',
        details: ['WhatsApp: 33 2262 1939', 'Email: jazzfatale@gmail.com', 'Respuesta inmediata', 'Consulta gratuita']
      },
      {
        step: '02',
        title: 'Visita de Evaluación',
        description: 'Visita gratuita para evaluar necesidades y presupuesto',
        details: ['Evaluación gratuita', 'Presupuesto detallado', 'Plan de trabajo', 'Cronograma']
      },
      {
        step: '03',
        title: 'Seguimiento Personalizado',
        description: 'Acompañamiento personal durante todo el proyecto',
        details: ['Comunicación constante', 'Actualizaciones regulares', 'Ajustes en tiempo real', 'Satisfacción garantizada']
      },
      {
        step: '04',
        title: 'Post-Venta',
        description: 'Soporte continuo después de la entrega del proyecto',
        details: ['Mantenimiento', 'Actualizaciones', 'Soporte técnico', 'Consultoría continua']
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
            Especializado en el sur de la Zona Metropolitana de Guadalajara, ofrezco servicios presenciales y remotos con la flexibilidad que tu proyecto necesita
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

        {/* Background Lines */}
        <BackgroundLines className="opacity-30" />
      </div>
    </section>
  );
};

export default ZonaTrabajo;
