/**
 * MVGN Labs - JavaScript Revolucionario para Versión Móvil
 * Funcionalidades avanzadas tipo app premium
 */

class RevolutionaryMobilePortfolio {
  constructor() {
    this.init();
    this.currentSection = 'hero';
    this.currentCard = 1;
    this.currentService = 'web';
    this.isMenuOpen = false;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;
    this.isScrolling = false;
    this.scrollTimeout = null;
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
  }

  init() {
    this.setupEventListeners();
    this.setupMenuSystem();
    this.setupCardSystem();
    this.setupCarouselSystem();
    this.setupTimelineSystem();
    this.setupParticleSystem();
    this.setupScrollAnimations();
    this.setupTouchGestures();
    this.setupPerformanceOptimizations();
    this.initializeAnimations();
  }

  /**
   * Configurar Event Listeners
   */
  setupEventListeners() {
    // Menú de construcción
    const menuBtn = document.getElementById('construction-menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => this.toggleMenu());
    }

    // Navegación por secciones
    document.querySelectorAll('[data-section]').forEach(element => {
      element.addEventListener('click', (e) => {
        const section = e.currentTarget.dataset.section;
        this.navigateToSection(section);
      });
    });

    // Navegación inferior
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const section = e.currentTarget.dataset.section;
        this.navigateToSection(section);
        this.updateBottomNav(section);
      });
    });

    // Indicadores de scroll
    document.querySelectorAll('.scroll-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const section = e.currentTarget.dataset.section;
        this.navigateToSection(section);
      });
    });

    // Botones de acción
    document.querySelectorAll('.action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.currentTarget.dataset.action;
        this.handleAction(action);
      });
    });

    // Filtros de proyectos
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.currentTarget.dataset.filter;
        this.filterProjects(filter);
      });
    });

    // Contacto
    document.querySelectorAll('.contact-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const contact = e.currentTarget.dataset.contact;
        this.handleContact(contact);
      });
    });

    // Redes sociales
    document.querySelectorAll('.social-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const social = e.currentTarget.dataset.social;
        this.handleSocial(social);
      });
    });

    // Scroll y resize
    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.handleResize());
    window.addEventListener('orientationchange', () => this.handleOrientationChange());

    // Touch events
    document.addEventListener('touchstart', (e) => this.handleTouchStart(e));
    document.addEventListener('touchmove', (e) => this.handleTouchMove(e));
    document.addEventListener('touchend', (e) => this.handleTouchEnd(e));

    // Mouse events para efectos líquidos
    document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    document.addEventListener('click', (e) => this.handleClick(e));
  }

  /**
   * Sistema de Menú de Construcción
   */
  setupMenuSystem() {
    const menu = document.getElementById('construction-menu');
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const section = item.dataset.section;
        this.navigateToSection(section);
        this.toggleMenu();
      });
    });
  }

  toggleMenu() {
    const menu = document.getElementById('construction-menu');
    const menuBtn = document.getElementById('construction-menu-btn');
    
    if (!menu || !menuBtn) return;

    this.isMenuOpen = !this.isMenuOpen;
    
    if (this.isMenuOpen) {
      menu.classList.add('active');
      menuBtn.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  /**
   * Sistema de Tarjetas Deslizables
   */
  setupCardSystem() {
    const cards = document.querySelectorAll('.info-card');
    const indicators = document.querySelectorAll('.card-dot');
    
    if (cards.length === 0) return;

    // Auto-rotación de tarjetas
    setInterval(() => {
      this.rotateCards();
    }, 4000);

    // Indicadores clickeables
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        this.showCard(index + 1);
      });
    });
  }

  rotateCards() {
    const totalCards = document.querySelectorAll('.info-card').length;
    this.currentCard = this.currentCard % totalCards + 1;
    this.showCard(this.currentCard);
  }

  showCard(cardNumber) {
    const cards = document.querySelectorAll('.info-card');
    const indicators = document.querySelectorAll('.card-dot');
    
    cards.forEach((card, index) => {
      if (index + 1 === cardNumber) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    indicators.forEach((indicator, index) => {
      if (index + 1 === cardNumber) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });

    this.currentCard = cardNumber;
  }

  /**
   * Sistema de Carousel 3D
   */
  setupCarouselSystem() {
    const serviceCards = document.querySelectorAll('.service-card');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    
    if (serviceCards.length === 0) return;

    // Auto-rotación del carousel
    setInterval(() => {
      this.rotateCarousel();
    }, 5000);

    // Indicadores clickeables
    carouselDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.showService(index);
      });
    });

    // Efectos 3D en hover
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.enhance3DEffect(card);
      });
      
      card.addEventListener('mouseleave', () => {
        this.reset3DEffect(card);
      });
    });
  }

  rotateCarousel() {
    const totalServices = document.querySelectorAll('.service-card').length;
    const currentIndex = Array.from(document.querySelectorAll('.carousel-dot')).findIndex(dot => dot.classList.contains('active'));
    const nextIndex = (currentIndex + 1) % totalServices;
    this.showService(nextIndex);
  }

  showService(index) {
    const dots = document.querySelectorAll('.carousel-dot');
    const services = ['web', 'branding', 'marketing', 'support'];
    
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    this.currentService = services[index];
  }

  enhance3DEffect(card) {
    card.style.transform = 'translateZ(100px) rotateY(25deg) scale(1.05)';
    card.style.boxShadow = '0 20px 60px rgba(255, 76, 76, 0.4)';
  }

  reset3DEffect(card) {
    card.style.transform = '';
    card.style.boxShadow = '';
  }

  /**
   * Sistema de Timeline Interactivo
   */
  setupTimelineSystem() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length === 0) return;

    // Observer para animaciones de entrada
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.animateTimelineMarker(entry.target);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });

    timelineItems.forEach(item => {
      observer.observe(item);
    });
  }

  animateTimelineMarker(item) {
    const marker = item.querySelector('.timeline-marker');
    if (!marker) return;

    marker.style.animation = 'none';
    marker.offsetHeight; // Trigger reflow
    marker.style.animation = 'markerIconBounce 2s ease-in-out infinite';
  }

  /**
   * Sistema de Partículas Interactivo
   */
  setupParticleSystem() {
    this.createParticles();
    this.animateParticles();
    
    // Seguimiento del dedo/ratón
    document.addEventListener('mousemove', (e) => {
      this.updateParticleField(e.clientX, e.clientY);
    });

    document.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      this.updateParticleField(touch.clientX, touch.clientY);
    });
  }

  createParticles() {
    const particleSystem = document.querySelector('.particle-system');
    if (!particleSystem) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(255, 76, 76, ${Math.random() * 0.5 + 0.3});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
        animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
      `;
      
      particleSystem.appendChild(particle);
      this.particles.push(particle);
    }
  }

  animateParticles() {
    this.particles.forEach(particle => {
      const animation = particle.style.animation;
      if (animation.includes('particleFloat')) {
        // La animación ya está configurada
        return;
      }
      
      particle.style.animation = `particleFloat ${Math.random() * 10 + 10}s linear infinite`;
    });
  }

  updateParticleField(x, y) {
    const fingerFollower = document.querySelector('.finger-follower');
    const magneticField = document.querySelector('.magnetic-field');
    
    if (fingerFollower && magneticField) {
      fingerFollower.style.left = x + 'px';
      fingerFollower.style.top = y + 'px';
      fingerFollower.classList.add('active');
      
      magneticField.style.left = (x - 100) + 'px';
      magneticField.style.top = (y - 100) + 'px';
      magneticField.classList.add('active');
      
      // Atraer partículas cercanas
      this.attractNearbyParticles(x, y);
      
      setTimeout(() => {
        fingerFollower.classList.remove('active');
        magneticField.classList.remove('active');
      }, 100);
    }
  }

  attractNearbyParticles(x, y) {
    this.particles.forEach(particle => {
      const rect = particle.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(rect.left + rect.width / 2 - x, 2) + 
        Math.pow(rect.top + rect.height / 2 - y, 2)
      );
      
      if (distance < 100) {
        const angle = Math.atan2(
          y - (rect.top + rect.height / 2),
          x - (rect.left + rect.width / 2)
        );
        
        const force = (100 - distance) / 100;
        const moveX = Math.cos(angle) * force * 5;
        const moveY = Math.sin(angle) * force * 5;
        
        particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        
        setTimeout(() => {
          particle.style.transform = '';
        }, 500);
      }
    });
  }

  /**
   * Sistema de Animaciones de Scroll
   */
  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal', 'revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observar elementos para animaciones
    document.querySelectorAll('.timeline-item, .project-item, .service-card').forEach(item => {
      observer.observe(item);
    });
  }

  /**
   * Sistema de Gestos Táctiles
   */
  setupTouchGestures() {
    let startTime = 0;
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    let minSwipeDistance = 50;

    document.addEventListener('touchstart', (e) => {
      startTime = new Date().getTime();
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      endY = e.changedTouches[0].clientY;
      
      const timeElapsed = new Date().getTime() - startTime;
      const distanceX = Math.abs(endX - startX);
      const distanceY = Math.abs(endY - startY);
      
      if (timeElapsed < 500 && Math.max(distanceX, distanceY) > minSwipeDistance) {
        if (distanceX > distanceY) {
          // Swipe horizontal
          if (endX > startX) {
            this.handleSwipeRight();
          } else {
            this.handleSwipeLeft();
          }
        } else {
          // Swipe vertical
          if (endY > startY) {
            this.handleSwipeDown();
          } else {
            this.handleSwipeUp();
          }
        }
      }
    });
  }

  handleSwipeLeft() {
    // Navegar a la siguiente sección
    const sections = ['hero', 'about', 'services', 'projects', 'contact'];
    const currentIndex = sections.indexOf(this.currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    this.navigateToSection(sections[nextIndex]);
  }

  handleSwipeRight() {
    // Navegar a la sección anterior
    const sections = ['hero', 'about', 'services', 'projects', 'contact'];
    const currentIndex = sections.indexOf(this.currentSection);
    const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
    this.navigateToSection(sections[prevIndex]);
  }

  handleSwipeUp() {
    // Cerrar menú si está abierto
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  handleSwipeDown() {
    // Abrir menú si está cerrado
    if (!this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  /**
   * Optimizaciones de Performance
   */
  setupPerformanceOptimizations() {
    // Throttle para scroll
    let ticking = false;
    
    const updateScroll = () => {
      this.handleScroll();
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestTick);
    
    // Lazy loading para imágenes
    this.setupLazyLoading();
    
    // Debounce para resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 250);
    });
  }

  setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
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
    
    images.forEach(img => imageObserver.observe(img));
  }

  /**
   * Inicialización de Animaciones
   */
  initializeAnimations() {
    // Animación de entrada del hero
    setTimeout(() => {
      document.querySelector('.hero-content')?.classList.add('loaded');
    }, 500);

    // Animación de construcción del perfil
    setTimeout(() => {
      document.querySelector('.profile-container')?.classList.add('construction-complete');
    }, 1000);

    // Inicializar partículas flotantes
    setTimeout(() => {
      this.animateFloatingParticles();
    }, 2000);
  }

  animateFloatingParticles() {
    const particles = document.querySelectorAll('.floating-particles');
    particles.forEach(particle => {
      particle.style.animation = 'floatingParticlesMove 20s linear infinite';
    });
  }

  /**
   * Navegación y Control de Secciones
   */
  navigateToSection(section) {
    const targetSection = document.getElementById(section);
    if (!targetSection) return;

    // Actualizar estado
    this.currentSection = section;
    
    // Scroll suave a la sección
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Actualizar indicadores
    this.updateScrollIndicators(section);
    this.updateBottomNav(section);
    
    // Animar entrada de la sección
    this.animateSectionEntry(section);
  }

  updateScrollIndicators(section) {
    document.querySelectorAll('.scroll-dot').forEach(dot => {
      if (dot.dataset.section === section) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  updateBottomNav(section) {
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.dataset.section === section) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  animateSectionEntry(section) {
    const sectionElement = document.getElementById(section);
    if (!sectionElement) return;

    sectionElement.classList.add('section-entering');
    
    setTimeout(() => {
      sectionElement.classList.remove('section-entering');
      sectionElement.classList.add('section-entered');
    }, 1000);
  }

  /**
   * Manejo de Acciones y Contacto
   */
  handleAction(action) {
    switch (action) {
      case 'projects':
        this.navigateToSection('projects');
        break;
      case 'contact':
        this.navigateToSection('contact');
        break;
      default:
        console.log('Acción no implementada:', action);
    }
  }

  handleContact(contact) {
    switch (contact) {
      case 'whatsapp':
        window.open('https://wa.me/523311234567', '_blank');
        break;
      case 'email':
        window.open('mailto:contacto@mvgnlabs.com', '_blank');
        break;
      default:
        console.log('Contacto no implementado:', contact);
    }
  }

  handleSocial(social) {
    const socialUrls = {
      linkedin: 'https://linkedin.com/in/armandoibanez',
      github: 'https://github.com/mvgnlabs',
      portfolio: 'https://mvgnlabs.com'
    };

    if (socialUrls[social]) {
      window.open(socialUrls[social], '_blank');
    }
  }

  /**
   * Filtrado de Proyectos
   */
  filterProjects(filter) {
    const projects = document.querySelectorAll('.project-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Actualizar botones de filtro
    filterBtns.forEach(btn => {
      if (btn.dataset.filter === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Filtrar proyectos
    projects.forEach(project => {
      const category = project.dataset.category;
      
      if (filter === 'all' || category === filter) {
        project.style.display = 'block';
        project.classList.add('filtered-in');
        project.classList.remove('filtered-out');
      } else {
        project.classList.add('filtered-out');
        project.classList.remove('filtered-in');
        
        setTimeout(() => {
          if (project.classList.contains('filtered-out')) {
            project.style.display = 'none';
          }
        }, 300);
      }
    });
  }

  /**
   * Event Handlers
   */
  handleScroll() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 150);

    this.isScrolling = true;
    this.updateScrollProgress();
  }

  updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Actualizar indicadores de progreso
    document.documentElement.style.setProperty('--scroll-progress', scrollPercent + '%');
  }

  handleResize() {
    // Recalcular posiciones y tamaños
    this.recalculateLayout();
  }

  handleOrientationChange() {
    setTimeout(() => {
      this.recalculateLayout();
    }, 100);
  }

  recalculateLayout() {
    // Recalcular grid de proyectos
    this.recalculateProjectGrid();
    
    // Recalcular carousel
    this.recalculateCarousel();
  }

  recalculateProjectGrid() {
    const masonry = document.querySelector('.projects-masonry');
    if (!masonry) return;

    // Forzar recálculo del grid
    masonry.style.display = 'none';
    masonry.offsetHeight; // Trigger reflow
    masonry.style.display = 'grid';
  }

  recalculateCarousel() {
    const carousel = document.querySelector('.carousel-track');
    if (!carousel) return;

    // Ajustar transformaciones 3D
    const cards = carousel.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      const rotation = (index * 15) - 30;
      card.style.transform = `rotateY(${rotation}deg) translateZ(0)`;
    });
  }

  handleMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    
    // Efectos líquidos en botones
    document.querySelectorAll('.btn-liquid').forEach(liquid => {
      const rect = liquid.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      liquid.style.setProperty('--mouse-x', x + '%');
      liquid.style.setProperty('--mouse-y', y + '%');
    });
  }

  handleClick(e) {
    // Efecto de ripple
    this.createRippleEffect(e);
  }

  createRippleEffect(e) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.cssText = `
      position: absolute;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
      animation: ripple 0.6s ease-out;
    `;
    
    const rect = e.currentTarget.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    
    e.currentTarget.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  handleTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  }

  handleTouchMove(e) {
    this.touchEndX = e.touches[0].clientX;
    this.touchEndY = e.touches[0].clientY;
  }

  handleTouchEnd(e) {
    // El manejo de gestos ya está implementado en setupTouchGestures
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new RevolutionaryMobilePortfolio();
});

// Agregar estilos CSS para efectos adicionales
const additionalStyles = `
  @keyframes ripple {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(4);
      opacity: 0;
    }
  }

  @keyframes particleFloat {
    0% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0.8;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0.8;
    }
  }

  .section-entering {
    animation: sectionEnter 1s ease-out forwards;
  }

  .section-entered {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes sectionEnter {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .filtered-in {
    animation: filterIn 0.3s ease-out forwards;
  }

  .filtered-out {
    animation: filterOut 0.3s ease-out forwards;
  }

  @keyframes filterIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes filterOut {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.8);
    }
  }

  .construction-complete {
    animation: constructionComplete 0.5s ease-out forwards;
  }

  @keyframes constructionComplete {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.1) rotate(5deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
`;

// Insertar estilos adicionales
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
