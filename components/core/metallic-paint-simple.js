// MetallicPaint Simple - Versión simplificada para MVGN Labs
// Sistema básico que funciona sin WebGL complejo

class MetallicPaintSimple {
  constructor(canvas, imageSrc, options = {}) {
    this.canvas = canvas;
    this.imageSrc = imageSrc;
    this.options = {
      patternScale: 2,
      speed: 0.3,
      ...options
    };
    
    this.ctx = null;
    this.image = null;
    this.animationId = null;
    this.time = 0;
    
    this.init();
  }

  async init() {
    try {
      await this.loadImage();
      this.setupCanvas();
      this.startAnimation();
      console.log('MetallicPaint Simple inicializado correctamente');
    } catch (error) {
      console.error('Error initializing MetallicPaint Simple:', error);
      this.showFallback();
    }
  }

  async loadImage() {
    return new Promise((resolve, reject) => {
      this.image = new Image();
      this.image.crossOrigin = 'anonymous';
      
      this.image.onload = () => {
        console.log('Imagen cargada:', this.image.width, 'x', this.image.height);
        resolve();
      };
      
      this.image.onerror = (error) => {
        console.error('Error cargando imagen:', error);
        reject(error);
      };
      
      this.image.src = this.imageSrc;
    });
  }

  setupCanvas() {
    this.ctx = this.canvas.getContext('2d');
    
    // Configurar canvas
    this.canvas.width = 250;
    this.canvas.height = 250;
    
    // Configurar contexto
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = 'high';
  }

  startAnimation() {
    const animate = () => {
      this.time += this.options.speed;
      this.render();
      this.animationId = requestAnimationFrame(animate);
    };
    
    animate();
  }

  render() {
    if (!this.ctx || !this.image) return;

    // Limpiar canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Crear efecto metálico básico
    this.renderMetallicEffect();
  }

  renderMetallicEffect() {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    
    // Fondo base
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#2c3e50');
    gradient.addColorStop(0.5, '#34495e');
    gradient.addColorStop(1, '#2c3e50');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Patrón de rayas metálicas
    this.drawMetallicStripes();
    
    // Logo central con efecto
    this.drawLogoWithEffect();
    
    // Efectos de brillo
    this.drawShineEffects();
  }

  drawMetallicStripes() {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    const stripeWidth = 20;
    const time = this.time * 0.01;
    
    ctx.save();
    
    for (let x = -stripeWidth; x < width + stripeWidth; x += stripeWidth * 2) {
      const offset = Math.sin(time + x * 0.01) * 5;
      
      const gradient = ctx.createLinearGradient(x + offset, 0, x + offset + stripeWidth, 0);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x + offset, 0, stripeWidth, height);
    }
    
    ctx.restore();
  }

  drawLogoWithEffect() {
    if (!this.image) return;
    
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    const logoSize = Math.min(width, height) * 0.6;
    const x = (width - logoSize) / 2;
    const y = (height - logoSize) / 2;
    
    // Sombra del logo
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    
    // Fondo circular para el logo
    ctx.beginPath();
    ctx.arc(width/2, height/2, logoSize/2 + 10, 0, Math.PI * 2);
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
    const wobble = Math.sin(this.time * 0.02) * 2;
    
    // Dibujar imagen con efecto metálico
    ctx.drawImage(
      this.image,
      x + wobble,
      y + wobble,
      logoSize,
      logoSize
    );
    
    // Overlay metálico
    const overlayGradient = ctx.createRadialGradient(
      width/2, height/2, 0,
      width/2, height/2, logoSize/2
    );
    overlayGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
    overlayGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
    overlayGradient.addColorStop(1, 'rgba(255, 255, 255, 0.3)');
    
    ctx.fillStyle = overlayGradient;
    ctx.fillRect(x, y, logoSize, logoSize);
    
    ctx.restore();
  }

  drawShineEffects() {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    const time = this.time * 0.005;
    
    // Efecto de brillo que se mueve
    const shineGradient = ctx.createLinearGradient(
      -width + (time * 100) % (width * 2),
      0,
      width + (time * 100) % (width * 2),
      0
    );
    shineGradient.addColorStop(0, 'transparent');
    shineGradient.addColorStop(0.4, 'transparent');
    shineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
    shineGradient.addColorStop(0.6, 'transparent');
    shineGradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = shineGradient;
    ctx.fillRect(0, 0, width, height);
    
    // Puntos de luz
    this.drawLightPoints();
  }

  drawLightPoints() {
    const { width, height } = this.canvas;
    const ctx = this.ctx;
    const time = this.time * 0.01;
    
    // Puntos de luz que parpadean
    const points = [
      { x: width * 0.2, y: height * 0.2 },
      { x: width * 0.8, y: height * 0.3 },
      { x: width * 0.3, y: height * 0.8 },
      { x: width * 0.7, y: height * 0.7 }
    ];
    
    points.forEach((point, index) => {
      const alpha = 0.3 + 0.2 * Math.sin(time + index * Math.PI / 2);
      
      ctx.save();
      ctx.globalAlpha = alpha;
      
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, 20
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });
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
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('MVGN Labs', width/2, height/2 - 10);
    ctx.fillText('Logo no disponible', width/2, height/2 + 10);
  }

  resize() {
    if (!this.ctx) return;
    
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    
    this.setupCanvas();
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Exportar para uso global
window.MetallicPaintSimple = MetallicPaintSimple;
