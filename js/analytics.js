// Google Analytics 4 Configuration
// Reemplaza 'G-XXXXXXXXXX' con tu ID de medición real

(function() {
  // Verificar si ya existe GA
  if (window.gtag) return;
  
  // Configuración de GA4
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    page_title: document.title,
    page_location: window.location.href,
    custom_map: {
      'custom_parameter_1': 'page_type',
      'custom_parameter_2': 'user_type'
    }
  });
  
  // Eventos personalizados para SEO
  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_type: getPageType()
  });
  
  // Función para determinar el tipo de página
  function getPageType() {
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') return 'splash';
    if (path === '/desktop' || path === '/main.html') return 'desktop';
    if (path === '/mobile' || path === '/mobile-profilecard.html') return 'mobile';
    return 'other';
  }
  
  // Eventos de interacción del usuario
  document.addEventListener('DOMContentLoaded', function() {
    // Tracking de clics en enlaces importantes
    const importantLinks = document.querySelectorAll('a[href^="#"], a[href^="/"], a[href^="http"]');
    importantLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        gtag('event', 'click', {
          link_url: this.href,
          link_text: this.textContent.trim(),
          page_type: getPageType()
        });
      });
    });
    
    // Tracking de tiempo en página
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      gtag('event', 'timing_complete', {
        name: 'page_view',
        value: timeOnPage,
        page_type: getPageType()
      });
    });
  });
  
  // Cargar script de GA4
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  document.head.appendChild(script);
  
  // Hacer gtag disponible globalmente
  window.gtag = gtag;
})();

// Función para enviar eventos personalizados
function trackCustomEvent(eventName, parameters = {}) {
  if (window.gtag) {
    gtag('event', eventName, {
      ...parameters,
      page_type: getPageType(),
      timestamp: new Date().toISOString()
    });
  }
}

// Función para determinar el tipo de página (disponible globalmente)
function getPageType() {
  const path = window.location.pathname;
  if (path === '/' || path === '/index.html') return 'splash';
  if (path === '/desktop' || path === '/main.html') return 'desktop';
  if (path === '/mobile' || path === '/mobile-profilecard.html') return 'mobile';
  return 'other';
}
