# MVGN Labs - Sistema de Temas y Responsividad

## 🎨 Sistema de Temas

### Características
- **Tema Oscuro**: Diseño principal con colores oscuros y acentos rojos/naranjas
- **Tema Claro**: Alternativa con colores claros y la misma paleta de acentos
- **Cambio Automático**: Se detecta la preferencia del sistema operativo
- **Persistencia**: El tema seleccionado se guarda en localStorage

### Uso del Botón de Tema
El botón de cambio de tema está ubicado en la barra de navegación (Navbar) y permite:
- Cambiar entre tema claro y oscuro
- El icono cambia dinámicamente (Sol para tema oscuro, Luna para tema claro)
- Transiciones suaves entre temas

### Implementación Técnica
```tsx
import { useTheme } from '../contexts/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

## 📱 Responsividad Total

### Breakpoints Implementados
- **xs**: 0px - 640px (móviles pequeños)
- **sm**: 640px - 768px (móviles)
- **md**: 768px - 1024px (tablets)
- **lg**: 1024px - 1280px (laptops)
- **xl**: 1280px+ (desktops)

### Clases Responsivas Disponibles
```css
/* Texto responsivo */
.text-responsive-xs    /* xs: text-xs, sm+: text-sm */
.text-responsive-sm    /* xs: text-sm, sm+: text-base */
.text-responsive-base  /* xs: text-base, sm+: text-lg */
.text-responsive-lg    /* xs: text-lg, sm+: text-xl */
.text-responsive-xl    /* xs: text-xl, sm+: text-2xl */
.text-responsive-2xl   /* xs: text-2xl, sm+: text-3xl */
.text-responsive-3xl   /* xs: text-3xl, sm+: text-4xl */
.text-responsive-4xl   /* xs: text-4xl, sm+: text-5xl */
.text-responsive-5xl   /* xs: text-5xl, sm+: text-6xl */
.text-responsive-6xl   /* xs: text-6xl, sm+: text-7xl */
.text-responsive-7xl   /* xs: text-7xl, sm+: text-8xl */
.text-responsive-8xl   /* xs: text-8xl, sm+: text-9xl */

/* Espaciado responsivo */
.space-responsive-xs   /* xs: space-y-2, sm+: space-y-3 */
.space-responsive-sm   /* xs: space-y-3, sm+: space-y-4 */
.space-responsive-md   /* xs: space-y-4, sm+: space-y-6 */
.space-responsive-lg   /* xs: space-y-6, sm+: space-y-8 */
.space-responsive-xl   /* xs: space-y-8, sm+: space-y-12 */
```

### Componentes Responsivos
- **SplashScreen**: Minimalista, se ajusta a cualquier pantalla
- **Navbar**: Navegación adaptativa con menú hamburguesa en móviles
- **Hero**: Texto y botones que se adaptan a todos los tamaños
- **Todas las secciones**: Espaciado y tipografía responsivos

## 🚀 Uso Rápido

### 1. Cambiar Tema
```tsx
// En cualquier componente
import { useTheme } from '../contexts/ThemeContext';

const { toggleTheme } = useTheme();

// En el JSX
<button onClick={toggleTheme}>
  Cambiar Tema
</button>
```

### 2. Aplicar Clases Responsivas
```tsx
// Texto que se adapta automáticamente
<h1 className="text-responsive-4xl">
  Título Responsivo
</h1>

// Espaciado que se adapta
<div className="space-responsive-lg">
  <p>Contenido con espaciado responsivo</p>
</div>
```

### 3. Usar Clases de Tema
```tsx
// Fondo que cambia con el tema
<div className="bg-background dark:bg-background light:bg-light-background">
  Contenido
</div>

// Texto que cambia con el tema
<p className="text-white dark:text-white light:text-light-text">
  Texto adaptativo
</p>
```

## 🎯 Mejoras Implementadas

### SplashScreen
- ✅ Minimalista y elegante
- ✅ Se ajusta completamente a pantalla desktop
- ✅ Usa tu logo real del favicon
- ✅ Animaciones suaves y profesionales
- ✅ Compatible con ambos temas

### Responsividad
- ✅ Breakpoints completos (xs, sm, md, lg, xl)
- ✅ Clases utilitarias responsivas
- ✅ Componentes que se adaptan a todos los dispositivos
- ✅ Navegación móvil optimizada

### Sistema de Temas
- ✅ Botón funcional de cambio de tema
- ✅ Persistencia en localStorage
- ✅ Detección automática de preferencia del sistema
- ✅ Transiciones suaves entre temas
- ✅ Colores adaptativos para todos los componentes

## 🔧 Personalización

### Agregar Nuevos Breakpoints
```js
// En tailwind.config.js
theme: {
  extend: {
    screens: {
      'xs': '475px',
      '2xl': '1400px',
    }
  }
}
```

### Crear Nuevas Clases Responsivas
```css
/* En globals.css */
@layer utilities {
  .custom-responsive {
    @apply text-sm sm:text-base md:text-lg lg:text-xl;
  }
}
```

## 📱 Testing de Responsividad

### Herramientas Recomendadas
- **Chrome DevTools**: Simulador de dispositivos
- **Firefox Responsive Design Mode**
- **Extensiones**: Window Resizer, Responsive Viewer

### Dispositivos de Prueba
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Laptops**: 1024px - 1440px
- **Desktops**: 1440px+

## 🎨 Paleta de Colores

### Tema Oscuro (Default)
- **Primary**: #dc2626 (Rojo)
- **Accent**: #f59e0b (Naranja)
- **Surface**: #1a1a1a (Gris muy oscuro)
- **Background**: #1a1a1a

### Tema Claro
- **Primary**: #dc2626 (Rojo - igual)
- **Accent**: #f59e0b (Naranja - igual)
- **Surface**: #ffffff (Blanco)
- **Background**: #ffffff

---

**Nota**: Todos los componentes están optimizados para funcionar perfectamente en ambos temas y en todos los tamaños de pantalla.
