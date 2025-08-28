# Efecto Galaxy para MVGN Labs Portfolio

## Descripción
Se ha implementado un efecto Galaxy interactivo usando WebGL para reemplazar el fondo de la hero section. Este efecto crea un campo de estrellas animado con interacción del mouse y efectos visuales avanzados.

## Archivos Implementados

### 1. `js/galaxy.js`
- Clase principal `GalaxyEffect` que maneja el renderizado WebGL
- Shaders de vertex y fragment para el efecto de estrellas
- Sistema de partículas con múltiples capas
- Interacción del mouse con repulsión y seguimiento

### 2. `js/galaxy-init.js`
- Inicialización del efecto Galaxy
- Configuración personalizable de parámetros
- Manejo de redimensionamiento de ventana
- Limpieza de recursos

### 3. `css/galaxy.css`
- Estilos para el contenedor del efecto Galaxy
- Ajustes de posicionamiento y z-index
- Responsive design para dispositivos móviles

## Características del Efecto

### Parámetros Configurables
- **focal**: Punto focal del efecto [0.5, 0.5]
- **rotation**: Rotación del campo de estrellas [1.0, 0.0]
- **starSpeed**: Velocidad de animación de las estrellas 0.5
- **density**: Densidad del campo de estrellas 1.5
- **hueShift**: Desplazamiento de color 240
- **glowIntensity**: Intensidad del brillo 0.5
- **saturation**: Saturación de colores 0.8
- **mouseRepulsion**: Repulsión del mouse activada
- **twinkleIntensity**: Intensidad del parpadeo 0.3

### Efectos Visuales
- Campo de estrellas en múltiples capas
- Estrellas con colores variables y brillo
- Efecto de parpadeo (twinkle) en las estrellas
- Rotación automática del campo
- Interacción del mouse con repulsión
- Efectos de profundidad y perspectiva

### Interactividad
- Las estrellas se alejan del cursor del mouse
- Movimiento suave y fluido
- Respuesta en tiempo real a la posición del mouse
- Efectos de profundidad basados en la posición

## Uso

### HTML
```html
<div class="hero-dynamic-bg">
  <canvas id="galaxy-canvas" class="galaxy-container"></canvas>
</div>
```

### JavaScript
```javascript
// Configuración personalizada
const galaxyOptions = {
  density: 2.0,
  hueShift: 180,
  glowIntensity: 0.8
};

// Crear instancia
const galaxy = new GalaxyEffect(canvas, galaxyOptions);
```

## Compatibilidad
- WebGL 1.0 o superior
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Fallback automático si WebGL no está disponible

## Personalización

### Cambiar Colores
Modifica `hueShift` en `galaxy-init.js`:
- 0-60: Rojos
- 60-120: Verdes  
- 120-180: Azules
- 180-240: Magentas
- 240-300: Púrpuras
- 300-360: Naranjas

### Ajustar Densidad
Modifica `density` para más o menos estrellas:
- 0.5: Pocas estrellas
- 1.0: Densidad normal
- 2.0: Muchas estrellas

### Velocidad de Animación
Ajusta `starSpeed` y `rotationSpeed` para controlar la velocidad de movimiento.

## Rendimiento
- Optimizado para 60fps
- Uso eficiente de WebGL
- Limpieza automática de recursos
- Manejo de redimensionamiento optimizado

## Troubleshooting

### El efecto no se muestra
1. Verifica que WebGL esté habilitado en tu navegador
2. Revisa la consola del navegador para errores
3. Asegúrate de que los archivos JS se carguen correctamente

### Rendimiento lento
1. Reduce `density` en las opciones
2. Desactiva `mouseInteraction` si no es necesaria
3. Reduce `glowIntensity` para menos efectos de brillo

### Problemas en móvil
1. El efecto se adapta automáticamente
2. La interacción del touch está optimizada
3. El rendimiento se ajusta según el dispositivo

## Créditos
Implementación basada en técnicas de WebGL y shaders de partículas, adaptada para el portfolio de MVGN Labs.
