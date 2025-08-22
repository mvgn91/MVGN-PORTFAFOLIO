#!/bin/bash

echo "🚀 Iniciando build de producción para Mvgn Labs..."

# Limpiar builds anteriores
echo "🧹 Limpiando builds anteriores..."
rm -rf build/
rm -rf node_modules/

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm ci --production

# Variables de entorno para producción
export NODE_ENV=production
export GENERATE_SOURCEMAP=false
export INLINE_RUNTIME_CHUNK=false

# Build de producción
echo "🔨 Generando build de producción..."
npm run build

# Verificar que el build se generó correctamente
if [ ! -d "build" ]; then
    echo "❌ Error: El build no se generó correctamente"
    exit 1
fi

# Optimizar assets
echo "⚡ Optimizando assets..."

# Comprimir archivos CSS y JS
find build/static/css -name "*.css" -exec gzip -9 {} \;
find build/static/js -name "*.js" -exec gzip -9 {} \;

# Optimizar imágenes
echo "🖼️  Optimizando imágenes..."
if command -v imagemin &> /dev/null; then
    find build/static/media -name "*.png" -exec imagemin {} --out-dir=build/static/media \;
    find build/static/media -name "*.jpg" -exec imagemin {} --out-dir=build/static/media \;
    find build/static/media -name "*.jpeg" -exec imagemin {} --out-dir=build/static/media \;
fi

# Verificar tamaño del build
BUILD_SIZE=$(du -sh build/ | cut -f1)
echo "📊 Tamaño del build: $BUILD_SIZE"

# Crear archivo de metadatos del build
echo "📝 Generando metadatos del build..."
cat > build/build-info.json << EOF
{
  "buildDate": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "buildSize": "$BUILD_SIZE",
  "nodeVersion": "$(node --version)",
  "npmVersion": "$(npm --version)",
  "environment": "production"
}
EOF

# Verificar archivos críticos
echo "🔍 Verificando archivos críticos..."
CRITICAL_FILES=("index.html" "static/css" "static/js" "favicon.ico")
for file in "${CRITICAL_FILES[@]}"; do
    if [ -e "build/$file" ]; then
        echo "✅ $file encontrado"
    else
        echo "❌ $file NO encontrado"
    fi
done

# Generar reporte de Lighthouse (si está disponible)
if command -v lighthouse &> /dev/null; then
    echo "📊 Generando reporte de Lighthouse..."
    lighthouse build/index.html --output=json --output-path=build/lighthouse-report.json --chrome-flags="--headless --no-sandbox"
fi

echo "🎉 Build de producción completado exitosamente!"
echo "📁 El build está listo en: build/"
echo "🚀 Listo para deploy en Vercel o cualquier hosting estático"

# Mostrar estadísticas finales
echo ""
echo "📈 ESTADÍSTICAS DEL BUILD:"
echo "   - Tamaño total: $BUILD_SIZE"
echo "   - Archivos generados: $(find build -type f | wc -l)"
echo "   - Directorios: $(find build -type d | wc -l)"
echo "   - Fecha: $(date)"
echo ""
echo "✨ ¡Mvgn Labs está listo para producción!"
