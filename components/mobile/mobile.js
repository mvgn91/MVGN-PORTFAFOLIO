/**
 * MVGN Labs - JavaScript Móvil
 * Funcionalidad optimizada para dispositivos móviles
 */

class MobilePortfolio {
  constructor() {
    this.init();
    this.currentScrollY = 0;
    this.isScrolling = false;
    this.touchStartTime = 0;
  }

  init() {
    this.setupMobileMenu();
    this.setupScrollAnimations();
    this.setupSmoothScroll();
    this.setupTouchInteractions();
    this.setupPerformanceOptimizations();
    this.setupParallaxEffects();
    this.setupParticleEffects();
    this.setupAdvancedAnimations();
    this.setupGestureControls();
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
    
    // Animar elementos del menú con efecto escalonado
    const menuItems = menu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-30px) scale(0.9)';
      
      setTimeout(() => {
        item.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0) scale(1)';
      }, index * 120);
    });

    // Efecto de fondo del menú
    menu.style.backdropFilter = 'blur(0px)';
    menu.style.backgroundColor = 'rgba(10, 10, 10, 0.5)';
    
    setTimeout(() => {
      menu.style.backdropFilter = 'blur(25px)';
      menu.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    }, 100);
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
    sections.forEach((section, index) => {
      section.style.setProperty('--card-index', index);
      observer.observe(section);
    });

    // Observar elementos individuales
    const animatedElements = document.querySelectorAll('.mobile-card, .mobile-section-title, .mobile-section-subtitle');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  /**
   * Animar elemento con efectos mejorados
   */
  animateElement(element) {
    if (element.classList.contains('fade-in-up')) return;
    
    // Animación especial para secciones
    if (element.classList.contains('mobile-section')) {
      element.classList.add('visible');
      
      // Animar cards dentro de la sección
      const cards = element.querySelectorAll('.mobile-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px) scale(0.95)';
          
          setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        }, index * 150);
      });
      
      return;
    }
    
    element.classList.add('fade-in-up');
    
    // Agregar delay para elementos en secuencia
    const cards = element.closest('.mobile-grid');
    if (cards) {
      const cardIndex = Array.from(cards.children).indexOf(element);
      element.style.animationDelay = `${cardIndex * 0.2}s`;
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
   * Configurar interacciones táctiles mejoradas
   */
  setupTouchInteractions() {
    // Mejorar feedback táctil para botones
    const interactiveElements = document.querySelectorAll('.mobile-hero-cta, .mobile-card, .mobile-float-contact');
    
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', (e) => {
        this.touchStartTime = Date.now();
        element.style.transform = 'scale(0.95)';
        
        // Efecto de ripple
        this.createRippleEffect(e, element);
      });
      
      element.addEventListener('touchend', () => {
        const touchDuration = Date.now() - this.touchStartTime;
        
        if (touchDuration < 200) {
          // Tocar rápido - efecto de rebote
          element.style.transform = 'scale(1.05)';
          setTimeout(() => {
            element.style.transform = '';
          }, 150);
        } else {
          element.style.transform = '';
        }
      });
      
      element.addEventListener('touchcancel', () => {
        element.style.transform = '';
      });
    });

    // Swipe para cerrar menú
    let touchStartY = 0;
    let touchStartX = 0;
    let touchEndY = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
      touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
      touchEndY = e.changedTouches[0].screenY;
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartY, touchEndY, touchStartX, touchEndX);
    });
  }

  /**
   * Crear efecto de ripple
   */
  createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.touches[0].clientX - rect.left - size / 2;
    const y = event.touches[0].clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  /**
   * Manejar gestos de swipe mejorados
   */
  handleSwipe(startY, endY, startX, endX) {
    const swipeThreshold = 50;
    const swipeDistanceY = startY - endY;
    const swipeDistanceX = startX - endX;
    
    if (Math.abs(swipeDistanceY) > swipeThreshold) {
      if (swipeDistanceY > swipeThreshold) {
        // Swipe hacia arriba - cerrar menú si está abierto
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          this.closeMobileMenu(mobileMenuBtn, mobileMenu);
        }
      }
    }
    
    if (Math.abs(swipeDistanceX) > swipeThreshold) {
      // Swipe horizontal - navegar entre secciones
      this.handleHorizontalSwipe(swipeDistanceX > 0 ? 'left' : 'right');
    }
  }

  /**
   * Manejar swipe horizontal
   */
  handleHorizontalSwipe(direction) {
    const sections = ['#hero', '#about', '#services', '#projects', '#contact'];
    const currentSection = this.getCurrentSection();
    const currentIndex = sections.indexOf(currentSection);
    
    let targetSection;
    if (direction === 'left' && currentIndex < sections.length - 1) {
      targetSection = sections[currentIndex + 1];
    } else if (direction === 'right' && currentIndex > 0) {
      targetSection = sections[currentIndex - 1];
    }
    
    if (targetSection) {
      const target = document.querySelector(targetSection);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  /**
   * Obtener sección actual
   */
  getCurrentSection() {
    const sections = ['#hero', '#about', '#services', '#projects', '#contact'];
    const scrollPosition = window.scrollY + 100;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.querySelector(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        return sections[i];
      }
    }
    
    return '#hero';
  }

  /**
   * Configurar efectos de parallax sutiles
   */
  setupParallaxEffects() {
    let ticking = false;
    
    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      // Efecto parallax sutil en el hero
      const hero = document.querySelector('.mobile-hero');
      if (hero) {
        hero.style.transform = `translateY(${rate * 0.3}px)`;
      }
      
      // Efecto parallax en partículas
      const heroAfter = document.querySelector('.mobile-hero::after');
      if (heroAfter) {
        heroAfter.style.transform = `translateY(${rate * 0.1}px)`;
      }
      
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestTick, { passive: true });
  }

  /**
   * Configurar efectos de partículas interactivas
   */
  setupParticleEffects() {
    // Crear partículas flotantes adicionales
    this.createFloatingParticles();
    
    // Efecto de partículas al hacer scroll
    window.addEventListener('scroll', () => {
      this.updateParticleOpacity();
    });
  }

  /**
   * Crear partículas flotantes
   */
  createFloatingParticles() {
    const hero = document.querySelector('.mobile-hero');
    if (!hero) return;
    
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(255, 76, 76, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        pointer-events: none;
        z-index: 1;
      `;
      
      hero.appendChild(particle);
    }
  }

  /**
   * Actualizar opacidad de partículas
   */
  updateParticleOpacity() {
    const scrolled = window.pageYOffset;
    const particles = document.querySelectorAll('.floating-particle');
    
    particles.forEach((particle, index) => {
      const opacity = Math.max(0.1, 1 - (scrolled * 0.001) - (index * 0.1));
      particle.style.opacity = opacity;
    });
  }

  /**
   * Configurar animaciones avanzadas
   */
  setupAdvancedAnimations() {
    // Animación de entrada para el hero
    this.animateHeroEntrance();
    
    // Animación de scroll para cards
    this.setupCardScrollAnimations();
  }

  /**
   * Animar entrada del hero
   */
  animateHeroEntrance() {
    const heroContent = document.querySelector('.mobile-hero-content');
    if (!heroContent) return;
    
    // Efecto de entrada escalonado
    const elements = heroContent.querySelectorAll('*');
    elements.forEach((element, index) => {
      if (element.tagName !== 'DIV' || element.classList.contains('mobile-profile-photo')) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          element.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 100 + 500);
      }
    });
  }

  /**
   * Configurar animaciones de scroll para cards
   */
  setupCardScrollAnimations() {
    const cards = document.querySelectorAll('.mobile-card');
    
    cards.forEach((card, index) => {
      card.style.setProperty('--card-index', index);
      
      // Efecto de entrada escalonado
      card.style.opacity = '0';
      card.style.transform = 'translateY(40px) scale(0.9)';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            }, index * 200);
          }
        });
      });
      
      observer.observe(card);
    });
  }

  /**
   * Configurar controles de gestos
   */
  setupGestureControls() {
    // Doble tap para ir al inicio
    let lastTap = 0;
    document.addEventListener('touchend', (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      
      if (tapLength < 500 && tapLength > 0) {
        // Doble tap detectado
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      lastTap = currentTime;
    });
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
