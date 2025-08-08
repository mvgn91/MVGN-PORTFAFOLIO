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
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  
  // Navegación suave para menú superior (desktop)
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
  
  // Navegación suave para menú inferior (móvil)
  mobileNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
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
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if (AppState.scrollY >= sectionTop && AppState.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  // Actualizar menú superior (desktop)
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
  
  // Actualizar menú inferior (móvil)
  mobileNavItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${currentSection}`) {
      item.classList.add('active');
    }
  });
}

// ===== BARRA DE PROGRESO =====
function initializeProgressBar() {
  const progressBar = document.getElementById('progressBar');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    progressBar.style.width = scrollPercent + '%';
  });
}

// ===== EFECTOS DE SCROLL =====
function initializeScrollEffects() {
  // Actualizar navegación activa
  updateActiveNavigation();
  
  // Inicializar barra de progreso
  initializeProgressBar();
  
  // Efectos de aparición en scroll optimizados para móviles
  const observerOptions = {
    threshold: CONFIG.isMobile ? 0.05 : 0.1,
    rootMargin: CONFIG.isMobile ? '0px 0px -30px 0px' : '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observar elementos para animaciones
  const animateElements = document.querySelectorAll('.service-card, .project-card, .tech-category, .specialty-item, .experience-item, .smooth-scroll-element');
  animateElements.forEach(el => observer.observe(el));
  
  // Inicializar efectos de parallax
  if (!CONFIG.isMobile) {
    initializeParallaxEffects();
  }
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

// Función mejorada para enviar formulario
function enviarFormulario(event) {
    event.preventDefault();
    
    // Obtener el formulario que se está enviando
    const form = event.target;
    const formId = form.id;
    
    // Obtener los valores del formulario
    const nombre = form.querySelector('input[name="nombre"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const mensaje = form.querySelector('textarea[name="mensaje"]').value.trim();
    
    // Validación básica
    if (!nombre || !email || !mensaje) {
        mostrarToast('Por favor, completa todos los campos', 'error');
        return false;
    }
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarToast('Por favor, ingresa un email válido', 'error');
        return false;
    }
    
    // Simular envío (aquí iría la lógica real de envío)
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Cambiar el botón a estado de carga
    submitButton.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Enviando...';
    submitButton.disabled = true;
    
    // Simular delay de envío
    setTimeout(() => {
        // Restaurar el botón
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Mostrar mensaje de éxito
        mostrarToast('¡Mensaje enviado! Me pondré en contacto contigo pronto.', 'success');
        
        // Limpiar el formulario
        form.reset();
        
        // Enfoque en el primer campo
        const firstInput = form.querySelector('input');
        if (firstInput) {
            firstInput.focus();
        }
    }, 2000);
    
    return false;
}

// Función mejorada para mostrar toast
function mostrarToast(mensaje, tipo = 'success') {
    // Determinar qué toast usar basado en el dispositivo
    const isMobile = window.innerWidth <= 768;
    const toastId = isMobile ? 'toast-mobile' : 'toast';
    const toast = document.getElementById(toastId);
    
    if (!toast) return;
    
    // Configurar el mensaje y estilo
    toast.textContent = mensaje;
    toast.className = isMobile ? 'mobile-toast' : 'toast';
    
    // Agregar clase de tipo
    if (tipo === 'error') {
        toast.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        toast.style.boxShadow = '0 8px 20px rgba(239, 68, 68, 0.3)';
    } else {
        toast.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        toast.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.3)';
    }
    
    // Mostrar el toast
    if (isMobile) {
        toast.classList.add('show');
    } else {
        toast.style.transform = 'translateX(0)';
    }
    
    // Ocultar después de 4 segundos
    setTimeout(() => {
        if (isMobile) {
            toast.classList.remove('show');
        } else {
            toast.style.transform = 'translateX(400px)';
        }
    }, 4000);
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
  

}

function updateScrollState() {
  AppState.lastScrollY = AppState.scrollY;
  AppState.scrollY = window.scrollY;
  AppState.scrollDirection = AppState.scrollY > AppState.lastScrollY ? 'down' : 'up';
  
  updateActiveNavigation();
  toggleBackToTop();
  
  // Aplicar efectos de parallax
  if (!CONFIG.isMobile) {
    applyParallaxEffects();
  }
}

// ===== EFECTOS DE PARALLAX =====
function initializeParallaxEffects() {
  console.log('🎨 Inicializando efectos de parallax...');
  
  // Agregar clases de parallax a elementos específicos
  const parallaxElements = document.querySelectorAll('.hero-content, .about-content, .service-card, .project-card, .experience-item');
  
  parallaxElements.forEach((element, index) => {
    if (index % 3 === 0) {
      element.classList.add('parallax-slow');
    } else if (index % 3 === 1) {
      element.classList.add('parallax-medium');
    } else {
      element.classList.add('parallax-fast');
    }
  });
  
  // Agregar clases de animación de entrada
  const slideElements = document.querySelectorAll('.service-card:nth-child(odd), .project-card:nth-child(odd)');
  slideElements.forEach(el => el.classList.add('slide-in-left'));
  
  const slideRightElements = document.querySelectorAll('.service-card:nth-child(even), .project-card:nth-child(even)');
  slideRightElements.forEach(el => el.classList.add('slide-in-right'));
  
  const experienceItems = document.querySelectorAll('.experience-item');
  experienceItems.forEach(el => el.classList.add('slide-in-bottom'));
  
  // Agregar efectos de hover mejorados
  const hoverElements = document.querySelectorAll('.service-card, .project-card');
  hoverElements.forEach(el => el.classList.add('hover-lift'));
  
  console.log(`✅ Parallax inicializado: ${parallaxElements.length} elementos`);
}

function applyParallaxEffects() {
  const scrolled = AppState.scrollY;
  const rate = scrolled * -0.3;
  const rateMedium = scrolled * -0.2;
  const rateFast = scrolled * -0.1;
  
  // Aplicar parallax a elementos lentos
  const slowElements = document.querySelectorAll('.parallax-slow');
  slowElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.style.transform = `translateY(${rate * 0.05}px)`;
    }
  });
  
  // Aplicar parallax a elementos medianos
  const mediumElements = document.querySelectorAll('.parallax-medium');
  mediumElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.style.transform = `translateY(${rateMedium * 0.05}px)`;
    }
  });
  
  // Aplicar parallax a elementos rápidos
  const fastElements = document.querySelectorAll('.parallax-fast');
  fastElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.style.transform = `translateY(${rateFast * 0.05}px)`;
    }
  });
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
  
  // Inicializar Lucide Icons si está disponible
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// ===== MANEJO DE ERRORES =====
window.addEventListener('error', (e) => {
  console.error('❌ Error en la aplicación:', e.error);
});

// ===== FUNCIONES GLOBALES PARA COMPATIBILIDAD =====
window.scrollToSection = scrollToSection;
window.enviarFormulario = enviarFormulario;