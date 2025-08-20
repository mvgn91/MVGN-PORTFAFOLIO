// Utilidades para manejar clases de tema de manera consistente

export const themeClasses = {
  // Fondo
  background: 'bg-background dark:bg-background light:bg-light-background',
  surface: 'bg-surface dark:bg-surface light:bg-light-surface',
  surfaceDark: 'bg-surface-dark dark:bg-surface-dark light:bg-light-surface-dark',
  surfaceLight: 'bg-surface-light dark:bg-surface-light light:bg-light-surface-light',
  
  // Texto
  textPrimary: 'text-white dark:text-white light:text-light-text',
  textSecondary: 'text-white/70 dark:text-white/70 light:text-light-text-secondary',
  textMuted: 'text-white/40 dark:text-white/40 light:text-light-text-muted',
  
  // Bordes
  border: 'border-white/10 dark:border-white/10 light:border-light-border',
  borderHover: 'border-primary/30 dark:border-primary/30 light:border-primary/30',
  
  // Efectos de cristal
  glass: 'bg-white/10 dark:bg-white/10 light:bg-black/5 backdrop-blur-md',
  glassHover: 'bg-white/20 dark:bg-white/20 light:bg-black/10 backdrop-blur-md',
  
  // Sombras
  shadow: 'shadow-lg dark:shadow-lg light:shadow-lg',
  shadowHover: 'shadow-xl dark:shadow-xl light:shadow-xl',
  
  // Transiciones
  transition: 'transition-all duration-300',
  transitionColors: 'transition-colors duration-300',
  transitionTransform: 'transition-transform duration-300',
};

export const getThemeClass = (baseClass: string, themeVariant: 'dark' | 'light' | 'both' = 'both') => {
  if (themeVariant === 'both') {
    return baseClass;
  }
  
  const variants = {
    dark: baseClass.replace(/light:/g, '').replace(/dark:/g, ''),
    light: baseClass.replace(/dark:/g, '').replace(/light:/g, ''),
  };
  
  return variants[themeVariant] || baseClass;
};

export const combineThemeClasses = (...classes: string[]) => {
  return classes.join(' ');
};
