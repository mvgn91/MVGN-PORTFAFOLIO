// Logo Simple - Sistema básico para mostrar el logo de MVGN Labs
// Sin WebGL, solo Canvas 2D básico

class LogoSimple {
  constructor(container) {
    this.container = container;
    this.canvas = null;
    this.ctx = null;
    this.image = null;
    this.animationId = null;
    this.time = 0;
    
    this.init();
  }

  async init() {
    try {
      console.log('Inicializando LogoSimple...');
      
      // Crear canvas
      this.createCanvas();
      
      // Cargar imagen
      await this.loadImage();
      
      // Iniciar animación
      this.startAnimation();
      
      console.log('LogoSimple inicializado correctamente');
    } catch (error) {
      console.error('Error en LogoSimple:', error);
      this.showFallback();
    }
  }

  createCanvas() {
    // Limpiar contenedor
    this.container.innerHTML = '';
    
    // Crear canvas
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'metallic-logo-canvas';
    this.canvas.width = 250;
    this.canvas.height = 250;
    this.canvas.style.width = '250px';
    this.canvas.style.height = '250px';
    
    // Agregar al contenedor
    this.container.appendChild(this.canvas);
    
    // Obtener contexto
    this.ctx = this.canvas.getContext('2d');
    
    console.log('Canvas creado:', this.canvas.width, 'x', this.canvas.height);
  }

  async loadImage() {
    return new Promise((resolve, reject) => {
      this.image = new Image();
      
      this.image.onload = () => {
        console.log('Imagen cargada:', this.image.width, 'x', this.image.height);
        resolve();
      };
      
      this.image.onerror = (error) => {
        console.error('Error cargando imagen:', error);
        reject(error);
      };
      
      // Intentar cargar favicon.png
      this.image.src = 'assets/favicon.png';
      
      // Timeout de seguridad
      setTimeout(() => {
        if (!this.image.complete) {
          reject(new Error('Timeout cargando imagen'));
        }
      }, 5000);
    });
  }

  startAnimation() {
    const animate = () => {
      this.time += 0.05;
      this.render();
      this.animationId = requestAnimationFrame(animate);
    };
    
    animate();
  }

  render() {
    if (!this.ctx || !this.image) return;
    
    const { width, height } = this.canvas;
    
    // Limpiar canvas
    this.ctx.clearRect(0, 0, width, height);
    
    // Fondo
    this.drawBackground();
    
    // Logo
    this.drawLogo();
    
    // Efectos
    this.drawEffects();
  }

  drawBackground() {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    
    // Gradiente de fondo
    const gradient = ctx.createRadialGradient(
      width/2, height/2, 0,
      width/2, height/2, Math.max(width, height)/2
    );
    gradient.addColorStop(0, '#2c3e50');
    gradient.addColorStop(0.7, '#34495e');
    gradient.addColorStop(1, '#2c3e50');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  drawLogo() {
    if (!this.image) return;
    
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    const logoSize = Math.min(width, height) * 0.7;
    const x = (width - logoSize) / 2;
    const y = (height - logoSize) / 2;
    
    // Sombra
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    
    // Fondo circular para el logo
    ctx.beginPath();
    ctx.arc(width/2, height/2, logoSize/2 + 5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fill();
    
    ctx.restore();
    
    // Logo principal
    ctx.save();
    
    // Clip circular
    ctx.beginPath();
    ctx.arc(width/2, height/2, logoSize/2, 0, Math.PI * 2);
    ctx.clip();
    
    // Efecto de movimiento sutil
    const wobble = Math.sin(this.time) * 1;
    
    // Dibujar imagen
    ctx.drawImage(
      this.image,
      x + wobble,
      y + wobble,
      logoSize,
      logoSize
    );
    
    ctx.restore();
  }

  drawEffects() {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    const time = this.time;
    
    // Rayas metálicas
    this.drawMetallicStripes(time);
    
    // Puntos de luz
    this.drawLightPoints(time);
    
    // Efecto de brillo
    this.drawShineEffect(time);
  }

  drawMetallicStripes(time) {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    const stripeWidth = 15;
    
    ctx.save();
    ctx.globalAlpha = 0.3;
    
    for (let x = -stripeWidth; x < width + stripeWidth; x += stripeWidth * 2) {
      const offset = Math.sin(time * 0.5 + x * 0.01) * 3;
      
      const gradient = ctx.createLinearGradient(x + offset, 0, x + offset + stripeWidth, 0);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x + offset, 0, stripeWidth, height);
    }
    
    ctx.restore();
  }

  drawLightPoints(time) {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    
    const points = [
      { x: width * 0.2, y: height * 0.2 },
      { x: width * 0.8, y: height * 0.3 },
      { x: width * 0.3, y: height * 0.8 },
      { x: width * 0.7, y: height * 0.7 }
    ];
    
    points.forEach((point, index) => {
      const alpha = 0.2 + 0.15 * Math.sin(time + index * Math.PI / 2);
      
      ctx.save();
      ctx.globalAlpha = alpha;
      
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, 15
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 15, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });
  }

  drawShineEffect(time) {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    
    // Efecto de brillo que se mueve
    const shineGradient = ctx.createLinearGradient(
      -width + (time * 50) % (width * 2),
      0,
      width + (time * 50) % (width * 2),
      0
    );
    shineGradient.addColorStop(0, 'transparent');
    shineGradient.addColorStop(0.4, 'transparent');
    shineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
    shineGradient.addColorStop(0.6, 'transparent');
    shineGradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = shineGradient;
    ctx.fillRect(0, 0, width, height);
  }

  showFallback() {
    if (!this.ctx) return;
    
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    
    // Fondo de fallback
    ctx.fillStyle = '#34495e';
    ctx.fillRect(0, 0, width, height);
    
    // Texto de fallback
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('MVGN Labs', width/2, height/2 - 15);
    
    ctx.font = '14px Arial';
    ctx.fillText('Logo no disponible', width/2, height/2 + 5);
    ctx.fillText('Verificar assets/favicon.png', width/2, height/2 + 25);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Función global para inicializar
window.initLogoSimple = (containerSelector) => {
  const container = document.querySelector(containerSelector);
  if (container) {
    return new LogoSimple(container);
  } else {
    console.error('Contenedor no encontrado:', containerSelector);
    return null;
  }
};

// Auto-inicializar si se encuentra un contenedor
document.addEventListener('DOMContentLoaded', () => {
  const terminalContent = document.querySelector('.terminal-content');
  if (terminalContent) {
    console.log('Auto-inicializando LogoSimple...');
    window.logoSimple = new LogoSimple(terminalContent);
  }
});
