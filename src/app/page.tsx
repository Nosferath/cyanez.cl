export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 p-8 font-mono">
      <div className="max-w-4xl mx-auto border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <header className="p-6 border-b-4 border-black">
          <h1 className="text-4xl font-bold">CLAUDIO_YÁÑEZ</h1>
          <p className="text-xl mt-2">desarrollador full-stack / magíster en ciencias de la ingeniería, mención eléctrica</p>
        </header>

        <main className="p-6">
          <h2 className="align-middle text-2xl font-bold mb-4 border-b-2 border-black pb-2">
            🚧 Página en construcción 🚧
          </h2>
          {/* <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
              ABOUT
            </h2>
            <p className="text-lg">
              I build digital experiences with a focus on performance,
              accessibility, and clean code. Currently specializing in React,
              TypeScript, and modern web technologies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
              WORK
            </h2>
            <div className="space-y-4">
              <div className="p-4 border-2 border-black bg-amber-100">
                <h3 className="text-xl font-bold">Current Position</h3>
                <p>Company Name • 2022–Present</p>
              </div>
              <div className="p-4 border-2 border-black bg-amber-100">
                <h3 className="text-xl font-bold">Previous Position</h3>
                <p>Another Company • 2020–2022</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
              CONTACTO
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@example.com"
                className="px-4 py-2 border-2 border-black bg-white hover:bg-amber-100 transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com/Nosferath"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-black bg-white hover:bg-amber-100 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/claudio-alejandro-y%C3%A1%C3%B1ez-mendoza-0855a814b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-black bg-white hover:bg-amber-100 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </section> */}
        </main>

        <footer className="p-4 border-t-4 border-black text-center">
          <p>© {new Date().getFullYear()} — Construido con React y Tailwind</p>
        </footer>
      </div>
    </div>
  );
}
