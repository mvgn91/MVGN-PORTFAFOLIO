/**
 * DIVISORES VISUALES ENTRE SECCIONES
 * Efectos estáticos para continuidad visual sin smooth scrolling
 */

class SectionDividers {
  constructor() {
    this.sections = document.querySelectorAll('.section');
    this.navLinks = document.querySelectorAll('.nav-desktop a, .mobile-menu-nav a');
    this.animatedElements = document.querySelectorAll('[data-animate]');
    this.currentSection = 0;
    
    this.init();
  }

  init() {
    this.setupStaticDividers();
    this.setupNavigation();
    this.setupAnimations();
    this.setupStaticEffects();
  }

  /**
   * Configura divisores visuales estáticos entre secciones
   */
  setupStaticDividers() {
    // Crear divisores visuales entre secciones
    this.sections.forEach((section, index) => {
      if (index > 0) {
        // Crear divisor visual antes de cada sección (excepto la primera)
        const divider = document.createElement('div');
        divider.className = 'section-divider';
        divider.innerHTML = `
          <div class="divider-line"></div>
          <div class="divider-accent"></div>
          <div class="divider-line"></div>
        `;
        
        // Insertar el divisor antes de la sección
        section.parentNode.insertBefore(divider, section);
      }
    });

    // Agregar divisor al final de la página
    const lastSection = this.sections[this.sections.length - 1];
    if (lastSection) {
      const finalDivider = document.createElement('div');
      finalDivider.className = 'section-divider final-divider';
      finalDivider.innerHTML = `
        <div class="divider-line"></div>
        <div class="divider-accent large"></div>
        <div class="divider-line"></div>
      `;
      lastSection.parentNode.insertBefore(finalDivider, lastSection.nextSibling);
    }
  }

  /**
   * Configura navegación activa estática
   */
  setupNavigation() {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          this.updateActiveNavigation(sectionId);
          this.activateSection(entry.target);
        }
      });
    }, observerOptions);

    this.sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }

  /**
   * Configura animaciones de entrada estáticas
   */
  setupAnimations() {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.animatedElements.forEach(element => {
      animationObserver.observe(element);
    });
  }

  /**
   * Configura efectos visuales estáticos
   */
  setupStaticEffects() {
    // Efectos de hover estáticos para las secciones
    this.sections.forEach(section => {
      section.addEventListener('mouseenter', () => {
        section.classList.add('section-hover');
      });
      
      section.addEventListener('mouseleave', () => {
        section.classList.remove('section-hover');
      });
    });
  }

  /**
   * Navega directamente a una sección (sin smooth scrolling)
   */
  scrollToSection(targetSection) {
    const targetPosition = targetSection.offsetTop - 80; // Ajuste para header fijo
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'auto'
    });
  }

  /**
   * Actualiza navegación activa
   */
  updateActiveNavigation(sectionId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Activa una sección
   */
  activateSection(section) {
    // Agrega clase activa para efectos visuales
    section.classList.add('active');
    
    // Anima elementos dentro de la sección
    const elementsToAnimate = section.querySelectorAll('[data-animate]');
    elementsToAnimate.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-in');
      }, index * 100); // Delay escalonado
    });
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new SectionDividers();
});

// Inicializar también cuando se cargue la ventana
window.addEventListener('load', () => {
  if (window.SectionDividers) {
    new window.SectionDividers();
  }
});
