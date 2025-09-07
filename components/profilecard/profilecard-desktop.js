// ProfileCard Desktop JavaScript - Versión simplificada con foto protagonista
class ProfileCardDesktop {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      avatarUrl: options.avatarUrl || 'assets/profile.jpg',
      name: options.name || 'Armando Ibañez',
      title: options.title || 'Desarrollador Web & Diseñador Digital',
      handle: options.handle || 'mvgnlabs',
      status: options.status || 'Disponible para proyectos',
      location: options.location || 'Tlajomulco, Jalisco',
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
      console.log('Avatar desktop preloaded successfully');
    };
    img.onerror = () => {
      console.warn('Failed to preload desktop avatar, using fallback');
    };
    img.src = this.options.avatarUrl;
  }

  render() {
    const cardHTML = `
      <div class="pc-card-desktop" role="banner" aria-label="Tarjeta de perfil desktop de ${this.options.name}">
        <div class="pc-inside">
          <!-- Efectos de fondo -->
          <div class="pc-shine"></div>
          <div class="pc-glare"></div>
          
          <!-- Foto de perfil protagonista -->
          <div class="pc-avatar-section">
            <div class="pc-avatar-container">
              <img
                class="pc-avatar"
                src="${this.options.avatarUrl}"
                alt="Foto de perfil de ${this.options.name}"
                loading="eager"
                decoding="sync"
                onerror="this.style.display='none'"
              />
              <div class="pc-avatar-border"></div>
              <div class="pc-status-indicator"></div>
            </div>
          </div>
          
          <!-- Solo botón de contacto -->
          <div class="pc-action-section">
            <button class="pc-contact-btn" type="button">
              <span>Contactar</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
    
    this.container.innerHTML = cardHTML;
    this.card = this.container.querySelector('.pc-card-desktop');
  }

  setupEventListeners() {
    const contactBtn = this.card?.querySelector('.pc-contact-btn');
    if (contactBtn) {
      contactBtn.addEventListener('click', () => this.handleContactClick());
    }
  }

  handleContactClick() {
    if (typeof this.options.onContactClick === 'function') {
      this.options.onContactClick();
    } else {
      this.defaultContactClick();
    }
  }

  defaultContactClick() {
    // Redirigir a la sección de contacto
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: abrir WhatsApp
      const whatsappUrl = 'https://wa.me/523322621939?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20trabajar%20contigo';
      window.open(whatsappUrl, '_blank');
    }
  }

  // Método para actualizar el estado
  updateStatus(newStatus) {
    const statusElement = this.card?.querySelector('.pc-status-indicator');
    if (statusElement) {
      statusElement.setAttribute('data-status', newStatus);
    }
  }

  // Método para actualizar la imagen de perfil
  updateAvatar(newAvatarUrl) {
    const avatarElement = this.card?.querySelector('.pc-avatar');
    if (avatarElement) {
      avatarElement.src = newAvatarUrl;
    }
  }

  // Método para mostrar/ocultar estado de carga
  setLoading(loading) {
    if (this.card) {
      if (loading) {
        this.card.classList.add('loading');
      } else {
        this.card.classList.remove('loading');
      }
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
  const profileCardContainer = document.getElementById('profileCardDesktop');
  
  if (profileCardContainer) {
    // Crear instancia global para acceso externo
    window.profileCardDesktopInstance = new ProfileCardDesktop(profileCardContainer, {
      avatarUrl: 'assets/profile.jpg',
      name: 'Armando Ibañez',
      title: 'Desarrollador Web & Diseñador Digital',
      handle: 'mvgnlabs',
      status: 'Disponible para proyectos',
      location: 'Tlajomulco, Jalisco',
      onContactClick: function() {
        // Redirigir a la sección de contacto
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
    
    console.log('ProfileCard Desktop initialized successfully');
  } else {
    console.warn('ProfileCard Desktop container not found');
  }
});

// Exportar la clase para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProfileCardDesktop;
}
