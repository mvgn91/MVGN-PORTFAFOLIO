import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Award, Code, Palette, TrendingUp, Users, Wrench, Monitor } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-red-100/30 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-gray-900 mb-6">
            Sobre Mí
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Un profesional técnico y creativo apasionado por transformar ideas en soluciones tecnológicas
          </p>
        </motion.div>

        {/* Main Content - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-md rounded-3xl p-4 border border-gray-200 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/assets/profile.jpg"
                      alt="Armando Ibañez - MVGN Labs"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award size={20} className="text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-red-400 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Soy un profesional <span className="text-red-600 font-semibold">técnico y creativo</span> con experiencia 
                en tecnología, ventas y marketing digital. Mi pasión es transformar ideas en soluciones tecnológicas 
                que generan resultados reales para mis clientes.
              </p>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
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
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Proyectos</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-3xl font-bold text-red-600 mb-2">8+</div>
                <div className="text-sm text-gray-600 font-medium">Clientes</div>
              </motion.div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-fraunces font-semibold text-gray-900">
                Habilidades Principales
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { skill: 'Desarrollo Web', icon: Code, color: 'bg-blue-100 text-blue-600' },
                  { skill: 'Diseño Digital', icon: Palette, color: 'bg-purple-100 text-purple-600' },
                  { skill: 'Marketing Digital', icon: TrendingUp, color: 'bg-green-100 text-green-600' },
                  { skill: 'Ventas B2B', icon: Users, color: 'bg-orange-100 text-orange-600' },
                  { skill: 'Reparación PC', icon: Wrench, color: 'bg-gray-100 text-gray-600' },
                  { skill: 'Soporte IT', icon: Monitor, color: 'bg-indigo-100 text-indigo-600' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`${item.color} rounded-2xl px-4 py-4 text-center hover:scale-105 transition-all duration-300 border border-transparent hover:border-gray-200`}
                    >
                      <IconComponent size={20} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">
                        {item.skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Location & Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={20} className="text-red-500" />
                <span className="text-base">Sur de la ZMG, Guadalajara</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar size={20} className="text-red-500" />
                <span className="text-base">2+ años de experiencia</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <button
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 min-h-[56px]"
              >
                <Mail size={20} />
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
