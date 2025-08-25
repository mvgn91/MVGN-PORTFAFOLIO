# Transiciones Suaves entre Secciones - MVGN Labs

## Descripción
Implementación de transiciones suaves entre secciones usando efectos parallax y transiciones estáticas que proporcionan sensación de dinamismo al hacer scroll, sin expandir el efecto multicolor más allá de la sección hero.

## Características Implementadas

### 🎯 Transiciones Suaves
- **Scroll suave**: Navegación fluida entre secciones
- **Efecto parallax sutil**: Movimiento de profundidad al hacer scroll
- **Transiciones escalonadas**: Elementos que aparecen con delay progresivo

### 🔗 Conexiones Visuales
- **Líneas de conexión**: Separadores sutiles entre secciones
- **Efectos hover**: Elevación sutil al pasar el mouse
- **Navegación activa**: Indicador visual de sección actual

### ⚡ Animaciones de Entrada
- **Elementos animados**: Uso del atributo `data-animate`
- **Intersection Observer**: Activación basada en visibilidad
- **Transiciones CSS**: Efectos suaves y optimizados

## Archivos Creados

### CSS
- `css/smooth-scroll-transitions.css` - Estilos para transiciones suaves

### JavaScript
- `js/scroll-transitions.js` - Lógica de transiciones y parallax

## Archivos Modificados

### HTML
- `index.html` - Enlaces a nuevos archivos CSS/JS y clase `section` en hero

## Uso

### Para Elementos Animados
Agregar el atributo `data-animate` a elementos que se quieran animar:

```html
<div class="section-header" data-animate>
  <h2>Título</h2>
  <p>Descripción</p>
</div>
```

### Para Secciones
Asegurar que las secciones tengan la clase `section`:

```html
<section id="about" class="section about-section">
  <!-- Contenido -->
</section>
```

## Efectos Visuales

### Parallax Sutil
- Movimiento máximo de 10px por sección
- Velocidad controlada para suavidad
- Solo se aplica a secciones visibles

### Transiciones de Conexión
- Líneas de separación con gradiente rojo
- Opacidad que cambia al hacer hover
- Altura responsive para móviles

### Animaciones de Entrada
- Opacidad y transformación escalonada
- Delay progresivo de 100ms entre elementos
- Optimizado con `will-change` y `requestAnimationFrame`

## Responsive
- Efectos adaptados para dispositivos móviles
- Transiciones deshabilitadas en pantallas pequeñas
- Soporte para `prefers-reduced-motion`

## Rendimiento
- Uso de `requestAnimationFrame` para scroll
- `IntersectionObserver` para detección de visibilidad
- `will-change` para optimización de GPU
- Throttling de eventos de scroll

## Compatibilidad
- Navegadores modernos con soporte para ES6+
- Fallback graceful para navegadores antiguos
- Soporte para preferencias de accesibilidad
