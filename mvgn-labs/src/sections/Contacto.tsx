import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  MessageSquare,
  Clock,
  ArrowRight
} from 'lucide-react';
import BackgroundLines from '../components/BackgroundLines';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jazzfatale@gmail.com',
      description: 'Respuesta en 24 horas',
      action: 'mailto:jazzfatale@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '33 2262 1939',
      description: 'Lun-Vie 9:00 - 18:00',
      action: 'tel:+523322621939',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Sur de la ZMG',
      description: 'Zona Metropolitana de Guadalajara',
      action: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const services = [
    'Diseño Web',
    'Branding',
    'Catálogos Digitales',
    'Soporte IT',
    'Otro'
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-40 -left-40 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-primary/5 rounded-full blur-3xl"
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
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-text-primary mb-6 sm:mb-8 leading-tight px-4">
            Hablemos de tu <span className="text-gradient">Proyecto</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Estoy aquí para ayudarte a transformar tus ideas en realidad. 
            Contáctame y conversemos sobre cómo puedo impulsar tu negocio
          </p>
        </motion.div>

        {/* Métodos de Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <div className="grid-system grid-1 sm:grid-2 lg:grid-3 gap-6 sm:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => {
                  if (method.action !== '#') {
                    window.open(method.action, '_blank');
                  }
                }}
              >
                <div className="bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border border-border-primary rounded-3xl p-6 sm:p-8 h-full transition-all duration-300 hover:scale-105 hover:border-primary/30">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                    <method.icon className="icon-xl sm:icon-2xl text-white" />
                  </div>
                  <h3 className="text-text-primary font-semibold text-center mb-2 text-base sm:text-lg">
                    {method.title}
                  </h3>
                  <div className="text-center space-y-2">
                    <p className="text-primary font-medium text-sm sm:text-base">
                      {method.value}
                    </p>
                    <p className="text-text-tertiary text-xs sm:text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formulario y Información */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 sm:mb-20"
        >
          <div className="grid-system grid-1 lg:grid-2 gap-8 sm:gap-12">
            {/* Formulario */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-fraunces font-semibold text-text-primary mb-4 sm:mb-6">
                  Envíame un Mensaje
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  Cuéntame sobre tu proyecto y te responderé con una propuesta personalizada 
                  que se adapte a tus necesidades y objetivos
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 sm:p-8 text-center"
                >
                  <CheckCircle className="icon-xl sm:icon-2xl text-green-500 mx-auto mb-4" />
                  <h4 className="text-text-primary font-semibold text-lg sm:text-xl mb-2">
                    ¡Mensaje Enviado!
                  </h4>
                  <p className="text-text-secondary text-sm sm:text-base">
                    Gracias por contactarme. Te responderé en las próximas 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-text-primary font-medium mb-2 text-xs sm:text-sm">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-sm sm:text-base"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-text-primary font-medium mb-2 text-xs sm:text-sm">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-sm sm:text-base"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-text-primary font-medium mb-2 text-xs sm:text-sm">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-sm sm:text-base"
                        placeholder="+52 33 1234 5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-text-primary font-medium mb-2 text-xs sm:text-sm">
                        Servicio de Interés *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-sm sm:text-base"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-text-primary font-medium mb-2 text-xs sm:text-sm">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none text-sm sm:text-base"
                      placeholder="Cuéntame sobre tu proyecto, objetivos y cualquier detalle importante..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg sm:btn-xl group w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="hidden sm:inline">Enviando Mensaje...</span>
                        <span className="sm:hidden">Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden sm:inline">Enviar Mensaje</span>
                        <span className="sm:hidden">Enviar</span>
                        <Send className="icon group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Información Adicional */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-fraunces font-semibold text-text-primary mb-4 sm:mb-6">
                  ¿Por qué elegirme?
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-text-primary font-semibold text-sm sm:text-base mb-1">
                        Respuesta Rápida
                      </h4>
                      <p className="text-text-tertiary text-xs sm:text-sm">
                        Te respondo en menos de 24 horas con una propuesta personalizada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-text-primary font-semibold text-sm sm:text-base mb-1">
                        Comunicación Clara
                      </h4>
                      <p className="text-text-tertiary text-xs sm:text-sm">
                        Mantengo una comunicación constante durante todo el proyecto
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-text-primary font-semibold text-sm sm:text-base mb-1">
                        Resultados Garantizados
                      </h4>
                      <p className="text-text-tertiary text-xs sm:text-sm">
                        Me comprometo a entregar resultados que superen tus expectativas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Clock className="icon-lg text-primary" />
                  <h4 className="text-text-primary font-semibold text-base sm:text-lg">
                    Tiempo de Respuesta
                  </h4>
                </div>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Normalmente respondo en <span className="text-primary font-semibold">menos de 24 horas</span>. 
                  Para proyectos urgentes, puedo priorizar tu solicitud.
                </p>
              </div>

              <div className="bg-gradient-to-br from-surface-primary to-surface-secondary border border-border-primary rounded-2xl p-4 sm:p-6">
                <h4 className="text-text-primary font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                  Horarios de Atención
                </h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Lunes - Viernes:</span>
                    <span className="text-text-primary font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Sábados:</span>
                    <span className="text-text-primary font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Domingos:</span>
                    <span className="text-text-primary font-medium">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 border border-primary/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center">
                <ArrowRight className="icon-lg sm:icon-xl text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-fraunces font-semibold text-text-primary text-center">
                ¿Listo para comenzar?
              </h3>
            </div>
            <p className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              No esperes más para transformar tu idea en realidad. 
              Contáctame ahora y tomemos un café virtual para discutir tu proyecto
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary btn-lg sm:btn-xl group w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Iniciar Conversación</span>
                <span className="sm:hidden">Conversar</span>
                <ArrowRight className="icon group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('servicios');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary btn-lg sm:btn-xl group w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Ver Servicios</span>
                <span className="sm:hidden">Servicios</span>
                <ArrowRight className="icon group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;
