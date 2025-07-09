export default function Home() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <header className="site-header">
          <h1 className="heading-primary">CLAUDIO_YÁÑEZ</h1>
          <p className="subtitle">desarrollador full-stack / magíster en ciencias de la ingeniería, mención eléctrica</p>
        </header>
        
        <main className="section-content">
        {/* 
          <section className="section">
            <h2 className="heading-secondary">ABOUT</h2>
            <p className="text-large">
              I build digital experiences with a focus on performance,
              accessibility, and clean code. Currently specializing in React,
              TypeScript, and modern web technologies.
            </p>
          </section>

          <section className="section">
            <h2 className="heading-secondary">WORK</h2>
            <div className="card-grid">
              <div className="card">
                <h3 className="heading-tertiary">Current Position</h3>
                <p className="text-base">Company Name • 2022–Present</p>
              </div>
              <div className="card">
                <h3 className="heading-tertiary">Previous Position</h3>
                <p className="text-base">Another Company • 2020–2022</p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="heading-secondary">CONTACTO</h2>
            <div className="btn-group">
              <a
                href="mailto:hello@example.com"
                className="btn"
              >
                Email
              </a>
              <a
                href="https://github.com/Nosferath"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/claudio-alejandro-y%C3%A1%C3%B1ez-mendoza-0855a814b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                LinkedIn
              </a>
            </div>
          </section> */}
        </main>

        <footer className="site-footer">
          <p className="text-base">© {new Date().getFullYear()} — Construido con React y Tailwind</p>
        </footer>
      </div>
    </div>
  );
}