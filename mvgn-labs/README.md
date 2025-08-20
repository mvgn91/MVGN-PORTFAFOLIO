# MVGN Labs - Portafolio Digital

Portafolio digital personal moderno y minimalista para **Armando Ibañez**, desarrollador web y diseñador digital.

## 🚀 Características

- **Diseño Moderno**: Inspirado en Material Design 3 con estética editorial minimalista
- **100% Responsivo**: Optimizado para desktop, tablet y mobile
- **Tema Claro/Oscuro**: Toggle integrado con persistencia local
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Performance Optimizada**: Lazy loading y optimizaciones de rendimiento
- **SEO Friendly**: Estructura semántica y metadatos optimizados

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS + CSS personalizado
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Componentes**: shadcn/ui (inspirado)
- **Build Tool**: Vite (React Scripts)

## 🎨 Paleta de Colores

- **Primary**: #dc2626 (Rojo)
- **Primary Light**: #ef4444
- **Primary Dark**: #b91c1c
- **Secondary**: #6b7280 (Gris)
- **Accent**: #f59e0b (Amarillo/Naranja)
- **Background**: #0f0f0f (Negro)
- **Surface**: #1a1a1a

## 📱 Secciones del Sitio

1. **Hero Section** - Presentación principal con foto de perfil
2. **Sobre Mí** - Descripción profesional y estadísticas
3. **Servicios** - Catálogo de servicios ofrecidos
4. **Experiencia** - Timeline de experiencia profesional
5. **Proyectos** - Portafolio de trabajos destacados
6. **Zona de Trabajo** - Cobertura geográfica y servicios
7. **Contacto** - Formulario y información de contacto

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPO]

# Navegar al directorio
cd mvgn-labs

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

### Scripts Disponibles
```bash
npm start          # Inicia el servidor de desarrollo
npm run build     # Construye la aplicación para producción
npm test          # Ejecuta las pruebas
npm run eject     # Expone la configuración de webpack (irreversible)
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.tsx      # Navegación principal
│   ├── Footer.tsx      # Pie de página
│   ├── ThemeToggle.tsx # Toggle de tema
│   ├── ProjectCard.tsx # Tarjeta de proyecto
│   ├── ServiceCard.tsx # Tarjeta de servicio
│   └── StatCounter.tsx # Contador animado
├── sections/            # Secciones principales
│   ├── Hero.tsx        # Sección hero
│   ├── About.tsx       # Sobre mí
│   ├── Servicios.tsx   # Servicios
│   ├── Experiencia.tsx # Experiencia profesional
│   ├── Proyectos.tsx   # Proyectos destacados
│   ├── ZonaTrabajo.tsx # Zona de trabajo
│   └── Contacto.tsx    # Formulario de contacto
├── styles/              # Estilos globales
│   └── globals.css     # CSS principal con Tailwind
├── lib/                 # Utilidades y helpers
│   └── utils.ts        # Funciones de utilidad
├── assets/              # Imágenes y recursos
├── App.tsx              # Componente principal
└── main.tsx            # Punto de entrada
```

## 🎯 Funcionalidades Principales

### Navegación
- Navbar sticky con transparencia
- Smooth scrolling entre secciones
- Indicador de progreso de scroll
- Botón "volver arriba" flotante

### Tema
- Toggle entre tema claro y oscuro
- Persistencia en localStorage
- Transiciones suaves entre temas

### Animaciones
- Fade-in en scroll
- Hover effects en cards
- Contadores animados
- Transiciones de página

### Responsividad
- Mobile-first approach
- Breakpoints optimizados
- Navegación adaptativa
- Touch-friendly interactions

## 🌐 Deployment

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build del proyecto
npm run build

# Subir carpeta build/ a Netlify
```

### GitHub Pages
```bash
# Agregar homepage al package.json
"homepage": "https://[usuario].github.io/[repo]"

# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔧 Personalización

### Colores
Edita `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  primary: {
    DEFAULT: '#tu-color',
    light: '#tu-color-light',
    dark: '#tu-color-dark',
  }
}
```

### Fuentes
Modifica `src/styles/globals.css` para cambiar las fuentes:

```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap');
```

### Contenido
Actualiza los datos en cada sección según tu información personal.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Armando Ibañez** - [MVGN Labs](https://mvgn-labs.com)

- Email: jazzfatale@gmail.com
- WhatsApp: 33 2262 1939
- Zona: Sur de la ZMG, Guadalajara

## 🙏 Agradecimientos

- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- [TailwindCSS](https://tailwindcss.com/) por el sistema de diseño
- [Lucide](https://lucide.dev/) por los iconos
- [React](https://reactjs.org/) por el framework

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
