# 🎯 Guía Universal de Diseño Responsivo

## **📱 Breakpoints Estándar**

### **Desktop First (Recomendado)**
```css
/* Desktop por defecto (no necesita media query) */

/* Tablet */
@media (max-width: 768px) { }

/* Mobile grande */
@media (max-width: 480px) { }

/* Mobile mediano */
@media (max-width: 375px) { }

/* Mobile pequeño */
@media (max-width: 320px) { }
```

### **Mobile First (Alternativo)**
```css
/* Mobile por defecto (no necesita media query) */

/* Mobile grande */
@media (min-width: 321px) { }

/* Mobile mediano */
@media (min-width: 376px) { }

/* Tablet */
@media (min-width: 481px) { }

/* Desktop */
@media (min-width: 769px) { }
```

---

## **🔧 Media Queries Específicas por Dispositivo**

### **1. Detección de Dispositivos Táctiles**
```css
/* Solo dispositivos táctiles (móviles/tablets) */
@media (hover: none) and (pointer: coarse) {
  /* Optimizaciones específicas para móvil */
}

/* Solo dispositivos con mouse (desktop) */
@media (hover: hover) and (pointer: fine) {
  /* Efectos de hover para desktop */
}
```

### **2. Detección de Pantallas de Alta Resolución**
```css
/* Pantallas Retina/2K */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* Optimizaciones para alta densidad */
}

/* Pantallas Ultra HD/4K */
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
  /* Optimizaciones para ultra alta densidad */
}
```

### **3. Preferencias de Usuario**
```css
/* Usuarios que prefieren menos movimiento */
@media (prefers-reduced-motion: reduce) {
  /* Desactivar animaciones */
}

/* Usuarios que prefieren alto contraste */
@media (prefers-contrast: high) {
  /* Aumentar contraste */
}
```

---

## **📐 Sistema de Espaciado Responsivo**

### **Variables CSS para Espaciado**
```css
:root {
  /* Espaciado base */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  
  /* Espaciado responsivo */
  --container-padding: 20px;
  --section-margin: 40px;
}

/* Ajustes por breakpoint */
@media (max-width: 768px) {
  :root {
    --container-padding: 16px;
    --section-margin: 32px;
  }
}

@media (max-width: 480px) {
  :root {
    --container-padding: 14px;
    --section-margin: 24px;
  }
}

@media (max-width: 375px) {
  :root {
    --container-padding: 12px;
    --section-margin: 20px;
  }
}
```

---

## **🔤 Sistema de Tipografía Responsivo**

### **Escalado de Fuentes con `svh` y `em`**
```css
/* Títulos principales */
h1 {
  font-size: min(5.5svh, 4.0em); /* Responsivo pero con límite máximo */
}

/* Títulos secundarios */
h2 {
  font-size: min(4.5svh, 3.5em);
}

/* Títulos terciarios */
h3 {
  font-size: min(3.8svh, 2.8em);
}

/* Párrafos */
p {
  font-size: min(3.2svh, 1.2em);
}

/* Texto pequeño */
.small-text {
  font-size: min(2.8svh, 0.9em);
}
```

### **Ajustes por Breakpoint**
```css
@media (max-width: 768px) {
  h1 { font-size: min(4.5svh, 3.5em); }
  h2 { font-size: min(3.8svh, 3.0em); }
  h3 { font-size: min(3.2svh, 2.4em); }
  p { font-size: min(2.8svh, 1.1em); }
}

@media (max-width: 480px) {
  h1 { font-size: min(3.8svh, 2.8em); }
  h2 { font-size: min(3.2svh, 2.4em); }
  h3 { font-size: min(2.8svh, 2.0em); }
  p { font-size: min(2.4svh, 1.0em); }
}

@media (max-width: 375px) {
  h1 { font-size: min(3.5svh, 2.6em); }
  h2 { font-size: min(3.0svh, 2.2em); }
  h3 { font-size: min(2.6svh, 1.8em); }
  p { font-size: min(2.2svh, 0.9em); }
}
```

---

## **📱 Optimizaciones de Rendimiento para Móvil**

### **1. Efectos Táctiles Optimizados**
```css
@media (hover: none) and (pointer: coarse) {
  /* Tarjeta principal */
  .card {
    transition: transform 0.15s ease;
  }
  
  .card:active {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.15) 0 8px 16px -2px;
  }
  
  /* Botones */
  .btn:active {
    transform: translateY(-1px);
    background: rgba(255, 68, 68, 0.3);
    transition: background 0.1s ease;
  }
  
  /* Elementos interactivos */
  .interactive:active {
    background: rgba(255, 68, 68, 0.1);
    transition: background 0.1s ease;
  }
}
```

### **2. Propiedades `will-change` Optimizadas**
```css
/* Desktop */
.card {
  will-change: transform, box-shadow;
  contain: layout style paint;
}

/* Móvil */
@media (hover: none) and (pointer: coarse) {
  .card {
    will-change: transform;
    contain: layout style;
  }
  
  .avatar {
    will-change: auto;
  }
  
  .btn {
    will-change: background;
  }
}
```

### **3. Efectos 3D Desactivados en Móvil**
```css
@media (hover: none) and (pointer: coarse) {
  .card-wrapper {
    perspective: none;
  }
  
  .card {
    transform-style: flat;
  }
  
  .avatar {
    transform-style: flat;
    backface-visibility: hidden;
  }
}
```

---

## **🎨 Sistema de Colores y Contraste Responsivo**

### **Variables de Color Base**
```css
:root {
  /* Colores principales */
  --primary: #ff4444;
  --primary-light: #ff6666;
  --primary-dark: #cc3333;
  
  /* Colores de fondo */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2a2a2a;
  --bg-tertiary: #3a3a3a;
  
  /* Colores de texto */
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-muted: rgba(255, 255, 255, 0.6);
  
  /* Opacidades responsivas */
  --overlay-light: 0.1;
  --overlay-medium: 0.2;
  --overlay-heavy: 0.3;
}

/* Ajustes para móvil */
@media (max-width: 480px) {
  :root {
    --overlay-light: 0.05;
    --overlay-medium: 0.1;
    --overlay-heavy: 0.2;
  }
}
```

---

## **📐 Layout y Grid Responsivo**

### **Sistema de Grid Flexbox**
```css
.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--container-padding);
}

/* Desktop: Layout horizontal */
@media (min-width: 769px) {
  .container {
    flex-direction: row;
    gap: var(--spacing-lg);
  }
  
  .sidebar {
    flex: 0 0 300px;
  }
  
  .main-content {
    flex: 1;
  }
}

/* Tablet: Layout mixto */
@media (max-width: 768px) and (min-width: 481px) {
  .container {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .sidebar {
    order: -1; /* Mover arriba en tablet */
  }
}

/* Mobile: Layout vertical */
@media (max-width: 480px) {
  .container {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
```

### **Sistema de Columnas Responsivo**
```css
.grid {
  display: grid;
  gap: var(--spacing-md);
}

/* Desktop: 4 columnas */
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Desktop pequeño: 3 columnas */
@media (max-width: 1199px) and (min-width: 769px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Tablet: 2 columnas */
@media (max-width: 768px) and (min-width: 481px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1 columna */
@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

---

## **🎭 Animaciones y Transiciones Responsivas**

### **Sistema de Duración de Transiciones**
```css
:root {
  --transition-fast: 0.1s;
  --transition-normal: 0.3s;
  --transition-slow: 0.5s;
  --transition-slower: 0.8s;
}

/* Desktop: Transiciones completas */
.card {
  transition: all var(--transition-normal) cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Móvil: Transiciones simplificadas */
@media (hover: none) and (pointer: coarse) {
  .card {
    transition: transform var(--transition-fast) ease;
  }
  
  .btn {
    transition: background var(--transition-fast) ease;
  }
}
```

### **Animaciones Condicionales**
```css
/* Solo en desktop */
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .btn:hover {
    transform: translateY(-3px) scale(1.05);
  }
}

/* Solo en móvil */
@media (hover: none) and (pointer: coarse) {
  .card:active {
    transform: translateY(-2px);
  }
  
  .btn:active {
    transform: translateY(-1px);
  }
}
```

---

## **🔍 Optimizaciones de Accesibilidad**

### **Contraste y Legibilidad**
```css
/* Alto contraste para mejor legibilidad */
@media (prefers-contrast: high) {
  .text {
    color: #000000;
    background: #ffffff;
    text-shadow: none;
  }
  
  .btn {
    background: #000000;
    color: #ffffff;
    border: 2px solid #000000;
  }
}

/* Reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## **📱 Patrones de Componentes Responsivos**

### **Tarjeta Responsiva**
```css
.card {
  /* Desktop por defecto */
  padding: var(--spacing-lg);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .card {
    padding: var(--spacing-md);
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
}

@media (max-width: 480px) {
  .card {
    padding: var(--spacing-sm);
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}
```

### **Botón Responsivo**
```css
.btn {
  /* Desktop por defecto */
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .btn {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 6px;
  }
}

@media (max-width: 480px) {
  .btn {
    padding: 8px 16px;
    font-size: 13px;
    border-radius: 4px;
  }
}
```

---

## **🚀 Checklist de Implementación**

### **Antes de Empezar**
- [ ] Definir breakpoints del proyecto
- [ ] Establecer sistema de variables CSS
- [ ] Planificar layout responsivo
- [ ] Definir tipografía escalable

### **Durante el Desarrollo**
- [ ] Implementar media queries progresivamente
- [ ] Probar en dispositivos reales
- [ ] Optimizar rendimiento móvil
- [ ] Verificar accesibilidad

### **Antes del Deploy**
- [ ] Testear en múltiples navegadores
- [ ] Verificar rendimiento en dispositivos lentos
- [ ] Validar accesibilidad
- [ ] Optimizar imágenes y assets

---

## **💡 Mejores Prácticas**

### **1. Mobile First vs Desktop First**
- **Mobile First:** Mejor para proyectos nuevos, más fácil escalar
- **Desktop First:** Mejor para proyectos existentes, más rápido implementar

### **2. Performance**
- Usar `will-change` solo cuando sea necesario
- Desactivar efectos 3D en móvil
- Simplificar transiciones en dispositivos táctiles

### **3. Accesibilidad**
- Siempre incluir `prefers-reduced-motion`
- Considerar `prefers-contrast: high`
- Mantener contraste mínimo de 4.5:1

### **4. Testing**
- Probar en dispositivos reales, no solo en DevTools
- Verificar en diferentes tamaños de pantalla
- Testear con diferentes velocidades de conexión

---

## **🔗 Recursos Adicionales**

- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

---

*Esta guía está basada en las mejores prácticas implementadas en el proyecto Mvgn Labs Portfolio y puede ser adaptada para cualquier proyecto web.*

