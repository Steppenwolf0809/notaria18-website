import React from 'react';
import { Link } from 'react-router-dom';
import SERVICES, { Service } from '../data/services';

/**
 * Lista de servicios en tarjetas clickeables.
 * Cada tarjeta es un Link a /servicios/{slug}
 * Accesibilidad: role, aria-labels y focus-visible.
 */

export function Services() {
  const services: Service[] = SERVICES;

  return (
    <section id="services" className="py-16 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Nuestros Servicios
        </h2>

        {/* Lista de tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Lista de servicios">
          {services.map((service) => {
            const href = service.pathOverride || `/servicios/${service.slug}`;
            return (
              <Link
                key={service.slug}
                id={service.pathOverride === '/divorcio-union-hecho' ? 'divorcio' : undefined}
                to={href}
                role="listitem"
                aria-label={`Abrir página del servicio ${service.title}`}
                className="group block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl" aria-hidden="true">
                    {service.emoji || '🛎️'}
                  </span>
                </div>

              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center mb-4 flex-grow">
                {service.description}
              </p>

              <div className="text-center mt-2">
                <span
                  className="inline-block text-brand-primary font-medium group-hover:underline transition"
                  aria-hidden="true"
                >
                  Leer Más →
                </span>
              </div>
              </Link>
            );
          })}
        </div>

        {/* Acción para ver todos (puede volverse paginada/buscable en el futuro) */}
        <div className="mt-12 text-center">
          <Link
            to="/servicios"
            className="bg-brand-primary text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition duration-300 inline-block"
            aria-label="Ver todos los servicios"
          >
            Ver Todos los Servicios
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;