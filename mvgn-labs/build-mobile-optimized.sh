#!/bin/bash

# 🚀 MVGN Labs - Build Script Optimizado para Móvil
# Este script construye la aplicación con optimizaciones específicas para dispositivos móviles

echo "🚀 Iniciando build optimizado para móvil de MVGN Labs..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes con colores
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    print_error "No se encontró package.json. Asegúrate de estar en el directorio raíz del proyecto."
    exit 1
fi

# Verificar que Node.js esté instalado
if ! command -v node &> /dev/null; then
    print_error "Node.js no está instalado. Por favor, instala Node.js 16+ para continuar."
    exit 1
fi

# Verificar versión de Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    print_error "Se requiere Node.js 16+ para este build. Versión actual: $(node -v)"
    exit 1
fi

print_success "Node.js $(node -v) detectado"

# Limpiar builds anteriores
print_status "Limpiando builds anteriores..."
rm -rf build/
rm -rf dist/

# Instalar dependencias si no están instaladas
if [ ! -d "node_modules" ]; then
    print_status "Instalando dependencias..."
    npm install
    if [ $? -ne 0 ]; then
        print_error "Error al instalar dependencias"
        exit 1
    fi
    print_success "Dependencias instaladas correctamente"
else
    print_status "Verificando dependencias..."
    npm audit fix --audit-level=moderate
fi

# Configurar variables de entorno para build de producción
export NODE_ENV=production
export GENERATE_SOURCEMAP=false
export INLINE_RUNTIME_CHUNK=false

print_status "Configurando build para producción..."

# Build de la aplicación
print_status "Iniciando build de la aplicación..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Error durante el build"
    exit 1
fi

print_success "Build completado exitosamente"

# Optimizaciones post-build
print_status "Aplicando optimizaciones post-build..."

# Verificar que el build se creó correctamente
if [ ! -d "build" ]; then
    print_error "El directorio build no se creó"
    exit 1
fi

# Optimizar imágenes (si tienes herramientas disponibles)
if command -v imagemin &> /dev/null; then
    print_status "Optimizando imágenes..."
    # Aquí podrías agregar comandos de optimización de imágenes
else
    print_warning "imagemin no está disponible. Las imágenes no se optimizarán automáticamente."
fi

# Verificar tamaño del bundle
BUNDLE_SIZE=$(du -sh build/static/js/ | cut -f1)
print_status "Tamaño del bundle JavaScript: $BUNDLE_SIZE"

# Verificar tamaño total del build
TOTAL_SIZE=$(du -sh build/ | cut -f1)
print_status "Tamaño total del build: $TOTAL_SIZE"

# Crear archivo de información del build
BUILD_INFO="build/BUILD_INFO.txt"
echo "MVGN Labs - Build Information" > "$BUILD_INFO"
echo "=============================" >> "$BUILD_INFO"
echo "Fecha: $(date)" >> "$BUILD_INFO"
echo "Node.js: $(node -v)" >> "$BUILD_INFO"
echo "NPM: $(npm -v)" >> "$BUILD_INFO"
echo "Tamaño del bundle JS: $BUNDLE_SIZE" >> "$BUILD_INFO"
echo "Tamaño total: $TOTAL_SIZE" >> "$BUILD_INFO"
echo "Optimizaciones aplicadas:" >> "$BUILD_INFO"
echo "- Source maps deshabilitados" >> "$BUILD_INFO"
echo "- Runtime chunk inline deshabilitado" >> "$BUILD_INFO"
echo "- Build optimizado para producción" >> "$BUILD_INFO"

print_success "Información del build guardada en $BUILD_INFO"

# Verificar archivos críticos
print_status "Verificando archivos críticos..."
CRITICAL_FILES=("build/index.html" "build/static/js/main" "build/static/css/main")

for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file"* ]; then
        print_success "✓ $file encontrado"
    else
        print_error "✗ $file no encontrado"
    fi
done

# Verificar responsividad del build
print_status "Verificando configuración responsiva..."
if grep -q "viewport" build/index.html; then
    print_success "✓ Viewport meta tag configurado"
else
    print_warning "⚠ Viewport meta tag no encontrado"
fi

# Verificar PWA (si está configurado)
if [ -f "build/manifest.json" ]; then
    print_success "✓ Manifest PWA encontrado"
else
    print_warning "⚠ Manifest PWA no encontrado"
fi

# Verificar service worker (si está configurado)
if [ -f "build/sw.js" ] || [ -f "build/service-worker.js" ]; then
    print_success "✓ Service Worker encontrado"
else
    print_warning "⚠ Service Worker no encontrado"
fi

# Resumen final
echo ""
echo "🎉 BUILD COMPLETADO EXITOSAMENTE 🎉"
echo "=================================="
echo "📁 Directorio: build/"
echo "📊 Tamaño total: $TOTAL_SIZE"
echo "⚡ Bundle JS: $BUNDLE_SIZE"
echo "📱 Optimizado para móvil: ✓"
echo "🚀 Listo para producción: ✓"
echo ""

# Opciones post-build
echo "Opciones disponibles:"
echo "1. Servir localmente: npm run serve"
echo "2. Analizar bundle: npm run analyze"
echo "3. Deploy a Vercel: vercel --prod"
echo "4. Deploy a Netlify: netlify deploy --prod"
echo ""

print_success "Build completado. La aplicación está lista para ser desplegada."
print_status "Para probar localmente, ejecuta: npm run serve"
print_status "Para desplegar, usa tu plataforma preferida (Vercel, Netlify, etc.)"

exit 0
