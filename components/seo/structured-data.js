// Datos Estructurados JSON-LD para SEO
// Este archivo genera esquemas estructurados que ayudan a los motores de búsqueda a entender mejor el contenido

function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organización
      {
        "@type": "Organization",
        "@id": "https://mvgnlabs.com/#organization",
        "name": "MVGN Labs",
        "url": "https://mvgnlabs.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mvgnlabs.com/assets/favicon.png",
          "width": 192,
          "height": 192
        },
        "description": "Desarrollo Web & Diseño Digital",
        "foundingDate": "2024",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tlajomulco de Zúñiga",
          "addressRegion": "Jalisco",
          "addressCountry": "MX"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "Spanish"
        },
        "sameAs": [
          "https://linkedin.com/in/armando-ibanez",
          "https://github.com/mvgnlabs"
        ]
      },
      
      // Persona
      {
        "@type": "Person",
        "@id": "https://mvgnlabs.com/#person",
        "name": "Armando Ibañez",
        "jobTitle": "Desarrollador Web & Diseñador Digital",
        "worksFor": {
          "@id": "https://mvgnlabs.com/#organization"
        },
        "description": "Especialista en HTML, CSS, JavaScript, React y Firebase",
        "url": "https://mvgnlabs.com",
        "image": "https://mvgnlabs.com/assets/profile.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tlajomulco de Zúñiga",
          "addressRegion": "Jalisco",
          "addressCountry": "MX"
        },
        "knowsAbout": [
          "Desarrollo Web",
          "Diseño Digital",
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Firebase",
          "Diseño Responsivo",
          "UX/UI"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Desarrollador Web",
          "occupationalCategory": "Desarrollo de Software",
          "skills": [
            "HTML5",
            "CSS3",
            "JavaScript ES6+",
            "React.js",
            "Firebase",
            "Diseño Responsivo",
            "Git",
            "Metodologías Ágiles"
          ]
        }
      },
      
      // Sitio Web
      {
        "@type": "WebSite",
        "@id": "https://mvgnlabs.com/#website",
        "url": "https://mvgnlabs.com",
        "name": "MVGN Labs",
        "description": "Portafolio profesional de desarrollo web y diseño digital",
        "publisher": {
          "@id": "https://mvgnlabs.com/#organization"
        },
        "author": {
          "@id": "https://mvgnlabs.com/#person"
        },
        "inLanguage": "es",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mvgnlabs.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      
      // Página Web Principal
      {
        "@type": "WebPage",
        "@id": "https://mvgnlabs.com/#webpage",
        "url": "https://mvgnlabs.com",
        "name": "MVGN Labs - Inicio",
        "description": "Página de inicio de MVGN Labs, portafolio profesional de desarrollo web",
        "isPartOf": {
          "@id": "https://mvgnlabs.com/#website"
        },
        "about": {
          "@id": "https://mvgnlabs.com/#organization"
        },
        "author": {
          "@id": "https://mvgnlabs.com/#person"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://mvgnlabs.com"
            }
          ]
        }
      },
      
      // Servicios
      {
        "@type": "Service",
        "@id": "https://mvgnlabs.com/#service",
        "name": "Desarrollo Web & Diseño Digital",
        "description": "Servicios profesionales de desarrollo web, diseño digital y consultoría tecnológica",
        "provider": {
          "@id": "https://mvgnlabs.com/#organization"
        },
        "offeredBy": {
          "@id": "https://mvgnlabs.com/#person"
        },
        "serviceType": "Desarrollo de Software",
        "areaServed": {
          "@type": "Country",
          "name": "México"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Desarrollo Web",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Desarrollo de Sitios Web",
                "description": "Sitios web responsivos y optimizados para SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Diseño de Interfaces",
                "description": "Diseño de UX/UI moderno y funcional"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Consultoría Tecnológica",
                "description": "Asesoramiento en tecnologías web y digitales"
              }
            }
          ]
        }
      }
    ]
  };
  
  return structuredData;
}

// Función para insertar datos estructurados en el DOM
function insertStructuredData() {
  const structuredData = generateStructuredData();
  
  // Crear script tag para JSON-LD
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  
  // Insertar en el head del documento
  document.head.appendChild(script);
  
  console.log('Datos estructurados JSON-LD insertados correctamente');
}

// Función para generar datos estructurados específicos por página
function generatePageSpecificStructuredData(pageType) {
  const baseData = generateStructuredData();
  
  switch (pageType) {
    case 'desktop':
      return {
        ...baseData,
        "@graph": [
          ...baseData["@graph"],
          {
            "@type": "WebPage",
            "@id": "https://mvgnlabs.com/desktop#webpage",
            "url": "https://mvgnlabs.com/desktop",
            "name": "MVGN Labs - Portafolio Desktop",
            "description": "Portafolio completo de desarrollo web y diseño digital - Versión Desktop",
            "isPartOf": {
              "@id": "https://mvgnlabs.com/#website"
            }
          }
        ]
      };
      
    case 'mobile':
      return {
        ...baseData,
        "@graph": [
          ...baseData["@graph"],
          {
            "@type": "WebPage",
            "@id": "https://mvgnlabs.com/mobile#webpage",
            "url": "https://mvgnlabs.com/mobile",
            "name": "MVGN Labs - Portafolio Móvil",
            "description": "Portafolio móvil con ProfileCard interactivo - Versión Móvil",
            "isPartOf": {
              "@id": "https://mvgnlabs.com/#website"
            }
          }
        ]
      };
      
    default:
      return baseData;
  }
}

// Auto-ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', insertStructuredData);
} else {
  insertStructuredData();
}

// Exportar funciones para uso global
window.generateStructuredData = generateStructuredData;
window.insertStructuredData = insertStructuredData;
window.generatePageSpecificStructuredData = generatePageSpecificStructuredData;
