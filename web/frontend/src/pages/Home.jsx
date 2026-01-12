import React from 'react';
import SeoHead from '../components/SeoHead';
import heroOffice from '../assets/images/hero-office.webp';
import { FileText, Home as HomeIcon, Users, FileCheck, Scroll, Gift, Heart, Phone, Mail, MapPin } from 'lucide-react';

const services = [
  {
    icon: <HomeIcon className="h-10 w-10 text-blue-700" />,
    title: 'Compra Venta',
    description: 'Asesoramiento y tramitación de compraventas de bienes inmuebles.',
  },
  {
    icon: <Users className="h-10 w-10 text-blue-700" />,
    title: 'Disolución de Sociedad Conyugal',
    description: 'Trámites para la disolución legal de la sociedad conyugal.',
  },
  {
    icon: <FileCheck className="h-10 w-10 text-blue-700" />,
    title: 'Extinción de Patrimonio Familiar',
    description: 'Gestión para la extinción del patrimonio familiar.',
  },
  {
    icon: <Scroll className="h-10 w-10 text-blue-700" />,
    title: 'Posesión Efectiva',
    description: 'Trámites de posesión efectiva de bienes hereditarios.',
  },
  {
    icon: <Gift className="h-10 w-10 text-blue-700" />,
    title: 'Donación',
    description: 'Asesoramiento y tramitación de donaciones de bienes.',
  },
  {
    icon: <Heart className="h-10 w-10 text-blue-700" />,
    title: 'Divorcio por Mutuo Acuerdo',
    description: 'Trámites para divorcios por mutuo consentimiento.',
  },
];


export default function Home() {
  return (
    <>
      <SeoHead
        title="Notaría 18 del Cantón Quito — Servicios notariales de excelencia"
        description="Notaría 18 - Dra. Glenda Zapata Silva. Servicios notariales de excelencia con atención personalizada y profesional."
        path="/"
      />

      {/* HERO */}
      <div
        className="relative bg-blue-800 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroOffice})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-80"></div>
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Notaría 18
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-white font-light">
              Dra. Glenda Zapata Silva
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-white">
              Servicios notariales de excelencia con atención personalizada y profesional
            </p>
            <div className="mt-8 space-x-4">
              <a
                href="#services"
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300"
              >
                Nuestros Servicios
              </a>
              <a
                href="#contact"
                className="inline-block text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition duration-300"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            La Notaría 18
          </h2>
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
        </div>
      </section>

      {/* PROTOCOL AND VALUES */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gray-100 rounded-lg p-12 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            <span className="text-blue-700 mr-2">★</span>
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {['Honestidad', 'Fe Pública', 'Confianza', 'Seguridad', 'Profesionalismo', 'Transparencia'].map((value) => (
              <div key={value} className="bg-white p-4 rounded-md shadow-sm text-center hover:shadow-md transition duration-300">
                <span className="text-blue-700 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition duration-300 flex flex-col border border-gray-200"
              >
                <div className="flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="text-center mt-auto">
                  <a href="/servicios" className="text-blue-700 font-medium hover:text-blue-800 transition duration-300">
                    Leer Más
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="/servicios" className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300">
              Ver Todos los Servicios
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Contacto
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-[400px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7985190718707!2d-78.4937204!3d-0.1807156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4f8a5aaaab%3A0x3b0b1d6ee73ffadb!2sQuito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de la Notaría"></iframe>
            </div>
            <div className="flex flex-col space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Teléfono
                  </h3>
                  <p className="text-gray-700">0996951682</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Correo Electrónico
                  </h3>
                  <p className="text-gray-700">notaria18uio@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Dirección
                  </h3>
                  <p className="text-gray-700">
                    Calle Azuay E2-231 entre Av. Amazonas y Av. Azuay
                    <br />
                    Quito, Ecuador
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Enlaces de Interés
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="bg-gray-100 px-4 py-2 rounded text-center text-gray-700 hover:bg-gray-200 transition duration-300">
                    Consejo de la Judicatura
                  </a>
                  <a href="#" className="bg-gray-100 px-4 py-2 rounded text-center text-gray-700 hover:bg-gray-200 transition duration-300">
                    Registro de la Propiedad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}