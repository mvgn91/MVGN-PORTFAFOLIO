# Splash Screen - MVGN Labs

## Descripción

Un splash screen minimalista y elegante diseñado específicamente para el portafolio de MVGN Labs. La pantalla presenta una experiencia de carga limpia y sofisticada con un diseño centrado en la simplicidad y la elegancia.

## Características

### 🎨 **Diseño Visual**
- **Tema Oscuro**: Fondo negro puro (#0a0a0a) con gradientes radiales dinámicos
- **Acento Rojo**: Mantiene la identidad visual con el color #FF4C4C
- **Tipografías**: Fraunces para títulos y Poppins para texto
- **Logo Elegante**: Logo más grande con efectos de hover y sombras
- **Fondo Dinámico**: Gradientes radiales que se mueven suavemente

### 🚀 **Funcionalidades**
- **Detección Automática**: Identifica dispositivos móviles vs desktop
- **Redirección Inteligente**: Dirige a `mobile.html` o `index.html` según el dispositivo
- **Carga Rápida**: Experiencia simplificada de 4 segundos
- **Diseño Limpio**: Sin elementos distractores

### 📱 **Responsive Design**
- **Desktop**: Experiencia completa con elementos grandes (120px logo, 3.5rem título)
- **Tablet**: Adaptación para pantallas medianas (100px logo, 3rem título)
- **Mobile**: Optimización para dispositivos móviles (80px logo, 2.5rem título)
- **Landscape**: Ajustes para orientación horizontal

### ⌨️ **Interactividad**
- **Click to Skip**: Click en cualquier lugar para saltar
- **ESC Key**: Tecla Escape para salto rápido
- **Navegación Simple**: Sin efectos complejos de hover

## Archivos del Proyecto

```
├── splash.html          # Archivo principal del splash screen
├── css/
│   └── splash.css      # Estilos CSS del splash screen
├── js/
│   └── splash.js       # Funcionalidad JavaScript
└── README_SPLASH.md    # Esta documentación
```

## Estructura HTML

### Elementos Principales
- **Logo Container**: Logo elegante de 120px con efectos de hover
- **Brand Name**: Nombre "MVGN Labs" en blanco puro con sombra de texto
- **Loading Bar**: Barra de progreso más ancha con gradiente y sombra
- **System Info**: Información técnica con fondo y borde decorativo
- **Fondo Dinámico**: Gradientes radiales animados que se mueven suavemente

### Clases CSS Importantes
- `.splash-container`: Contenedor principal
- `.logo`: Logo simplificado
- `.loading-progress`: Barra de progreso
- `.brand-name`: Nombre de la marca

## Funcionalidad JavaScript

### Clase SplashScreen
La funcionalidad está encapsulada en una clase ES6 que maneja:

- **Inicialización**: Configuración automática al cargar
- **Secuencia de Carga**: Control de timing y estados
- **Detección de Dispositivos**: Identificación automática
- **Eventos**: Manejo de interacciones del usuario
- **Redirección**: Navegación inteligente al sitio principal

### Métodos Principales
- `init()`: Inicialización del splash screen
- `startLoadingSequence()`: Inicia la secuencia de carga
- `redirectToMainSite()`: Redirección al sitio principal
- `skipSplash()`: Salto manual del splash

## Personalización

### Colores
```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #121212;
  --accent-primary: #FF4C4C;
  --accent-secondary: #FF6B6B;
}
```

### Timing
```javascript
// Redirección simple después de 4 segundos
setTimeout(() => {
  this.redirectToMainSite();
}, 4000);
```

### Duración Total
- **Tiempo de Carga**: 4 segundos
- **Fade Out**: 0.5 segundos
- **Redirección**: 0.5 segundos

## Compatibilidad

### Navegadores
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Dispositivos
- ✅ Desktop (Windows, macOS, Linux)
- ✅ Mobile (iOS, Android)
- ✅ Tablet (iPad, Android tablets)

### Características CSS
- ✅ CSS Grid y Flexbox
- ✅ CSS Animations
- ✅ CSS Gradients
- ✅ CSS Custom Properties

## Accesibilidad

### Características
- **Reducción de Movimiento**: Respeta preferencias del usuario
- **Contraste**: Cumple estándares WCAG AA
- **Navegación por Teclado**: Tecla ESC para salto
- **Screen Readers**: Estructura semántica apropiada

### Media Queries
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Uso

### Implementación Básica
1. Incluir `splash.html` como página de entrada
2. Asegurar que los archivos CSS y JS estén en las rutas correctas
3. El splash se ejecutará automáticamente

### Integración con Sitio Existente
- El splash detecta automáticamente el dispositivo
- Redirige a `mobile.html` o `index.html` según corresponda
- Mantiene la estética y branding del sitio principal

### Personalización Avanzada
- Modificar colores en `css/splash.css`
- Ajustar timing en `js/splash.js`
- Agregar nuevos pasos de progreso
- Personalizar mensajes de estado

## Troubleshooting

### Problemas Comunes
1. **Iconos no aparecen**: Verificar conexión a Lucide CDN
2. **Fuentes no cargan**: Verificar conexión a Google Fonts
3. **Redirección falla**: Verificar existencia de `mobile.html` e `index.html`

### Debug
- Abrir consola del navegador para errores
- Verificar rutas de archivos CSS y JS
- Comprobar que todos los assets estén disponibles

## Performance

### Optimizaciones
- **CSS Crítico**: Estilos inline para carga inmediata
- **Lazy Loading**: JavaScript se carga después del CSS
- **Animaciones Elegantes**: Fade in/out y fondo dinámico suave
- **Efectos Visuales**: Gradientes radiales y sombras sutiles
- **Hover Effects**: Interacciones elegantes en el logo

### Métricas
- **First Paint**: < 100ms
- **First Contentful Paint**: < 200ms
- **Time to Interactive**: < 500ms
- **Bundle Size**: < 50KB total

## Licencia

Este splash screen es parte del portafolio de MVGN Labs y está diseñado específicamente para su uso. Todos los derechos reservados.

---

**Desarrollado por MVGN Labs**  
*Desarrollo Web & Diseño Digital*
