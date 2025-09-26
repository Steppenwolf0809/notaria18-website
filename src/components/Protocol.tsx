import React from 'react';
import { ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Protocol() {
  return (
    <div className="bg-brand-primary rounded-lg p-8 text-white flex flex-col h-full shadow-sm">
      <div className="flex items-center mb-4">
        <ClipboardList className="w-10 h-10 mr-3" aria-hidden="true" />
        <h3 className="text-2xl font-bold">Protocolo de Atención Digital</h3>
      </div>
      <p className="mb-6 text-white/95">
        Ponemos a disposición de la ciudadanía nuestros servicios notariales electrónicos, con estándares
        de seguridad y validez jurídica para la tramitación digital de escrituras y actuaciones notariales.
      </p>
      <div className="mt-auto">
        <Link
          to="/notaria-virtual"
          className="inline-block border border-white/90 px-4 py-2 rounded hover:bg-white hover:text-brand-primary transition duration-300 font-medium"
          aria-label="Leer más sobre el Protocolo de Atención Digital"
        >
          Leer Más
        </Link>
      </div>
    </div>
  );
}