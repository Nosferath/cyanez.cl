'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { ThemeSwitcher, ThemeToggleButton, ThemeButtons } from '@/components/ThemeSwitcher';
import { 
  PageContainer, 
  ContentWrapper, 
  Header, 
  Footer, 
  Section, 
  Card, 
  CardGrid, 
  Button, 
  ButtonGroup, 
  Text,
  Heading 
} from '@/components/ui';

export default function ThemeUsageExample() {
  const { currentTheme, themeName } = useTheme();

  return (
    <PageContainer>
      <ContentWrapper>
        <Header 
          title="THEME SYSTEM DEMO"
          subtitle="Demonstrating the theme system capabilities"
        />

        <main className="section-content">
          <Section title="THEME CONTROLS">
            <div className="space-y-md">
              <div className="card">
                <Heading level={3}>Dropdown Selector</Heading>
                <ThemeSwitcher />
              </div>
              
              <div className="card">
                <Heading level={3}>Toggle Button</Heading>
                <ThemeToggleButton />
              </div>
              
              <div className="card">
                <Heading level={3}>Individual Theme Buttons</Heading>
                <ThemeButtons />
              </div>
            </div>
          </Section>

          <Section title="CURRENT THEME INFO">
            <Card>
              <Heading level={3}>Active Theme: {themeName}</Heading>
              <div className="space-y-md">
                <div>
                  <strong>Primary Color:</strong> {currentTheme.colors.primary}
                </div>
                <div>
                  <strong>Background:</strong> {currentTheme.colors.bgMain}
                </div>
                <div>
                  <strong>Card Background:</strong> {currentTheme.colors.bgCard}
                </div>
                <div>
                  <strong>Accent Color:</strong> {currentTheme.colors.bgAccent}
                </div>
                <div>
                  <strong>Border Width:</strong> {currentTheme.borders.width}
                </div>
                <div>
                  <strong>Font:</strong> {currentTheme.typography.fontMono}
                </div>
              </div>
            </Card>
          </Section>

          <Section title="COMPONENT SHOWCASE">
            <CardGrid>
              <Card>
                <Heading level={3}>Typography Demo</Heading>
                <Text size="large">
                  This is large text that demonstrates how the typography scales.
                </Text>
                <Text>
                  This is regular text that shows the base font size and line height.
                </Text>
              </Card>

              <Card>
                <Heading level={3}>Button Demo</Heading>
                <ButtonGroup>
                  <Button href="#">Primary Button</Button>
                  <Button href="#">Secondary Button</Button>
                  <Button onClick={() => alert('Clicked!')}>
                    Action Button
                  </Button>
                </ButtonGroup>
              </Card>

              <Card>
                <Heading level={3}>Color Swatches</Heading>
                <div className="space-y-md">
                  <div 
                    className="border-thin" 
                    style={{ 
                      backgroundColor: currentTheme.colors.primary, 
                      color: currentTheme.colors.bgCard,
                      padding: '1rem' 
                    }}
                  >
                    Primary Color
                  </div>
                  <div 
                    className="border-thin" 
                    style={{ 
                      backgroundColor: currentTheme.colors.bgAccent, 
                      padding: '1rem' 
                    }}
                  >
                    Accent Color
                  </div>
                  <div 
                    className="border-thin" 
                    style={{ 
                      backgroundColor: currentTheme.colors.bgHover, 
                      padding: '1rem' 
                    }}
                  >
                    Hover Color
                  </div>
                </div>
              </Card>
            </CardGrid>
          </Section>

          <Section title="PROGRAMMATIC USAGE">
            <Card>
              <Heading level={3}>Using the Theme Hook</Heading>
              <Text>
                You can access the current theme in any component using the useTheme hook:
              </Text>
              <pre style={{ 
                backgroundColor: currentTheme.colors.bgAccent, 
                padding: '1rem', 
                margin: '1rem 0',
                overflow: 'auto',
                fontSize: '0.9rem'
              }}>
{`import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { currentTheme, themeName, setTheme } = useTheme();
  
  return (
    <div style={{ color: currentTheme.colors.primary }}>
      Current theme: {themeName}
      <button onClick={() => setTheme('dark')}>
        Switch to Dark
      </button>
    </div>
  );
}`}
              </pre>
            </Card>
          </Section>
        </main>

        <Footer>
          <Text>© {new Date().getFullYear()} — Theme System Demo</Text>
        </Footer>
      </ContentWrapper>
    </PageContainer>
  );
}