// ===== MOBILE PORTFOLIO - JAVASCRIPT =====

// Configuración móvil
const MOBILE_CONFIG = {
  animationDuration: 200,
  scrollThreshold: 50,
  statsAnimationDuration: 1500,
  isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
  isMobile: window.innerWidth <= 768
};

// Estado de la aplicación móvil
const MobileState = {
  currentSection: 'inicio',
  isScrolling: false,
  lastScrollY: 0,
  touchStartY: 0,
  touchEndY: 0
};

// ===== INICIALIZACIÓN MÓVIL =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('📱 Inicializando portafolio móvil...');
  
  initializeMobileApp();
});

function initializeMobileApp() {
  // Detectar dispositivo
  detectMobileDevice();
  
  // Inicializar componentes móviles
  initializeMobileNavigation();
  initializeMobileScrollEffects();
  initializeMobileAnimations();
  initializeMobileContactForm();
  initializeMobileTouchGestures();
  initializeMobileStats();
  
  // Marcar como cargado
  document.body.classList.add('mobile-loaded');
  
  console.log('✅ Portafolio móvil inicializado correctamente');
}

// ===== DETECCIÓN DE DISPOSITIVO MÓVIL =====
function detectMobileDevice() {
  MOBILE_CONFIG.isMobile = window.innerWidth <= 768;
  MOBILE_CONFIG.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (MOBILE_CONFIG.isMobile) {
    document.body.classList.add('mobile-device');
  }
  if (MOBILE_CONFIG.isTouchDevice) {
    document.body.classList.add('touch-device');
  }
  
  console.log(`📱 Dispositivo móvil detectado: ${MOBILE_CONFIG.isMobile ? 'Sí' : 'No'}, Touch: ${MOBILE_CONFIG.isTouchDevice ? 'Sí' : 'No'}`);
}

// ===== NAVEGACIÓN MÓVIL =====
function initializeMobileNavigation() {
  const navItems = document.querySelectorAll('.mobile-nav-item');
  const menuToggle = document.getElementById('menuToggle');
  
  // Navegación suave para elementos del menú inferior
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remover clase active de todos los elementos
      navItems.forEach(nav => nav.classList.remove('active'));
      
      // Agregar clase active al elemento clickeado
      item.classList.add('active');
      
      // Obtener sección objetivo
      const targetId = item.getAttribute('href').substring(1);
      scrollToMobileSection(targetId);
      
      // Actualizar estado
      MobileState.currentSection = targetId;
    });
  });
  
  // Toggle del menú (para futuras funcionalidades)
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      console.log('🍔 Menú toggle clicked');
      // Aquí puedes agregar funcionalidad de menú lateral si lo necesitas
    });
  }
}

function scrollToMobileSection(sectionId) {
  const section = document.getElementById(sectionId + '-mobile');
  if (section) {
    const offsetTop = section.offsetTop - 60; // Ajustar por header móvil
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// ===== EFECTOS DE SCROLL MÓVIL =====
function initializeMobileScrollEffects() {
  let scrollTimeout;
  
  window.addEventListener('scroll', () => {
    MobileState.isScrolling = true;
    
    // Detectar dirección del scroll
    const currentScrollY = window.pageYOffset;
    const scrollDirection = currentScrollY > MobileState.lastScrollY ? 'down' : 'up';
    MobileState.lastScrollY = currentScrollY;
    
    // Actualizar navegación activa basada en scroll
    updateMobileActiveNavigation();
    
    // Limpiar timeout anterior
    clearTimeout(scrollTimeout);
    
    // Marcar como no scrolleando después de un delay
    scrollTimeout = setTimeout(() => {
      MobileState.isScrolling = false;
    }, 100);
  }, { passive: true });
}

function updateMobileActiveNavigation() {
  const sections = document.querySelectorAll('section[id*="-mobile"]');
  const navItems = document.querySelectorAll('.mobile-nav-item');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.pageYOffset;
    
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id').replace('-mobile', '');
    }
  });
  
  // Actualizar navegación activa
  navItems.forEach(item => {
    const itemSection = item.getAttribute('href').substring(1);
    if (itemSection === currentSection) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  MobileState.currentSection = currentSection;
}

// ===== ANIMACIONES MÓVILES =====
function initializeMobileAnimations() {
  // Animación de entrada para elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('mobile-animate-in');
      }
    });
  }, observerOptions);
  
  // Observar elementos para animación
  const animateElements = document.querySelectorAll('.mobile-card, .mobile-workflow-step, .mobile-tech-item');
  animateElements.forEach(el => observer.observe(el));
}

// ===== ESTADÍSTICAS MÓVILES =====
function initializeMobileStats() {
  const statNumbers = document.querySelectorAll('.mobile-stat-number');
  
  const animateStat = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = MOBILE_CONFIG.statsAnimationDuration;
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 16);
  };
  
  // Observar estadísticas para animación
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStat(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => statsObserver.observe(stat));
}

// ===== FORMULARIO DE CONTACTO MÓVIL =====
function initializeMobileContactForm() {
  const form = document.getElementById('contactFormMobile');
  const inputs = form.querySelectorAll('input, textarea');
  
  // Optimizar inputs para móvil
  inputs.forEach(input => {
    // Prevenir zoom en iOS
    if (input.type === 'text' || input.type === 'email') {
      input.style.fontSize = '16px';
    }
    
    // Mejorar experiencia de focus
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });
  
  // Manejar envío del formulario
  form.addEventListener('submit', handleMobileFormSubmit);
}

function handleMobileFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const nombre = form.querySelector('input[name="nombre"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const mensaje = form.querySelector('textarea[name="mensaje"]').value.trim();
  
  // Validación básica
  if (!nombre || !email || !mensaje) {
    showMobileToast('Por favor, completa todos los campos', 'error');
    return false;
  }
  
  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMobileToast('Por favor, ingresa un email válido', 'error');
    return false;
  }
  
  // Simular envío
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
    showMobileToast('¡Mensaje enviado! Me pondré en contacto contigo pronto.', 'success');
    
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

function showMobileToast(message, type = 'success') {
  const toast = document.getElementById('toast-mobile');
  if (!toast) return;
  
  // Configurar el mensaje y estilo
  toast.textContent = message;
  toast.className = 'mobile-toast';
  
  // Agregar clase de tipo
  if (type === 'error') {
    toast.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    toast.style.boxShadow = '0 8px 20px rgba(239, 68, 68, 0.3)';
  } else {
    toast.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    toast.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.3)';
  }
  
  // Mostrar el toast
  toast.classList.add('show');
  
  // Ocultar después de 4 segundos
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ===== GESTOS TÁCTILES MÓVILES =====
function initializeMobileTouchGestures() {
  let touchStartX = 0;
  let touchStartY = 0;
  
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  
  document.addEventListener('touchend', (e) => {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Detectar swipe horizontal
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe izquierda
        console.log('👈 Swipe izquierda');
      } else {
        // Swipe derecha
        console.log('👉 Swipe derecha');
      }
    }
    
    // Resetear valores
    touchStartX = 0;
    touchStartY = 0;
  }, { passive: true });
}

// ===== TOAST MÓVIL =====
function enviarFormulario(event) {
  return handleMobileFormSubmit(event);
}

// ===== OPTIMIZACIONES DE RENDIMIENTO MÓVIL =====
function optimizeMobilePerformance() {
  // Lazy loading para imágenes
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
  
  // Prevenir scroll en body cuando se abre el teclado en móvil
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      setTimeout(() => {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    });
  });
}

// ===== MANEJADORES DE EVENTOS GLOBALES MÓVILES =====
window.addEventListener('resize', debounce(() => {
  detectMobileDevice();
}, 250));

window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    detectMobileDevice();
    updateMobileActiveNavigation();
  }, 100);
});

// ===== UTILIDADES MÓVILES =====
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

// ===== INICIALIZAR OPTIMIZACIONES =====
document.addEventListener('DOMContentLoaded', () => {
  optimizeMobilePerformance();
});

// ===== MANEJADORES DE ERRORES MÓVILES =====
window.addEventListener('error', (e) => {
  console.error('❌ Error en aplicación móvil:', e.error);
});

// ===== SERVICE WORKER PARA PWA (opcional) =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('✅ Service Worker registrado:', registration);
      })
      .catch(error => {
        console.log('❌ Error al registrar Service Worker:', error);
      });
  });
}

// ===== EXPORTAR FUNCIONES PARA USO GLOBAL =====
window.MobilePortfolio = {
  showToast: showMobileToast,
  scrollToSection: scrollToMobileSection,
  getCurrentSection: () => MobileState.currentSection
};

console.log('🚀 Script móvil cargado correctamente');
