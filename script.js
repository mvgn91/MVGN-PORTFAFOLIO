// ===== ARMANDO IBAÑEZ PORTFOLIO - MAIN SCRIPT =====

// Configuración global
const CONFIG = {
  animationDuration: 300,
  scrollThreshold: 100,
  statsAnimationDuration: 2000
};

// Estado de la aplicación
const AppState = {
  currentSection: 'inicio',
  isNavOpen: false,
  scrollY: 0
};

// ===== INICIALIZACIÓN DE LA APLICACIÓN =====
function initializeApp() {
  console.log('🚀 Inicializando portafolio de Armando Ibañez...');
  
  // Inicializar componentes
  initializeNavigation();
  initializeScrollEffects();
  initializeAnimations();
  initializeBackToTop();
  initializeContactFunctions();
  setupGlobalEventListeners();
  
  // Marcar como cargado
  document.body.classList.add('loaded');
  
  console.log('✅ Portafolio inicializado correctamente');
}

// ===== NAVEGACIÓN =====
function initializeNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Toggle del menú móvil
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      AppState.isNavOpen = !AppState.isNavOpen;
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
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
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        AppState.isNavOpen = false;
      }
    });
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 70; // Ajustar por la altura de la navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
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
  
  // Efectos de aparición en scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
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
    const duration = 2000;
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
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => statsObserver.observe(stat));
}

// ===== BACK TO TOP =====
function initializeBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

function toggleBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    if (AppState.scrollY > 500) {
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
  }
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

// ===== EVENT LISTENERS GLOBALES =====
function setupGlobalEventListeners() {
  // Scroll events
  window.addEventListener('scroll', () => {
    AppState.scrollY = window.scrollY;
    updateActiveNavigation();
    toggleBackToTop();
  });
  
  // Resize events
  window.addEventListener('resize', debounce(() => {
    // Recalcular posiciones si es necesario
  }, 250));
  
  // Click fuera del menú móvil para cerrarlo
  document.addEventListener('click', (e) => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (AppState.isNavOpen && 
        !navToggle.contains(e.target) && 
        !navMenu.contains(e.target)) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      AppState.isNavOpen = false;
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
});

// ===== MANEJO DE ERRORES =====
window.addEventListener('error', (e) => {
  console.error('❌ Error en la aplicación:', e.error);
});

// ===== FUNCIONES GLOBALES PARA COMPATIBILIDAD =====
window.scrollToSection = scrollToSection;
window.enviarFormulario = enviarFormulario;