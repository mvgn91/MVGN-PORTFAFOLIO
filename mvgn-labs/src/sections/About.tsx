import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Award, Code, Palette, TrendingUp, Wrench } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="section-padding bg-[var(--bg-secondary)]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-[var(--accent-primary)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="grid-12">
        {/* Header - Ocupa 12 columnas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="col-span-12 text-center mb-20"
        >
          <h2 className="text-5xl font-fraunces font-bold text-[var(--text-primary)] mb-6">
            Sobre Mí
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-[1.5]">
            Un profesional técnico y creativo apasionado por transformar ideas en soluciones tecnológicas
          </p>
        </motion.div>

        {/* Main Content - Grid Layout */}
        <div className="col-span-12 grid grid-cols-12 gap-8 items-center">
          
          {/* Left Column - Profile Image - Ocupa 5 columnas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="col-span-12 lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Profile Image Container - Square rounded border */}
              <div className="relative w-80 h-80">
                <div className="relative w-full h-full glass p-4 rounded-2xl">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src="/assets/profile.jpg"
                      alt="Armando Ibañez - MVGN Labs"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-[var(--accent-primary)] rounded-full flex items-center justify-center shadow-lg">
                  <Award size={20} className="text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-[var(--accent-secondary)] rounded-full border-4 border-[var(--bg-primary)] shadow-lg"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content - Ocupa 7 columnas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-7 space-y-8"
          >
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-[var(--text-secondary)] leading-[1.6]">
                Soy un profesional <span className="text-[var(--accent-primary)] font-semibold">técnico y creativo</span> con experiencia 
                en tecnología, ventas y marketing digital. Mi pasión es transformar ideas en soluciones tecnológicas 
                que generan resultados reales para mis clientes.
              </p>
              
              <p className="text-base text-[var(--text-tertiary)] leading-[1.6]">
                Con una base sólida en desarrollo web y diseño digital, he desarrollado proyectos que van desde 
                sitios web corporativos hasta aplicaciones funcionales. Mi enfoque combina la innovación tecnológica 
                con la comprensión profunda de las necesidades del negocio.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-4 glass rounded-xl"
              >
                <div className="text-3xl font-fraunces font-bold text-[var(--accent-primary)] mb-2">15+</div>
                <div className="text-sm text-[var(--text-tertiary)]">Proyectos Completados</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-4 glass rounded-xl"
              >
                <div className="text-3xl font-fraunces font-bold text-[var(--accent-primary)] mb-2">8+</div>
                <div className="text-sm text-[var(--text-tertiary)]">Clientes Satisfechos</div>
              </motion.div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-3 p-3 glass rounded-lg"
              >
                <Code className="w-5 h-5 text-[var(--accent-primary)]" />
                <span className="text-sm text-[var(--text-secondary)]">Desarrollo Web</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-3 p-3 glass rounded-lg"
              >
                <Palette className="w-5 h-5 text-[var(--accent-primary)]" />
                <span className="text-sm text-[var(--text-secondary)]">Diseño Digital</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-3 p-3 glass rounded-lg"
              >
                <TrendingUp className="w-5 h-5 text-[var(--accent-primary)]" />
                <span className="text-sm text-[var(--text-secondary)]">Marketing Digital</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-3 p-3 glass rounded-lg"
              >
                <Wrench className="w-5 h-5 text-[var(--accent-primary)]" />
                <span className="text-sm text-[var(--text-secondary)]">Soporte Técnico</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Contact Info - Ocupa 12 columnas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="col-span-12 mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col items-center text-center p-6 glass rounded-xl"
            >
              <Mail className="w-8 h-8 text-[var(--accent-primary)] mb-3" />
              <h4 className="font-fraunces font-semibold text-[var(--text-primary)] mb-2">Email</h4>
              <p className="text-sm text-[var(--text-tertiary)]">jazzfatale@gmail.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col items-center text-center p-6 glass rounded-xl"
            >
              <MapPin className="w-8 h-8 text-[var(--accent-primary)] mb-3" />
              <h4 className="font-fraunces font-semibold text-[var(--text-primary)] mb-2">Ubicación</h4>
              <p className="text-sm text-[var(--text-tertiary)]">Sur de la ZMG, Guadalajara</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col items-center text-center p-6 glass rounded-xl"
            >
              <Calendar className="w-8 h-8 text-[var(--accent-primary)] mb-3" />
              <h4 className="font-fraunces font-semibold text-[var(--text-primary)] mb-2">Experiencia</h4>
              <p className="text-sm text-[var(--text-tertiary)]">2+ años en el sector</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
