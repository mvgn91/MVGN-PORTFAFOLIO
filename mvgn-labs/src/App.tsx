import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleSplashComplete = () => {
    setIsLoading(false);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeProvider>
      <div className={`min-h-screen transition-colors duration-500 ${
        theme === 'dark' ? 'bg-surface text-white' : 'bg-white text-gray-900'
      }`}>
        {isLoading ? (
          <SplashScreen onComplete={handleSplashComplete} />
        ) : (
          <>
            {/* Background Lines */}
            <BackgroundLines className="fixed inset-0 pointer-events-none opacity-20" />
            
            {/* Navbar */}
            <Navbar onThemeToggle={toggleTheme} />
            
            {/* Main Content */}
            <main className="relative">
              {/* Hero Section */}
              <section id="inicio">
                <Hero />
              </section>
              
              {/* About Section */}
              <section id="sobre-mi">
                <About />
              </section>
              
              {/* Services Section */}
              <section id="servicios">
                <Servicios />
              </section>
              
              {/* Projects Section */}
              <section id="proyectos">
                <Proyectos />
              </section>
              
              {/* Experience Section */}
              <section id="experiencia">
                <Experiencia />
              </section>
              
              {/* Work Zone Section */}
              <section id="zona-trabajo">
                <ZonaTrabajo />
              </section>
              
              {/* Contact Section */}
              <section id="contacto">
                <Contacto />
              </section>
            </main>
            
            {/* Footer */}
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
