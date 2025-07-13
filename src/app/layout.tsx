import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeName, themes } from "@/styles/theme";
import { generateThemeCSS } from "@/utils/theme-script";

export const metadata: Metadata = {
  title: "Claudio Yáñez",
  description: "Página personal de Claudio Yáñez, desarrollador full-stack",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme');
  const initialTheme = (themeCookie?.value as ThemeName) || 'white';

  const themeCSS = generateThemeCSS(themes[initialTheme]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.svg" type="image/svg+xml"></link>
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
        {/* <script dangerouslySetInnerHTML={{ __html: createThemeScript() }} /> */}
      </head>
      <body>
        <ThemeProvider initialTheme={initialTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
