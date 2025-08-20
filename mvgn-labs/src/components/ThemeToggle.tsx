import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-xl transition-all duration-300 hover:scale-110",
        "bg-surface hover:bg-surface-dark border border-surface-dark/30",
        "text-white hover:text-accent"
      )}
      aria-label="Cambiar tema"
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
