import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  FolderOpen, 
  MessageCircle,
  ChevronUp
} from 'lucide-react';

interface MobileNavbarProps {}

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar sección activa
      const sections = ['inicio', 'sobre-mi', 'servicios', 'proyectos', 'experiencia', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Mostrar/ocultar botón de scroll top
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'sobre-mi', label: 'Sobre Mí', icon: User },
    { id: 'servicios', label: 'Servicios', icon: Briefcase },
    { id: 'proyectos', label: 'Proyectos', icon: FolderOpen },
    { id: 'contacto', label: 'Contacto', icon: MessageCircle },
  ];

  return (
    <>
      {/* Botón de Scroll to Top flotante */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-4 z-50 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center text-white hover:bg-primary-dark transition-all duration-300 hover:scale-110"
          aria-label="Volver arriba"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Navegación inferior móvil */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-surface-primary/95 backdrop-blur-md border-t border-border-primary">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-primary bg-primary/10 scale-110'
                    : 'text-text-secondary hover:text-primary hover:bg-surface-secondary/50'
                }`}
                aria-label={item.label}
              >
                <Icon 
                  size={20} 
                  className={`mb-1 transition-all duration-300 ${
                    isActive ? 'scale-110' : ''
                  }`}
                />
                <span className="text-xs font-medium leading-tight">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
