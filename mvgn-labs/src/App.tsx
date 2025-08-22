import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import SplashScreen from './components/SplashScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Servicios from './sections/Servicios';
import Proyectos from './sections/Proyectos';
import Experiencia from './sections/Experiencia';
import FlujoTrabajo from './sections/FlujoTrabajo';
import Contacto from './sections/Contacto';
import Footer from './components/Footer';
import BackgroundLines from './components/BackgroundLines';
import ScrollToTop from './components/ScrollToTop';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSplashComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-white transition-colors duration-500">
      {isLoading ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <>
          {/* Background Elements - Fijo para consistencia visual */}
          <BackgroundLines className="fixed inset-0 pointer-events-none opacity-20" />
          
          {/* Navbar - Solo visible en desktop */}
          {!isMobile && <Navbar />}
          
          {/* Main Content - Estructura optimizada para móvil */}
          <main className="relative pb-20 md:pb-0">
            {/* SECCIÓN PRINCIPAL: Hero - Full screen en móvil */}
            <section id="inicio" className="min-h-screen flex items-center">
              <Hero />
            </section>
            
            {/* SECCIÓN DE PRESENTACIÓN - Simplificada en móvil */}
            <section id="sobre-mi" className="py-8 md:py-16 lg:py-20">
              <About />
            </section>
            
            {/* SECCIÓN DE SERVICIOS - Grid adaptativo */}
            <section id="servicios" className="py-8 md:py-16 lg:py-20 bg-surface-secondary/30">
              <Servicios />
            </section>
            
            {/* SECCIÓN DE PROYECTOS - Prioritaria, siempre visible */}
            <section id="proyectos" className="py-8 md:py-16 lg:py-20">
              <Proyectos />
            </section>
            
            {/* SECCIÓN DE EXPERIENCIA - Condicional en móvil */}
            <section id="experiencia" className="py-8 md:py-16 lg:py-20 bg-surface-secondary/30">
              <Experiencia />
            </section>
            
            {/* SECCIÓN DE FLUJO DE TRABAJO - Ocultada en móvil */}
            <section id="flujo-trabajo" className="hidden md:block py-8 md:py-16 lg:py-20">
              <FlujoTrabajo />
            </section>
            
            {/* SECCIÓN DE CONTACTO - Simplificada en móvil */}
            <section id="contacto" className="py-8 md:py-16 lg:py-20 bg-surface-secondary/30">
              <Contacto />
            </section>
          </main>
          
          {/* Footer - Simplificado en móvil */}
          <Footer />
          
          {/* Scroll to Top Button - Solo en desktop */}
          {!isMobile && <ScrollToTop />}
          
          {/* Mobile Navigation - Solo visible en móvil */}
          {isMobile && <MobileNavbar />}
        </>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
