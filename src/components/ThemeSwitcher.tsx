'use client';

import { useTheme, useThemeToggle } from '@/contexts/ThemeContext';
import { ThemeName } from '@/styles/theme';

interface ThemeSwitcherProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeSwitcher({ className = '', showLabel = true }: ThemeSwitcherProps) {
  const { setTheme, themeName } = useTheme();

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme);
  };

  const themeOptions = [
    { value: 'default', label: 'Default' },
    { value: 'dark', label: 'Dark' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
  ] as const;

  return (
    <div className={`theme-switcher ${className}`}>
      {showLabel && (
        <label className="text-base font-bold mb-2 block">
          Theme:
        </label>
      )}
      <select
        value={themeName}
        onChange={(e) => handleThemeChange(e.target.value as ThemeName)}
        className="btn bg-card border-thin"
        style={{ minWidth: '120px' }}
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Alternative button-based theme switcher
export function ThemeToggleButton({ className = '' }: { className?: string }) {
  const { toggleTheme, currentTheme } = useThemeToggle();

  const getThemeIcon = (theme: ThemeName) => {
    switch (theme) {
      case 'default':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'blue':
        return '🔵';
      case 'green':
        return '🟢';
      default:
        return '🎨';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`btn ${className}`}
      title={`Current theme: ${currentTheme}`}
    >
      {getThemeIcon(currentTheme)} Theme
    </button>
  );
}

// Individual theme buttons
export function ThemeButtons({ className = '' }: { className?: string }) {
  const { setTheme, themeName } = useTheme();

  const themes = [
    { name: 'default', label: 'Default', icon: '☀️' },
    { name: 'dark', label: 'Dark', icon: '🌙' },
    { name: 'blue', label: 'Blue', icon: '🔵' },
    { name: 'green', label: 'Green', icon: '🟢' },
  ] as const;

  return (
    <div className={`btn-group ${className}`}>
      {themes.map((theme) => (
        <button
          key={theme.name}
          onClick={() => setTheme(theme.name)}
          className={`btn ${themeName === theme.name ? 'bg-accent' : ''}`}
          title={`Switch to ${theme.label} theme`}
        >
          {theme.icon} {theme.label}
        </button>
      ))}
    </div>
  );
}