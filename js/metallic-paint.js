// MetallicPaint.js - Sistema de pintura metálica para MVGN Labs
// Adaptado de React a Vanilla JavaScript para integrarse con la terminal

class MetallicPaint {
  constructor(canvas, imageSrc, options = {}) {
    this.canvas = canvas;
    this.imageSrc = imageSrc;
    this.options = {
      patternScale: 2,
      refraction: 0.015,
      edge: 1,
      patternBlur: 0.005,
      liquid: 0.07,
      speed: 0.3,
      ...options
    };
    
    this.gl = null;
    this.program = null;
    this.uniforms = {};
    this.imageData = null;
    this.texture = null;
    this.animationId = null;
    this.totalTime = 0;
    this.lastTime = 0;
    
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.currentPosition = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.friction = 0.95;
    
    this.init();
  }

  async init() {
    try {
      await this.loadImage();
      this.initWebGL();
      this.setupEventListeners();
      this.startAnimation();
    } catch (error) {
      console.error('Error initializing MetallicPaint:', error);
    }
  }

  async loadImage() {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Redimensionar imagen para optimizar rendimiento
        const maxSize = 512;
        let { width, height } = img;
        
        if (width > height) {
          if (width > maxSize) {
            height = (height * maxSize) / width;
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width = (width * maxSize) / height;
            height = maxSize;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        ctx.drawImage(img, 0, 0, width, height);
        this.imageData = ctx.getImageData(0, 0, width, height);
        resolve();
      };
      
      img.onerror = reject;
      img.src = this.imageSrc;
    });
  }

  initWebGL() {
    this.gl = this.canvas.getContext('webgl2', {
      antialias: true,
      alpha: true,
      premultipliedAlpha: false
    });

    if (!this.gl) {
      throw new Error('WebGL2 no disponible');
    }

    this.createShaders();
    this.createBuffers();
    this.createTexture();
    this.setupUniforms();
  }

  createShaders() {
    const vertexShader = this.createShader(this.gl.VERTEX_SHADER, `
      #version 300 es
      precision mediump float;
      
      in vec2 a_position;
      out vec2 vUv;
      
      void main() {
        vUv = 0.5 * (a_position + 1.0);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `);

    const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, `
      #version 300 es
      precision mediump float;
      
      in vec2 vUv;
      out vec4 fragColor;
      
      uniform sampler2D u_image_texture;
      uniform float u_time;
      uniform float u_patternScale;
      uniform float u_refraction;
      uniform float u_edge;
      uniform float u_patternBlur;
      uniform float u_liquid;
      
      #define PI 3.14159265359
      
      // Simplex noise function
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
      
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      
      void main() {
        vec2 uv = vUv;
        float t = u_time * 0.001;
        
        // Efecto de ondas líquidas
        float noise = snoise(uv * 3.0 + t) * u_liquid;
        uv += noise * 0.02;
        
        // Patrón de rayas metálicas
        float stripes = mod(uv.x * u_patternScale + t * 0.5, 1.0);
        float edge = smoothstep(0.0, u_edge, stripes) * smoothstep(1.0, 1.0 - u_edge, stripes);
        
        // Colores metálicos
        vec3 color1 = vec3(0.98, 0.98, 1.0); // Plateado claro
        vec3 color2 = vec3(0.1, 0.1, 0.15);  // Gris oscuro
        
        // Refracción
        float refr = sin(uv.y * PI + t) * u_refraction;
        float refrStripe = mod(stripes + refr, 1.0);
        
        // Mezcla de colores
        vec3 color = mix(color1, color2, refrStripe);
        color = mix(color, color1, edge * 0.3);
        
        // Efecto de profundidad
        float depth = smoothstep(0.0, 0.5, uv.y) * 0.2;
        color += depth;
        
        // Aplicar máscara de imagen
        vec4 imgColor = texture(u_image_texture, uv);
        float alpha = imgColor.a;
        
        // Efecto de brillo metálico
        float shine = pow(sin(uv.x * 10.0 + t * 2.0) * 0.5 + 0.5, 3.0) * 0.3;
        color += shine;
        
        fragColor = vec4(color, alpha);
      }
    `);

    this.program = this.createProgram(vertexShader, fragmentShader);
    this.gl.useProgram(this.program);
  }

  createShader(type, source) {
    const shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      const error = this.gl.getShaderInfoLog(shader);
      this.gl.deleteShader(shader);
      throw new Error(`Error compilando shader: ${error}`);
    }

    return shader;
  }

  createProgram(vertexShader, fragmentShader) {
    const program = this.gl.createProgram();
    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);

    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      const error = this.gl.getProgramInfoLog(program);
      this.gl.deleteProgram(program);
      throw new Error(`Error linkeando programa: ${error}`);
    }

    return program;
  }

  createBuffers() {
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);

    const positionLocation = this.gl.getAttribLocation(this.program, 'a_position');
    this.gl.enableVertexAttribArray(positionLocation);
    this.gl.vertexAttribPointer(positionLocation, 2, this.gl.FLOAT, false, 0, 0);
  }

  createTexture() {
    this.texture = this.gl.createTexture();
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);

    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

    if (this.imageData) {
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        0,
        this.gl.RGBA,
        this.gl.RGBA,
        this.gl.UNSIGNED_BYTE,
        this.imageData
      );
    }
  }

  setupUniforms() {
    this.uniforms = {
      u_image_texture: this.gl.getUniformLocation(this.program, 'u_image_texture'),
      u_time: this.gl.getUniformLocation(this.program, 'u_time'),
      u_patternScale: this.gl.getUniformLocation(this.program, 'u_patternScale'),
      u_refraction: this.gl.getUniformLocation(this.program, 'u_refraction'),
      u_edge: this.gl.getUniformLocation(this.program, 'u_edge'),
      u_patternBlur: this.gl.getUniformLocation(this.program, 'u_patternBlur'),
      u_liquid: this.gl.getUniformLocation(this.program, 'u_liquid')
    };

    // Configurar valores iniciales
    this.gl.uniform1i(this.uniforms.u_image_texture, 0);
    this.gl.uniform1f(this.uniforms.u_patternScale, this.options.patternScale);
    this.gl.uniform1f(this.uniforms.u_refraction, this.options.refraction);
    this.gl.uniform1f(this.uniforms.u_edge, this.options.edge);
    this.gl.uniform1f(this.uniforms.u_patternBlur, this.options.patternBlur);
    this.gl.uniform1f(this.uniforms.u_liquid, this.options.liquid);
  }

  setupEventListeners() {
    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.canvas.addEventListener('touchstart', this.onTouchStart.bind(this));
    this.canvas.addEventListener('touchmove', this.onTouchMove.bind(this));
    this.canvas.addEventListener('touchend', this.onTouchEnd.bind(this));
  }

  onMouseDown(e) {
    this.isDragging = true;
    this.dragStart.x = e.clientX - this.currentPosition.x;
    this.dragStart.y = e.clientY - this.currentPosition.y;
  }

  onMouseMove(e) {
    if (!this.isDragging) return;
    
    this.currentPosition.x = e.clientX - this.dragStart.x;
    this.currentPosition.y = e.clientY - this.dragStart.y;
    
    // Aplicar transformación a la terminal
    this.updateTerminalTransform();
  }

  onMouseUp() {
    this.isDragging = false;
    // Aplicar inercia
    this.velocity.x = (this.currentPosition.x - this.dragStart.x) * 0.1;
    this.velocity.y = (this.currentPosition.y - this.dragStart.y) * 0.1;
  }

  onTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    this.isDragging = true;
    this.dragStart.x = touch.clientX - this.currentPosition.x;
    this.dragStart.y = touch.clientY - this.currentPosition.y;
  }

  onTouchMove(e) {
    e.preventDefault();
    if (!this.isDragging) return;
    
    const touch = e.touches[0];
    this.currentPosition.x = touch.clientX - this.dragStart.x;
    this.currentPosition.y = touch.clientY - this.dragStart.y;
    
    this.updateTerminalTransform();
  }

  onTouchEnd(e) {
    e.preventDefault();
    this.isDragging = false;
  }

  updateTerminalTransform() {
    const terminal = this.canvas.closest('.code-terminal');
    if (terminal) {
      terminal.style.transform = `translate(${this.currentPosition.x}px, ${this.currentPosition.y}px)`;
    }
  }

  startAnimation() {
    const animate = (currentTime) => {
      if (!this.lastTime) this.lastTime = currentTime;
      const deltaTime = currentTime - this.lastTime;
      this.lastTime = currentTime;

      this.totalTime += deltaTime * this.options.speed;
      
      if (this.gl && this.uniforms.u_time) {
        this.gl.uniform1f(this.uniforms.u_time, this.totalTime);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
      }

      // Aplicar inercia cuando no se está arrastrando
      if (!this.isDragging) {
        this.currentPosition.x += this.velocity.x;
        this.currentPosition.y += this.velocity.y;
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
        
        // Límites de movimiento
        const maxMove = 50;
        if (Math.abs(this.currentPosition.x) > maxMove) {
          this.currentPosition.x = Math.sign(this.currentPosition.x) * maxMove;
          this.velocity.x = 0;
        }
        if (Math.abs(this.currentPosition.y) > maxMove) {
          this.currentPosition.y = Math.sign(this.currentPosition.y) * maxMove;
          this.velocity.y = 0;
        }
        
        this.updateTerminalTransform();
      }

      this.animationId = requestAnimationFrame(animate);
    };

    this.animationId = requestAnimationFrame(animate);
  }

  resize() {
    if (!this.gl) return;
    
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio;
    this.canvas.height = rect.height * window.devicePixelRatio;
    
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.texture) {
      this.gl.deleteTexture(this.texture);
    }
    
    if (this.program) {
      this.gl.deleteProgram(this.program);
    }
  }
}

// Exportar para uso global
window.MetallicPaint = MetallicPaint;
