/**
 * MVGN Labs - JavaScript Móvil
 * Funcionalidad optimizada para dispositivos móviles
 */

class MobilePortfolio {
  constructor() {
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupScrollAnimations();
    this.setupSmoothScroll();
    this.setupTouchInteractions();
    this.setupPerformanceOptimizations();
  }

  /**
   * Configurar menú móvil
   */
  setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuBtn || !mobileMenu) return;

    // Toggle del menú
    mobileMenuBtn.addEventListener('click', () => {
      this.toggleMobileMenu(mobileMenuBtn, mobileMenu);
    });

    // Cerrar menú al hacer clic en enlaces
    document.querySelectorAll('.mobile-menu-nav a').forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu(mobileMenuBtn, mobileMenu);
      });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        this.closeMobileMenu(mobileMenuBtn, mobileMenu);
      }
    });

    // Cerrar menú al hacer scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (mobileMenu.classList.contains('active')) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          this.closeMobileMenu(mobileMenuBtn, mobileMenu);
        }, 100);
      }
    });
  }

  /**
   * Toggle del menú móvil
   */
  toggleMobileMenu(btn, menu) {
    const isActive = menu.classList.contains('active');
    
    if (isActive) {
      this.closeMobileMenu(btn, menu);
    } else {
      this.openMobileMenu(btn, menu);
    }
  }

  /**
   * Abrir menú móvil
   */
  openMobileMenu(btn, menu) {
    btn.classList.add('active');
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animar elementos del menú
    const menuItems = menu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      
      setTimeout(() => {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, index * 100);
    });
  }

  /**
   * Cerrar menú móvil
   */
  closeMobileMenu(btn, menu) {
    btn.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = '';
    
    // Resetear animaciones
    const menuItems = menu.querySelectorAll('a');
    menuItems.forEach(item => {
      item.style.transition = '';
      item.style.opacity = '';
      item.style.transform = '';
    });
  }

  /**
   * Configurar animaciones al hacer scroll
   */
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, observerOptions);

    // Observar secciones completas
    const sections = document.querySelectorAll('.mobile-section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Observar elementos individuales
    const animatedElements = document.querySelectorAll('.mobile-card, .mobile-section-title, .mobile-section-subtitle');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  /**
   * Animar elemento
   */
  animateElement(element) {
    if (element.classList.contains('fade-in-up')) return;
    
    // Animación especial para secciones
    if (element.classList.contains('mobile-section')) {
      element.classList.add('visible');
      return;
    }
    
    element.classList.add('fade-in-up');
    
    // Agregar delay para elementos en secuencia
    const cards = element.closest('.mobile-grid');
    if (cards) {
      const cardIndex = Array.from(cards.children).indexOf(element);
      element.style.animationDelay = `${cardIndex * 0.15}s`;
    }
  }

  /**
   * Configurar scroll suave
   */
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
          const headerHeight = 60; // Altura del header móvil
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Configurar interacciones táctiles
   */
  setupTouchInteractions() {
    // Mejorar feedback táctil para botones
    const interactiveElements = document.querySelectorAll('.mobile-hero-cta, .mobile-card, .mobile-float-contact');
    
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', () => {
        element.style.transform = 'scale(0.95)';
      });
      
      element.addEventListener('touchend', () => {
        element.style.transform = '';
      });
      
      element.addEventListener('touchcancel', () => {
        element.style.transform = '';
      });
    });

    // Swipe para cerrar menú
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', (e) => {
      touchEndY = e.changedTouches[0].screenY;
      this.handleSwipe(touchStartY, touchEndY);
    });
  }

  /**
   * Manejar gestos de swipe
   */
  handleSwipe(startY, endY) {
    const swipeThreshold = 50;
    const swipeDistance = startY - endY;
    
    if (swipeDistance > swipeThreshold) {
      // Swipe hacia arriba - cerrar menú si está abierto
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        this.closeMobileMenu(mobileMenuBtn, mobileMenu);
      }
    }
  }

  /**
   * Optimizaciones de rendimiento
   */
  setupPerformanceOptimizations() {
    // Lazy loading para imágenes
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }

    // Throttle para eventos de scroll
    let ticking = false;
    
    const updateScroll = () => {
      // Aquí puedes agregar lógica adicional para el scroll
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });

    // Preload de recursos críticos
    this.preloadCriticalResources();
  }

  /**
   * Preload de recursos críticos
   */
  preloadCriticalResources() {
    // Preload de fuentes
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="style"]');
    fontLinks.forEach(link => {
      link.rel = 'stylesheet';
    });

    // Preload de imágenes críticas
    const criticalImages = [
      'assets/favicon.png',
      'assets/profile.jpg'
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  /**
   * Métodos de utilidad
   */
  
  // Detectar si es dispositivo móvil
  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // Detectar orientación del dispositivo
  getOrientation() {
    return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
  }

  // Ajustar layout según orientación
  handleOrientationChange() {
    const orientation = this.getOrientation();
    
    if (orientation === 'landscape') {
      document.body.classList.add('landscape');
    } else {
      document.body.classList.remove('landscape');
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new MobilePortfolio();
});

// Manejar cambios de orientación
window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    // Reajustar después del cambio de orientación
    window.scrollTo(0, 0);
  }, 100);
});

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registrado:', registration);
      })
      .catch(error => {
        console.log('SW error:', error);
      });
  });
}

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MobilePortfolio;
}
