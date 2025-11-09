import Link from 'next/link';
import {
  PageContainer,
  ContentWrapper,
  Header,
  Footer,
  Section,
  Quote,
  Card,
  CardGrid,
  Button,
  ButtonGroup,
  Text
} from '@/components/ui';
import { ThemeToggleButton } from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <PageContainer>
      <ContentWrapper>
        <Header
          title={<>CLAUDIO_YÁÑEZ<wbr />_MENDOZA</>}
          subtitle="Desarrollador full-stack / magíster en ciencias de la ingeniería, mención&nbsp;eléctrica."
          link="/"
        />

        <div className="section-content" style={{ textAlign: 'right', padding: '1rem' }}>
          <ThemeToggleButton />
        </div>

        <main className='section-content'>
          <Section title="ACERCA DE MÍ">
            <Text size="large">
              Sólo a través de la verdadera <b>COMPRENSIÓN</b> de los
              problemas es posible <b>CREAR</b> soluciones que <b>CONECTEN</b> con
              la realidad.<br /><br />
              Esa es mi filosofía de trabajo.
            </Text>
            <Quote author="Tim Urban">
              A remarkable, glorious achievement is just what a long series of unremarkable, unglorious tasks looks like from far away.
            </Quote>
          </Section>

          <Section title="EXPERIENCIA LABORAL">
            <CardGrid>
              <Card>
                <h3 className="heading-tertiary">Desarrollador Full-stack</h3>
                <Text>Creditú • 2022–Presente</Text>
              </Card>
              <Card>
                <h3 className="heading-tertiary">Ingeniero de I+D</h3>
                <Text>TOC Biometrics • 2019–2021</Text>
              </Card>
            </CardGrid>
          </Section>

          <Section title="PUBLICACIONES">
            <CardGrid>
              <Card>
                <h3 className="heading-tertiary">Impact of Occlusion Masks on Gender Classification from Iris Texture</h3>
                <Text>Claudio Yáñez, Juan E. Tapia, Claudio A. Perez and Christoph Busch • IET Biometrics, 2024</Text>
                <Link href="https://doi.org/10.1049/2024/8526857" rel="noopener noreferrer" target="_blank"><Text>https://doi.org/10.1049/2024/8526857</Text></Link>
              </Card>
              <Card>
                <h3 className="heading-tertiary">Image Quality Assessment on Identity Documents</h3>
                <Text>Claudio Yáñez and Juan Tapia • BIOSIG, 2021</Text>
                <Link href="https://doi.org/10.1109/BIOSIG52210.2021.9548294" rel="noopener noreferrer" target="_blank"><Text>https://doi.org/10.1109/BIOSIG52210.2021.9548294</Text></Link>
              </Card>
            </CardGrid>
          </Section>

          <Section title="CONTACTO">
            <ButtonGroup>
              <Button href="mailto:hola@cyanez.cl">
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
        </main>

        <Footer>
          <Text>© 2025 Claudio Yáñez -- Construido con React y Tailwind</Text>
        </Footer>
      </ContentWrapper >
    </PageContainer >
  );
}
