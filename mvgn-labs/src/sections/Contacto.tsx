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
  ExternalLink
} from 'lucide-react';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
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
        message: ''
      });
      setErrors({});
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

  const quickActions = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/523322621939',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      description: 'Chat directo',
      isPrimary: true
    },
    {
      name: 'Email',
      url: 'mailto:jazzfatale@gmail.com',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
      description: 'Correo electrónico',
      isPrimary: false
    }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-40 -left-40 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-primary/5 rounded-full blur-2xl"
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

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-text-primary mb-6 leading-tight">
            Hablemos de tu <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Proyecto</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Estoy aquí para ayudarte a transformar tus ideas en realidad. 
            Contáctame y conversemos sobre cómo puedo impulsar tu negocio
          </p>
        </motion.div>

        {/* Quick Actions - Móvil First */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.name}
                href={action.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex items-center gap-4 p-4 md:p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-[60px] ${
                  action.isPrimary 
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white' 
                    : 'bg-gradient-to-br from-surface-primary to-surface-secondary border border-border-primary hover:border-primary/30'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                  action.isPrimary 
                    ? 'bg-white/20' 
                    : `bg-gradient-to-br ${action.color}`
                }`}>
                  <action.icon className={`w-6 h-6 ${
                    action.isPrimary ? 'text-white' : 'text-white'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className={`font-semibold text-base md:text-lg ${
                    action.isPrimary ? 'text-white' : 'text-text-primary'
                  }`}>
                    {action.name}
                  </div>
                  <div className={`text-sm ${
                    action.isPrimary ? 'text-white/80' : 'text-text-tertiary'
                  }`}>
                    {action.description}
                  </div>
                </div>
                <ExternalLink className={`w-5 h-5 ${
                  action.isPrimary ? 'text-white/80' : 'text-text-tertiary'
                } group-hover:scale-110 transition-transform`} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Métodos de Contacto - Simplificados para móvil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
                <div className="bg-gradient-to-br from-surface-primary to-surface-secondary backdrop-blur-sm border border-border-primary rounded-2xl p-4 md:p-6 h-full transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:shadow-xl">
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-text-primary font-semibold text-center mb-2 text-base md:text-lg">
                    {method.title}
                  </h3>
                  <div className="text-center space-y-2">
                    <p className="text-primary font-medium text-sm md:text-base">
                      {method.value}
                    </p>
                    <p className="text-text-tertiary text-xs md:text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formulario - Móvil First */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 md:mb-16"
        >
          <div className="max-w-2xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-fraunces font-semibold text-text-primary mb-4">
                Envíame un Mensaje
              </h3>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                Cuéntame sobre tu proyecto y te responderé con una propuesta personalizada 
                que se adapte a tus necesidades y objetivos
              </p>
            </div>

            {/* Success Message */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 md:p-8 text-center"
              >
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-text-primary font-semibold text-lg md:text-xl mb-2">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-text-secondary text-base">
                  Gracias por contactarme. Te responderé en las próximas 24 horas.
                </p>
              </motion.div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text-primary font-medium mb-2 text-sm">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 bg-surface-secondary border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-base min-h-[48px] ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-border-primary focus:border-primary'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-primary font-medium mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 bg-surface-secondary border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-base min-h-[48px] ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-border-primary focus:border-primary'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-primary font-medium mb-2 text-sm">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-surface-secondary border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none text-base min-h-[48px] ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-border-primary focus:border-primary'
                    }`}
                    placeholder="Cuéntame sobre tu proyecto, objetivos y cualquier detalle importante..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando Mensaje...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Información Adicional - Solo en desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Why Choose Me */}
              <div className="space-y-6">
                <h3 className="text-2xl font-fraunces font-semibold text-text-primary mb-6">
                  ¿Por qué elegirme?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-text-primary font-semibold text-base mb-1">
                        Respuesta Rápida
                      </h4>
                      <p className="text-text-tertiary text-sm">
                        Te respondo en menos de 24 horas con una propuesta personalizada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-text-primary font-semibold text-base mb-1">
                        Comunicación Clara
                      </h4>
                      <p className="text-text-tertiary text-sm">
                        Mantengo una comunicación constante durante todo el proyecto
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-text-primary font-semibold text-base mb-1">
                        Resultados Garantizados
                      </h4>
                      <p className="text-text-tertiary text-sm">
                        Me comprometo a entregar resultados que superen tus expectativas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h4 className="text-text-primary font-semibold text-lg">
                      Tiempo de Respuesta
                    </h4>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Normalmente respondo en <span className="text-primary font-semibold">menos de 24 horas</span>. 
                    Para proyectos urgentes, puedo priorizar tu solicitud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;
