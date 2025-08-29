# Terminal Geek MVGN Labs

## 🎯 Descripción

Sistema de terminal atractiva y geek para el portafolio de MVGN Labs. Reemplaza la terminal de texto estática con una terminal interactiva que incluye efectos de Matrix, comandos reales, y contenido dinámico relacionado con el portafolio.

## ✨ Características Principales

### 🎨 Efectos Visuales
- **Estilo Matrix**: Colores verde neón (#00ff41) con fondo negro
- **Efectos de Typing**: Texto que aparece carácter por carácter
- **Animaciones CSS**: Efectos de fade, glitch, y scanlines
- **Cursor Parpadeante**: Cursor que parpadea como en terminales reales
- **Efectos de Hover**: Respuesta visual al interactuar

### 🖥️ Funcionalidad de Terminal
- **Comandos Reales**: Sistema de comandos funcional y navegable
- **Historial de Comandos**: Navegación con flechas arriba/abajo
- **Typing Effects**: Efectos de escritura en tiempo real
- **Scroll Automático**: La terminal se desplaza automáticamente
- **Responsive**: Se adapta a diferentes tamaños de pantalla

### 📱 Contenido Dinámico
- **Información Personal**: Datos sobre MVGN Labs y habilidades
- **Proyectos**: Lista de proyectos realizados
- **Habilidades Técnicas**: Barras de progreso visuales
- **Contacto**: Información de contacto y horarios
- **Efectos Especiales**: Comandos "matrix" y "hack"

## 🚀 Implementación Técnica

### Archivos Principales
```
js/geek-terminal.js          # Sistema principal de la terminal
css/geek-terminal.css        # Estilos y efectos visuales
test-geek-terminal.html      # Página de prueba
```

### Tecnologías Utilizadas
- **Vanilla JavaScript**: Sin dependencias externas
- **CSS3**: Animaciones y efectos visuales avanzados
- **HTML5**: Estructura semántica
- **Canvas API**: Para efectos especiales (futuro)

### Arquitectura del Sistema
```
GeekTerminal (Clase principal)
├── Terminal Creation
├── Command Processing
├── Event Handling
├── Typing Effects
├── Content Display
└── Special Effects
```

## 🎮 Comandos Disponibles

### Comandos Básicos
- **`help`** - Muestra todos los comandos disponibles
- **`clear`** - Limpia la terminal
- **`ls`** - Lista archivos del sistema
- **`whoami`** - Información del usuario

### Comandos de Sistema
- **`date`** - Fecha y hora actual
- **`neofetch`** - Información del sistema
- **`status`** - Estado del sistema
- **`matrix`** - Efecto Matrix visual

### Comandos de Contenido
- **`about`** - Acerca de MVGN Labs
- **`skills`** - Habilidades técnicas
- **`projects`** - Proyectos realizados
- **`contact`** - Información de contacto

### Comandos de Entretenimiento
- **`hack`** - Secuencia de hacking
- **`matrix`** - Efecto visual de Matrix

## 🔧 Instalación y Configuración

### 1. Incluir Archivos
```html
<!-- CSS -->
<link rel="stylesheet" href="css/geek-terminal.css">

<!-- JavaScript -->
<script src="js/geek-terminal.js" defer></script>
```

### 2. Estructura HTML Requerida
```html
<div class="terminal-content">
  <!-- La terminal se renderizará aquí -->
</div>
```

### 3. Inicialización Automática
La terminal se inicializa automáticamente cuando se encuentra un contenedor `.terminal-content`. También se puede inicializar manualmente:

```javascript
// Inicialización manual
const terminal = window.initGeekTerminal('.terminal-content');

// O crear instancia directamente
const terminal = new GeekTerminal(containerElement);
```

## 🎨 Personalización

### Colores y Temas
Los colores se pueden personalizar modificando las variables CSS en `geek-terminal.css`:

```css
.terminal-title {
  color: #00ff41; /* Color principal Matrix */
  text-shadow: 0 0 10px #00ff41;
}

.terminal-content {
  background: #000; /* Fondo negro */
  color: #00ff41; /* Texto verde */
}
```

### Efectos Visuales
Los efectos se pueden modificar o deshabilitar:

```css
/* Deshabilitar scanlines */
.terminal-content::after {
  display: none;
}

/* Modificar velocidad de animaciones */
.cursor {
  animation: blink 0.5s infinite; /* Más rápido */
}
```

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Requisitos del Sistema
- **JavaScript ES6+**: Para funcionalidades modernas
- **CSS3**: Para efectos visuales avanzados
- **Fuentes Monospace**: JetBrains Mono, Fira Code, Consolas

## 🧪 Testing

### Página de Prueba
Se incluye `test-geek-terminal.html` para probar la funcionalidad de forma aislada.

### Verificación de Funcionalidad
1. Abrir la página de prueba
2. Verificar que la terminal se inicialice automáticamente
3. Probar comandos básicos (help, clear, ls)
4. Verificar efectos visuales (matrix, hack)
5. Probar navegación con flechas

## 🐛 Solución de Problemas

### Problemas Comunes

#### Terminal no se inicializa
- Verificar que el contenedor `.terminal-content` existe
- Revisar consola del navegador para errores
- Confirmar que `geek-terminal.js` se cargó correctamente

#### Comandos no funcionan
- Verificar que la terminal esté completamente inicializada
- Confirmar que no hay errores de JavaScript
- Probar comando `help` primero

#### Efectos visuales no se muestran
- Verificar que `geek-terminal.css` se cargó
- Confirmar que el navegador soporta CSS3
- Revisar si hay conflictos con otros estilos

### Debugging
```javascript
// Verificar estado de la terminal
console.log('Terminal:', window.geekTerminal);

// Verificar comandos disponibles
if (window.geekTerminal) {
  console.log('Comandos:', window.geekTerminal.commandHistory);
}
```

## 🔮 Futuras Mejoras

### Funcionalidades Planificadas
- [ ] Múltiples temas de colores
- [ ] Efectos de sonido
- [ ] Más comandos interactivos
- [ ] Integración con APIs externas
- [ ] Sistema de plugins

### Optimizaciones Técnicas
- [ ] Lazy loading de efectos
- [ ] Web Workers para comandos pesados
- [ ] Cache de respuestas
- [ ] Compresión de assets

## 📄 Licencia

Este código es parte del portafolio de MVGN Labs y está diseñado para uso educativo y demostrativo.

## 👨‍💻 Autor

**Armando Ibañez** - MVGN Labs
- Desarrollador Web & Diseñador Digital
- Especialista en tecnologías modernas
- Enfoque en experiencias interactivas únicas

---

*Documentación generada para MVGN Labs - Terminal Geek v1.0*
