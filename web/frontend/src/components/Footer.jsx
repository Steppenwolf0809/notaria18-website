import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-notaria18.webp';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <img src={logo} alt="Notaría 18" className="h-16 w-auto" />
            <p className="mt-4 text-sm text-gray-200">
              Notaría 18 - Dra. Glenda Zapata Silva
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/notaria" className="text-gray-200 hover:text-white transition duration-300">
                  Notaría
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-200 hover:text-white transition duration-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/tarifas" className="text-gray-200 hover:text-white transition duration-300">
                  Tarifas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-gray-200 hover:text-white transition duration-300">
                  Compra Venta
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-200 hover:text-white transition duration-300">
                  Disolución de Sociedad Conyugal
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-200 hover:text-white transition duration-300">
                  Posesión Efectiva
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-200 hover:text-white transition duration-300">
                  Ver todos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-200">0996951682</li>
              <li className="text-gray-200">notaria18uio@gmail.com</li>
              <li className="text-gray-200">
                Calle Azuay E2-231 entre Av. Amazonas y Av. Azuay
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm">
            © {new Date().getFullYear()} Notaría 18. Todos los derechos
            reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-200 hover:text-white transition duration-300 mx-2">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition duration-300 mx-2">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}