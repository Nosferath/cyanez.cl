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

export const redTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#991b1b', // red-800
    bgMain: '#fef2f2', // red-50
    bgCard: '#ffffff',
    bgAccent: '#fecaca', // red-100
    bgHover: '#fca5a5', // red-200
  },
  borders: {
    ...defaultTheme.borders,
    color: '#991b1b',
  },
  shadows: {
    brutalist: '8px 8px 0 0 rgba(153, 27, 27, 1)',
    small: '4px 4px 0 0 rgba(153, 27, 27, 1)',
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