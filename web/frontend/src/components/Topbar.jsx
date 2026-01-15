import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import logo from '../assets/images/logo-notaria18.webp';

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-blue-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Notaría 18" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-8">
              <NavLink to="/" className={({ isActive }) => `text-white hover:text-gray-200 font-medium ${isActive ? 'text-gray-200' : ''}`}>
                Inicio
              </NavLink>
              <NavLink to="/notaria" className={({ isActive }) => `text-white hover:text-gray-200 font-medium ${isActive ? 'text-gray-200' : ''}`}>
                Notaría
              </NavLink>
              <NavLink to="/servicios" className={({ isActive }) => `text-white hover:text-gray-200 font-medium ${isActive ? 'text-gray-200' : ''}`}>
                Servicios
              </NavLink>
              <NavLink to="/tarifas" className={({ isActive }) => `text-white hover:text-gray-200 font-medium ${isActive ? 'text-gray-200' : ''}`}>
                Tarifas
              </NavLink>

            </nav>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({ isActive }) => `block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium ${isActive ? 'text-blue-700' : ''}`}>
              Inicio
            </NavLink>
            <NavLink to="/notaria" className={({ isActive }) => `block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium ${isActive ? 'text-blue-700' : ''}`}>
              Notaría
            </NavLink>
            <NavLink to="/servicios" className={({ isActive }) => `block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium ${isActive ? 'text-blue-700' : ''}`}>
              Servicios
            </NavLink>
            <NavLink to="/tarifas" className={({ isActive }) => `block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium ${isActive ? 'text-blue-700' : ''}`}>
              Tarifas
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
}