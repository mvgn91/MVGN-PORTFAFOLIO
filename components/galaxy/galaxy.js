// Galaxy Effect - WebGL Implementation
class GalaxyEffect {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    
    if (!this.gl) {
      console.error('WebGL no está disponible');
      return;
    }

    this.options = {
      focal: options.focal || [0.5, 0.5],
      rotation: options.rotation || [1.0, 0.0],
      starSpeed: options.starSpeed || 0.5,
      density: options.density || 1,
      hueShift: options.hueShift || 140,
      speed: options.speed || 1.0,
      mouseInteraction: options.mouseInteraction !== false,
      glowIntensity: options.glowIntensity || 0.3,
      saturation: options.saturation || 0.0,
      mouseRepulsion: options.mouseRepulsion !== false,
      repulsionStrength: options.repulsionStrength || 2,
      twinkleIntensity: options.twinkleIntensity || 0.3,
      rotationSpeed: options.rotationSpeed || 0.1,
      autoCenterRepulsion: options.autoCenterRepulsion || 0,
      transparent: options.transparent !== false
    };

    this.mousePos = { x: 0.5, y: 0.5 };
    this.mouseActive = 0.0;
    this.time = 0;
    this.animationId = null;

    this.init();
    this.setupEventListeners();
    this.animate();
  }

  init() {
    const gl = this.gl;
    
    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `;

    // Fragment shader
    const fragmentShaderSource = `
      precision highp float;
      
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uFocal;
      uniform vec2 uRotation;
      uniform float uStarSpeed;
      uniform float uDensity;
      uniform float uHueShift;
      uniform float uSpeed;
      uniform vec2 uMouse;
      uniform float uGlowIntensity;
      uniform float uSaturation;
      uniform bool uMouseRepulsion;
      uniform float uTwinkleIntensity;
      uniform float uRotationSpeed;
      uniform float uRepulsionStrength;
      uniform float uMouseActiveFactor;
      uniform float uAutoCenterRepulsion;
      
      varying vec2 v_texCoord;
      
      #define NUM_LAYER 4.0
      #define STAR_COLOR_CUTOFF 0.2
      #define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
      #define PERIOD 3.0
      
      float hash21(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }
      
      float tri(float x) {
        return abs(fract(x) * 2.0 - 1.0);
      }
      
      float tris(float x) {
        float t = fract(x);
        return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
      }
      
      float trisn(float x) {
        float t = fract(x);
        return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
      }
      
      vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }
      
      float star(vec2 uv, float flare) {
        float d = length(uv);
        float m = (0.05 * uGlowIntensity) / d;
        float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
        m += rays * flare * uGlowIntensity;
        uv *= MAT45;
        rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
        m += rays * 0.3 * flare * uGlowIntensity;
        m *= smoothstep(1.0, 0.2, d);
        return m;
      }
      
      vec3 starLayer(vec2 uv) {
        vec3 col = vec3(0.0);
        
        vec2 gv = fract(uv) - 0.5;
        vec2 id = floor(uv);
        
        for (int y = -1; y <= 1; y++) {
          for (int x = -1; x <= 1; x++) {
            vec2 offset = vec2(float(x), float(y));
            vec2 si = id + vec2(float(x), float(y));
            float seed = hash21(si);
            float size = fract(seed * 345.32);
            float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
            float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;
            
            float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
            float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
            float grn = min(red, blu) * seed;
            vec3 base = vec3(red, grn, blu);
            
            float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
            hue = fract(hue + uHueShift / 360.0);
            float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
            float val = max(max(base.r, base.g), base.b);
            base = hsv2rgb(vec3(hue, sat, val));
            
            vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;
            
            float star = star(gv - offset - pad, flareSize);
            vec3 color = base;
            
            float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
            twinkle = mix(1.0, twinkle, uTwinkleIntensity);
            star *= twinkle;
            
            col += star * size * color;
          }
        }
        
        return col;
      }
      
      void main() {
        vec2 focalPx = uFocal * uResolution.xy;
        vec2 uv = (v_texCoord * uResolution.xy - focalPx) / uResolution.y;
        
        vec2 mouseNorm = uMouse - vec2(0.5);
        
        if (uAutoCenterRepulsion > 0.0) {
          vec2 centerUV = vec2(0.0, 0.0);
          float centerDist = length(uv - centerUV);
          vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
          uv += repulsion * 0.05;
        } else if (uMouseRepulsion) {
          vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
          float mouseDist = length(uv - mousePosUV);
          vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
          uv += repulsion * 0.05 * uMouseActiveFactor;
        } else {
          vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
          uv += mouseOffset;
        }
        
        float autoRotAngle = uTime * uRotationSpeed;
        mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
        uv = autoRot * uv;
        
        uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;
        
        vec3 col = vec3(0.0);
        
        for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
          float depth = fract(i + uStarSpeed * uSpeed);
          float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
          float fade = depth * smoothstep(1.0, 0.9, depth);
          col += starLayer(uv * scale + i * 453.32) * fade;
        }
        
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // Compile shaders
    const vertexShader = this.compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    // Create program
    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error('Error linking program:', gl.getProgramInfoLog(this.program));
      return;
    }

    gl.useProgram(this.program);

    // Create buffers
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1
    ]);

    const texCoords = new Float32Array([
      0, 0,
      1, 0,
      0, 1,
      1, 1
    ]);

    // Position buffer
    this.positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(this.program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // TexCoord buffer
    this.texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);

    const texCoordLocation = gl.getAttribLocation(this.program, 'a_texCoord');
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    this.uniforms = {
      uTime: gl.getUniformLocation(this.program, 'uTime'),
      uResolution: gl.getUniformLocation(this.program, 'uResolution'),
      uFocal: gl.getUniformLocation(this.program, 'uFocal'),
      uRotation: gl.getUniformLocation(this.program, 'uRotation'),
      uStarSpeed: gl.getUniformLocation(this.program, 'uStarSpeed'),
      uDensity: gl.getUniformLocation(this.program, 'uDensity'),
      uHueShift: gl.getUniformLocation(this.program, 'uHueShift'),
      uSpeed: gl.getUniformLocation(this.program, 'uSpeed'),
      uMouse: gl.getUniformLocation(this.program, 'uMouse'),
      uGlowIntensity: gl.getUniformLocation(this.program, 'uGlowIntensity'),
      uSaturation: gl.getUniformLocation(this.program, 'uSaturation'),
      uMouseRepulsion: gl.getUniformLocation(this.program, 'uMouseRepulsion'),
      uTwinkleIntensity: gl.getUniformLocation(this.program, 'uTwinkleIntensity'),
      uRotationSpeed: gl.getUniformLocation(this.program, 'uRotationSpeed'),
      uRepulsionStrength: gl.getUniformLocation(this.program, 'uRepulsionStrength'),
      uMouseActiveFactor: gl.getUniformLocation(this.program, 'uMouseActiveFactor'),
      uAutoCenterRepulsion: gl.getUniformLocation(this.program, 'uAutoCenterRepulsion')
    };

    // Set initial uniform values
    this.updateUniforms();
  }

  compileShader(type, source) {
    const gl = this.gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Error compiling shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  updateUniforms() {
    const gl = this.gl;
    
    gl.uniform1f(this.uniforms.uTime, this.time);
    gl.uniform2f(this.uniforms.uResolution, this.canvas.width, this.canvas.height);
    gl.uniform2f(this.uniforms.uFocal, this.options.focal[0], this.options.focal[1]);
    gl.uniform2f(this.uniforms.uRotation, this.options.rotation[0], this.options.rotation[1]);
    gl.uniform1f(this.uniforms.uStarSpeed, this.options.starSpeed);
    gl.uniform1f(this.uniforms.uDensity, this.options.density);
    gl.uniform1f(this.uniforms.uHueShift, this.options.hueShift);
    gl.uniform1f(this.uniforms.uSpeed, this.options.speed);
    gl.uniform2f(this.uniforms.uMouse, this.mousePos.x, this.mousePos.y);
    gl.uniform1f(this.uniforms.uGlowIntensity, this.options.glowIntensity);
    gl.uniform1f(this.uniforms.uSaturation, this.options.saturation);
    gl.uniform1i(this.uniforms.uMouseRepulsion, this.options.mouseRepulsion ? 1 : 0);
    gl.uniform1f(this.uniforms.uTwinkleIntensity, this.options.twinkleIntensity);
    gl.uniform1f(this.uniforms.uRotationSpeed, this.options.rotationSpeed);
    gl.uniform1f(this.uniforms.uRepulsionStrength, this.options.repulsionStrength);
    gl.uniform1f(this.uniforms.uMouseActiveFactor, this.mouseActive);
    gl.uniform1f(this.uniforms.uAutoCenterRepulsion, this.options.autoCenterRepulsion);
  }

  setupEventListeners() {
    if (!this.options.mouseInteraction) return;

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mousePos.x = (e.clientX - rect.left) / rect.width;
      this.mousePos.y = 1.0 - (e.clientY - rect.top) / rect.height;
      this.mouseActive = 1.0;
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.mouseActive = 0.0;
    });
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio;
    this.canvas.height = rect.height * window.devicePixelRatio;
    this.canvas.style.width = rect.width + 'px';
    this.canvas.style.height = rect.height + 'px';
    
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  animate() {
    this.time += 0.016; // ~60fps
    this.updateUniforms();
    
    const gl = this.gl;
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    const gl = this.gl;
    if (this.program) {
      gl.deleteProgram(this.program);
    }
    if (this.positionBuffer) {
      gl.deleteBuffer(this.positionBuffer);
    }
    if (this.texCoordBuffer) {
      gl.deleteBuffer(this.texCoordBuffer);
    }
  }
}

// Export for use in other files
window.GalaxyEffect = GalaxyEffect;
