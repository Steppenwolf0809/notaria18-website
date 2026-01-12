
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Protocol } from './components/Protocol';
import { Values } from './components/Values';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full min-h-screen bg-white" id="top">
      <Header />
      <main>
        <Hero />
        <About />
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
          <Protocol />
          <Values />
        </div>
        <Services />
        {/* Sección Tarifas */}
        <section id="tarifas" className="py-16 bg-white scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
              Tarifas
            </h2>
            <p className="text-center text-gray-700 mb-8">
              Consulte nuestras tarifas vigentes conforme a la normativa del Consejo de la Judicatura.
            </p>
            <div className="text-center">
              <a
                href="#contact"
                className="inline-block bg-brand-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300"
              >
                Contactar para Tarifas
              </a>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}