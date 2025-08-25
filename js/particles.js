// ========================================
// MVGN LABS - SISTEMA DE PARTÍCULAS DINÁMICAS
// ========================================

class ParticleSystem {
  constructor() {
    this.canvas = document.getElementById('particles-bg');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.isActive = true;
    
    this.init();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }
  
  init() {
    this.resize();
    this.ctx.fillStyle = '#FF4C4C';
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticles() {
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 10));
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        life: Math.random() * 100 + 50
      });
    }
  }
  
  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    
    // Pausar animación cuando no está visible
    document.addEventListener('visibilitychange', () => {
      this.isActive = !document.hidden;
    });
  }
  
  updateParticles() {
    this.particles.forEach((particle, index) => {
      // Mover partícula
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Interacción con el mouse
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx += dx * force * 0.001;
        particle.vy += dy * force * 0.001;
      }
      
      // Límites del canvas
      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
      }
      
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
      }
      
      // Reducir velocidad gradualmente
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Ciclo de vida
      particle.life--;
      if (particle.life <= 0) {
        particle.x = Math.random() * this.canvas.width;
        particle.y = Math.random() * this.canvas.height;
        particle.life = Math.random() * 100 + 50;
        particle.opacity = Math.random() * 0.5 + 0.2;
      }
    });
  }
  
  drawParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Dibujar conexiones entre partículas cercanas
    this.ctx.strokeStyle = 'rgba(255, 76, 76, 0.1)';
    this.ctx.lineWidth = 1;
    
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80) {
          const opacity = (80 - distance) / 80 * 0.1;
          this.ctx.strokeStyle = `rgba(255, 76, 76, ${opacity})`;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
    
    // Dibujar partículas
    this.particles.forEach(particle => {
      this.ctx.save();
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.fillStyle = '#FF4C4C';
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
  }
  
  animate() {
    if (!this.isActive) {
      requestAnimationFrame(() => this.animate());
      return;
    }
    
    this.updateParticles();
    this.drawParticles();
    
    requestAnimationFrame(() => this.animate());
  }
}

// Inicializar sistema de partículas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new ParticleSystem();
});
