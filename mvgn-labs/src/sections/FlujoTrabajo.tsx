import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import BackgroundLines from '../components/BackgroundLines';

const FlujoTrabajo: React.FC = () => {
  const workflowSteps = [
    {
      icon: Search,
      title: 'Investigación y Análisis',
      description: 'Analizo tu negocio, competencia y objetivos para entender completamente tus necesidades.',
      details: [
        'Entrevista inicial para conocer tu visión',
        'Análisis de la competencia y mercado',
        'Definición de objetivos y KPIs',
        'Identificación de público objetivo'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'Estrategia y Planificación',
      description: 'Desarrollo una estrategia personalizada que alinee la tecnología con tus objetivos de negocio.',
      details: [
        'Definición de la estrategia digital',
        'Planificación de funcionalidades',
        'Arquitectura técnica del proyecto',
        'Cronograma y milestones'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Diseño y Prototipado',
      description: 'Creo diseños visuales atractivos y funcionales que reflejen tu identidad de marca.',
      details: [
        'Wireframes y mockups iniciales',
        'Diseño de interfaz de usuario (UI)',
        'Experiencia de usuario (UX)',
        'Prototipos interactivos'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Desarrollo e Implementación',
      description: 'Construyo la solución técnica utilizando las mejores prácticas y tecnologías modernas.',
      details: [
        'Desarrollo frontend responsivo',
        'Integración de funcionalidades',
        'Optimización de rendimiento',
        'Pruebas de funcionalidad'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TestTube,
      title: 'Pruebas y Optimización',
      description: 'Realizo pruebas exhaustivas para asegurar que todo funcione perfectamente.',
      details: [
        'Pruebas de usabilidad',
        'Optimización de rendimiento',
        'Pruebas de compatibilidad',
        'Ajustes y refinamientos'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Rocket,
      title: 'Lanzamiento y Entrega',
      description: 'Implemento la solución y te entrego un producto completamente funcional y optimizado.',
      details: [
        'Despliegue en servidor',
        'Configuración de dominio y hosting',
        'Capacitación del equipo',
        'Documentación del proyecto'
      ],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Comunicación Constante',
      description: 'Mantengo una comunicación regular durante todo el proceso para que estés siempre informado.'
    },
    {
      icon: CheckCircle,
      title: 'Iteraciones Rápidas',
      description: 'Trabajo en sprints cortos para que puedas ver el progreso y hacer ajustes en tiempo real.'
    },
    {
      icon: CheckCircle,
      title: 'Calidad Garantizada',
      description: 'Cada fase incluye revisiones y pruebas para asegurar la más alta calidad en el resultado final.'
    },
    {
      icon: CheckCircle,
      title: 'Soporte Post-Entrega',
      description: 'Te brindo soporte técnico y mantenimiento después del lanzamiento para garantizar el éxito continuo.'
    }
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-text-primary mb-6 sm:mb-8 leading-tight px-4">
            Mi <span className="text-gradient">Flujo de Trabajo</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Un proceso estructurado y probado que garantiza resultados excepcionales 
            desde la concepción hasta la implementación de tu proyecto
          </p>
        </motion.div>

        {/* Flujo de Trabajo - Grid de 6 pasos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border border-border-primary rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:shadow-xl">
                  {/* Número del paso */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <step.icon className="icon-lg text-white" />
                    </div>
                    <span className="text-2xl font-fraunces font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Contenido */}
                  <h3 className="text-xl font-fraunces font-semibold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4 text-sm">
                    {step.description}
                  </p>
                  
                  {/* Detalles */}
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-text-tertiary">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beneficios del Flujo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-fraunces font-semibold text-text-primary mb-4">
              ¿Por qué este flujo funciona?
            </h3>
            <p className="text-text-tertiary text-lg max-w-2xl mx-auto px-4">
              Metodología probada que garantiza proyectos exitosos y clientes satisfechos
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-surface-primary to-surface-secondary border border-border-primary rounded-2xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="icon-lg text-white" />
                </div>
                <div>
                  <h4 className="text-text-primary font-semibold text-lg mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action - Más sutil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 border border-primary/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center">
                <Rocket className="icon-lg text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-fraunces font-semibold text-text-primary">
                ¿Listo para comenzar tu proyecto?
              </h3>
            </div>
            <p className="text-text-secondary text-sm sm:text-base mb-4 max-w-2xl mx-auto leading-relaxed px-4">
              Apliquemos este flujo de trabajo a tu idea y transformémosla en realidad
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary btn-lg group min-h-[44px]"
              >
                Iniciar proyecto
                <ArrowRight className="icon group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlujoTrabajo;
