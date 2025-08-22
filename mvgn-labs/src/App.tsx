import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
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
          
          {/* Navbar */}
          <Navbar />
          
          {/* Main Content - Estructura jerárquica optimizada */}
          <main className="relative">
            {/* SECCIÓN PRINCIPAL: Hero */}
            <section id="inicio" className="min-h-screen">
              <Hero />
            </section>
            
            {/* SECCIÓN DE PRESENTACIÓN */}
            <section id="sobre-mi" className="py-12 sm:py-16 lg:py-20">
              <About />
            </section>
            
            {/* SECCIÓN DE SERVICIOS */}
            <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-surface-secondary/30">
              <Servicios />
            </section>
            
            {/* SECCIÓN DE PROYECTOS */}
            <section id="proyectos" className="py-12 sm:py-16 lg:py-20">
              <Proyectos />
            </section>
            
            {/* SECCIÓN DE EXPERIENCIA */}
            <section id="experiencia" className="py-12 sm:py-16 lg:py-20 bg-surface-secondary/30">
              <Experiencia />
            </section>
            
            {/* SECCIÓN DE FLUJO DE TRABAJO */}
            <section id="flujo-trabajo" className="py-12 sm:py-16 lg:py-20">
              <FlujoTrabajo />
            </section>
            
            {/* SECCIÓN DE CONTACTO */}
            <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-surface-secondary/30">
              <Contacto />
            </section>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Scroll to Top Button */}
          <ScrollToTop />
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
