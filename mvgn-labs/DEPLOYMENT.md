# 🚀 Guía de Deployment - MVGN Labs

## Opciones de Deployment

### 1. Vercel (Recomendado) ⭐

Vercel es la opción más sencilla y rápida para React apps.

#### Pasos:
1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub

2. **Importar proyecto**
   - Haz click en "New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente que es una React app

3. **Configuración automática**
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

4. **Variables de entorno** (si las necesitas)
   - Agrega en la sección "Environment Variables"

5. **Deploy**
   - Click en "Deploy"
   - ¡Listo! Tu sitio estará disponible en `https://tu-proyecto.vercel.app`

#### Ventajas:
- ✅ Deploy automático en cada push
- ✅ SSL automático
- ✅ CDN global
- ✅ Analytics integrados
- ✅ Previews de PR

---

### 2. Netlify

#### Pasos:
1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Conecta tu cuenta de GitHub

2. **Importar proyecto**
   - "New site from Git"
   - Selecciona tu repositorio

3. **Configuración**
   - Build command: `npm run build`
   - Publish directory: `build`

4. **Deploy**
   - Click en "Deploy site"

---

### 3. GitHub Pages

#### Pasos:
1. **Instalar gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Agregar scripts al package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Agregar homepage**
   ```json
   "homepage": "https://tu-usuario.github.io/tu-repo"
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

## 🔧 Configuración Pre-Deployment

### 1. Verificar build local
```bash
npm run build
```

### 2. Probar build localmente
```bash
npx serve -s build
```

### 3. Verificar assets
- Asegúrate de que todas las imágenes estén en `/src/assets/`
- Verifica que los paths en el código sean correctos

---

## 🌐 Dominio Personalizado

### Vercel
1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio
4. Configura los DNS según las instrucciones

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Sigue las instrucciones de DNS

---

## 📱 PWA (Progressive Web App)

Para convertir tu sitio en una PWA:

1. **Crear manifest.json**
2. **Agregar service worker**
3. **Configurar meta tags**

### Ejemplo de manifest.json:
```json
{
  "name": "MVGN Labs - Portafolio",
  "short_name": "MVGN Labs",
  "description": "Portafolio digital de Armando Ibañez",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f0f0f",
  "theme_color": "#dc2626",
  "icons": [
    {
      "src": "/favicon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## 🔍 SEO y Analytics

### 1. Google Analytics
```html
<!-- En public/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Meta tags
```html
<meta name="description" content="Portafolio digital de Armando Ibañez - Desarrollador Web & Diseñador Digital">
<meta name="keywords" content="desarrollo web, diseño digital, React, JavaScript, Guadalajara">
<meta property="og:title" content="MVGN Labs - Portafolio Digital">
<meta property="og:description" content="Portafolio profesional de desarrollo web y diseño digital">
```

---

## 🚨 Troubleshooting

### Error: Build failed
- Verifica que todas las dependencias estén instaladas
- Revisa la consola para errores específicos
- Asegúrate de que el proyecto compile localmente

### Error: Assets not found
- Verifica los paths de las imágenes
- Asegúrate de que los assets estén en la carpeta correcta
- Revisa que los imports sean correctos

### Error: Routing issues
- Verifica la configuración de Vercel/Netlify
- Asegúrate de que todas las rutas redirijan a index.html

---

## 📊 Monitoreo Post-Deployment

### 1. Performance
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### 2. Analytics
- Google Analytics
- Vercel Analytics (si usas Vercel)
- Netlify Analytics (si usas Netlify)

### 3. Uptime
- [UptimeRobot](https://uptimerobot.com/)
- [StatusCake](https://www.statuscake.com/)

---

## 🎯 Checklist de Deployment

- [ ] Proyecto compila sin errores (`npm run build`)
- [ ] Build local funciona correctamente
- [ ] Todos los assets están disponibles
- [ ] Configuración de dominio (si aplica)
- [ ] SSL configurado
- [ ] Analytics configurado
- [ ] SEO meta tags configurados
- [ ] Testing en diferentes dispositivos
- [ ] Performance optimizado
- [ ] Documentación actualizada

---

## 📞 Soporte

Si tienes problemas con el deployment:

1. **Revisa los logs** en tu plataforma de hosting
2. **Verifica la configuración** del proyecto
3. **Consulta la documentación** de la plataforma
4. **Contacta soporte** de la plataforma si es necesario

---

¡Feliz deployment! 🚀
