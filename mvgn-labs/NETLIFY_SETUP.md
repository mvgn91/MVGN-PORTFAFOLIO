# Configuración de Netlify para Mvgn Labs

## Pasos para configurar el deployment automático

### 1. Crear cuenta en Netlify
- Ve a [netlify.com](https://netlify.com) y crea una cuenta
- Conecta tu repositorio de GitHub

### 2. Configurar el sitio
- Selecciona tu repositorio `mvgn-labs`
- Configuración del build:
  - **Build command**: `npm run build`
  - **Publish directory**: `build`
  - **Node version**: `18`

### 3. Configurar variables de entorno en GitHub
Ve a tu repositorio → Settings → Secrets and variables → Actions

Agrega estos secretos:
- `NETLIFY_AUTH_TOKEN`: Tu token de autenticación de Netlify
- `NETLIFY_SITE_ID`: El ID de tu sitio en Netlify

### 4. Obtener el token de Netlify
- En Netlify, ve a User Settings → Applications → Personal access tokens
- Crea un nuevo token con permisos de deploy

### 5. Obtener el Site ID
- En tu dashboard de Netlify, ve a Site settings → General
- Copia el "Site ID"

### 6. Deployment automático
Una vez configurado, cada push a la rama `main` activará automáticamente:
1. Build del proyecto
2. Deployment a Netlify
3. Comentarios en PRs con preview links

## Comandos útiles

```bash
# Build local para testing
npm run build

# Ver archivos de build
ls build/

# Limpiar build
rm -rf build/
```

## Estructura del proyecto
- `netlify.toml`: Configuración de Netlify
- `.github/workflows/deploy-netlify.yml`: Workflow de GitHub Actions
- `build/`: Directorio de salida (generado automáticamente)
