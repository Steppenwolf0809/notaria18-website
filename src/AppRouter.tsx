import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { DivorceMutuoConsentimiento } from "./pages/DivorceMutuoConsentimiento";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { NotariaVirtual } from "./pages/NotariaVirtual";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Página general de servicios */}
        <Route path="/servicios" element={<ServicesPage />} />
        {/* Detalle de servicio dinámico */}
        <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
        {/* Página específica: alias solicitado y ruta previa por compatibilidad */}
        <Route path="/divorcio-union-hecho" element={<DivorceMutuoConsentimiento />} />
        <Route path="/servicios/divorcio-mutuo" element={<DivorceMutuoConsentimiento />} />
        <Route path="/notaria-virtual" element={<NotariaVirtual />} />
        {/* Páginas informativas básicas */}
        <Route path="/terminos" element={<div className="max-w-4xl mx-auto px-4 py-12"><a href="/" className="text-brand-primary hover:underline">← Volver al Inicio</a><h1 className="text-3xl font-bold text-gray-900 mt-4">Términos y Condiciones</h1><p className="text-gray-700 mt-3">Esta página describe los términos de uso del sitio. Contenido referencial.</p></div>} />
        <Route path="/privacidad" element={<div className="max-w-4xl mx-auto px-4 py-12"><a href="/" className="text-brand-primary hover:underline">← Volver al Inicio</a><h1 className="text-3xl font-bold text-gray-900 mt-4">Política de Privacidad</h1><p className="text-gray-700 mt-3">Esta página describe el tratamiento de datos personales. Contenido referencial.</p></div>} />
      </Routes>
      {/* Botón flotante global para todas las rutas */}
      <WhatsAppFloatingButton
        phone="+593 99 659 1682"
        message="Hola, quisiera más información."
        showLabel
        labelText="Escríbenos"
        hideOnPaths={['/.well-known', '/admin']}
        ariaLabel="Contactar por WhatsApp"
      />
    </BrowserRouter>
  );
}