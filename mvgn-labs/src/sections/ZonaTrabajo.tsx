import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wifi, Globe, ArrowRight } from 'lucide-react';

const ZonaTrabajo: React.FC = () => {
  return (
    <section id="zona-trabajo" className="section-padding bg-surface relative overflow-hidden">
      {/* Background Elements - Sutil */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
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
        {/* Header Section - Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-white mb-6 leading-tight">
            Zona de <span className="text-gradient">Trabajo</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Servicios presenciales en la ZMG y remotos para todo México
          </p>
        </motion.div>

        {/* Main Content - Diseño Minimalista */}
        <div className="max-w-6xl mx-auto">
          {/* Mapa Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="relative">
              <img
                src="/assets/mapa.png"
                alt="Zona de Trabajo - Sur de la ZMG"
                className="w-full h-96 object-cover rounded-3xl border border-white/10 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-fraunces font-semibold mb-2">Sur de la ZMG</h3>
                <p className="text-lg opacity-90">Zona Metropolitana de Guadalajara</p>
              </div>
            </div>
          </motion.div>

          {/* Servicios de Trabajo - Grid Minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Trabajo Presencial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-surface/60 to-surface-dark/60 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-fraunces font-semibold text-white">Trabajo Presencial</h3>
                    <p className="text-primary/80 text-sm">Zona Sur de la ZMG</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-white/80 leading-relaxed">
                    Servicios técnicos presenciales en tu ubicación con desplazamiento incluido en la zona de cobertura.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-white/70">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Zapopan Sur</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Tlaquepaque</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">Tonalá</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">El Salto</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trabajo Remoto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-surface/60 to-surface-dark/60 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center border border-accent/30 group-hover:scale-110 transition-transform">
                    <Wifi className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-fraunces font-semibold text-white">Trabajo Remoto</h3>
                    <p className="text-accent/80 text-sm">Todo México</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-white/80 leading-relaxed">
                    Conexiones remotas seguras y soporte técnico a distancia para cualquier parte del país.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-white/70">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Conexiones remotas seguras</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Soporte técnico a distancia</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Instalación de software remota</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Configuración de sistemas</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-fraunces font-semibold text-white">
                  ¿No estás en mi zona de cobertura?
                </h3>
              </div>
              <p className="text-white/70 mb-6">
                No te preocupes, también ofrezco servicios remotos para todo México. 
                ¡La distancia no es un problema!
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary group"
              >
                Consultar Cobertura
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ZonaTrabajo;
