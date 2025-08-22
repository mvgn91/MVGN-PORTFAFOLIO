# Sistema de Diseño Unificado - MVGN Labs Portfolio

## Visión General

Este documento describe el sistema de diseño unificado implementado en el portfolio de MVGN Labs, diseñado para crear una experiencia visual cohesiva y jerárquicamente clara.

## Principios de Diseño

### 1. Jerarquía Visual Clara
- **Punto focal principal**: Hero section con tipografía grande y bold
- **Jerarquía secundaria**: Títulos de sección con escala tipográfica fluida
- **Contenido de apoyo**: Texto descriptivo con opacidad y peso apropiados

### 2. Sistema de Espaciado Uniforme
- Basado en múltiplos de 8px para consistencia
- Espaciado vertical uniforme entre secciones
- Márgenes y padding consistentes en todos los componentes

### 3. Cohesión Visual
- Paleta de colores unificada
- Sistema tipográfico consistente
- Transiciones y animaciones uniformes
- Estados de hover estandarizados

## Sistema de Colores

### Paleta Principal
```css
--primary: #ff6b35;        /* Naranja principal */
--primary-light: #ff8c5a;  /* Naranja claro */
--primary-dark: #e55a2b;   /* Naranja oscuro */

--secondary: #2c2c2c;      /* Gris oscuro */
--secondary-light: #404040; /* Gris claro */

--accent: #1a1a1a;         /* Negro */
--accent-light: #333;      /* Negro claro */
```

### Colores de Texto
```css
--text-primary: #ffffff;     /* Blanco */
--text-secondary: #cccccc;   /* Gris claro */
--text-muted: #999999;       /* Gris medio */
```

### Colores de Superficie
```css
--background: #1a1a1a;      /* Fondo principal */
--surface: #2c2c2c;         /* Superficie de tarjetas */
--surface-light: #404040;    /* Superficie clara */
```

## Sistema de Espaciado

### Variables de Espaciado
```css
--spacing-xs: 8px;      /* 0.5rem */
--spacing-sm: 16px;     /* 1rem */
--spacing-md: 24px;     /* 1.5rem */
--spacing-lg: 32px;     /* 2rem */
--spacing-xl: 48px;     /* 3rem */
--spacing-2xl: 64px;    /* 4rem */
--spacing-3xl: 96px;    /* 6rem */
```

### Espaciado de Secciones
```css
--section-spacing: clamp(4rem, 8vw, 8rem);
```

### Clases Utilitarias
```css
.space-y-xs > * + * { margin-top: var(--spacing-xs); }
.space-y-sm > * + * { margin-top: var(--spacing-sm); }
.space-y-md > * + * { margin-top: var(--spacing-md); }
.space-y-lg > * + * { margin-top: var(--spacing-lg); }
.space-y-xl > * + * { margin-top: var(--spacing-xl); }
```

## Sistema Tipográfico

### Escala Fluida
```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.5rem);
--text-xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
--text-2xl: clamp(2rem, 1.7rem + 1.5vw, 3rem);
--text-3xl: clamp(2.5rem, 2rem + 2.5vw, 4rem);
```

### Jerarquía
- **H1**: `var(--text-3xl)` - Títulos principales
- **H2**: `var(--text-2xl)` - Títulos de sección
- **H3**: `var(--text-xl)` - Subtítulos
- **H4**: `var(--text-lg)` - Títulos de tarjetas
- **P**: `var(--text-base)` - Texto del cuerpo

### Fuentes
- **Fraunces**: Títulos y elementos importantes (serif)
- **Poppins**: Texto del cuerpo y elementos secundarios (sans-serif)

## Sistema de Grid

### Clases de Grid
```css
.section-grid {
  display: grid;
  gap: var(--spacing-xl);
  align-items: start;
}

.section-grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.section-grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

### Contenedores
```css
.container {
  max-width: min(90%, 1200px);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}
```

## Sistema de Componentes

### Card Component
```css
.card {
  background: rgba(44, 44, 44, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: var(--spacing-lg);
  transition: all var(--transition-standard);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: rgba(255, 107, 53, 0.3);
}
```

### Button System
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: 12px;
  font-weight: 600;
  font-size: var(--text-base);
  transition: all var(--transition-standard);
  gap: var(--spacing-sm);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
}
```

### Variantes de Botones
```css
.btn-sm { padding: var(--spacing-sm) var(--spacing-md); }
.btn-lg { padding: var(--spacing-lg) var(--spacing-xl); }
```

## Sistema de Iconos

### Tamaños Estándar
```css
.icon { width: 24px; height: 24px; }
.icon-sm { width: 20px; height: 20px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 48px; height: 48px; }
```

## Sistema de Transiciones

### Variables de Transición
```css
--transition-standard: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
```

### Estados de Hover
```css
.hover-lift:hover {
  transform: translateY(-4px);
}

.hover-scale:hover {
  transform: scale(1.02);
}
```

## Sistema de Sombras

### Variables de Sombra
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.2);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.25);
--shadow-glow: 0 0 20px rgba(255, 107, 53, 0.3);
```

## Responsive Design

### Breakpoints
- **xs**: 475px
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px
- **3xl**: 1600px
- **4xl**: 1920px

### Adaptaciones Responsivas
```css
@media (max-width: 768px) {
  :root {
    --section-spacing: clamp(3rem, 6vw, 6rem);
  }
  
  .section-grid-2,
  .section-grid-3 {
    grid-template-columns: 1fr;
  }
}
```

## Implementación en Componentes

### Hero Section
- Espaciado generoso alrededor del contenido
- Tipografía más grande y bold para el punto focal
- Call-to-action prominente

### About Section
- Layout en dos columnas (imagen + texto)
- Jerarquía clara: título → subtítulo → párrafos
- Espaciado consistente entre elementos

### Services Section
- Cards con altura uniforme
- Iconos del mismo tamaño
- Espaciado interno consistente
- Hover states sutiles y uniformes

### Projects Section
- Grid responsivo con aspect ratios consistentes
- Overlay de información uniforme
- Transiciones suaves y consistentes

### Experience Section
- Línea temporal visual clara
- Cards de experiencia con diseño uniforme
- Fechas con estilo consistente

### Contact Section
- Formulario con estilos consistentes
- Botones que siguen el design system
- Espaciado interno uniforme

## Beneficios del Sistema

1. **Consistencia**: Todos los elementos siguen las mismas reglas de diseño
2. **Mantenibilidad**: Cambios centralizados en variables CSS
3. **Escalabilidad**: Fácil agregar nuevos componentes siguiendo el sistema
4. **Rendimiento**: Transiciones optimizadas y consistentes
5. **Accesibilidad**: Contraste y espaciado consistentes
6. **Responsividad**: Sistema que se adapta a todos los dispositivos

## Uso del Sistema

### Para Nuevos Componentes
1. Usar las variables CSS definidas para colores, espaciado y tipografía
2. Seguir el sistema de grid establecido
3. Implementar transiciones estándar
4. Usar las clases utilitarias para espaciado

### Para Modificaciones
1. Cambiar variables CSS en lugar de valores hardcodeados
2. Mantener la consistencia con el sistema existente
3. Probar en diferentes breakpoints
4. Documentar cambios significativos

---

*Este sistema de diseño está diseñado para evolucionar con el tiempo, manteniendo siempre la cohesión visual y la experiencia del usuario como prioridades principales.*
