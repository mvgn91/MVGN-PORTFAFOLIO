# Terminal Metálica MVGN Labs

## 🎯 Descripción

Sistema de terminal interactiva con logo metálico líquido para el portafolio de MVGN Labs. Reemplaza la terminal de texto estática con un logo animado que utiliza WebGL2 para crear efectos de pintura metálica avanzados.

## ✨ Características Principales

### 🎨 Efectos Visuales
- **Logo Metálico Líquido**: Efecto de pintura metálica usando shaders WebGL2
- **Animaciones Fluidas**: Movimiento continuo con patrones metálicos dinámicos
- **Efectos de Profundidad**: Sombras y brillos que dan sensación 3D
- **Partículas Flotantes**: Efectos sutiles alrededor del logo

### 🖱️ Interactividad
- **Arrastre y Movimiento**: La terminal se puede mover arrastrándola
- **Efectos de Hover**: Respuesta visual al pasar el mouse
- **Click Interactivo**: Efectos al hacer click en el logo
- **Inercia Natural**: Movimiento suave con física realista

### 📱 Responsive Design
- **Adaptativo**: Se ajusta a diferentes tamaños de pantalla
- **Touch Friendly**: Funciona perfectamente en dispositivos móviles
- **Optimizado**: Rendimiento optimizado para todos los dispositivos

## 🚀 Implementación Técnica

### Archivos Principales
```
js/metallic-paint.js          # Sistema de pintura metálica WebGL2
js/metallic-terminal-init.js  # Inicialización y gestión de la terminal
css/metallic-terminal.css     # Estilos y animaciones CSS
```

### Tecnologías Utilizadas
- **WebGL2**: Para efectos de shaders avanzados
- **Vanilla JavaScript**: Sin dependencias externas
- **CSS3**: Animaciones y efectos visuales
- **Canvas API**: Renderizado del logo metálico

### Arquitectura del Sistema
```
MetallicTerminal (Clase principal)
├── MetallicPaint (Sistema WebGL2)
├── Canvas Management
├── Event Handling
└── Animation Loop
```

## 🎮 Uso y Controles

### Interacciones del Usuario
1. **Hover**: Efectos de brillo y elevación
2. **Click**: Efectos visuales y funcionalidad
3. **Arrastre**: Movimiento libre de la terminal
4. **Touch**: Soporte completo para dispositivos móviles

### Parámetros Configurables
```javascript
const options = {
  patternScale: 2.5,        // Escala del patrón metálico
  refraction: 0.02,         // Intensidad de la refracción
  edge: 1.2,                // Definición de bordes
  patternBlur: 0.008,       // Suavizado del patrón
  liquid: 0.1,              // Efecto líquido
  speed: 0.4                 // Velocidad de animación
};
```

## 🔧 Instalación y Configuración

### 1. Incluir Archivos
```html
<!-- CSS -->
<link rel="stylesheet" href="css/metallic-terminal.css">

<!-- JavaScript -->
<script src="js/metallic-paint.js" defer></script>
<script src="js/metallic-terminal-init.js" defer></script>
```

### 2. Estructura HTML Requerida
```html
<div class="hero-code-animation">
  <div class="code-terminal">
    <div class="terminal-header">
      <div class="terminal-title">MVGN Terminal v2.0</div>
      <div class="terminal-controls">
        <div class="control-dot"></div>
        <div class="control-dot"></div>
        <div class="control-dot"></div>
      </div>
    </div>
    <div class="terminal-content">
      <!-- El logo metálico se renderiza aquí -->
    </div>
  </div>
</div>
```

### 3. Inicialización Automática
La terminal se inicializa automáticamente cuando se carga la página. También se puede inicializar manualmente:

```javascript
// Inicialización manual
const terminal = window.initMetallicTerminal();

// Actualizar parámetros en tiempo real
terminal.updateParameters({
  patternScale: 3.0,
  liquid: 0.15
});
```

## 🎨 Personalización

### Colores y Temas
Los colores se pueden personalizar modificando las variables CSS en `metallic-terminal.css`:

```css
.code-terminal {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  /* Personalizar colores aquí */
}
```

### Efectos de Shader
Los efectos de shader se pueden modificar en `metallic-paint.js`:

```glsl
// Fragment shader personalizable
vec3 color1 = vec3(0.98, 0.98, 1.0); // Color metálico 1
vec3 color2 = vec3(0.1, 0.1, 0.15);  // Color metálico 2
```

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 51+
- ✅ Firefox 51+
- ✅ Safari 10+
- ✅ Edge 79+

### Requisitos del Sistema
- **WebGL2**: Debe estar habilitado
- **JavaScript ES6+**: Para funcionalidades modernas
- **CSS3**: Para efectos visuales avanzados

## 🧪 Testing

### Página de Prueba
Se incluye `test-metallic-terminal.html` para probar la funcionalidad de forma aislada.

### Verificación de Funcionalidad
1. Abrir la página de prueba
2. Verificar que el logo metálico se renderice
3. Probar interactividad (hover, click, arrastre)
4. Verificar responsividad en diferentes tamaños

## 🐛 Solución de Problemas

### Problemas Comunes

#### Logo no se renderiza
- Verificar que WebGL2 esté habilitado
- Revisar consola del navegador para errores
- Confirmar que `assets/favicon.png` existe

#### Rendimiento lento
- Reducir `patternScale` y `speed` en las opciones
- Verificar que el dispositivo soporte WebGL2
- Optimizar otros elementos de la página

#### No funciona en móvil
- Verificar que los eventos touch estén habilitados
- Probar en diferentes dispositivos móviles
- Revisar configuración de viewport

### Debugging
```javascript
// Habilitar logs de debug
console.log('Terminal:', window.metallicTerminal);
console.log('MetallicPaint:', window.MetallicPaint);

// Verificar estado de WebGL2
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl2');
console.log('WebGL2 disponible:', !!gl);
```

## 🔮 Futuras Mejoras

### Funcionalidades Planificadas
- [ ] Múltiples temas de colores
- [ ] Efectos de partículas personalizables
- [ ] Integración con sistema de audio
- [ ] Modo de presentación automática
- [ ] Exportación de configuraciones

### Optimizaciones Técnicas
- [ ] Lazy loading de shaders
- [ ] Compresión de texturas
- [ ] Cache de configuraciones
- [ ] Web Workers para cálculos pesados

## 📄 Licencia

Este código es parte del portafolio de MVGN Labs y está diseñado para uso educativo y demostrativo.

## 👨‍💻 Autor

**Armando Ibañez** - MVGN Labs
- Desarrollador Web & Diseñador Digital
- Especialista en tecnologías modernas
- Enfoque en experiencias interactivas únicas

---

*Documentación generada para MVGN Labs - Terminal Metálica v2.0*
