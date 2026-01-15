import SeoHead from '../components/SeoHead';
import { bc } from '../lib/seo';
import { Home, Users, FileCheck, Scroll, Gift, Heart } from 'lucide-react';
import compraventa from '../assets/images/servicio-compraventa.webp';
import donacion from '../assets/images/servicio-donacion.webp';
import firma from '../assets/images/virtual-qr-firma-digital.webp';

const services = [{
  icon: <Home className="h-10 w-10 text-blue-700" />,
  img: compraventa,
  alt: 'Compraventa de bienes inmuebles',
  title: 'Compra Venta',
  description: 'Asesoramiento y tramitación de compraventas de bienes inmuebles.'
}, {
  icon: <Users className="h-10 w-10 text-blue-700" />,
  img: firma,
  alt: 'Disolución de sociedad conyugal',
  title: 'Disolución de Sociedad Conyugal',
  description: 'Trámites para la disolución legal de la sociedad conyugal.'
}, {
  icon: <FileCheck className="h-10 w-10 text-blue-700" />,
  img: firma,
  alt: 'Extinción de patrimonio familiar',
  title: 'Extinción de Patrimonio Familiar',
  description: 'Gestión para la extinción del patrimonio familiar.'
}, {
  icon: <Scroll className="h-10 w-10 text-blue-700" />,
  img: firma,
  alt: 'Posesión efectiva',
  title: 'Posesión Efectiva',
  description: 'Trámites de posesión efectiva de bienes hereditarios.'
}, {
  icon: <Gift className="h-10 w-10 text-blue-700" />,
  img: donacion,
  alt: 'Donación de bienes',
  title: 'Donación',
  description: 'Asesoramiento y tramitación de donaciones de bienes.'
}, {
  icon: <Heart className="h-10 w-10 text-blue-700" />,
  img: firma,
  alt: 'Divorcio por mutuo acuerdo',
  title: 'Divorcio por Mutuo Acuerdo',
  description: 'Trámites para divorcios por mutuo consentimiento.'
}];

export default function Servicios(){
  return (
    <>
      <SeoHead title="Servicios notariales — Quito"
        description="Compraventa, donación, disolución de sociedad conyugal, posesión efectiva, divorcio por mutuo acuerdo y más."
        path="/servicios"
        breadcrumbs={bc(['Inicio','/'],['Servicios','/servicios'])}
      />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nuestros Servicios
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col">
                <img src={service.img} alt={service.alt} className="w-full h-40 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <a href="/contacto" className="text-blue-700 font-medium hover:text-blue-800 transition duration-300">
                      Leer Más
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="mt-12 text-center">
            <a href="/contacto" className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300">
              Contactar para más información
            </a>
          </div>
        </div>
      </section>
    </>
  );
}