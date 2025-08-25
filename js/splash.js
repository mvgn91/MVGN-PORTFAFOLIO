/**
 * SPLASH SCREEN - MVGN LABS
 * Versión Minimalista
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
  }
  
  startLoadingSequence() {
    // Redirección después de completar la carga
    setTimeout(() => {
      this.redirectToMainSite();
    }, 4000); // Reducido a 4 segundos
  }
  
  redirectToMainSite() {
    // Detectar si es móvil o desktop
    const isMobile = this.isMobileDevice();
    const targetUrl = isMobile ? 'mobile.html' : 'index.html';
    
    // Efecto de fade out simple
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';
    
    // Redirección
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500);
  }
  
  detectDevice() {
    const isMobile = this.isMobileDevice();
    if (isMobile) {
      document.body.classList.add('mobile-device');
    }
  }
  
  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768;
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
  }
  
  skipSplash() {
    // Redirección inmediata
    this.redirectToMainSite();
  }
}

// Inicializar splash screen cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new SplashScreen();
});
