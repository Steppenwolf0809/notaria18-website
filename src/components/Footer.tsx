import React from 'react';
import { SITE } from '../constants';
import { Link } from 'react-router-dom';

export function Footer() {
  const telFixed = SITE.phone.replace(/\D/g, '');
  const telMobile = SITE.mobile.replace(/\D/g, '');
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`;

  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <img
              src="/logo-notaria18.jpg"
              alt="Logo Notaría 18"
              className="h-16 w-auto bg-white p-2 rounded"
            />
            <p className="mt-4 text-sm text-white/80">
              {SITE.name} - {SITE.notary}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#top" className="text-white/80 hover:text-white transition duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-white/80 hover:text-white transition duration-300">
                  La Notaría
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-white/80 hover:text-white transition duration-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/#tarifas" className="text-white/80 hover:text-white transition duration-300">
                  Tarifas
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-white/80 hover:text-white transition duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a href={`tel:${telFixed}`} className="text-white/80 hover:text-white transition duration-300">
                  {SITE.phone}
                </a>{' '}
                /{' '}
                <a href={`tel:${telMobile}`} className="text-white/80 hover:text-white transition duration-300">
                  {SITE.mobile}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-white/80 hover:text-white transition duration-300">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition duration-300"
                >
                  {SITE.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios de atención */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios de Atención</h3>
            <ul className="space-y-2 text-white/80">
              <li>Lunes a Viernes: 08:00 - 17:00</li>
           </ul>
          </div>
        </div>

        {/* Inferior */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © 2025 {SITE.name}. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="/terminos" className="text-white/80 hover:text-white transition duration-300 mx-2">
              Términos y Condiciones
            </a>
            <a href="/privacidad" className="text-white/80 hover:text-white transition duration-300 mx-2">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}