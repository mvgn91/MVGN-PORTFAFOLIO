# Deployment en Vercel - MVGN Labs

## Configuración del Proyecto

### Archivos de Configuración
- `vercel.json` - Configuración principal de Vercel
- `.vercelignore` - Archivos a excluir del deployment
- `.github/workflows/deploy.yml` - Workflow de GitHub Actions

### Scripts de Build
- `vercel-build.sh` - Script de build para Vercel
- `build-production.sh` - Script de build para producción

## Variables de Entorno Requeridas

### En GitHub Secrets:
- `VERCEL_TOKEN` - Token de autenticación de Vercel
- `ORG_ID` - ID de la organización en Vercel
- `PROJECT_ID` - ID del proyecto en Vercel

## Comandos de Build

### Desarrollo Local:
```bash
npm start
```

### Build de Producción:
```bash
npm run build
```

### Build para Vercel:
```bash
npm run vercel-build
```

### Build de Producción Completo:
```bash
npm run build:production
```

## Workflow de Deployment

1. **Push a rama main/master** activa el workflow
2. **Instalación de dependencias** con `npm ci`
3. **Build del proyecto** con `npm run build`
4. **Deployment automático** a Vercel

## Estructura del Build

- **Directorio de salida**: `build/`
- **Framework**: Create React App
- **Node.js**: Versión 18+
- **NPM**: Versión 8+

## Troubleshooting

### Error de Build:
- Verificar versión de Node.js
- Limpiar cache: `npm cache clean --force`
- Reinstalar dependencias: `rm -rf node_modules && npm ci`

### Error de Deployment:
- Verificar secretos de GitHub
- Verificar permisos en Vercel
- Revisar logs del workflow
