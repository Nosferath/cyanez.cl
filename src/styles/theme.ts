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
    bgMain: '#fffbeb', // amber-50
    // bgCard: '#ffffff',
    bgCard: amber[100],
    // bgAccent: '#fef3c7', // amber-100
    bgAccent: amber[300],
    // bgHover: '#fef3c7',
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

// Alternative themes
export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#ffffff',
    bgMain: '#0a0a0a',
    bgCard: '#1a1a1a',
    bgAccent: '#2a2a2a',
    bgHover: '#3a3a3a',
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
    // primary: '#1e40af', // blue-800
    primary: '#000000',
    bgMain: '#eff6ff', // blue-50
    // bgCard: '#ffffff',
    bgCard: blue[100],
    // bgAccent: '#dbeafe', // blue-100
    bgAccent: blue[300],
    // bgHover: '#bfdbfe', // blue-200
    bgHover: blue[400],
  },
  borders: {
    ...defaultTheme.borders,
    // color: '#1e40af',
  },
  shadows: {
    // brutalist: '8px 8px 0 0 rgba(30, 64, 175, 1)',
    // small: '4px 4px 0 0 rgba(30, 64, 175, 1)',
    brutalist: '8px 8px 0 0 rgba(0, 0, 0, 1)',
    small: '4px 4px 0 0 rgba(0, 0, 0, 1)',
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
    // primary: '#166534', // green-800
    primary: '#000000',
    bgMain: '#f0fdf4', // green-50
    // bgCard: '#ffffff',
    bgCard: green[100],
    // bgAccent: '#dcfce7', // green-100
    bgAccent: green[300],
    // bgHover: '#bbf7d0', // green-200
    bgHover: green[400],
  },
  borders: {
    ...defaultTheme.borders,
    // color: '#166534',
  },
  shadows: {
    // brutalist: '8px 8px 0 0 rgba(22, 101, 52, 1)',
    // small: '4px 4px 0 0 rgba(22, 101, 52, 1)',
    brutalist: '8px 8px 0 0 rgba(0, 0, 0, 1)',
    small: '4px 4px 0 0 rgba(0, 0, 0, 1)',
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
    // primary: '#991b1b', // red-800
    primary: '#000000',
    bgMain: '#fef2f2', // red-50
    // bgCard: '#ffffff',
    bgCard: red[100],
    // bgAccent: '#fecaca', // red-100
    bgAccent: red[300],
    // bgHover: '#fca5a5', // red-200
    bgHover: red[400],
  },
  borders: {
    ...defaultTheme.borders,
    // color: '#991b1b',
  },
  shadows: {
    // brutalist: '8px 8px 0 0 rgba(153, 27, 27, 1)',
    // small: '4px 4px 0 0 rgba(153, 27, 27, 1)',
    brutalist: '8px 8px 0 0 rgba(0, 0, 0, 1)',
    small: '4px 4px 0 0 rgba(0, 0, 0, 1)',
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
