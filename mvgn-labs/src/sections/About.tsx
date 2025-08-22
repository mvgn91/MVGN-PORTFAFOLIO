import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
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
              de fibra óptica, instalación de cámaras de seguridad y mantenimiento de equipos informáticos.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-fraunces font-semibold text-white">
              Habilidades Principales
            </h3>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Technical Skills */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-primary">Técnicas</h4>
                <ul className="space-y-2 text-sm sm:text-base text-white/80">
                  <li>• Desarrollo Web Frontend</li>
                  <li>• Diseño UI/UX</li>
                  <li>• Marketing Digital</li>
                  <li>• SEO y Analytics</li>
                </ul>
              </div>
              
              {/* Business Skills */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-accent">Negocio</h4>
                <ul className="space-y-2 text-sm sm:text-base text-white/80">
                  <li>• Ventas y Consultoría</li>
                  <li>• Estrategia Digital</li>
                  <li>• Gestión de Proyectos</li>
                  <li>• Atención al Cliente</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contáctame
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
