// ProfileCard JavaScript - Adaptado para Vanilla JS
class ProfileCard {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      avatarUrl: options.avatarUrl || 'assets/PROFILE TRANSPARENT.png',
      name: options.name || 'Armando Ibañez',
      title: options.title || 'Desarrollador Web & Diseñador Digital',
      handle: options.handle || 'mvgnlabs',
      status: options.status || 'Disponible',
      contactText: options.contactText || 'Contactar',
      enableTilt: options.enableTilt !== false,
      enableMobileTilt: options.enableMobileTilt || false,
      mobileTiltSensitivity: options.mobileTiltSensitivity || 5,
      onContactClick: options.onContactClick || this.defaultContactClick,
      ...options
    };
    
    this.rafId = null;
    this.init();
  }

  init() {
    this.preloadAvatar();
    this.detectPerformance();
    this.render();
    if (this.options.enableTilt) {
      this.setupTiltEffect();
    }
  }

  detectPerformance() {
    // Detectar si el dispositivo tiene poca potencia
    const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                          navigator.deviceMemory <= 2 ||
                          /Android.*Chrome\/[.0-9]* (Mobile|mini|Fennec|FxiOS|Opera Mobi|Opera Mini|IEMobile|WPDesktop|wv)/.test(navigator.userAgent);
    
    if (isLowEndDevice) {
      // Reducir efectos para dispositivos de baja potencia
      this.container.style.setProperty('--card-opacity', '0.05');
      this.options.mobileTiltSensitivity = 3;
    }
  }

  preloadAvatar() {
    const img = new Image();
    // Configurar para máxima calidad
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Imagen cargada exitosamente con máxima calidad
      console.log('Avatar preloaded successfully with high quality');
      // Forzar re-renderizado para asegurar calidad
      if (this.card) {
        const avatarImg = this.card.querySelector('.avatar');
        if (avatarImg) {
          avatarImg.style.imageRendering = 'high-quality';
        }
      }
    };
    img.onerror = () => {
      console.warn('Failed to preload avatar, using fallback');
    };
    img.src = this.options.avatarUrl;
  }

  render() {
    const cardHTML = `
      <section class="pc-card" role="banner" aria-label="Tarjeta de perfil de ${this.options.name}">
        <div class="pc-inside">
          <div class="pc-shine"></div>
          <div class="pc-glare"></div>
          <div class="pc-content pc-avatar-content">
            <img
              class="avatar"
              src="${this.options.avatarUrl}"
              alt="Foto de perfil de ${this.options.name}"
              loading="eager"
              decoding="sync"
              onerror="this.style.display='none'"
            />
            <div class="pc-user-info">
              <div class="pc-user-details">
                <div class="pc-mini-avatar">
                  <img
                    src="assets/favicon.png"
                    alt="Logo de MVGN Labs"
                    loading="lazy"
                    onerror="this.style.opacity='0.5'"
                  />
                </div>
                <div class="pc-user-text">
                  <div class="pc-handle">@${this.options.handle}</div>
                  <div class="pc-status">${this.options.status}</div>
                </div>
              </div>
              <button
                class="pc-contact-btn"
                onclick="profileCardInstance.handleContactClick()"
                style="pointer-events: auto"
                type="button"
                aria-label="Contactar a ${this.options.name} por WhatsApp"
                title="Abrir WhatsApp para contactar"
              >
                ${this.options.contactText}
              </button>
            </div>
          </div>
          <div class="pc-content">
            <div class="pc-details">
              <h3>${this.options.name}</h3>
              <p>${this.options.title}</p>
            </div>
          </div>
        </div>
      </section>
    `;
    
    this.container.innerHTML = cardHTML;
    this.card = this.container.querySelector('.pc-card');
    
    // Inicializar iconos Lucide si están disponibles
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  setupTiltEffect() {
    if (!this.card) return;

    let isPointerActive = false;
    let lastMoveTime = 0;
    const throttleDelay = 16; // ~60fps

    const handlePointerMove = (event) => {
      const now = performance.now();
      if (now - lastMoveTime < throttleDelay) return;
      lastMoveTime = now;

      const rect = this.card.getBoundingClientRect();
      this.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top
      );
    };

    const handlePointerEnter = () => {
      isPointerActive = true;
      this.cancelAnimation();
      this.container.classList.add('active');
      this.card.classList.add('active');
    };

    const handlePointerLeave = (event) => {
      isPointerActive = false;
      this.createSmoothAnimation(
        500, // SMOOTH_DURATION reducido
        event.offsetX,
        event.offsetY
      );
      this.container.classList.remove('active');
      this.card.classList.remove('active');
    };

    const handleDeviceOrientation = (event) => {
      const { beta, gamma } = event;
      if (!beta || !gamma) return;

      this.updateCardTransform(
        this.card.clientHeight / 2 + gamma * this.options.mobileTiltSensitivity,
        this.card.clientWidth / 2 + (beta - 20) * this.options.mobileTiltSensitivity
      );
    };

    const handleClick = () => {
      // Feedback táctil mejorado
      if (navigator.vibrate) {
        navigator.vibrate(50); // Vibración sutil
      }
      
      if (!this.options.enableMobileTilt || location.protocol !== 'https:') return;
      if (typeof window.DeviceMotionEvent.requestPermission === 'function') {
        window.DeviceMotionEvent
          .requestPermission()
          .then(state => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', handleDeviceOrientation);
            }
          })
          .catch(err => console.error(err));
      } else {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    };

    this.card.addEventListener('pointerenter', handlePointerEnter);
    this.card.addEventListener('pointermove', handlePointerMove);
    this.card.addEventListener('pointerleave', handlePointerLeave);
    this.card.addEventListener('click', handleClick);

    // Initial animation
    const initialX = this.container.clientWidth - 70;
    const initialY = 60;
    this.updateCardTransform(initialX, initialY);
    this.createSmoothAnimation(1500, initialX, initialY);

    // Cleanup function
    this.cleanup = () => {
      this.card.removeEventListener('pointerenter', handlePointerEnter);
      this.card.removeEventListener('pointermove', handlePointerMove);
      this.card.removeEventListener('pointerleave', handlePointerLeave);
      this.card.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      this.cancelAnimation();
    };
  }

  clamp(value, min = 0, max = 100) {
    return Math.min(Math.max(value, min), max);
  }

  round(value, precision = 3) {
    return parseFloat(value.toFixed(precision));
  }

  adjust(value, fromMin, fromMax, toMin, toMax) {
    return this.round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
  }

  easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  updateCardTransform(offsetX, offsetY) {
    const width = this.card.clientWidth;
    const height = this.card.clientHeight;

    const percentX = this.clamp((100 / width) * offsetX);
    const percentY = this.clamp((100 / height) * offsetY);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    // Rotación más suave para mejor UX
    const rotationIntensity = 0.3; // Reducido de 0.2 para suavidad

    const properties = {
      '--pointer-x': `${percentX}%`,
      '--pointer-y': `${percentY}%`,
      '--background-x': `${this.adjust(percentX, 0, 100, 35, 65)}%`,
      '--background-y': `${this.adjust(percentY, 0, 100, 35, 65)}%`,
      '--pointer-from-center': `${this.clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
      '--pointer-from-top': `${percentY / 100}`,
      '--pointer-from-left': `${percentX / 100}`,
      '--rotate-x': `${this.round(-(centerX / 6) * rotationIntensity)}deg`,
      '--rotate-y': `${this.round(centerY / 5) * rotationIntensity}deg`,
    };

    // Usar requestAnimationFrame para mejor rendimiento
    requestAnimationFrame(() => {
      Object.entries(properties).forEach(([property, value]) => {
        this.container.style.setProperty(property, value);
      });
    });
  }

  createSmoothAnimation(duration, startX, startY) {
    const startTime = performance.now();
    const targetX = this.container.clientWidth / 2;
    const targetY = this.container.clientHeight / 2;

    const animationLoop = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = this.clamp(elapsed / duration);
      const easedProgress = this.easeInOutCubic(progress);

      const currentX = this.adjust(easedProgress, 0, 1, startX, targetX);
      const currentY = this.adjust(easedProgress, 0, 1, startY, targetY);

      this.updateCardTransform(currentX, currentY);

      if (progress < 1) {
        this.rafId = requestAnimationFrame(animationLoop);
      }
    };

    this.rafId = requestAnimationFrame(animationLoop);
  }

  cancelAnimation() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  handleContactClick() {
    // Feedback táctil al hacer clic en contacto
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
    
    // Pequeña animación visual
    const btn = this.container.querySelector('.pc-contact-btn');
    if (btn) {
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 150);
    }
    
    this.options.onContactClick();
  }

  defaultContactClick() {
    // Abrir WhatsApp por defecto
    window.open('https://wa.me/523322621939?text=Hola%2C%20vi%20tu%20portafolio%20con%20el%20ProfileCard', '_blank');
  }

  destroy() {
    if (this.cleanup) {
      this.cleanup();
    }
  }
}

// Inicializar ProfileCard cuando el DOM esté listo
let profileCardInstance;

document.addEventListener('DOMContentLoaded', function() {
  const profileCardContainer = document.getElementById('profileCard');
  
  if (profileCardContainer) {
    console.log('Inicializando ProfileCard con imagen de alta calidad:', 'assets/PROFILE TRANSPARENT.png');
    
    profileCardInstance = new ProfileCard(profileCardContainer, {
      avatarUrl: 'assets/PROFILE TRANSPARENT.png',
      name: 'Armando Ibañez',
      title: 'Desarrollador Web & Diseñador Digital',
      handle: 'mvgnlabs',
      status: 'Disponible',
      contactText: 'Contactar',
      enableTilt: true,
      enableMobileTilt: false,
      onContactClick: function() {
        // Abrir WhatsApp con mensaje personalizado
        window.open('https://wa.me/523322621939?text=Hola%20Armando%2C%20vi%20tu%20portafolio%20con%20el%20ProfileCard%20interactivo%20y%20me%20gustó%20mucho.%20¿Podríamos%20hablar%20sobre%20un%20proyecto%3F', '_blank');
      }
    });
    
    // Verificar que la imagen se cargó correctamente
    setTimeout(() => {
      const avatarImg = profileCardContainer.querySelector('.avatar');
      if (avatarImg) {
        console.log('Avatar cargado exitosamente:', avatarImg.src);
        console.log('Dimensiones del avatar:', avatarImg.naturalWidth, 'x', avatarImg.naturalHeight);
      }
    }, 1000);
  }
});

// Exportar para uso global si es necesario
window.ProfileCard = ProfileCard;
