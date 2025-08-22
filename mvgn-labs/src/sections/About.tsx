import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-primary/5 rounded-full blur-2xl"
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

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-text-primary mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Un profesional técnico y creativo apasionado por transformar ideas en soluciones tecnológicas
          </p>
        </motion.div>

        {/* Main Content - Móvil First Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Profile Image (Móvil First) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <div className="relative w-full h-full bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-md rounded-3xl p-3 border border-border-primary shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/assets/profile.jpg"
                      alt="Armando Ibañez - MVGN Labs"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Award size={16} className="text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-light rounded-full border-2 border-bg-primary"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content (Móvil First) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            {/* Description */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                Soy un profesional <span className="text-primary font-semibold">técnico y creativo</span> con experiencia 
                en tecnología, ventas y marketing digital. Mi pasión es transformar ideas en soluciones tecnológicas 
                que generan resultados reales para mis clientes.
              </p>
              
              <p className="text-sm md:text-base text-text-tertiary leading-relaxed">
                Con una base sólida en desarrollo web y diseño digital, he desarrollado proyectos que van desde 
                sitios web corporativos hasta aplicaciones funcionales. Mi enfoque combina la innovación tecnológica 
                con la comprensión profunda de las necesidades del negocio.
              </p>
            </div>

            {/* Quick Info - Solo en móvil */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              <div className="bg-surface-secondary/50 backdrop-blur-sm border border-border-primary rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-xs text-text-tertiary">Proyectos</div>
              </div>
              <div className="bg-surface-secondary/50 backdrop-blur-sm border border-border-primary rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">8+</div>
                <div className="text-xs text-text-tertiary">Clientes</div>
              </div>
            </div>

            {/* Skills Grid - Responsive */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-fraunces font-semibold text-text-primary">
                Habilidades Principales
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {[
                  'Desarrollo Web',
                  'Diseño Digital',
                  'Marketing Digital',
                  'Ventas B2B',
                  'Reparación PC',
                  'Soporte IT'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-surface-secondary/50 backdrop-blur-sm border border-border-primary rounded-xl px-3 py-3 text-center hover:bg-surface-secondary/70 transition-colors duration-300"
                  >
                    <span className="text-sm text-text-secondary font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location & Experience - Solo en desktop */}
            <div className="hidden lg:block space-y-4">
              <div className="flex items-center space-x-4 text-text-tertiary">
                <MapPin size={20} className="text-primary" />
                <span className="text-sm">Sur de la ZMG, Guadalajara</span>
              </div>
              <div className="flex items-center space-x-4 text-text-tertiary">
                <Calendar size={20} className="text-primary" />
                <span className="text-sm">2+ años de experiencia</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <button
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Mail size={18} />
                <span>Contáctame</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
