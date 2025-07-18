export interface Theme {
  colors: {
    primary: string;
    bgMain: string;
    bgCard: string;
    bgAccent: string;
    bgHover: string;
  };
  borders: {
    width: string;
    widthThin: string;
    color: string;
  };
  shadows: {
    brutalist: string;
    small: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontMono: string;
    fontSize: {
      xl: string;
      lg: string;
      md: string;
      base: string;
    };
  };
}

// Variantes de colores tomadas de palettolithic.com
const amber = {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  950: '#451a03',
}

export const defaultTheme: Theme = {
  colors: {
    primary: '#000000',
    bgMain: amber[50],
    bgCard: amber[100],
    bgAccent: amber[300],
    bgHover: amber[400],
  },
  borders: {
    width: '4px',
    widthThin: '2px',
    color: '#000000',
  },
  shadows: {
    brutalist: '8px 8px 0 0 rgba(0, 0, 0, 1)',
    small: '4px 4px 0 0 rgba(0, 0, 0, 1)',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  typography: {
    fontMono: "'Courier New', monospace",
    fontSize: {
      xl: '2.5rem',
      lg: '1.5rem',
      md: '1.25rem',
      base: '1rem',
    },
  },
};

export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#ffffff',
    bgMain: '#0a0a0a',
    bgCard: '#1a1a1a',
    bgAccent: '#3a3a3a',
    bgHover: '#4a4a4a',
  },
  borders: {
    ...defaultTheme.borders,
    color: '#ffffff',
  },
  shadows: {
    brutalist: '8px 8px 0 0 rgba(255, 255, 255, 1)',
    small: '4px 4px 0 0 rgba(255, 255, 255, 1)',
  },
};

const blue = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  950: '#172554',
};

export const blueTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#000000',
    bgMain: blue[50],
    bgCard: blue[100],
    bgAccent: blue[300],
    bgHover: blue[400],
  },
  borders: {
    ...defaultTheme.borders,
  },
};

const green = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
  950: '#052e16',
};

export const greenTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#000000',
    bgMain: green[50],
    bgCard: green[100],
    bgAccent: green[300],
    bgHover: green[400],
  },
  borders: {
    ...defaultTheme.borders,
  },
};

const red = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
};

export const redTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#000000',
    bgMain: red[50],
    bgCard: red[100],
    bgAccent: red[300],
    bgHover: red[400],
  },
  borders: {
    ...defaultTheme.borders,
  },
};

export const themes = {
  default: defaultTheme,
  white: defaultTheme,
  dark: darkTheme,
  black: darkTheme,
  blue: blueTheme,
  green: greenTheme,
  red: redTheme,
} as const;

export type ThemeName = keyof typeof themes;
