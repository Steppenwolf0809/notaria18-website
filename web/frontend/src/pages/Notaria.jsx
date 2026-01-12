import SeoHead from '../components/SeoHead';
import { bc } from '../lib/seo';
import equipo1 from '../assets/images/notaria-equipo-1.webp';
import oficina from '../assets/images/oficina-interior-1.webp';

export default function Notaria(){
  return (
    <>
      <SeoHead title="La Notaría — Misión, valores y equipo"
        description="Conoce nuestra misión, valores y equipo. Atención eficiente y segura, con verificación QR de documentos."
        path="/notaria"
        breadcrumbs={bc(['Inicio','/'],['Notaría','/notaria'])}
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            La Notaría 18
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-6">
              Somos una notaría moderna, innovadora y eficiente que brinda
              servicios notariales de alta calidad.
            </p>
            <p className="text-lg text-gray-700 text-center">
              La Dra. Glenda Zapata Silva, Notaria 18, junto a su equipo de
              trabajo altamente calificado, brinda soluciones jurídicas óptimas e
              integrales que permiten la plena satisfacción de las necesidades
              notariales de los usuarios.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <img src={equipo1} alt="Equipo de la Notaría 18" className="w-full h-64 object-cover rounded-lg" />
            <img src={oficina} alt="Oficina interior de la Notaría 18" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>
    </>
  );
}