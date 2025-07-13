import { 
  PageContainer, 
  ContentWrapper, 
  Header, 
  Footer, 
  Section,
  Quote,
  // Card, 
  // CardGrid, 
  // Button, 
  // ButtonGroup, 
  Text 
} from '@/components/ui';
import { ThemeToggleButton } from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <PageContainer>
      <ContentWrapper>
        <Header 
          title="CLAUDIO_YÁÑEZ_MENDOZA"
          subtitle="desarrollador full-stack / magíster en ciencias de la ingeniería, mención eléctrica"
          link="/"
        />

        <div className="section-content" style={{ textAlign: 'right', padding: '1rem' }}>
          <ThemeToggleButton />
        </div>
        
        <main className='section-content'>
          <Section title="🚧 Página en construcción 🚧">
            <Quote author="Tim Urban">
              A remarkable, glorious achievement is just what a long series of unremarkable, unglorious tasks looks like from far away.
            </Quote>
          </Section>
        </main>

        {/* <main className="section-content">
          <Section title="ABOUT">
            <Text size="large">
              I build digital experiences with a focus on performance,
              accessibility, and clean code. Currently specializing in React,
              TypeScript, and modern web technologies.
            </Text>
          </Section>

          <Section title="WORK">
            <CardGrid>
              <Card>
                <h3 className="heading-tertiary">Current Position</h3>
                <Text>Company Name • 2022–Present</Text>
              </Card>
              <Card>
                <h3 className="heading-tertiary">Previous Position</h3>
                <Text>Another Company • 2020–2022</Text>
              </Card>
            </CardGrid>
          </Section>

          <Section title="CONTACTO">
            <ButtonGroup>
              <Button href="mailto:hello@example.com">
                Email
              </Button>
              <Button 
                href="https://github.com/Nosferath"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button 
                href="https://www.linkedin.com/in/claudio-alejandro-y%C3%A1%C3%B1ez-mendoza-0855a814b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </ButtonGroup>
          </Section>
        </main> */}

        <Footer>
          <Text>© 2025 Claudio Yáñez -- Construido con React y Tailwind</Text>
        </Footer>
      </ContentWrapper>
    </PageContainer>
  );
}