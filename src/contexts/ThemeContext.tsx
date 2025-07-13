'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Theme, ThemeName, themes } from '@/styles/theme';

interface ThemeContextType {
  currentTheme: Theme;
  themeName: ThemeName;
  setTheme: (themeName: ThemeName) => void;
  applyTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeName;
}

export function ThemeProvider({ children, initialTheme = 'white' }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<ThemeName>(initialTheme);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[initialTheme]);

  const applyTheme = (theme: Theme) => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;

    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-bg-main', theme.colors.bgMain);
    root.style.setProperty('--color-bg-card', theme.colors.bgCard);
    root.style.setProperty('--color-bg-accent', theme.colors.bgAccent);
    root.style.setProperty('--color-bg-hover', theme.colors.bgHover);

    root.style.setProperty('--border-width', theme.borders.width);
    root.style.setProperty('--border-width-thin', theme.borders.widthThin);
    root.style.setProperty('--border-color', theme.borders.color);

    root.style.setProperty('--shadow-brutalist', theme.shadows.brutalist);
    root.style.setProperty('--shadow-small', theme.shadows.small);

    root.style.setProperty('--space-xs', theme.spacing.xs);
    root.style.setProperty('--space-sm', theme.spacing.sm);
    root.style.setProperty('--space-md', theme.spacing.md);
    root.style.setProperty('--space-lg', theme.spacing.lg);
    root.style.setProperty('--space-xl', theme.spacing.xl);

    root.style.setProperty('--font-mono', theme.typography.fontMono);
    root.style.setProperty('--font-size-xl', theme.typography.fontSize.xl);
    root.style.setProperty('--font-size-lg', theme.typography.fontSize.lg);
    root.style.setProperty('--font-size-md', theme.typography.fontSize.md);
    root.style.setProperty('--font-size-base', theme.typography.fontSize.base);
  };

  const setTheme = (newThemeName: ThemeName) => {
    const newTheme = themes[newThemeName];
    setThemeName(newThemeName);
    setCurrentTheme(newTheme);
    applyTheme(newTheme);

    if (typeof window !== 'undefined') {
      document.cookie = `theme=${newThemeName}; path=/; max-age=31536000`;
    }
  };

  // Setear tema ya guardado al entrar a la página
  useEffect(() => {
    applyTheme(themes[initialTheme]);
  }, [initialTheme]);

  const value: ThemeContextType = {
    currentTheme,
    themeName,
    setTheme,
    applyTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function useThemeToggle() {
  const { setTheme, themeName } = useTheme();

  const toggleTheme = () => {
    const themeOrder: ThemeName[] = ['white', 'blue', 'black', 'red', 'green'];
    const currentIndex = themeOrder.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  return { toggleTheme, currentTheme: themeName };
}
