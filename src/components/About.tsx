import React from 'react';
export function About() {
  return (
    <section id="about" className="py-16 bg-brand-grayLight scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          La Notaría 18
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 text-center mb-6">
            Somos una notaría moderna, innovadora y eficiente que brinda servicios notariales de alta calidad.
          </p>
          <p className="text-lg text-gray-700 text-center">
            La Dra. Glenda Zapata Silva y su equipo, altamente calificado, brindan soluciones jurídicas óptimas e
            integrales que permiten la plena satisfacción de las necesidades notariales de nuestros usuarios.
          </p>
        </div>
      </div>
    </section>
  );
}