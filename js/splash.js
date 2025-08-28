/**
 * SPLASH SCREEN - MVGN LABS
 * Versión Mejorada con Detección Inteligente de Dispositivos
 */

class SplashScreen {
  constructor() {
    this.init();
  }
  
  init() {
    // Inicializar iconos de Lucide si están disponibles
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
    
    // Iniciar secuencia de carga
    this.startLoadingSequence();
    
    // Detectar dispositivo
    this.detectDevice();
    
    // Agregar eventos básicos
    this.addEventListeners();
    
    // Mostrar información del dispositivo
    this.showDeviceInfo();
  }
  
  startLoadingSequence() {
    // Simular progreso de carga
    this.simulateLoadingProgress();
    
    // Redirección después de completar la carga
    setTimeout(() => {
      this.redirectToMainSite();
    }, 3500); // 3.5 segundos para mejor UX
  }
  
  simulateLoadingProgress() {
    const progressBar = document.querySelector('.loading-progress');
    if (progressBar) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
        }
        progressBar.style.width = progress + '%';
      }, 200);
    }
  }
  
  redirectToMainSite() {
    // Detectar si es móvil o desktop
    const isMobile = this.isMobileDevice();
    const targetUrl = isMobile ? '/mobile' : '/desktop';
    
    // Mostrar información de redirección
    this.showRedirectInfo(isMobile);
    
    // Efecto de fade out suave
    document.body.style.transition = 'opacity 0.8s ease-out';
    document.body.style.opacity = '0';
    
    // Redirección
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 800);
  }
  
  showRedirectInfo(isMobile) {
    const loadingText = document.querySelector('.loading-text');
    if (loadingText) {
      const deviceType = isMobile ? 'Móvil' : 'Desktop';
      loadingText.textContent = `Redirigiendo a versión ${deviceType}...`;
    }
  }
  
  detectDevice() {
    const isMobile = this.isMobileDevice();
    const isTablet = this.isTabletDevice();
    
    if (isMobile) {
      document.body.classList.add('mobile-device');
    } else if (isTablet) {
      document.body.classList.add('tablet-device');
    } else {
      document.body.classList.add('desktop-device');
    }
    
    // Agregar clase específica para el tipo de dispositivo
    this.addDeviceSpecificClasses();
  }
  
  isMobileDevice() {
    // Detección más precisa de dispositivos móviles
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = [
      'android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 
      'iemobile', 'opera mini', 'mobile', 'tablet'
    ];
    
    // Verificar User Agent
    const isMobileUA = mobileKeywords.some(keyword => userAgent.includes(keyword));
    
    // Verificar tamaño de pantalla
    const isMobileScreen = window.innerWidth <= 768;
    
    // Verificar orientación en dispositivos móviles
    const isMobileOrientation = window.orientation !== undefined;
    
    // Verificar capacidades táctiles
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    return isMobileUA || (isMobileScreen && (isMobileOrientation || isTouchDevice));
  }
  
  isTabletDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isTabletUA = userAgent.includes('tablet') || 
                      (userAgent.includes('ipad') && !userAgent.includes('mobile'));
    
    const isTabletScreen = window.innerWidth > 768 && window.innerWidth <= 1024;
    
    return isTabletUA || isTabletScreen;
  }
  
  addDeviceSpecificClasses() {
    const isMobile = this.isMobileDevice();
    const isTablet = this.isTabletDevice();
    
    if (isMobile) {
      document.body.classList.add('device-mobile');
    } else if (isTablet) {
      document.body.classList.add('device-tablet');
    } else {
      document.body.classList.add('device-desktop');
    }
  }
  
  showDeviceInfo() {
    const systemInfo = document.querySelector('.system-info');
    if (systemInfo) {
      const isMobile = this.isMobileDevice();
      const isTablet = this.isTabletDevice();
      const deviceType = isMobile ? 'MÓVIL' : (isTablet ? 'TABLET' : 'DESKTOP');
      const screenSize = `${window.innerWidth}x${window.innerHeight}`;
      
      systemInfo.innerHTML = `
        MVGN_LABS v2.0.24 | ${deviceType} | ${screenSize} | Sistema iniciando...
      `;
    }
  }
  
  addEventListeners() {
    // Tecla ESC para saltar splash
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.skipSplash();
      }
    });
    
    // Click para saltar splash
    document.addEventListener('click', (e) => {
      if (e.target === document.body) {
        this.skipSplash();
      }
    });
    
    // Doble click para saltar splash
    document.addEventListener('dblclick', (e) => {
      if (e.target === document.body) {
        this.skipSplash();
      }
    });
  }
  
  skipSplash() {
    // Mostrar mensaje de salto
    const loadingText = document.querySelector('.loading-text');
    if (loadingText) {
      loadingText.textContent = 'Saltando splash...';
    }
    
    // Redirección inmediata
    setTimeout(() => {
      this.redirectToMainSite();
    }, 300);
  }
}

// Inicializar splash screen cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new SplashScreen();
});

// Fallback para dispositivos muy lentos
setTimeout(() => {
  if (document.body.style.opacity !== '0') {
    const splash = new SplashScreen();
    splash.redirectToMainSite();
  }
}, 8000); // 8 segundos máximo
