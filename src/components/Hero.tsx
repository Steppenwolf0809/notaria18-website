import React from 'react';

export function Hero() {
  return (
    <section
      aria-label="Portada Notaría 18"
      className="relative overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-px w-3/4 bg-white/20" />
        <div className="absolute left-1/3 top-2/3 h-px w-2/3 bg-white/10 rotate-3" />
      </div>

      <div className="relative">
        <div className="min-h-[420px] md:min-h-[520px] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Notaría 18
            </h1>
            <p className="mt-2 text-2xl md:text-3xl text-white/95 font-medium">
              Dra. Glenda Zapata Silva
            </p>
            <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-lg md:text-xl text-white/90">
              Servicios notariales de excelencia con atención personalizada y tecnología moderna.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#services"
                className="inline-block bg-white text-brand-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
              >
                Nuestros Servicios
              </a>
              <a
                href="#contact"
                className="inline-block text-white border border-white/80 px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-brand-primary transition duration-300"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}