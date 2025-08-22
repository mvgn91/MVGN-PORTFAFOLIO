import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Servicios from './sections/Servicios';
import Proyectos from './sections/Proyectos';
import Experiencia from './sections/Experiencia';
import ZonaTrabajo from './sections/ZonaTrabajo';
import Contacto from './sections/Contacto';
import Footer from './components/Footer';
import BackgroundLines from './components/BackgroundLines';
import SectionLayout from './components/SectionLayout';
import { SECTION_CONFIG, HERO_CONFIG } from './lib/constants';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplashComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-surface text-white transition-colors duration-500">
      {isLoading ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <>
          {/* Background Lines - Fijo para consistencia visual */}
          <BackgroundLines className="fixed inset-0 pointer-events-none opacity-20" />
          
          {/* Navbar */}
          <Navbar />
          
          {/* Main Content - Estructura jerárquica optimizada con SectionLayout */}
          <main className="relative">
            
            {/* SECCIÓN PRINCIPAL: Hero */}
            <SectionLayout {...HERO_CONFIG}>
              <Hero />
            </SectionLayout>
            
            {/* SECCIÓN DE PRESENTACIÓN */}
            <SectionLayout {...SECTION_CONFIG.about}>
              <About />
            </SectionLayout>
            
            {/* SECCIÓN DE SERVICIOS */}
            <SectionLayout {...SECTION_CONFIG.servicios}>
              <Servicios />
            </SectionLayout>
            
            {/* SECCIÓN DE PROYECTOS */}
            <SectionLayout {...SECTION_CONFIG.proyectos}>
              <Proyectos />
            </SectionLayout>
            
            {/* SECCIÓN DE EXPERIENCIA */}
            <SectionLayout {...SECTION_CONFIG.experiencia}>
              <Experiencia />
            </SectionLayout>
            
            {/* SECCIÓN DE ZONA DE TRABAJO */}
            <SectionLayout {...SECTION_CONFIG.zonaTrabajo}>
              <ZonaTrabajo />
            </SectionLayout>
            
            {/* SECCIÓN DE CONTACTO */}
            <SectionLayout {...SECTION_CONFIG.contacto}>
              <Contacto />
            </SectionLayout>
          </main>
          
          {/* Footer */}
          <Footer />
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
