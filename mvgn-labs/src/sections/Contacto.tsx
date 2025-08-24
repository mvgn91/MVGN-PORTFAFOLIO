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
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-40 -left-40 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-red-100/30 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-gray-900 mb-6 leading-tight">
            Hablemos de tu <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Proyecto</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estoy aquí para ayudarte a transformar tus ideas en realidad. 
            Contáctame y conversemos sobre cómo puedo impulsar tu negocio
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.name}
                href={action.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex items-center gap-4 p-6 lg:p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-[72px] ${
                  action.isPrimary 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' 
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                  action.isPrimary 
                    ? 'bg-white/20' 
                    : `bg-gradient-to-br ${action.color}`
                }`}>
                  <action.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className={`font-semibold text-lg lg:text-xl ${
                    action.isPrimary ? 'text-white' : 'text-gray-900'
                  }`}>
                    {action.name}
                  </div>
                  <div className={`text-base ${
                    action.isPrimary ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    {action.description}
                  </div>
                </div>
                <ExternalLink className={`w-6 h-6 ${
                  action.isPrimary ? 'text-white/80' : 'text-gray-600'
                } group-hover:scale-110 transition-transform`} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Métodos de Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 h-full transition-all duration-300 hover:scale-105 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-center mb-4 text-lg lg:text-xl">
                    {method.title}
                  </h3>
                  <div className="text-center space-y-3">
                    <p className="text-red-600 font-medium text-base lg:text-lg">
                      {method.value}
                    </p>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 lg:mb-20"
        >
          <div className="max-w-3xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-10">
              <h3 className="text-3xl lg:text-4xl font-fraunces font-semibold text-gray-900 mb-6">
                Envíame un Mensaje
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg lg:text-xl">
                Cuéntame sobre tu proyecto y te responderé con una propuesta personalizada 
                que se adapte a tus necesidades y objetivos
              </p>
            </div>

            {/* Success Message */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-green-200 rounded-3xl p-8 lg:p-12 text-center shadow-lg"
              >
                <CheckCircle className="w-16 h-16 lg:w-20 lg:h-20 text-green-500 mx-auto mb-6" />
                <h4 className="text-gray-900 font-semibold text-xl lg:text-2xl mb-4">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-gray-600 text-lg">
                  Gracias por contactarme. Te responderé en las próximas 24 horas.
                </p>
              </motion.div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-lg space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-medium mb-3 text-base">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 text-base min-h-[56px] ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 font-medium mb-3 text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 text-base min-h-[56px] ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-medium mb-3 text-base">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 resize-none text-base min-h-[56px] ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500'
                    }`}
                    placeholder="Cuéntame sobre tu proyecto, objetivos y cualquier detalle importante..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 min-h-[56px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando Mensaje...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send className="w-6 h-6" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Información Adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Why Choose Me */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-fraunces font-semibold text-gray-900 mb-8">
                  ¿Por qué elegirme?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-lg mb-2">
                        Respuesta Rápida
                      </h4>
                      <p className="text-gray-600 text-base">
                        Te respondo en menos de 24 horas con una propuesta personalizada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-lg mb-2">
                        Comunicación Clara
                      </h4>
                      <p className="text-gray-600 text-base">
                        Mantengo una comunicación constante durante todo el proyecto
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-lg mb-2">
                        Resultados Garantizados
                      </h4>
                      <p className="text-gray-600 text-base">
                        Me comprometo a entregar resultados que superen tus expectativas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <Clock className="w-8 h-8 text-red-500" />
                    <h4 className="text-gray-900 font-semibold text-xl">
                      Tiempo de Respuesta
                    </h4>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Normalmente respondo en <span className="text-red-600 font-semibold">menos de 24 horas</span>. 
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
