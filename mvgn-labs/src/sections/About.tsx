import React from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '../components/SectionLayout';

const About: React.FC = () => {
  return (
    <SectionLayout
      id="sobre-mi"
      title="Sobre Mí"
      subtitle="Un profesional técnico y creativo apasionado por transformar ideas en soluciones tecnológicas"
      background="default"
      padding="medium"
    >
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

      {/* Main Content Grid */}
      <div className="section-grid section-grid-2 items-start">
        {/* Left Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
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
              
              {/* Marco simple con solo bordes sutiles */}
              <div className="absolute inset-0 rounded-3xl">
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-lg"
        >
          {/* Description */}
          <div className="space-y-md">
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
              <span className="text-primary font-medium">Servicios adicionales:</span> También realizo conexiones 
              de fibra óptica, instalación de cámaras de seguridad y mantenimiento de equipos informáticos.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-md">
            <h3 className="text-xl sm:text-2xl font-fraunces font-semibold text-white">
              Habilidades Principales
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                'Desarrollo Web',
                'Diseño Digital',
                'Marketing Digital',
                'Ventas B2B',
                'Instalación Fibra',
                'Mantenimiento IT'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface-light/50 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 text-center hover-lift"
                >
                  <span className="text-sm sm:text-base text-white/80 font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-md"
          >
            <button
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn btn-primary group"
            >
              Contáctame
              <svg className="icon group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default About;
