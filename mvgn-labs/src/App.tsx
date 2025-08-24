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
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSplashComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
      {isLoading ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <>
          {/* Background Elements - Fijo para consistencia visual */}
          <BackgroundLines className="fixed inset-0 pointer-events-none opacity-5" />
          
          {/* Navbar - Solo visible en desktop */}
          {!isMobile && <Navbar />}
          
          {/* Main Content - Estructura optimizada */}
          <main className="relative">
            {/* SECCIÓN PRINCIPAL: Hero - Full screen */}
            <section id="inicio" className="min-h-screen flex items-center bg-[var(--bg-primary)]">
              <Hero />
            </section>
            
            {/* SECCIÓN DE PRESENTACIÓN */}
            <section id="sobre-mi" className="section-padding bg-[var(--bg-secondary)]">
              <About />
            </section>
            
            {/* SECCIÓN DE SERVICIOS */}
            <section id="servicios" className="section-padding bg-[var(--bg-primary)]">
              <Servicios />
            </section>
            
            {/* SECCIÓN DE PROYECTOS */}
            <section id="proyectos" className="section-padding bg-[var(--bg-secondary)]">
              <Proyectos />
            </section>
            
            {/* SECCIÓN DE EXPERIENCIA */}
            <section id="experiencia" className="section-padding bg-[var(--bg-primary)]">
              <Experiencia />
            </section>
            
            {/* SECCIÓN DE FLUJO DE TRABAJO - Solo en desktop */}
            <section id="flujo-trabajo" className="hidden lg:block section-padding bg-[var(--bg-secondary)]">
              <FlujoTrabajo />
            </section>
            
            {/* SECCIÓN DE CONTACTO */}
            <section id="contacto" className="section-padding bg-[var(--bg-primary)]">
              <Contacto />
            </section>
          </main>
          
          {/* Footer */}
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
