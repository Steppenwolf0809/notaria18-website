import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE } from '../constants';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const NavLinks = ({ className = '' }: { className?: string }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToSection = (id: string, targetPath = '/') => {
      // Close any open mobile menu
      closeMenu();

      const performScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          // If there's a fixed header, prefer start block; consumer can adjust scroll-margin-top via CSS
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      // If already in the target path, try to scroll immediately
      if (location.pathname === targetPath) {
        if (performScroll()) return;
      }

      // Navigate to the target path first, then attempt scroll after a short delay to allow mount
      navigate(targetPath);
      setTimeout(() => {
        performScroll();
      }, 140);
    };

    // Helper specifically for "Divorcio": scrolls to #divorcio inside /servicios
    const goToDivorcio = () => navigateToSection('divorcio', '/servicios');

    return (
      <nav className={`ml-0 md:ml-10 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 ${className}`}>
        <button type="button" onClick={() => navigateToSection('top', '/')} className="text-gray-700 hover:text-brand-primary font-medium">
          Inicio
        </button>
        <button type="button" onClick={() => navigateToSection('about', '/')} className="text-gray-700 hover:text-brand-primary font-medium">
          La Notaría
        </button>
        <button type="button" onClick={() => navigateToSection('services', '/')} className="text-gray-700 hover:text-brand-primary font-medium">
          Servicios
        </button>

        {/* Divorcio: lleva al listado de servicios y desplaza al elemento con id="divorcio" */}
        <button type="button" onClick={goToDivorcio} className="text-gray-700 hover:text-brand-primary font-medium">
          Divorcio
        </button>

        <button type="button" onClick={() => navigateToSection('tarifas', '/')} className="text-gray-700 hover:text-brand-primary font-medium">
          Tarifas
        </button>
        <button type="button" onClick={() => navigateToSection('contact', '/')} className="text-gray-700 hover:text-brand-primary font-medium">
          Contacto
        </button>
        <Link
          to="/notaria-virtual"
          onClick={closeMenu}
          className="bg-brand-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition duration-300"
          aria-label="Ir a Notaría Virtual"
        >
          Notaría Virtual
        </Link>
      </nav>
    );
  };

  return (
    <header className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img src="/logo-notaria18.jpg" alt="Logo Notaría 18" className="h-12 w-auto rounded bg-white" />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-brand-primary leading-tight">{SITE.name}</span>
              <div className="text-xs text-gray-500">{SITE.notary}</div>
            </div>
          </div>

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-primary focus:outline-none"
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
}