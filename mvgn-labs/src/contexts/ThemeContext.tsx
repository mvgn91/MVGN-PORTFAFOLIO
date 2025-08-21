import React, { createContext, useContext, useEffect } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  useEffect(() => {
    // Aplicar solo el tema oscuro
    const root = document.documentElement;
    const body = document.body;
    
    // Remover cualquier clase de tema anterior
    root.classList.remove('light');
    body.classList.remove('light');
    
    // Aplicar solo el tema oscuro
    root.classList.add('dark');
    body.classList.add('dark');
    
    // Guardar en localStorage
    localStorage.setItem('theme', 'dark');
    
    console.log('Tema oscuro aplicado permanentemente');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};
