import { ContentWrapper, Footer, Header, PageContainer, Text } from "@/components/ui";

export default function NotFound() {
  return (
    <PageContainer>
      <ContentWrapper>
        <Header 
          title="Error 404"
          link="/"
        />
        <main className="section-content">
          <Text size="large">
            Página no encontrada 
          </Text>
        </main>
        <Footer>
          <Text>© 2025 Claudio Yáñez -- Construido con React y Tailwind</Text>
        </Footer>
      </ContentWrapper>
    </PageContainer>
  )
}