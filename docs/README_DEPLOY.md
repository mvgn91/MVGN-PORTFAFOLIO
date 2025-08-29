# 🚀 MVGN Labs Portfolio - Deploy en Vercel

## 📋 Estructura del Proyecto

```
MVGN PORTFAFOLIO/
├── index.html          # 🎯 SPLASH SCREEN (Punto de entrada)
├── mobile.html         # 📱 Versión Móvil 100% Responsive
├── main.html           # 🖥️  Versión Desktop Completa
├── vercel.json         # ⚙️  Configuración de Vercel
├── css/                # 🎨 Estilos CSS
├── js/                 # ⚡ JavaScript
├── assets/             # 🖼️  Imágenes y recursos
└── README_DEPLOY.md    # 📖 Este archivo
```

## 🎯 Flujo de Funcionamiento

### 1️⃣ **Splash Screen (index.html)**
- **Entrada principal** del sitio
- **Detección automática** de dispositivos
- **Redirección inteligente** según el dispositivo detectado
- **Tiempo de carga**: 3.5 segundos (configurable)

### 2️⃣ **Detección de Dispositivos**
- **Móvil** (< 768px): Redirige a `mobile.html`
- **Tablet** (768px - 1024px): Redirige a `mobile.html`
- **Desktop** (> 1024px): Redirige a `main.html`

### 3️⃣ **Versiones Disponibles**
- **📱 Mobile**: `mobile.html` - Diseño mobile-first 100% responsive
- **🖥️ Desktop**: `main.html` - Versión completa con todas las funcionalidades

## 🚀 Deploy en Vercel

### **Paso 1: Preparar el Proyecto**
```bash
# Asegúrate de que todos los archivos estén en el repositorio
git add .
git commit -m "🚀 Preparando deploy en Vercel"
git push origin main
```

### **Paso 2: Conectar con Vercel**
1. Ve a [vercel.com](https://vercel.com)
2. **Importa tu repositorio** de GitHub
3. **Selecciona el framework**: `Other`
4. **Configuración automática** con `vercel.json`

### **Paso 3: Variables de Entorno (Opcional)**
```bash
# En Vercel Dashboard
NODE_ENV=production
```

### **Paso 4: Deploy Automático**
- **Cada push** a `main` activa deploy automático
- **Preview deployments** para cada pull request
- **Rollback** instantáneo si algo falla

## ⚙️ Configuración de Vercel

### **vercel.json**
```json
{
  "version": 2,
  "name": "mvgn-labs-portfolio",
  "routes": [
    {
      "src": "/",
      "dest": "/index.html"        # 🎯 Splash Screen
    },
    {
      "src": "/mobile",
      "dest": "/mobile.html"       # 📱 Versión Móvil
    },
    {
      "src": "/desktop",
      "dest": "/main.html"         # 🖥️ Versión Desktop
    }
  ]
}
```

### **Rutas Disponibles**
- **`/`** → Splash Screen + Detección automática
- **`/mobile`** → Versión móvil directa
- **`/desktop`** → Versión desktop directa

## 🔧 Personalización del Splash Screen

### **Tiempo de Carga**
```javascript
// En js/splash.js
setTimeout(() => {
  this.redirectToMainSite();
}, 3500); // ⏱️ Cambiar este valor (en milisegundos)
```

### **Saltar Splash Screen**
- **Tecla ESC** → Salta inmediatamente
- **Click simple** → Salta inmediatamente
- **Doble click** → Salta inmediatamente

## 📱 Detección de Dispositivos

### **Algoritmo de Detección**
1. **User Agent** del navegador
2. **Tamaño de pantalla** (viewport)
3. **Orientación** del dispositivo
4. **Capacidades táctiles**
5. **Fallback** por tamaño de pantalla

### **Breakpoints**
- **Móvil**: ≤ 768px
- **Tablet**: 769px - 1024px
- **Desktop**: > 1024px

## 🎨 Estilos del Splash Screen

### **CSS Principal**
- **Archivo**: `css/splash.css`
- **Tema**: Oscuro con acentos rojos
- **Animaciones**: Suaves y profesionales
- **Responsive**: Se adapta a todos los dispositivos

### **Personalización**
```css
/* Cambiar colores principales */
:root {
  --primary-color: #dc2626;      /* Rojo MVGN */
  --background-color: #0f0f0f;   /* Fondo oscuro */
  --text-color: #ffffff;         /* Texto blanco */
}
```

## 🚀 Optimizaciones de Deploy

### **Cache y Performance**
- **CSS/JS**: Cache por 1 año (31536000 segundos)
- **Imágenes**: Cache por 1 año
- **HTML**: Sin cache (siempre fresco)

### **Headers de Seguridad**
```json
{
  "headers": [
    {
      "source": "**/*.html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

## 🔍 Monitoreo y Analytics

### **Vercel Analytics**
- **Performance** en tiempo real
- **Core Web Vitals** automáticos
- **Errores** y excepciones
- **Geografía** de usuarios

### **Google Analytics (Opcional)**
```html
<!-- Agregar en index.html, mobile.html y main.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### **Problemas Comunes**

#### **1. Splash no redirige**
```bash
# Verificar consola del navegador
# Verificar que mobile.html y main.html existan
# Verificar rutas en vercel.json
```

#### **2. Estilos no cargan**
```bash
# Verificar rutas CSS en vercel.json
# Verificar que archivos CSS existan
# Verificar cache de Vercel
```

#### **3. Imágenes no aparecen**
```bash
# Verificar rutas en assets/
# Verificar vercel.json assets routing
# Verificar permisos de archivos
```

### **Logs de Vercel**
```bash
# En Vercel Dashboard → Deployments → View Function Logs
# Verificar errores en tiempo real
# Debug de rutas y archivos
```

## 📈 Métricas de Performance

### **Lighthouse Scores Objetivo**
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

### **Core Web Vitals**
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🎯 URLs de Deploy

### **Producción**
```
https://tu-dominio.vercel.app/          # 🎯 Splash + Auto-detección
https://tu-dominio.vercel.app/mobile    # 📱 Móvil directo
https://tu-dominio.vercel.app/desktop   # 🖥️ Desktop directo
```

### **Preview (Pull Requests)**
```
https://tu-pr-123.vercel.app/           # 🧪 Testing automático
```

## 🚀 Comandos de Deploy

### **Deploy Manual**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Deploy solo archivos específicos
vercel --prod --cwd ./css
```

### **Deploy Automático**
```bash
# Cada push a main activa deploy
git push origin main

# Verificar status
vercel ls
```

## ✨ Características del Deploy

- ✅ **Splash Screen** profesional
- ✅ **Detección automática** de dispositivos
- ✅ **Redirección inteligente** según dispositivo
- ✅ **Cache optimizado** para performance
- ✅ **Deploy automático** en cada push
- ✅ **Preview deployments** para testing
- ✅ **Rollback instantáneo** si algo falla
- ✅ **Analytics integrados** de Vercel
- ✅ **SSL automático** y CDN global
- ✅ **Headers de seguridad** configurados

---

## 🎉 ¡Listo para Deploy!

Tu portafolio MVGN Labs está completamente configurado para deploy en Vercel con:

1. **Splash Screen** profesional
2. **Detección automática** de dispositivos
3. **Versiones móvil y desktop** optimizadas
4. **Performance** y cache optimizados
5. **Deploy automático** configurado

¡Solo haz push a tu repositorio y Vercel se encargará del resto! 🚀
