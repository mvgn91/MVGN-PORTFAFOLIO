/**
 * MVGN LABS - PORTFOLIO PROFESIONAL
 * JavaScript Principal - Funcionalidades Interactivas
 * Vanilla ES6+ - Sin dependencias externas
 */

// Función global para scroll directo a secciones
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = 80; // Altura del header fijo
    const targetPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'auto'
    });
  }
}

// Función para descargar CV
function downloadCV() {
  // Aquí puedes implementar la lógica para descargar el CV
  // Por ejemplo, abrir un enlace o mostrar un modal
  alert('Función de descarga de CV en desarrollo. Por favor, contacta directamente para obtener mi CV.');
  
  // Alternativa: abrir enlace directo si tienes el CV alojado
  // window.open('/assets/cv-armando-ibanez.pdf', '_blank');
}

// ========================================
// CONSTANTES Y CONFIGURACIÓN
// ========================================
const CONFIG = {
  scrollOffset: 80, // Offset para smooth scroll considerando header fijo
  animationThreshold: 0.1,
  animationRootMargin: '0px 0px -50px 0px',
  backToTopThreshold: 300,
  mobileBreakpoint: 768
};

// ========================================
// UTILIDADES
// ========================================
const utils = {
  // Debounce para optimizar eventos de scroll
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle para eventos de scroll
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Verificar si es dispositivo móvil
  isMobile() {
    return window.innerWidth <= CONFIG.mobileBreakpoint;
  },

  // Verificar si elemento está en viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Obtener scroll position
  getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
};

// ========================================
// DIRECT SCROLL
// ========================================
class DirectScroll {
  constructor() {
    this.init();
  }

  init() {
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
          this.scrollToElement(target);
        }
      });
    });

    // Smooth scroll para botón CTA del hero
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
      heroCta.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
          this.scrollToElement(aboutSection);
        }
      });
    }
  }

  scrollToElement(element) {
    const targetPosition = element.offsetTop - CONFIG.scrollOffset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'auto'
    });

    // Cerrar menú móvil si está abierto
    if (utils.isMobile()) {
      mobileMenu.close();
    }

    // Actualizar navegación activa
    this.updateActiveNavigation(element.id);
  }

  updateActiveNavigation(sectionId) {
    // Remover clase activa de todos los enlaces
    document.querySelectorAll('.nav-desktop a, .mobile-menu-nav a').forEach(link => {
      link.classList.remove('active');
    });

    // Agregar clase activa al enlace correspondiente
    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

// ========================================
// MOBILE MENU
// ========================================
class MobileMenu {
  constructor() {
    this.menu = document.querySelector('.mobile-menu');
    this.menuBtn = document.querySelector('.mobile-menu-btn');
    this.closeBtn = document.querySelector('.mobile-menu-close');
    this.body = document.body;
    
    this.init();
  }

  init() {
    if (!this.menu || !this.menuBtn) return;

    // Toggle del menú
    this.menuBtn.addEventListener('click', () => this.toggle());
    
    // Cerrar con botón X
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Cerrar al hacer click en enlaces
    const menuLinks = this.menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => this.close());
    });

    // Cerrar al hacer click fuera del menú
    this.menu.addEventListener('click', (e) => {
      if (e.target === this.menu) {
        this.close();
      }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });

    // Prevenir scroll del body cuando el menú está abierto
    this.menu.addEventListener('touchmove', (e) => {
      if (this.isOpen()) {
        e.preventDefault();
      }
    });
  }

  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.menu.classList.add('active');
    this.menuBtn.setAttribute('aria-expanded', 'true');
    this.body.style.overflow = 'hidden';
    
    // Animar líneas del botón hamburger
    this.animateHamburger(true);
  }

  close() {
    this.menu.classList.remove('active');
    this.menuBtn.setAttribute('aria-expanded', 'false');
    this.body.style.overflow = '';
    
    // Restaurar líneas del botón hamburger
    this.animateHamburger(false);
  }

  isOpen() {
    return this.menu.classList.contains('active');
  }

  animateHamburger(open) {
    const spans = this.menuBtn.querySelectorAll('span');
    if (spans.length === 3) {
      if (open) {
        // Transformar en X
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        // Restaurar líneas
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    }
  }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
class ScrollAnimations {
  constructor() {
    this.animatedElements = document.querySelectorAll('[data-animate]');
    this.observer = null;
    
    this.init();
  }

  init() {
    if (!this.animatedElements.length) return;

    // Configuración del Intersection Observer
    const options = {
      threshold: CONFIG.animationThreshold,
      rootMargin: CONFIG.animationRootMargin
    };

    // Crear observer
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Una vez animado, dejar de observar
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observar elementos
    this.animatedElements.forEach(element => {
      this.observer.observe(element);
    });
    
    // Inicializar contadores de estadísticas
    this.initStatCounters();
  }
  
  // Inicializar contadores de estadísticas con Material Design 3
  initStatCounters() {
    const statCards = document.querySelectorAll('.stat-card');
    
    if (statCards.length) {
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const progressBar = card.querySelector('.progress-bar');
            const percentage = parseInt(progressBar.getAttribute('data-percentage'));
            
            if (progressBar && !card.classList.contains('animate')) {
              card.classList.add('animate');
              
              // Animar la barra de progreso
              setTimeout(() => {
                progressBar.style.width = percentage + '%';
              }, 200);
              
              // Dejar de observar una vez animado
              counterObserver.unobserve(card);
            }
          }
        });
      }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      });
      
      statCards.forEach(card => {
        counterObserver.observe(card);
      });
    }
  }

  // Método para animar elementos manualmente
  animateElement(element) {
    if (element && element.hasAttribute('data-animate')) {
      element.classList.add('animate-in');
    }
  }

  // Método para resetear animaciones
  resetAnimations() {
    this.animatedElements.forEach(element => {
      element.classList.remove('animate-in');
    });
  }
}

// ========================================
// BACK TO TOP BUTTON
// ========================================
class BackToTop {
  constructor() {
    this.button = document.getElementById('back-to-top');
    this.scrollThreshold = CONFIG.backToTopThreshold;
    
    this.init();
  }

  init() {
    if (!this.button) return;

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', utils.throttle(() => {
      this.toggleVisibility();
    }, 100));

    // Scroll al top al hacer click
    this.button.addEventListener('click', () => {
      this.scrollToTop();
    });

    // Navegación por teclado
    this.button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.scrollToTop();
      }
    });
  }

  toggleVisibility() {
    const scrollPosition = utils.getScrollPosition();
    
    if (scrollPosition > this.scrollThreshold) {
      this.button.classList.add('visible');
    } else {
      this.button.classList.remove('visible');
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });

    // Enfocar el header para accesibilidad
    const header = document.querySelector('.header');
    if (header) {
      header.focus();
    }
  }
}

// ========================================
// FORM VALIDATION
// ========================================
class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.submitBtn = this.form?.querySelector('.submit-btn');
    this.btnText = this.submitBtn?.querySelector('.btn-text');
    this.btnLoading = this.submitBtn?.querySelector('.btn-loading');
    
    this.init();
  }

  init() {
    if (!this.form) return;

    // Validación en tiempo real
    this.setupRealTimeValidation();
    
    // Submit del formulario
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    // Prevenir envío múltiple
    this.form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        this.handleSubmit();
      }
    });
  }

  setupRealTimeValidation() {
    const inputs = this.form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      // Validar al perder foco
      input.addEventListener('blur', () => {
        this.validateField(input);
      });

      // Validar al escribir (con debounce)
      input.addEventListener('input', utils.debounce(() => {
        this.validateField(input);
      }, 300));

      // Limpiar errores al obtener foco
      input.addEventListener('focus', () => {
        this.clearFieldError(input);
      });
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Validaciones específicas por campo
    switch (fieldName) {
      case 'name':
        if (value.length < 2) {
          isValid = false;
          errorMessage = 'El nombre debe tener al menos 2 caracteres';
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Ingresa un email válido';
        }
        break;

      case 'message':
        if (value.length < 10) {
          isValid = false;
          errorMessage = 'El mensaje debe tener al menos 10 caracteres';
        }
        break;
    }

    // Mostrar o limpiar error
    if (!isValid) {
      this.showFieldError(field, errorMessage);
    } else {
      this.clearFieldError(field);
    }

    return isValid;
  }

  showFieldError(field, message) {
    this.clearFieldError(field);

    // Crear elemento de error
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
      color: #FF4C4C;
      font-size: 12px;
      margin-top: 4px;
      font-family: 'Helvetica Neue', sans-serif;
    `;

    // Insertar después del campo
    field.parentNode.appendChild(errorElement);

    // Agregar clase de error al campo
    field.classList.add('error');
    field.style.borderColor = '#FF4C4C';
  }

  clearFieldError(field) {
    // Remover mensaje de error existente
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }

    // Limpiar clases y estilos de error
    field.classList.remove('error');
    field.style.borderColor = '';
  }

  validateForm() {
    const inputs = this.form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  async handleSubmit() {
    if (!this.validateForm()) {
      this.showToast('Por favor, corrige los errores en el formulario', 'error');
      return;
    }

    // Mostrar estado de carga
    this.setLoadingState(true);

    try {
      // Simular envío (aquí iría la lógica real de envío)
      await this.simulateSubmission();
      
      // Éxito
      this.showToast('¡Mensaje enviado con éxito! Te responderemos pronto.', 'success');
      this.form.reset();
      
      // Limpiar errores
      this.form.querySelectorAll('input, textarea').forEach(field => {
        this.clearFieldError(field);
      });

    } catch (error) {
      // Error
      this.showToast('Error al enviar el mensaje. Intenta nuevamente.', 'error');
    } finally {
      // Restaurar estado normal
      this.setLoadingState(false);
    }
  }

  setLoadingState(loading) {
    if (!this.submitBtn || !this.btnText || !this.btnLoading) return;

    if (loading) {
      this.submitBtn.disabled = true;
      this.btnText.style.display = 'none';
      this.btnLoading.style.display = 'inline-block';
    } else {
      this.submitBtn.disabled = false;
      this.btnText.style.display = 'inline';
      this.btnLoading.style.display = 'none';
    }
  }

  async simulateSubmission() {
    // Simular delay de red
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simular éxito 90% de las veces
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Network error'));
        }
      }, 1500);
    });
  }

  showToast(message, type = 'info') {
    // Crear toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Estilos del toast
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 16px 24px;
      border-radius: 8px;
      color: white;
      font-family: 'Helvetica Neue', sans-serif;
      font-size: 14px;
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 300px;
      word-wrap: break-word;
    `;

    // Colores según tipo
    switch (type) {
      case 'success':
        toast.style.background = '#10B981';
        break;
      case 'error':
        toast.style.background = '#EF4444';
        break;
      default:
        toast.style.background = '#3B82F6';
    }

    // Agregar al DOM
    document.body.appendChild(toast);

    // Animar entrada
    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);

    // Auto-remover después de 5 segundos
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 5000);
  }
}

// ========================================
// HEADER SCROLL EFFECTS
// ========================================
class HeaderEffects {
  constructor() {
    this.header = document.querySelector('.header');
    this.lastScrollPosition = 0;
    
    this.init();
  }

  init() {
    if (!this.header) return;

    // Efectos de scroll
    window.addEventListener('scroll', utils.throttle(() => {
      this.handleScroll();
    }, 100));
  }

  handleScroll() {
    const currentScrollPosition = utils.getScrollPosition();
    
    // Agregar/remover clase de scroll
    if (currentScrollPosition > 100) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }

    // Efecto de hide/show en scroll
    if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 200) {
      // Scrolling down
      this.header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      this.header.style.transform = 'translateY(0)';
    }

    this.lastScrollPosition = currentScrollPosition;
  }
}

// ========================================
// PERFORMANCE OPTIMIZATIONS
// ========================================
class PerformanceOptimizer {
  constructor() {
    this.init();
  }

  init() {
    // Lazy loading para imágenes
    this.setupLazyLoading();
    
    // Preload de recursos críticos
    this.preloadCriticalResources();
    
    // Optimizar eventos de scroll
    this.optimizeScrollEvents();
  }

  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  preloadCriticalResources() {
    // Preload de fuentes críticas
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="style"]');
    fontLinks.forEach(link => {
      link.onload = () => {
        link.rel = 'stylesheet';
      };
    });
  }

  optimizeScrollEvents() {
    // Usar passive listeners para mejor performance
    const scrollOptions = { passive: true };
    
    // Aplicar a todos los event listeners de scroll
    window.addEventListener('scroll', () => {}, scrollOptions);
    window.addEventListener('wheel', () => {}, scrollOptions);
    window.addEventListener('touchmove', () => {}, scrollOptions);
  }
}

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================
class AccessibilityEnhancer {
  constructor() {
    this.init();
  }

  init() {
    // Skip links
    this.setupSkipLinks();
    
    // Focus management
    this.setupFocusManagement();
    
    // ARIA live regions
    this.setupLiveRegions();
    
    // Keyboard navigation
    this.setupKeyboardNavigation();
  }

  setupSkipLinks() {
    // Crear skip link si no existe
    if (!document.querySelector('.skip-link')) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main';
      skipLink.className = 'skip-link';
      skipLink.textContent = 'Saltar al contenido principal';
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }

  setupFocusManagement() {
    // Mantener focus visible en elementos interactivos
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  setupLiveRegions() {
    // Crear región live para notificaciones
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  }

  setupKeyboardNavigation() {
    // Navegación por teclado para menú móvil
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
      const focusableElements = mobileMenu.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      mobileMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      });
    }
  }
}

// ========================================
// INITIALIZATION
// ========================================
class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.start());
    } else {
      this.start();
    }
  }

  start() {
    // Inicializar componentes
    this.directScroll = new DirectScroll();
    this.mobileMenu = new MobileMenu();
    this.scrollAnimations = new ScrollAnimations();
    this.backToTop = new BackToTop();
    this.contactForm = new ContactForm();
    this.headerEffects = new HeaderEffects();
    this.performanceOptimizer = new PerformanceOptimizer();
    this.accessibilityEnhancer = new AccessibilityEnhancer();

    // Configurar año actual en footer
    this.setCurrentYear();

    // Configurar eventos globales
    this.setupGlobalEvents();

    // Log de inicialización
    console.log('🎯 MVGN Labs Portfolio - Inicializado correctamente');
  }

  setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  setupGlobalEvents() {
    // Resize handler
    window.addEventListener('resize', utils.debounce(() => {
      // Recalcular layouts si es necesario
      if (this.scrollAnimations) {
        this.scrollAnimations.resetAnimations();
      }
    }, 250));

    // Error handling global
    window.addEventListener('error', (e) => {
      console.error('Error global:', e.error);
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (e) => {
      console.error('Promise rejection no manejada:', e.reason);
    });
  }
}

// ========================================
// FUNCIONES GLOBALES (para compatibilidad)
// ========================================
window.scrollToSection = function(sectionId) {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
    const targetPosition = section.offsetTop - CONFIG.scrollOffset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'auto'
    });
  }
};

// Función para descargar CV
window.downloadCV = function() {
  // Aquí puedes implementar la lógica para descargar el CV
  // Por ejemplo, abrir un enlace o mostrar un modal
  alert('Función de descarga de CV en desarrollo. Por favor, contacta directamente para obtener mi CV.');
  
  // Alternativa: abrir enlace directo si tienes el CV alojado
  // window.open('/assets/cv-armando-ibanez.pdf', '_blank');
};

// ========================================
// HERO SECTION ANIMATIONS
// ========================================
// HERO ANIMATIONS - VERSIÓN SIMPLIFICADA
// ========================================
class HeroAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.setupStaggeredAnimations();
  }

  setupStaggeredAnimations() {
    const heroElements = document.querySelectorAll('.hero-content > *');
    
    if (heroElements.length > 0) {
      heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 150);
      });
    }
  }
}

// Inicializar animaciones de la hero cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new HeroAnimations();
  });
} else {
  new HeroAnimations();
}

// ========================================
// INICIAR APLICACIÓN
// ========================================
// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
  });
} else {
  new PortfolioApp();
}

// Exportar para uso en consola (desarrollo)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PortfolioApp,
    DirectScroll,
    MobileMenu,
    ScrollAnimations,
    BackToTop,
    ContactForm,
    HeaderEffects,
    PerformanceOptimizer,
    AccessibilityEnhancer,
    utils
  };
}

// Sistema de pestañas para el stack tecnológico
function initTechTabs() {
  const tabButtons = document.querySelectorAll('.tech-tab-btn');
  const tabPanels = document.querySelectorAll('.tech-tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // Remover clase active de todos los botones y paneles
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Agregar clase active al botón clickeado
      button.classList.add('active');
      
      // Mostrar el panel correspondiente
      const targetPanel = document.getElementById(targetTab);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// Sistema de pestañas para experiencia laboral
function initExperienceTabs() {
  const tabButtons = document.querySelectorAll('.experience-tab-btn');
  const tabPanels = document.querySelectorAll('.experience-tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // Remover clase active de todos los botones y paneles
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Agregar clase active al botón clickeado
      button.classList.add('active');
      
      // Mostrar el panel correspondiente
      const targetPanel = document.getElementById(targetTab);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar sistema de pestañas
  initTechTabs();
  initExperienceTabs();
});

// Carousel functionality for Work Process section
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.process-carousel');
  if (!carousel) {
    console.log('Carousel not found');
    return;
  }
  
  console.log('Carousel found, initializing...');

  const track = carousel.querySelector('.carousel-track');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const dotsContainer = carousel.querySelector('.carousel-dots');

  let currentIndex = 0;
  let autoPlayInterval;
  const autoPlayDelay = 3000; // 3 seconds for smoother movement
  let isHovered = false;

  // Create dots
  items.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot';
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.carousel-dot');

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    const itemWidth = items[0].offsetWidth; // Get actual item width
    const gap = parseFloat(getComputedStyle(track).gap); // Get actual gap
    const translateX = -currentIndex * (itemWidth + gap);
    track.style.transform = `translateX(${translateX}px)`;
    updateDots();
    updateButtons();
  }

  function goToSlideSmooth(index) {
    currentIndex = index;
    const itemWidth = items[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(track).gap);
    const translateX = -currentIndex * (itemWidth + gap);
    
    // Smooth transition
    track.style.transition = 'transform 0.8s ease-in-out';
    track.style.transform = `translateX(${translateX}px)`;
    
    // Remove transition after animation completes
    setTimeout(() => {
      track.style.transition = '';
    }, 800);
    
    updateDots();
    updateButtons();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    
    // If we've reached the end, reset to beginning seamlessly
    if (currentIndex === 0) {
      // First move to the last item
      goToSlideSmooth(items.length - 1);
      
      // Then after animation, instantly reset to beginning
      setTimeout(() => {
        track.style.transition = 'none';
        currentIndex = 0;
        goToSlide(0);
        
        // Restore transition
        setTimeout(() => {
          track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 50);
      }, 800);
    } else {
      goToSlideSmooth(currentIndex);
    }
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    goToSlideSmooth(currentIndex);
  }

  function updateButtons() {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  function startAutoPlay() {
    if (isHovered) return; // Don't start if hovering
    
    console.log('Starting auto-play...');
    autoPlayInterval = setInterval(() => {
      if (!isHovered) {
        console.log('Auto-play tick, moving to next slide...');
        nextSlide();
      }
    }, autoPlayDelay);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Event listeners
  prevBtn.addEventListener('click', () => {
    prevSlide();
    // Don't restart auto-play on manual navigation
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    // Don't restart auto-play on manual navigation
  });

  // Pause auto-play on hover
  carousel.addEventListener('mouseenter', () => {
    isHovered = true;
    stopAutoPlay();
    console.log('Carousel paused on hover');
  });
  
  carousel.addEventListener('mouseleave', () => {
    isHovered = false;
    startAutoPlay();
    console.log('Carousel resumed after hover');
  });

  // Touch/swipe support for mobile
  let startX = 0;
  let currentX = 0;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isHovered = true;
    stopAutoPlay();
  });

  track.addEventListener('touchmove', (e) => {
    currentX = e.touches[0].clientX;
  });

  track.addEventListener('touchend', () => {
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    isHovered = false;
    startAutoPlay();
  });

  // Initialize
  console.log('Initializing carousel with', items.length, 'items');
  
  // Clone first few items and append to end for seamless loop
  const itemsToClone = Math.min(3, items.length);
  for (let i = 0; i < itemsToClone; i++) {
    const clone = items[i].cloneNode(true);
    clone.classList.add('carousel-item-clone');
    track.appendChild(clone);
  }
  
  updateDots();
  updateButtons();
  startAutoPlay();
  console.log('Carousel initialization complete');
});
