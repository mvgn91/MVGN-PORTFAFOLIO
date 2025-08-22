// Constantes para las secciones del portafolio
export const SECTION_CONFIG = {
  about: {
    id: 'sobre-mi',
    title: 'Sobre Mí',
    subtitle: 'Desarrollador web apasionado por crear experiencias digitales únicas',
    background: 'default' as const,
    padding: 'medium' as const
  },
  servicios: {
    id: 'servicios',
    title: 'Servicios',
    subtitle: 'Soluciones digitales personalizadas para tu negocio',
    background: 'light' as const,
    padding: 'medium' as const
  },
  proyectos: {
    id: 'proyectos',
    title: 'Proyectos',
    subtitle: 'Portafolio de trabajos realizados con las últimas tecnologías',
    background: 'default' as const,
    padding: 'medium' as const
  },
  experiencia: {
    id: 'experiencia',
    title: 'Experiencia',
    subtitle: 'Trayectoria profesional y habilidades desarrolladas',
    background: 'light' as const,
    padding: 'medium' as const
  },
  zonaTrabajo: {
    id: 'zona-trabajo',
    title: 'Zona de Trabajo',
    subtitle: 'Entorno de desarrollo y herramientas que utilizo',
    background: 'default' as const,
    padding: 'medium' as const
  },
  contacto: {
    id: 'contacto',
    title: 'Contacto',
    subtitle: '¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte',
    background: 'light' as const,
    padding: 'medium' as const
  }
} as const;

// Configuración del Hero
export const HERO_CONFIG = {
  id: 'inicio',
  background: 'none' as const,
  padding: 'hero' as const,
  container: false,
  fullHeight: true
} as const;

// Tipos para las configuraciones
export type BackgroundType = 'default' | 'light' | 'dark' | 'none';
export type PaddingType = 'small' | 'medium' | 'large' | 'hero';
