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

    // Efecto táctil simplificado para la tarjeta
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
