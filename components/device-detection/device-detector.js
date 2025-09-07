// Device Detector - Detección inteligente de dispositivos móviles
class DeviceDetector {
  constructor() {
    this.isMobile = false;
    this.isTablet = false;
    this.isDesktop = false;
    this.isLowEndDevice = false;
    this.deviceType = 'desktop';
    
    this.detectDevice();
  }

  detectDevice() {
    // Detectar tipo de dispositivo
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTabletUA = /ipad|android(?!.*mobile)|tablet/i.test(userAgent);
    
    // Detectar por características de pantalla
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Detectar por características táctiles
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isHoverCapable = window.matchMedia('(hover: hover)').matches;
    
    // Detectar por características de hardware
    const hardwareConcurrency = navigator.hardwareConcurrency || 1;
    const deviceMemory = navigator.deviceMemory || 4;
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    // Determinar tipo de dispositivo
    if (isTabletUA || (isMobileUA && screenWidth >= 768)) {
      this.isTablet = true;
      this.deviceType = 'tablet';
    } else if (isMobileUA || (isTouchDevice && !isHoverCapable) || viewportWidth <= 768) {
      this.isMobile = true;
      this.deviceType = 'mobile';
    } else {
      this.isDesktop = true;
      this.deviceType = 'desktop';
    }
    
    // Detectar dispositivos de baja potencia
    this.isLowEndDevice = this.detectLowEndDevice(hardwareConcurrency, deviceMemory, connection);
    
    // Aplicar optimizaciones según el dispositivo
    this.applyDeviceOptimizations();
    
    console.log('Device Detection:', {
      type: this.deviceType,
      isMobile: this.isMobile,
      isTablet: this.isTablet,
      isDesktop: this.isDesktop,
      isLowEndDevice: this.isLowEndDevice,
      screenSize: `${screenWidth}x${screenHeight}`,
      viewportSize: `${viewportWidth}x${viewportHeight}`,
      hardwareConcurrency,
      deviceMemory
    });
  }

  detectLowEndDevice(hardwareConcurrency, deviceMemory, connection) {
    // Detectar dispositivos de baja potencia
    const lowConcurrency = hardwareConcurrency <= 2;
    const lowMemory = deviceMemory <= 2;
    const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
    const isAndroidLowEnd = /android.*chrome\/[.0-9]* (mobile|mini)/i.test(navigator.userAgent);
    
    return lowConcurrency || lowMemory || slowConnection || isAndroidLowEnd;
  }

  applyDeviceOptimizations() {
    // Aplicar optimizaciones CSS según el dispositivo
    const root = document.documentElement;
    
    if (this.isMobile || this.isLowEndDevice) {
      root.classList.add('mobile-device');
      root.classList.add('optimized-performance');
      
      // Reducir efectos para dispositivos móviles
      root.style.setProperty('--animation-duration', '0.2s');
      root.style.setProperty('--transition-duration', '0.15s');
      root.style.setProperty('--blur-intensity', '2px');
    }
    
    if (this.isLowEndDevice) {
      root.classList.add('low-end-device');
      
      // Optimizaciones adicionales para dispositivos de baja potencia
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
      root.style.setProperty('--blur-intensity', '1px');
    }
    
    if (this.isTablet) {
      root.classList.add('tablet-device');
    }
    
    if (this.isDesktop) {
      root.classList.add('desktop-device');
    }
  }

  shouldUseMobileOptimized() {
    return this.isMobile || this.isLowEndDevice;
  }

  shouldUseTabletOptimized() {
    return this.isTablet && !this.isLowEndDevice;
  }

  shouldUseDesktopVersion() {
    return this.isDesktop && !this.isLowEndDevice;
  }

  getOptimizationLevel() {
    if (this.isLowEndDevice) return 'ultra-light';
    if (this.isMobile) return 'mobile-optimized';
    if (this.isTablet) return 'tablet-optimized';
    return 'desktop-full';
  }
}

// Crear instancia global
window.deviceDetector = new DeviceDetector();

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DeviceDetector;
}