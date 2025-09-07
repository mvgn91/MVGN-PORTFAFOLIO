// Smart ProfileCard Loader - Carga inteligente según el dispositivo
class SmartProfileCardLoader {
  constructor() {
    this.deviceDetector = window.deviceDetector;
    this.loadedVersion = null;
    this.init();
  }

  init() {
    // Esperar a que el detector de dispositivos esté listo
    if (this.deviceDetector) {
      this.loadAppropriateVersion();
    } else {
      // Fallback: cargar después de un breve delay
      setTimeout(() => {
        this.loadAppropriateVersion();
      }, 100);
    }
  }

  loadAppropriateVersion() {
    const container = document.getElementById('profileCardDesktop');
    
    if (!container) {
      console.warn('ProfileCard container not found');
      return;
    }

    // Determinar qué versión cargar
    if (this.deviceDetector.shouldUseMobileOptimized()) {
      this.loadMobileOptimizedVersion(container);
    } else if (this.deviceDetector.shouldUseTabletOptimized()) {
      this.loadTabletOptimizedVersion(container);
    } else {
      this.loadDesktopVersion(container);
    }
  }

  loadMobileOptimizedVersion(container) {
    console.log('Loading mobile optimized ProfileCard');
    
    // Cargar CSS móvil optimizado
    this.loadCSS('css/profilecard-mobile-optimized.css');
    
    // Cargar JavaScript móvil optimizado
    this.loadJS('js/profilecard-mobile-optimized.js', () => {
      // Cambiar el ID del contenedor para la versión móvil
      container.id = 'profileCardMobile';
      container.className = 'pc-card-wrapper-mobile';
      
      // Inicializar la versión móvil
      if (window.ProfileCardMobileOptimized) {
        window.profileCardMobileInstance = new window.ProfileCardMobileOptimized(container, {
          avatarUrl: 'assets/PROFILE TRANSPARENT.png',
          name: 'Armando Ibañez',
          title: 'Desarrollador Web & Diseñador Digital',
          handle: 'mvgnlabs',
          status: 'Disponible',
          contactText: 'Contactar',
          onContactClick: this.getContactHandler()
        });
        
        this.loadedVersion = 'mobile-optimized';
        console.log('Mobile optimized ProfileCard loaded successfully');
      }
    });
  }

  loadTabletOptimizedVersion(container) {
    console.log('Loading tablet optimized ProfileCard');
    
    // Para tablets, usar la versión desktop pero con optimizaciones
    this.loadCSS('css/profilecard-desktop.css');
    
    this.loadJS('js/profilecard-desktop.js', () => {
      if (window.ProfileCardDesktop) {
        window.profileCardDesktopInstance = new window.ProfileCardDesktop(container, {
          avatarUrl: 'assets/profile.jpg',
          name: 'Armando Ibañez',
          title: 'Desarrollador Web & Diseñador Digital',
          handle: 'mvgnlabs',
          status: 'Disponible para proyectos',
          location: 'Tlajomulco, Jalisco',
          onContactClick: this.getContactHandler()
        });
        
        this.loadedVersion = 'tablet-optimized';
        console.log('Tablet optimized ProfileCard loaded successfully');
      }
    });
  }

  loadDesktopVersion(container) {
    console.log('Loading desktop ProfileCard');
    
    // Cargar versión desktop completa
    this.loadCSS('css/profilecard.css');
    
    this.loadJS('js/profilecard.js', () => {
      if (window.ProfileCard) {
        window.profileCardInstance = new window.ProfileCard(container, {
          avatarUrl: 'assets/PROFILE TRANSPARENT.png',
          name: 'Armando Ibañez',
          title: 'Desarrollador Web & Diseñador Digital',
          handle: 'mvgnlabs',
          status: 'Disponible',
          contactText: 'Contactar',
          enableTilt: true,
          enableMobileTilt: false,
          onContactClick: this.getContactHandler()
        });
        
        this.loadedVersion = 'desktop-full';
        console.log('Desktop ProfileCard loaded successfully');
      }
    });
  }

  loadCSS(href) {
    // Verificar si el CSS ya está cargado
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (existingLink) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'all';
    document.head.appendChild(link);
  }

  loadJS(src, callback) {
    // Verificar si el JS ya está cargado
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      if (callback) callback();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = callback;
    script.onerror = () => {
      console.error(`Failed to load script: ${src}`);
      if (callback) callback();
    };
    document.head.appendChild(script);
  }

  getContactHandler() {
    return function() {
      // Redirigir a la sección de contacto si existe
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback: abrir WhatsApp
        const message = encodeURIComponent(
          `Hola Armando, vi tu portafolio y me gustó mucho. ¿Podríamos hablar sobre un proyecto?`
        );
        window.open(`https://wa.me/523322621939?text=${message}`, '_blank');
      }
    };
  }

  // Método para recargar con una versión específica (útil para testing)
  reloadWithVersion(version) {
    const container = document.getElementById('profileCardDesktop') || 
                     document.getElementById('profileCardMobile');
    
    if (!container) return;

    // Limpiar contenedor
    container.innerHTML = '';
    container.id = 'profileCardDesktop';
    container.className = 'pc-card-wrapper-desktop';

    // Recargar según la versión solicitada
    switch (version) {
      case 'mobile':
        this.loadMobileOptimizedVersion(container);
        break;
      case 'tablet':
        this.loadTabletOptimizedVersion(container);
        break;
      case 'desktop':
        this.loadDesktopVersion(container);
        break;
      default:
        this.loadAppropriateVersion();
    }
  }

  // Método para obtener información de la versión cargada
  getLoadedVersion() {
    return {
      version: this.loadedVersion,
      deviceType: this.deviceDetector?.deviceType,
      optimizationLevel: this.deviceDetector?.getOptimizationLevel()
    };
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Cargar el detector de dispositivos primero
  if (!window.deviceDetector) {
    const deviceScript = document.createElement('script');
    deviceScript.src = 'js/device-detector.js';
    deviceScript.onload = () => {
      window.smartProfileCardLoader = new SmartProfileCardLoader();
    };
    document.head.appendChild(deviceScript);
  } else {
    window.smartProfileCardLoader = new SmartProfileCardLoader();
  }
});

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SmartProfileCardLoader;
}
