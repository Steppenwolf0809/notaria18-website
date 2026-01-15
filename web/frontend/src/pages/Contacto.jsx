import SeoHead from '../components/SeoHead';
import { Phone, Mail, MapPin } from 'lucide-react';
import recepcion from '../assets/images/recepcion-exterior.webp';

const ld = {
  "@context": "https://schema.org",
  "@type": "Notary",
  "name": "Notaría 18 del Cantón Quito",
  "address": "Calle Azuay E2-231 entre Av. Amazonas y Av. Azuay, Quito, EC",
  "email": "notaria18uio@gmail.com",
  "cellphone": "+593996591682",
  "telephone": "+59322247787",
  "openingHours": "Mo-Fr 08:00-17:00",
  "url": "https://www.notaria18quito.com.ec/",
  "sameAs": []
};

export default function Contacto(){
  return (
    <>
      <SeoHead
        title="Contacto — Notaría 18 del Cantón Quito"
        description="Comunícate con la Notaría 18 del Cantón Quito. Dirección, teléfono, WhatsApp, email y horario de atención."
        path="/contacto"
        breadcrumbs={[]}
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Contacto
          </h1>
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
          <div className="mt-12">
            <img
              src={recepcion}
              alt="Fachada y recepción de la Notaría 18 en Quito"
              className="rounded-2xl border w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}