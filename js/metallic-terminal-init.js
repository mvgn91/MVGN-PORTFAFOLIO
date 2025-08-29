// Metallic Terminal Initialization - Inicializa la terminal con logo metálico
// Integra el sistema de pintura metálica con la terminal existente

class MetallicTerminal {
  constructor() {
    this.terminal = null;
    this.canvas = null;
    this.metallicPaint = null;
    this.isInitialized = false;
    
    this.init();
  }

  async init() {
    try {
      // Esperar a que el DOM esté listo
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.setupTerminal());
      } else {
        this.setupTerminal();
      }
    } catch (error) {
      console.error('Error initializing MetallicTerminal:', error);
    }
  }

  setupTerminal() {
    // Buscar la terminal existente
    this.terminal = document.querySelector('.code-terminal');
    
    if (!this.terminal) {
      console.warn('Terminal no encontrada, esperando...');
      // Reintentar después de un delay
      setTimeout(() => this.setupTerminal(), 1000);
      return;
    }

    // Limpiar el contenido de la terminal
    this.clearTerminalContent();
    
    // Crear el canvas para el logo metálico
    this.createMetallicCanvas();
    
    // Inicializar el sistema de pintura metálica
    this.initMetallicPaint();
    
    // Configurar eventos adicionales
    this.setupAdditionalEvents();
    
    this.isInitialized = true;
    console.log('Terminal metálica inicializada correctamente');
  }

  clearTerminalContent() {
    const terminalContent = this.terminal.querySelector('.terminal-content');
    if (terminalContent) {
      // Agregar indicador de carga temporal
      terminalContent.innerHTML = `
        <div class="terminal-loading">
          <div class="loading-spinner"></div>
          <div class="loading-text">Inicializando logo metálico...</div>
        </div>
      `;
    }
  }

  createMetallicCanvas() {
    const terminalContent = this.terminal.querySelector('.terminal-content');
    if (!terminalContent) return;

    // Crear el canvas
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'metallic-logo-canvas';
    this.canvas.width = 250;
    this.canvas.height = 250;
    
    // Limpiar el contenido de carga y agregar el canvas
    terminalContent.innerHTML = '';
    terminalContent.appendChild(this.canvas);
    
    // Configurar el canvas para WebGL
    this.canvas.style.width = '250px';
    this.canvas.style.height = '250px';
  }

  async initMetallicPaint() {
    if (!this.canvas) return;

    try {
      // Intentar usar MetallicPaint Simple primero
      if (typeof window.MetallicPaintSimple !== 'undefined') {
        console.log('Usando MetallicPaint Simple');
        
        const options = {
          patternScale: 2.5,
          speed: 0.4
        };

        this.metallicPaint = new window.MetallicPaintSimple(
          this.canvas, 
          'assets/favicon.png', 
          options
        );
      }
      // Fallback a MetallicPaint original si está disponible
      else if (typeof window.MetallicPaint !== 'undefined') {
        console.log('Usando MetallicPaint original');
        
        const options = {
          patternScale: 2.5,
          refraction: 0.02,
          edge: 1.2,
          patternBlur: 0.008,
          liquid: 0.1,
          speed: 0.4
        };

        this.metallicPaint = new window.MetallicPaint(
          this.canvas, 
          'assets/favicon.png', 
          options
        );
      }
      else {
        console.error('Ningún sistema de pintura metálica disponible');
        this.showFallbackContent();
        return;
      }

      // Configurar el resize del canvas
      this.setupCanvasResize();
      
      // Agregar efectos de hover
      this.addHoverEffects();
      
    } catch (error) {
      console.error('Error initializing MetallicPaint:', error);
      this.showFallbackContent();
    }
  }

  setupCanvasResize() {
    if (!this.canvas || !this.metallicPaint) return;

    const resizeObserver = new ResizeObserver(() => {
      if (this.metallicPaint && typeof this.metallicPaint.resize === 'function') {
        this.metallicPaint.resize();
      }
    });

    resizeObserver.observe(this.canvas);
  }

  addHoverEffects() {
    if (!this.canvas) return;

    // Efecto de brillo en hover
    this.canvas.addEventListener('mouseenter', () => {
      this.canvas.style.filter = 'brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))';
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.canvas.style.filter = 'brightness(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.1))';
    });

    // Efecto de click
    this.canvas.addEventListener('click', () => {
      this.triggerLogoClick();
    });
  }

  triggerLogoClick() {
    // Efecto visual de click
    this.canvas.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.canvas.style.transform = 'scale(1)';
    }, 150);

    // Aquí puedes agregar funcionalidad adicional al hacer click en el logo
    console.log('Logo MVGN Labs clickeado!');
    
    // Ejemplo: abrir enlace o mostrar información
    // window.open('https://mvgnlabs.com', '_blank');
  }

  setupAdditionalEvents() {
    if (!this.terminal) return;

    // Efecto de profundidad en hover
    this.terminal.addEventListener('mouseenter', () => {
      this.terminal.style.transform = 'translateY(-5px) scale(1.02) rotateX(2deg)';
    });

    this.terminal.addEventListener('mouseleave', () => {
      this.terminal.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
    });

    // Efecto de click en la terminal
    this.terminal.addEventListener('click', (e) => {
      // Solo si no se hizo click en el canvas
      if (e.target !== this.canvas) {
        this.terminal.style.transform = 'translateY(-2px) scale(1.01)';
        setTimeout(() => {
          this.terminal.style.transform = 'translateY(0) scale(1)';
        }, 200);
      }
    });
  }

  showFallbackContent() {
    const terminalContent = this.terminal.querySelector('.terminal-content');
    if (!terminalContent) return;

    terminalContent.innerHTML = `
      <div style="text-align: center; color: rgba(255, 255, 255, 0.8);">
        <div style="font-size: 48px; margin-bottom: 16px;">⚡</div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; margin-bottom: 8px;">
          MVGN Labs
        </div>
        <div style="font-size: 14px; opacity: 0.7;">
          Sistema de logo metálico no disponible
        </div>
      </div>
    `;
  }

  // Método para actualizar parámetros en tiempo real
  updateParameters(newOptions) {
    if (this.metallicPaint && this.metallicPaint.options) {
      Object.assign(this.metallicPaint.options, newOptions);
      
      // Aplicar cambios si es necesario
      if (this.metallicPaint.updateUniforms) {
        this.metallicPaint.updateUniforms();
      }
    }
  }

  // Método para destruir la instancia
  destroy() {
    if (this.metallicPaint && typeof this.metallicPaint.destroy === 'function') {
      this.metallicPaint.destroy();
    }
    
    if (this.canvas) {
      this.canvas.remove();
    }
    
    this.isInitialized = false;
  }
}

// Inicializar cuando el script se carga
let metallicTerminal;

// Función global para inicializar
window.initMetallicTerminal = () => {
  if (!metallicTerminal) {
    metallicTerminal = new MetallicTerminal();
  }
  return metallicTerminal;
};

// Auto-inicializar si el DOM está listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    metallicTerminal = new MetallicTerminal();
  });
} else {
  metallicTerminal = new MetallicTerminal();
}

// Exportar para uso global
window.MetallicTerminal = MetallicTerminal;
