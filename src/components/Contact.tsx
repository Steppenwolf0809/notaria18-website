import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { SITE } from '../constants';

export function Contact() {
  const telFixed = SITE.phone.replace(/\D/g, '');
  const telMobile = SITE.mobile.replace(/\D/g, '');
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`;

  return (
    <section id="contact" className="py-16 bg-brand-grayLight scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Contacto
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mapa */}
          <div className="bg-gray-100 rounded-lg overflow-hidden h-[400px]">
            <iframe
              src={SITE.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Notaría 18"
            />
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-start">
              <div className="bg-brand-primary p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Teléfonos</h3>
                <p className="text-gray-700">
                  <a
                    href={`tel:${telFixed}`}
                    className="text-brand-primary hover:opacity-90"
                    aria-label={`Llamar al teléfono fijo ${SITE.phone}`}
                  >
                    {SITE.phone}
                  </a>{' '}
                  /{' '}
                  <a
                    href={`tel:${telMobile}`}
                    className="text-brand-primary hover:opacity-90"
                    aria-label={`Llamar al celular ${SITE.mobile}`}
                  >
                    {SITE.mobile}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-brand-primary p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Correo Electrónico</h3>
                <p className="text-gray-700">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-brand-primary hover:opacity-90"
                    aria-label={`Enviar correo a ${SITE.email}`}
                  >
                    {SITE.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-brand-primary p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Dirección</h3>
                <p className="text-gray-700">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:opacity-90"
                    aria-label="Abrir ubicación en Google Maps"
                  >
                    {SITE.address}
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enlaces de Interés</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={SITE.externalLinks.judiciaryCouncil}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-4 py-2 rounded text-center text-gray-700 hover:shadow transition duration-300 inline-flex items-center justify-center gap-2"
                >
                  Consejo de la Judicatura <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={SITE.externalLinks.propertyRegistry}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-4 py-2 rounded text-center text-gray-700 hover:shadow transition duration-300 inline-flex items-center justify-center gap-2"
                >
                  Registro de la Propiedad <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}