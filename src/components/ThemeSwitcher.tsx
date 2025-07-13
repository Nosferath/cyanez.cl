'use client';

import { useThemeToggle } from '@/contexts/ThemeContext';
import { ThemeName } from '@/styles/theme';

export function ThemeToggleButton({ className = '' }: { className?: string }) {
  const { toggleTheme, currentTheme } = useThemeToggle();

  const getThemeIcon = (theme: ThemeName) => {
    switch (theme) {
      case 'default':
      case 'white':
        return '☀️';
      case 'black':
        return '💀';
      case 'blue':
        return '️💧';
      case 'green':
        return '🌳';
      case 'red':
        return '🔥';
      default:
        return '🎨';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`btn ${className}`}
      title={`Tema actual: ${currentTheme}`}
    >
      {getThemeIcon(currentTheme)} Tema
    </button>
  );
}
