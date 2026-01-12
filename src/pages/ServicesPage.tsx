import React from 'react';
import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-white" id="top">
      <Header />
      <section className="bg-gradient-to-b from-brand-grayLight to-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/"
            className="inline-block mb-4 text-brand-primary hover:underline"
            aria-label="Volver al inicio"
          >
            ← Volver al Inicio
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Servicios</h1>
          <p className="text-gray-700 mt-2">Conozca todos nuestros servicios notariales.</p>
        </div>
      </section>
      <Services />
      <Footer />
    </div>
  );
}

export default ServicesPage;