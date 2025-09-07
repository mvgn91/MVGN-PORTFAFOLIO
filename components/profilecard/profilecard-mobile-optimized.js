// ProfileCard Mobile Optimized - Versión ultra ligera para móvil
class ProfileCardMobileOptimized {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      avatarUrl: options.avatarUrl || 'assets/PROFILE TRANSPARENT.png',
      name: options.name || 'Armando Ibañez',
      title: options.title || 'Desarrollador Web & Diseñador Digital',
      handle: options.handle || 'mvgnlabs',
      status: options.status || 'Disponible',
      contactText: options.contactText || 'Contactar',
      onContactClick: options.onContactClick || this.defaultContactClick,
      ...options
    };
    
    this.init();
  }

  init() {
    this.preloadAvatar();
    this.render();
    this.setupEventListeners();
  }

  preloadAvatar() {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      console.log('Avatar móvil optimizado preloaded successfully');
    };
    img.onerror = () => {
      console.warn('Failed to preload mobile avatar, using fallback');
    };
    img.src = this.options.avatarUrl;
  }

  render() {
    const cardHTML = `
      <div class="pc-card-mobile" role="banner" aria-label="Tarjeta de perfil móvil de ${this.options.name}">
        <div class="pc-inside-mobile">
          <div class="pc-shine-mobile"></div>
          <div class="pc-avatar-content-mobile">
            <img
              class="avatar"
              src="${this.options.avatarUrl}"
              alt="Foto de perfil de ${this.options.name}"
              loading="eager"
              decoding="sync"
              onerror="this.style.display='none'"
            />
            <div class="pc-user-info-mobile">
              <div class="pc-user-details-mobile">
                <div class="pc-mini-avatar-mobile">
                  <img
                    src="assets/favicon.png"
                    alt="Logo de MVGN Labs"
                    loading="lazy"
                    onerror="this.style.opacity='0.5'"
                  />
                </div>
                <div class="pc-user-text-mobile">
                  <div class="pc-handle-mobile">@${this.options.handle}</div>
                  <div class="pc-status-mobile">${this.options.status}</div>
                </div>
              </div>
              <button
                class="pc-contact-btn-mobile"
                type="button"
                aria-label="Contactar a ${this.options.name} por WhatsApp"
                title="Abrir WhatsApp para contactar"
              >
                ${this.options.contactText}
              </button>
            </div>
          </div>
          <div class="pc-content-mobile">
            <div class="pc-details-mobile">
              <h3>${this.options.name}</h3>
              <p>${this.options.title}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.container.innerHTML = cardHTML;
    this.card = this.container.querySelector('.pc-card-mobile');
  }

  setupEventListeners() {
    const contactBtn = this.card?.querySelector('.pc-contact-btn-mobile');
    if (contactBtn) {
      contactBtn.addEventListener('click', () => this.handleContactClick());
    }

    // Efecto táctil optimizado para la tarjeta
    this.card?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.card.classList.add('active');
    });

    this.card?.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.card.classList.remove('active');
    });

    // Prevenir zoom en doble toque
    this.card?.addEventListener('touchend', (e) => {
      e.preventDefault();
    });

    // Efecto de clic optimizado para la fotografía
    this.setupAvatarClickEffect();
  }

  setupAvatarClickEffect() {
    const avatar = this.card?.querySelector('.avatar');
    if (!avatar) return;

    let clickTimeout = null;
    
    // Detectar si es un dispositivo de baja potencia
    const isLowEndDevice = this.detectLowEndDevice();
    const isSmallMobile = window.matchMedia('(max-width: 480px)').matches;

    // Efecto de clic ultra ligero
    avatar.addEventListener('touchstart', (e) => {
      e.preventDefault();
      // Feedback táctil sutil solo en dispositivos normales
      if (navigator.vibrate && !isLowEndDevice) {
        navigator.vibrate(10); // Vibración muy corta
      }
    });

    avatar.addEventListener('touchend', (e) => {
      e.preventDefault();
      
      // Efecto visual sutil solo si no es dispositivo de baja potencia
      if (!isLowEndDevice && !isSmallMobile) {
        avatar.classList.add('clicked');
        
        // Remover la clase después de la animación
        if (clickTimeout) clearTimeout(clickTimeout);
        clickTimeout = setTimeout(() => {
          avatar.classList.remove('clicked');
        }, 300);
      }

      // Acción opcional al hacer clic en la foto
      this.handleAvatarClick();
    });

    // Para dispositivos con mouse (tablets)
    avatar.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Efecto visual sutil solo si no es dispositivo de baja potencia
      if (!isLowEndDevice && !isSmallMobile) {
        avatar.classList.add('clicked');
        
        // Remover la clase después de la animación
        if (clickTimeout) clearTimeout(clickTimeout);
        clickTimeout = setTimeout(() => {
          avatar.classList.remove('clicked');
        }, 300);
      }

      this.handleAvatarClick();
    });
  }

  detectLowEndDevice() {
    // Detectar dispositivos de baja potencia
    const hardwareConcurrency = navigator.hardwareConcurrency || 1;
    const deviceMemory = navigator.deviceMemory || 4;
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    const lowConcurrency = hardwareConcurrency <= 2;
    const lowMemory = deviceMemory <= 2;
    const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
    const isAndroidLowEnd = /android.*chrome\/[.0-9]* (mobile|mini)/i.test(navigator.userAgent);
    
    return lowConcurrency || lowMemory || slowConnection || isAndroidLowEnd;
  }

  handleAvatarClick() {
    // Acción sutil al hacer clic en la foto
    console.log('Foto de perfil clickeada - Efecto optimizado para móvil');
    
    // Opcional: mostrar información adicional o efecto especial
    // Por ejemplo, un pequeño mensaje o animación
    this.showAvatarFeedback();
  }

  showAvatarFeedback() {
    // Crear feedback visual sutil
    const feedback = document.createElement('div');
    feedback.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 68, 68, 0.9);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      z-index: 1000;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
    `;
    feedback.textContent = '¡Hola! 👋';
    
    this.card?.appendChild(feedback);
    
    // Mostrar feedback
    setTimeout(() => {
      feedback.style.opacity = '1';
    }, 10);
    
    // Ocultar feedback
    setTimeout(() => {
      feedback.style.opacity = '0';
      setTimeout(() => {
        if (feedback.parentNode) {
          feedback.parentNode.removeChild(feedback);
        }
      }, 200);
    }, 1000);
  }

  handleContactClick() {
    // Feedback táctil optimizado para móvil
    if (navigator.vibrate) {
      navigator.vibrate(20); // Vibración corta y sutil
    }
    
    // Animación visual sutil
    const btn = this.card?.querySelector('.pc-contact-btn-mobile');
    if (btn) {
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 100);
    }
    
    this.options.onContactClick();
  }

  defaultContactClick() {
    // Abrir WhatsApp con mensaje personalizado
    const message = encodeURIComponent(
      `Hola Armando, vi tu portafolio con la tarjeta de perfil móvil optimizada y me gustó mucho. ¿Podríamos hablar sobre un proyecto?`
    );
    window.open(`https://wa.me/523322621939?text=${message}`, '_blank');
  }

  // Método para actualizar el estado
  updateStatus(newStatus) {
    const statusElement = this.card?.querySelector('.pc-status-mobile');
    if (statusElement) {
      statusElement.textContent = newStatus;
    }
  }

  // Método para actualizar la imagen de perfil
  updateAvatar(newAvatarUrl) {
    const avatarElement = this.card?.querySelector('.avatar');
    if (avatarElement) {
      avatarElement.src = newAvatarUrl;
    }
  }

  // Método para destruir la instancia
  destroy() {
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}

// Inicialización automática cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  const profileCardContainer = document.getElementById('profileCardMobile');
  
  if (profileCardContainer) {
    // Crear instancia global para acceso externo
    window.profileCardMobileInstance = new ProfileCardMobileOptimized(profileCardContainer, {
      avatarUrl: 'assets/PROFILE TRANSPARENT.png',
      name: 'Armando Ibañez',
      title: 'Desarrollador Web & Diseñador Digital',
      handle: 'mvgnlabs',
      status: 'Disponible',
      contactText: 'Contactar',
      onContactClick: function() {
        // Redirigir a la sección de contacto si existe
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          // Fallback: abrir WhatsApp
          const message = encodeURIComponent(
            `Hola Armando, vi tu portafolio con la tarjeta de perfil móvil optimizada y me gustó mucho. ¿Podríamos hablar sobre un proyecto?`
          );
          window.open(`https://wa.me/523322621939?text=${message}`, '_blank');
        }
      }
    });
    
    console.log('ProfileCard Mobile Optimized initialized successfully');
  } else {
    console.warn('ProfileCard Mobile container not found');
  }
});

// Exportar la clase para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProfileCardMobileOptimized;
}
