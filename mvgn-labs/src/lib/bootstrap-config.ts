// Configuración personalizada para Bootstrap
export const BOOTSTRAP_CONFIG = {
  // Breakpoints personalizados
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  },
  
  // Colores del tema
  colors: {
    primary: '#dc2626',
    accent: '#f59e0b',
    secondary: '#6b7280',
    surface: '#1a1a1a',
    'surface-dark': '#111111',
    'surface-light': '#2a2a2a'
  },
  
  // Espaciado personalizado
  spacing: {
    'section': '5rem',
    'section-lg': '8rem',
    'section-xl': '10rem'
  },
  
  // Tipografía
  typography: {
    'font-family-base': 'Poppins, sans-serif',
    'font-family-heading': 'Fraunces, serif',
    'font-size-base': '1rem',
    'line-height-base': '1.6'
  }
};

// Utilidades de Bootstrap personalizadas
export const BOOTSTRAP_UTILITIES = {
  // Clases de utilidad personalizadas
  custom: {
    'bg-glass': 'background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);',
    'shadow-glow': 'box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);',
    'shadow-glow-lg': 'box-shadow: 0 0 40px rgba(220, 38, 38, 0.4);',
    'text-gradient': 'background: linear-gradient(135deg, #dc2626, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
  }
};

// Configuración de componentes Bootstrap
export const COMPONENT_CONFIG = {
  navbar: {
    expand: 'lg',
    bg: 'dark',
    variant: 'dark'
  },
  
  button: {
    size: 'lg',
    variant: 'primary'
  },
  
  card: {
    bg: 'dark',
    border: 'light',
    text: 'light'
  }
};
