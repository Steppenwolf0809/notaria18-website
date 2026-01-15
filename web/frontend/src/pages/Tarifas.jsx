import SeoHead from '../components/SeoHead';
import { bc } from '../lib/seo';

export default function Tarifas(){
  return (
    <>
      <SeoHead
        title="Tarifas — Notaría 18 del Cantón Quito"
        description="Consulta las tarifas de los principales actos notariales conforme a la normativa vigente."
        path="/tarifas"
        breadcrumbs={bc(['Inicio','/'],['Tarifas','/tarifas'])}
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Tarifas
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            De acuerdo con la regulación vigente, las tarifas de los actos notariales se ajustan a la
            normativa aplicable. Para un detalle actualizado y una cotización exacta según su caso,
            contáctenos a través de la sección de Contacto o visite nuestras oficinas.
          </p>
          <div className="text-center">
            <a href="/contacto" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300">
              Solicitar información
            </a>
          </div>
        </div>
      </section>
    </>
  );
}