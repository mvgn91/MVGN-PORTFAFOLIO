/**
 * MVGN Labs - Detector de Dispositivos
 * Redirige automáticamente a la versión apropiada del sitio
 */

class DeviceDetector {
  constructor() {
    this.init();
  }

  init() {
    // Solo ejecutar en la página principal
    if (window.location.pathname.includes('mobile.html')) {
      return; // Ya estamos en la versión móvil
    }

    // Detectar dispositivo y redirigir si es necesario
    this.detectAndRedirect();
  }

  /**
   * Detectar tipo de dispositivo y redirigir
   */
  detectAndRedirect() {
    const isMobile = this.isMobileDevice();
    const isTablet = this.isTabletDevice();
    const isSmallScreen = this.isSmallScreen();
    const prefersMobile = this.userPrefersMobile();

    // Condiciones para mostrar versión móvil
    if (isMobile || isTablet || isSmallScreen || prefersMobile) {
      this.redirectToMobile();
    }
  }

  /**
   * Detectar si es dispositivo móvil
   */
  isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = [
      'android', 'iphone', 'ipod', 'ipad', 'blackberry', 
      'windows phone', 'mobile', 'tablet'
    ];

    return mobileKeywords.some(keyword => userAgent.includes(keyword));
  }

  /**
   * Detectar si es tablet
   */
  isTabletDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Detectar iPad específicamente
    if (userAgent.includes('ipad')) {
      return true;
    }
    
    // Para Android, ser más específico
    if (userAgent.includes('android')) {
      // Solo considerar tablet si tiene características específicas de tablet
      const isTabletKeyword = userAgent.includes('tablet') || userAgent.includes('mobile');
      if (isTabletKeyword) {
        return true;
      }
    }
    
    // Verificar por tamaño de pantalla solo si es muy específico
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    
    // Solo considerar tablet si está en un rango muy específico
    // y tiene proporciones típicas de tablet
    const isTabletSize = (screenWidth >= 768 && screenWidth <= 1024) && 
                        (screenHeight >= 768 && screenHeight <= 1024) &&
                        Math.abs(screenWidth - screenHeight) < 200; // Proporciones similares

    return isTabletSize;
  }

  /**
   * Detectar si la pantalla es pequeña
   */
  isSmallScreen() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Solo considerar pantalla pequeña si AMBAS dimensiones son pequeñas
    // Esto evita falsos positivos en laptops con resoluciones como 1366x768
    return viewportWidth < 768 && viewportHeight < 768;
  }

  /**
   * Verificar preferencias del usuario
   */
  userPrefersMobile() {
    // Verificar si el usuario ya ha elegido una versión
    const userChoice = localStorage.getItem('mvgn-version-preference');
    
    if (userChoice === 'mobile') {
      return true;
    }
    
    if (userChoice === 'desktop') {
      return false;
    }

    // Verificar preferencias del sistema
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Si el usuario prefiere movimiento reducido, sugerir versión móvil
    if (prefersReducedMotion) {
      return true;
    }

    return false;
  }

  /**
   * Forzar versión desktop (para debug o preferencia del usuario)
   */
  forceDesktop() {
    localStorage.setItem('mvgn-version-preference', 'desktop');
    console.log('🖥️ Forzando versión desktop...');
    // Recargar la página para aplicar el cambio
    window.location.reload();
  }

  /**
   * Forzar versión móvil (para debug o preferencia del usuario)
   */
  forceMobile() {
    localStorage.setItem('mvgn-version-preference', 'mobile');
    console.log('📱 Forzando versión móvil...');
    this.redirectToMobile();
  }

  /**
   * Redirigir a la versión móvil
   */
  redirectToMobile() {
    // Debug: mostrar información antes de redirigir
    this.logDetectionInfo();
    
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    
    // Construir nueva URL
    let mobileUrl = '/mobile.html';
    
    // Mantener parámetros de búsqueda
    if (currentSearch) {
      mobileUrl += currentSearch;
    }
    
    // Mantener hash/ancla
    if (currentHash) {
      mobileUrl += currentHash;
    }

    // Redirigir
    window.location.href = mobileUrl;
  }

  /**
   * Log de información de detección para debug
   */
  logDetectionInfo() {
    console.log('🔍 MVGN Device Detector - Debug Info:');
    console.log('User Agent:', navigator.userAgent);
    console.log('Screen Size:', `${window.screen.width}x${window.screen.height}`);
    console.log('Viewport Size:', `${window.innerWidth}x${window.innerHeight}`);
    console.log('Is Mobile:', this.isMobileDevice());
    console.log('Is Tablet:', this.isTabletDevice());
    console.log('Is Small Screen:', this.isSmallScreen());
    console.log('User Prefers Mobile:', this.userPrefersMobile());
    console.log('Redirecting to mobile version...');
  }

  /**
   * Mostrar banner de cambio de versión
   */
  showVersionBanner() {
    // Crear banner
    const banner = document.createElement('div');
    banner.className = 'version-banner';
    banner.innerHTML = `
      <div class="version-banner-content">
        <span>¿Prefieres la versión móvil?</span>
        <div class="version-banner-buttons">
          <button onclick="deviceDetector.switchToMobile()" class="btn-mobile">Sí, versión móvil</button>
          <button onclick="deviceDetector.dismissBanner()" class="btn-dismiss">No, mantener desktop</button>
        </div>
      </div>
    `;

    // Agregar estilos
    const styles = document.createElement('style');
    styles.textContent = `
      .version-banner {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #FF4C4C, #FF6666);
        color: white;
        padding: 15px;
        z-index: 10000;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        animation: slideDown 0.5s ease;
      }
      
      .version-banner-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        font-family: 'Poppins', sans-serif;
      }
      
      .version-banner-buttons {
        display: flex;
        gap: 10px;
      }
      
      .btn-mobile, .btn-dismiss {
        padding: 8px 16px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;
      }
      
      .btn-mobile {
        background: white;
        color: #FF4C4C;
      }
      
      .btn-dismiss {
        background: rgba(255,255,255,0.2);
        color: white;
        border: 1px solid rgba(255,255,255,0.3);
      }
      
      .btn-mobile:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      }
      
      .btn-dismiss:hover {
        background: rgba(255,255,255,0.3);
      }
      
      @keyframes slideDown {
        from { transform: translateY(-100%); }
        to { transform: translateY(0); }
      }
      
      @media (max-width: 768px) {
        .version-banner-content {
          flex-direction: column;
          gap: 15px;
          text-align: center;
        }
        
        .version-banner-buttons {
          justify-content: center;
        }
      }
    `;

    document.head.appendChild(styles);
    document.body.appendChild(banner);

    // Auto-ocultar después de 10 segundos
    setTimeout(() => {
      this.dismissBanner();
    }, 10000);
  }

  /**
   * Cambiar a versión móvil
   */
  switchToMobile() {
    localStorage.setItem('mvgn-version-preference', 'mobile');
    this.redirectToMobile();
  }

  /**
   * Ocultar banner
   */
  dismissBanner() {
    const banner = document.querySelector('.version-banner');
    if (banner) {
      banner.style.animation = 'slideUp 0.5s ease forwards';
      setTimeout(() => {
        banner.remove();
      }, 500);
    }
    
    // Agregar estilos para animación de salida
    if (!document.querySelector('#slide-up-styles')) {
      const slideUpStyles = document.createElement('style');
      slideUpStyles.id = 'slide-up-styles';
      slideUpStyles.textContent = `
        @keyframes slideUp {
          from { transform: translateY(0); }
          to { transform: translateY(-100%); }
        }
      `;
      document.head.appendChild(slideUpStyles);
    }
  }

  /**
   * Métodos de utilidad
   */
  
  // Obtener información del dispositivo
  getDeviceInfo() {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio,
      isMobile: this.isMobileDevice(),
      isTablet: this.isTabletDevice(),
      isSmallScreen: this.isSmallScreen()
    };
  }

  // Log de información del dispositivo (para debugging)
  logDeviceInfo() {
    console.log('MVGN Labs - Device Info:', this.getDeviceInfo());
  }
}

// Inicializar detector
const deviceDetector = new DeviceDetector();

// Exponer globalmente para uso en consola
window.deviceDetector = deviceDetector;

// Funciones de debug disponibles en consola
console.log('🔧 MVGN Device Detector - Comandos disponibles:');
console.log('deviceDetector.forceDesktop() - Forzar versión desktop');
console.log('deviceDetector.forceMobile() - Forzar versión móvil');
console.log('deviceDetector.logDetectionInfo() - Ver información de detección');
console.log('localStorage.removeItem("mvgn-version-preference") - Resetear preferencias');

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DeviceDetector;
}
