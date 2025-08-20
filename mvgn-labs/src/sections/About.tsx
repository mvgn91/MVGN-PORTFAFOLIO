import React from 'react';
import { motion } from 'framer-motion';
import BackgroundLines from '../components/BackgroundLines';


const About: React.FC = () => {
  const skills = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML5/CSS3', category: 'Frontend' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Diseño UX/UI', category: 'Diseño' },
    { name: 'SEO', category: 'Marketing' },
    { name: 'Marketing Digital', category: 'Marketing' },
    { name: 'Adobe Creative Suite', category: 'Diseño' }
  ];

  const skillCategories = ['Frontend', 'Backend', 'Diseño', 'Marketing'];

  return (
    <section id="sobre-mi" className="section-padding bg-surface relative overflow-hidden">
      {/* Background Elements - Sutil */}
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
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Un profesional técnico y creativo apasionado por transformar ideas en soluciones tecnológicas
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start mb-16 sm:mb-20">
          {/* Left Column - Profile Image - Marco Simple */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Marco principal simple */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Marco principal con glassmorphism simple */}
                <div className="relative w-full h-full bg-gradient-to-br from-surface/90 to-surface-dark/90 backdrop-blur-md rounded-3xl p-3 sm:p-4 border border-white/20 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/assets/profile.jpg"
                      alt="Armando Ibañez"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Marco simple con solo bordes sutiles - SIN EFECTOS ENCIMA */}
                <div className="absolute inset-0 rounded-3xl">
                  {/* Solo bordes sutiles */}
                  <div className="absolute inset-0 rounded-3xl border border-primary/30" />
                  <div className="absolute inset-2 rounded-3xl border border-accent/20" />
                  <div className="absolute inset-4 rounded-3xl border border-secondary/20" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Description */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                Soy un profesional <span className="text-primary font-semibold">técnico y creativo</span> con experiencia 
                en tecnología, ventas y marketing digital. Mi pasión es transformar ideas en soluciones tecnológicas 
                que generan resultados reales para mis clientes.
              </p>
              
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                Con una base sólida en desarrollo web y diseño digital, he desarrollado proyectos que van desde 
                sitios web corporativos hasta aplicaciones funcionales. Mi enfoque combina la innovación tecnológica 
                con la comprensión profunda de las necesidades del negocio.
              </p>
              
              <p className="text-white/70 text-sm sm:text-base">
                <span className="text-accent font-medium">Servicios adicionales:</span> También realizo conexiones 
                remotas seguras e instalación de software, siempre con enfoque en optimización y soporte confiable 
                para garantizar el máximo rendimiento de los sistemas.
              </p>
            </div>

            {/* Skills Section - Rediseñado */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-fraunces font-semibold text-white">
                Habilidades Principales
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {skillCategories.map((category) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: skillCategories.indexOf(category) * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-r from-surface/50 to-surface-dark/50 border border-white/10 rounded-xl p-3 sm:p-4 hover:border-primary/30 transition-all duration-300">
                      <h4 className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wide mb-2 sm:mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {skills
                          .filter(skill => skill.category === category)
                          .map((skill, index) => (
                            <motion.span
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-medium hover:bg-primary/20 transition-colors"
                            >
                              {skill.name}
                            </motion.span>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action - Rediseñado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-3xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
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
                ¿Listo para crear algo extraordinario?
              </h3>
              <p className="text-white/80 mb-6 sm:mb-8 text-base sm:text-lg px-2">
                Cada proyecto es una oportunidad para innovar y crear soluciones únicas. 
                Trabajemos juntos para transformar tus ideas en realidad.
              </p>
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
            </div>
          </div>
        </motion.div>
      </div>

      {/* Líneas geométricas de fondo */}
      <BackgroundLines className="opacity-40" />
    </section>
  );
};

export default About;
