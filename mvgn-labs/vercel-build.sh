#!/bin/bash

echo "🚀 Iniciando build para Vercel..."

# Variables de entorno para Vercel
export NODE_ENV=production
export CI=true
export GENERATE_SOURCEMAP=false

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm ci --only=production

# Build de producción
echo "🔨 Generando build..."
npm run build

# Verificar build
if [ ! -d "build" ]; then
    echo "❌ Error: Build no generado"
    exit 1
fi

echo "✅ Build completado exitosamente en build/"
ls -la build/
