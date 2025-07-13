import { Theme, themes } from "@/styles/theme";

/*
 * Genera CSS para cargarlo al inicio y evitar flicker en el tema
 */
export function generateThemeCSS(theme: Theme): string {
  return `
    :root {
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
    }
  `;
}

export function createThemeScript(): string {
  const themesObject = JSON.stringify(themes);
  
  return `
    (function() {
      const themes = ${themesObject};
      
      function getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
      }
      
      const savedTheme = getCookie('theme') || 'white';
      const theme = themes[savedTheme] || themes.white;
      
      ${generateThemeCSS.toString()}
      
      const style = document.createElement('style');
      style.textContent = generateThemeCSS(theme);
      document.head.appendChild(style);
    })();
  `;
}