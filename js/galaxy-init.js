// Galaxy Effect Initialization
document.addEventListener('DOMContentLoaded', function() {
  const galaxyCanvas = document.getElementById('galaxy-canvas');
  
  if (!galaxyCanvas) {
    console.error('Canvas de Galaxy no encontrado');
    return;
  }

  // Configuración personalizada del efecto Galaxy
  const galaxyOptions = {
    focal: [0.5, 0.5],
    rotation: [1.0, 0.0],
    starSpeed: 0.3, // Reducido para animación más lenta
    density: 1.5,
    hueShift: 0, // Cambiado para estrellas blancas/rojas
    speed: 0.7, // Reducido para movimiento general más suave
    mouseInteraction: true,
    glowIntensity: 0.5,
    saturation: 0.9, // Aumentado para colores más vibrantes
    mouseRepulsion: true,
    repulsionStrength: 2,
    twinkleIntensity: 0.3,
    rotationSpeed: 0.05, // Reducido para movimiento más suave
    autoCenterRepulsion: 0,
    transparent: true
  };

  // Crear instancia del efecto Galaxy
  const galaxy = new GalaxyEffect(galaxyCanvas, galaxyOptions);

  // Manejar redimensionamiento de ventana
  function handleResize() {
    if (galaxy && typeof galaxy.resize === 'function') {
      galaxy.resize();
    }
  }

  window.addEventListener('resize', handleResize);
  
  // Redimensionar inicialmente
  handleResize();

  // Limpiar al salir de la página
  window.addEventListener('beforeunload', function() {
    if (galaxy && typeof galaxy.destroy === 'function') {
      galaxy.destroy();
    }
  });

  // Exponer la instancia globalmente para debugging
  window.galaxyInstance = galaxy;
});
