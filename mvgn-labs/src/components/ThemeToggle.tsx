import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-xl transition-all duration-300 hover:scale-110",
        "bg-surface hover:bg-surface-dark border border-surface-dark/30",
        "text-white hover:text-accent",
        "dark:bg-surface dark:hover:bg-surface-dark dark:border-surface-dark/30 dark:text-white dark:hover:text-accent",
        "light:bg-white light:hover:bg-gray-100 light:border-gray-300 light:text-gray-800 light:hover:text-primary"
      )}
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
