import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Servicios from './sections/Servicios';
import Experiencia from './sections/Experiencia';
import Proyectos from './sections/Proyectos';
import ZonaTrabajo from './sections/ZonaTrabajo';
import Contacto from './sections/Contacto';
import SplashScreen from './components/SplashScreen';
import './styles/globals.css';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="App bg-background dark:bg-background light:bg-light-background text-white dark:text-white light:text-light-text min-h-screen transition-colors duration-300">
      <Navbar />
      
      <main className="relative">
        {/* Hero Section - Landing principal */}
        <Hero />
        
        {/* About Section - Información personal y estadísticas */}
        <About />
        
        {/* Servicios Section - Oferta de servicios */}
        <Servicios />
        
        {/* Experiencia Section - Timeline profesional */}
        <Experiencia />
        
        {/* Proyectos Section - Portfolio de trabajo */}
        <Proyectos />
        
        {/* Zona de Trabajo Section - Información geográfica */}
        <ZonaTrabajo />
        
        {/* Contacto Section - Formularios y métodos de contacto */}
        <Contacto />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary hover:bg-primary-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Volver arriba"
          >
            <ChevronUp className="w-6 h-6 mx-auto" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-surface dark:bg-surface light:bg-light-surface z-50 transition-colors duration-300">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.1 }}
          style={{
            width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        />
      </div>
    </div>
  );
};

export default App;
