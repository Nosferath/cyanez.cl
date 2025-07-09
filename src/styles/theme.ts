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

export const defaultTheme: Theme = {
  colors: {
    primary: '#000000',
    bgMain: '#fffbeb', // amber-50
    bgCard: '#ffffff',
    bgAccent: '#fef3c7', // amber-100
    bgHover: '#fef3c7',
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

export const blueTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#1e40af', // blue-800
    bgMain: '#eff6ff', // blue-50
    bgCard: '#ffffff',
    bgAccent: '#dbeafe', // blue-100
    bgHover: '#bfdbfe', // blue-200
  },
  borders: {
    ...defaultTheme.borders,
    color: '#1e40af',
  },
  shadows: {
    brutalist: '8px 8px 0 0 rgba(30, 64, 175, 1)',
    small: '4px 4px 0 0 rgba(30, 64, 175, 1)',
  },
};

export const greenTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#166534', // green-800
    bgMain: '#f0fdf4', // green-50
    bgCard: '#ffffff',
    bgAccent: '#dcfce7', // green-100
    bgHover: '#bbf7d0', // green-200
  },
  borders: {
    ...defaultTheme.borders,
    color: '#166534',
  },
  shadows: {
    brutalist: '8px 8px 0 0 rgba(22, 101, 52, 1)',
    small: '4px 4px 0 0 rgba(22, 101, 52, 1)',
  },
};

// Helper function to get theme CSS variables as a string
export function getThemeCSS(theme: Theme): string {
  return `
    --color-primary: ${theme.colors.primary};
    --color-bg-main: ${theme.colors.bgMain};
    --color-bg-card: ${theme.colors.bgCard};
    --color-bg-accent: ${theme.colors.bgAccent};
    --color-bg-hover: ${theme.colors.bgHover};
    --border-width: ${theme.borders.width};
    --border-width-thin: ${theme.borders.widthThin};
    --border-color: ${theme.borders.color};
    --shadow-brutalist: ${theme.shadows.brutalist};
    --shadow-small: ${theme.shadows.small};
    --space-xs: ${theme.spacing.xs};
    --space-sm: ${theme.spacing.sm};
    --space-md: ${theme.spacing.md};
    --space-lg: ${theme.spacing.lg};
    --space-xl: ${theme.spacing.xl};
    --font-mono: ${theme.typography.fontMono};
    --font-size-xl: ${theme.typography.fontSize.xl};
    --font-size-lg: ${theme.typography.fontSize.lg};
    --font-size-md: ${theme.typography.fontSize.md};
    --font-size-base: ${theme.typography.fontSize.base};
  `;
}

// Theme context for React
export const themes = {
  default: defaultTheme,
  dark: darkTheme,
  blue: blueTheme,
  green: greenTheme,
} as const;

export type ThemeName = keyof typeof themes;