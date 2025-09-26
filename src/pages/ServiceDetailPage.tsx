import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SERVICES, { Service } from '../data/services';
import { SITE } from '../constants';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

/**
 * Página de detalle de servicio.
 * Ruta: /servicios/:slug
 */

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service: Service | undefined = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="w-full min-h-screen bg-white" id="top">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <Link to="/servicios" className="text-brand-primary hover:underline" aria-label="Volver a servicios">
            ← Volver a Servicios
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-6">Servicio no encontrado</h1>
          <p className="text-gray-700 mt-3">
            Lo sentimos, no encontramos el servicio solicitado. Puede volver a la lista de servicios o
            contactarnos al <a href={`tel:${SITE.phone.replace(/\D/g,'')}`} className="text-brand-primary">{SITE.phone}</a>.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white" id="top">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/servicios" className="text-brand-primary hover:underline" aria-label="Volver a servicios">
          ← Volver a Servicios
        </Link>

        <header className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <span aria-hidden="true" className="text-3xl">{service.emoji}</span>
            {service.title}
          </h1>
          <p className="text-gray-700 mt-2">{service.description}</p>
        </header>

        <section className="mt-8 prose prose-lg max-w-none text-gray-700">
          {service.content ? (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">¿En qué consiste?</h2>
              <p>{service.content}</p>
            </div>
          ) : (
            <p>Información detallada próximamente.</p>
          )}

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900">¿Desea agendar o consultar?</h3>
            <p className="text-gray-700 mt-2">
              Contáctenos al{' '}
              <a
                href={`tel:${SITE.phone.replace(/\D/g, '')}`}
                className="text-brand-primary hover:underline"
                aria-label={`Llamar a ${SITE.phone}`}
              >
                {SITE.phone}
              </a>{' '}
              o escríbanos a{' '}
              <a href={`mailto:${SITE.email}`} className="text-brand-primary hover:underline" aria-label={`Enviar correo a ${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ServiceDetailPage;