import { Theme } from "@/styles/theme";

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
