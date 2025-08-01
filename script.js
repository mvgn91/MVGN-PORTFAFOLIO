// ===== ARMANDO IBAÑEZ PORTFOLIO - MAIN SCRIPT =====

// Configuración global
const CONFIG = {
  animationDuration: 300,
  scrollThreshold: 100,
  statsAnimationDuration: 2000,
  isMobile: window.innerWidth <= 768,
  isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0
};

// Estado de la aplicación
const AppState = {
  currentSection: 'inicio',
  isNavOpen: false,
  scrollY: 0,
  lastScrollY: 0,
  scrollDirection: 'down',
  touchStartY: 0,
  touchEndY: 0
};

// ===== INICIALIZACIÓN DE LA APLICACIÓN =====
function initializeApp() {
  console.log('🚀 Inicializando portafolio de Armando Ibañez...');
  
  // Detectar dispositivo
  detectDevice();
  
  // Inicializar componentes
  initializeNavigation();
  initializeScrollEffects();
  initializeAnimations();
  initializeBackToTop();
  initializeContactFunctions();
  initializeMobileOptimizations();
  setupGlobalEventListeners();
  
  // Marcar como cargado
  document.body.classList.add('loaded');
  
  console.log('✅ Portafolio inicializado correctamente');
}

// ===== DETECCIÓN DE DISPOSITIVO =====
function detectDevice() {
  // Actualizar configuración basada en el dispositivo
  CONFIG.isMobile = window.innerWidth <= 768;
  CONFIG.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // Agregar clases al body para CSS específico
  if (CONFIG.isMobile) {
    document.body.classList.add('mobile-device');
  }
  if (CONFIG.isTouchDevice) {
    document.body.classList.add('touch-device');
  }
  
  console.log(`📱 Dispositivo detectado: ${CONFIG.isMobile ? 'Móvil' : 'Desktop'}, ${CONFIG.isTouchDevice ? 'Touch' : 'No touch'}`);
}

// ===== NAVEGACIÓN =====
function initializeNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Toggle del menú móvil
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileMenu();
    });
  }
  
  // Navegación suave
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Cerrar menú móvil si está abierto
      if (AppState.isNavOpen) {
        closeMobileMenu();
      }
    });
  });
}

function toggleMobileMenu() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  AppState.isNavOpen = !AppState.isNavOpen;
  
  if (navToggle) navToggle.classList.toggle('active');
  if (navMenu) navMenu.classList.toggle('active');
  
  // Prevenir scroll del body cuando el menú está abierto
  if (AppState.isNavOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMobileMenu() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  AppState.isNavOpen = false;
  
  if (navToggle) navToggle.classList.remove('active');
  if (navMenu) navMenu.classList.remove('active');
  document.body.style.overflow = '';
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 70; // Ajustar por la altura de la navbar
    
    // Scroll suave con optimización para móviles
    if (CONFIG.isMobile) {
      // En móviles, usar scroll más rápido
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}

function updateActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if (AppState.scrollY >= sectionTop && AppState.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// ===== EFECTOS DE SCROLL =====
function initializeScrollEffects() {
  // Actualizar navegación activa
  updateActiveNavigation();
  
  // Efectos de aparición en scroll optimizados para móviles
  const observerOptions = {
    threshold: CONFIG.isMobile ? 0.05 : 0.1,
    rootMargin: CONFIG.isMobile ? '0px 0px -30px 0px' : '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);
  
  // Observar elementos para animaciones
  const animateElements = document.querySelectorAll('.service-card, .project-card, .tech-category, .specialty-item');
  animateElements.forEach(el => observer.observe(el));
}

// ===== ANIMACIONES =====
function initializeAnimations() {
  // Animación de números en estadísticas
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateNumber = (element) => {
    const target = parseInt(element.textContent);
    const duration = CONFIG.isMobile ? 1500 : 2000; // Más rápido en móviles
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + '+';
    }, 16);
  };
  
  // Observar estadísticas para animación
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: CONFIG.isMobile ? 0.3 : 0.5 });
  
  statNumbers.forEach(stat => statsObserver.observe(stat));
}

// ===== BACK TO TOP =====
function initializeBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    // Optimizar para touch en móviles
    if (CONFIG.isTouchDevice) {
      backToTopBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        scrollToTop();
      });
    } else {
      backToTopBtn.addEventListener('click', scrollToTop);
    }
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    const threshold = CONFIG.isMobile ? 300 : 500; // Mostrar antes en móviles
    
    if (AppState.scrollY > threshold) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
}

// ===== FUNCIONES DE CONTACTO =====
function initializeContactFunctions() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
    
    // Optimizaciones para móviles
    if (CONFIG.isMobile) {
      optimizeFormForMobile(contactForm);
    }
  }
}

function optimizeFormForMobile(form) {
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    // Prevenir zoom en iOS
    if (input.type === 'text' || input.type === 'email') {
      input.style.fontSize = '16px';
    }
    
    // Mejorar UX en móviles
    input.addEventListener('focus', () => {
      // Scroll suave al input en móviles
      setTimeout(() => {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    });
  });
}

function handleContactSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {
    nombre: formData.get('nombre'),
    email: formData.get('email'),
    mensaje: formData.get('mensaje')
  };
  
  // Simular envío (aquí puedes integrar con tu backend)
  console.log('📧 Datos del formulario:', data);
  
  // Mostrar mensaje de éxito
  mostrarToast('¡Mensaje enviado! Me pondré en contacto contigo pronto.');
  
  // Limpiar formulario
  event.target.reset();
  
  // Cerrar teclado en móviles
  if (CONFIG.isMobile) {
    document.activeElement.blur();
  }
}

function mostrarToast(mensaje) {
  const toast = document.getElementById('toast');
  
  if (toast) {
    toast.textContent = mensaje;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

// Función global para el formulario (mantener compatibilidad)
function enviarFormulario(event) {
  handleContactSubmit(event);
  return false;
}

// ===== OPTIMIZACIONES MÓVILES =====
function initializeMobileOptimizations() {
  if (!CONFIG.isMobile) return;
  
  // Optimizar carousel de tecnologías para touch
  optimizeTechCarousel();
  
  // Mejorar navegación por gestos
  initializeTouchGestures();
  
  // Optimizar imágenes
  optimizeImages();
}

function optimizeTechCarousel() {
  const techCarousel = document.querySelector('.tech-carousel');
  if (!techCarousel) return;
  
  let isScrolling = false;
  let startX = 0;
  let scrollLeft = 0;
  
  techCarousel.addEventListener('touchstart', (e) => {
    isScrolling = true;
    startX = e.touches[0].pageX - techCarousel.offsetLeft;
    scrollLeft = techCarousel.scrollLeft;
  });
  
  techCarousel.addEventListener('touchmove', (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.touches[0].pageX - techCarousel.offsetLeft;
    const walk = (x - startX) * 2;
    techCarousel.scrollLeft = scrollLeft - walk;
  });
  
  techCarousel.addEventListener('touchend', () => {
    isScrolling = false;
  });
}

function initializeTouchGestures() {
  // Detectar dirección del scroll para optimizar navegación
  let touchStartY = 0;
  let touchEndY = 0;
  
  document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
  });
  
  document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
      // Swipe detectado - puedes agregar funcionalidad aquí
      console.log('Swipe detectado:', diff > 0 ? 'arriba' : 'abajo');
    }
  }
}

function optimizeImages() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Lazy loading nativo
    img.loading = 'lazy';
    
    // Optimizar para pantallas de alta densidad
    if (window.devicePixelRatio > 1) {
      img.style.imageRendering = 'crisp-edges';
    }
  });
}

// ===== EVENT LISTENERS GLOBALES =====
function setupGlobalEventListeners() {
  // Scroll events optimizados
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollState();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Resize events
  window.addEventListener('resize', debounce(() => {
    detectDevice();
    // Recalcular posiciones si es necesario
  }, 250));
  
  // Click fuera del menú móvil para cerrarlo
  document.addEventListener('click', (e) => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (AppState.isNavOpen && 
        !navToggle.contains(e.target) && 
        !navMenu.contains(e.target)) {
      closeMobileMenu();
    }
  });
  
  // Prevenir scroll cuando el menú móvil está abierto
  document.addEventListener('touchmove', (e) => {
    if (AppState.isNavOpen) {
      e.preventDefault();
    }
  }, { passive: false });
}

function updateScrollState() {
  AppState.lastScrollY = AppState.scrollY;
  AppState.scrollY = window.scrollY;
  AppState.scrollDirection = AppState.scrollY > AppState.lastScrollY ? 'down' : 'up';
  
  updateActiveNavigation();
  toggleBackToTop();
}

// ===== UTILIDADES =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== INICIALIZACIÓN CUANDO EL DOM ESTÉ LISTO =====
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

// ===== MANEJO DE ERRORES =====
window.addEventListener('error', (e) => {
  console.error('❌ Error en la aplicación:', e.error);
});

// ===== FUNCIONES GLOBALES PARA COMPATIBILIDAD =====
window.scrollToSection = scrollToSection;
window.enviarFormulario = enviarFormulario;