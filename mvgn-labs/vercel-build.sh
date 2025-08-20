#!/bin/bash

# Script de build para Vercel
echo "🚀 Iniciando build para Vercel..."

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Verificar que react-scripts esté disponible
if ! command -v npx react-scripts &> /dev/null; then
    echo "❌ react-scripts no encontrado, instalando..."
    npm install react-scripts@5.0.1
fi

# Ejecutar build
echo "🔨 Ejecutando build..."
npm run build

echo "✅ Build completado exitosamente!"
