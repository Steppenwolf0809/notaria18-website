import React, { useState } from 'react';
import { HeartCrack, ChevronDown, ChevronUp, FileDown, Phone } from 'lucide-react';
import { SITE } from '../constants';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function DivorceMutuoConsentimiento() {
  // Estados de acordeones (independientes). Inicialmente cerrados según especificación.
  const [openRates, setOpenRates] = useState(true); // Tasa notarial: "principales expandidas" - dejamos esta abierta
  const [openOutOfOffice, setOpenOutOfOffice] = useState(false);
  const [openDisability, setOpenDisability] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(false);
  const [openLaw, setOpenLaw] = useState(false);

  const telFixed = SITE.phone.replace(/\D/g, '');
  const telMobile = SITE.mobile.replace(/\D/g, '');

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-brand-grayLight to-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/"
            className="inline-block mb-4 text-brand-primary hover:underline"
            aria-label="Volver al inicio"
          >
            ← Volver al Inicio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <HeartCrack className="h-7 w-7 text-brand-primary" aria-hidden="true" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Divorcio y Terminaciones de Uniones de Hecho por Mutuo Consentimiento
            </h1>
          </div>
          <p className="text-gray-700 max-w-3xl">
            Asesoría integral y acompañamiento en procesos de divorcio por mutuo acuerdo y
            terminaciones de unión de hecho, con atención eficiente y respetuosa de sus acuerdos
            familiares y patrimoniales.
          </p>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL DE REQUISITOS */}
      <section id="requisitos" className="py-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Columna Izquierda - Divorcio por Mutuo Consentimiento */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Requisitos para Divorcio por Mutuo Consentimiento
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Formulario oficial del Consejo de la Judicatura debidamente completado</li>
              <li>Certificado de matrimonio (partida de matrimonio)</li>
              <li>Cédulas de identidad y certificados de votación vigentes de ambos cónyuges</li>
              <li>
                En caso de tener hijos menores de edad: acuerdos previos sobre tenencia, alimentos y
                régimen de visitas
              </li>
              <li>Si hay bienes conyugales: inventario y acuerdo de división de bienes</li>
              <li>No encontrarse la mujer en estado de gravidez</li>
            </ul>
          </div>

          {/* Columna Derecha - Terminación de Unión de Hecho por Mutuo Consentimiento */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Requisitos para Terminación de Unión de Hecho por Mutuo Consentimiento
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Formulario oficial del Consejo de la Judicatura para terminación de unión de hecho</li>
              <li>
                Certificado de unión de hecho del Registro Civil actualizado (máximo 2 meses)
              </li>
              <li>Cédulas de identidad y certificados de votación vigentes de ambos convivientes</li>
              <li>
                En caso de tener hijos: acuerdos sobre tenencia, alimentos y régimen de visitas
              </li>
              <li>No encontrarse la mujer en estado de gravidez</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FORMULARIOS DESCARGABLES */}
      <section id="formularios" className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Formularios Descargables</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.funcionjudicial.gob.ec/resources/pdf/Anexo%20-%20Formulario%20para%20Divorcio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition-all duration-300"
            >
              <FileDown className="h-5 w-5" aria-hidden="true" />
              Formulario de Petición Divorcio Mutuo Acuerdo
            </a>
            <a
              href="https://www.funcionjudicial.gob.ec/resources/pdf/Anexo%20-%20Formulario%20para%20la%20terminaci%C3%B3n%20de%20la%20Uni%C3%B3n%20de%20hecho.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-primary border border-brand-primary px-4 py-2 rounded-md hover:bg-brand-primary/5 transition-all duration-300"
            >
              <FileDown className="h-5 w-5" aria-hidden="true" />
              Formulario de Petición Terminación Unión de Hecho Mutuo Acuerdo
            </a>
          </div>
        </div>
      </section>

      {/* CAJA DE INFORMACIÓN DESTACADA (azul) */}
      <section id="asesoria" className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-start gap-3">
              <div className="bg-brand-primary text-white p-2 rounded">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">
                  Asesoría gratuita para evaluar su caso y requisitos.
                </p>
                <p className="text-gray-700">
                  Contáctenos al{' '}
                  <a
                    href={`tel:${telFixed}`}
                    className="text-brand-primary underline underline-offset-2"
                  >
                    {SITE.phone}
                  </a>{' '}
                  /{' '}
                  <a
                    href={`tel:${telMobile}`}
                    className="text-brand-primary underline underline-offset-2"
                  >
                    {SITE.mobile}
                  </a>{' '}
                  o escriba a{' '}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-brand-primary underline underline-offset-2"
                  >
                    {SITE.email}
                  </a>
                  . Dirección: {SITE.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIONES COLAPSABLES */}
      <section id="detalles" className="py-10">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          {/* TASA NOTARIAL */}
          <div className="bg-white border rounded-lg">
            <button
              onClick={() => setOpenRates(!openRates)}
              className="w-full flex items-center justify-between p-4 text-left"
              aria-expanded={openRates}
            >
              <span className="text-lg font-semibold text-gray-900">Tasa Notarial</span>
              {openRates ? (
                <ChevronUp className="h-5 w-5 text-gray-700" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-700" aria-hidden="true" />
              )}
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openRates ? 'max-h-[1000px] border-t' : 'max-h-0'
              }`}
            >
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="min-w-[640px] w-full text-left">
                    <thead>
                      <tr className="text-gray-600">
                        <th className="py-2 px-3 font-medium">Concepto</th>
                        <th className="py-2 px-3 font-medium">Detalle</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-800">
                      <tr className="border-t">
                        <td className="py-2 px-3">Divorcio por mutuo consentimiento</td>
                        <td className="py-2 px-3">
                          $183.30 + IVA $27.60 = <span className="font-semibold">$210.90</span>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-3">Terminación de la Unión de Hecho</td>
                        <td className="py-2 px-3">
                          $183.30 + IVA $27.60 = <span className="font-semibold">$210.90</span>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-3">Certificación de originales o copias certificadas</td>
                        <td className="py-2 px-3">
                          $1.79 + IVA $0.27 = <span className="font-semibold">$2.06</span>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 px-3">Certificación de documentos materializados</td>
                        <td className="py-2 px-3">
                          $1.34 + IVA $0.22 = <span className="font-semibold">$1.56</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Referencia informativa con base en el Salario Básico Unificado (SBU $470). Valores sujetos a normativa vigente del Consejo de la Judicatura.
                </p>
              </div>
            </div>
          </div>

          {/* SERVICIO FUERA DEL DESPACHO */}
          <div className="bg-white border rounded-lg">
            <button
              onClick={() => setOpenOutOfOffice(!openOutOfOffice)}
              className="w-full flex items-center justify-between p-4 text-left"
              aria-expanded={openOutOfOffice}
            >
              <span className="text-lg font-semibold text-gray-900">
                Servicio Fuera del Despacho (Atención Domiciliaria)
              </span>
              {openOutOfOffice ? (
                <ChevronUp className="h-5 w-5 text-gray-700" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-700" aria-hidden="true" />
              )}
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openOutOfOffice ? 'max-h-[800px] border-t' : 'max-h-0'
              }`}
            >
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="min-w-[520px] w-full text-left">
                    <thead>
                      <tr className="text-gray-600">
                        <th className="py-2 px-3 font-medium">Concepto</th>
                        <th className="py-2 px-3 font-medium">Valor</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-800">
                      <tr className="border-t">
                        <td className="py-2 px-3">Servicio fuera del despacho</td>
                        <td className="py-2 px-3">
                          +$70.50 (adicional a la tasa notarial)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Incluye desplazamiento dentro del Distrito Metropolitano de Quito. Para zonas
                  alejadas podría aplicarse costo de movilización adicional según distancia.
                </p>
              </div>
            </div>
          </div>

          {/* PERSONAS CON DISCAPACIDAD */}
          <div className="bg-white border rounded-lg">
            <button
              onClick={() => setOpenDisability(!openDisability)}
              className="w-full flex items-center justify-between p-4 text-left"
              aria-expanded={openDisability}
            >
              <span className="text-lg font-semibold text-gray-900">Personas con Discapacidad</span>
              {openDisability ? (
                <ChevronUp className="h-5 w-5 text-gray-700" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-700" aria-hidden="true" />
              )}
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openDisability ? 'max-h-[600px] border-t' : 'max-h-0'
              }`}
            >
              <div className="p-4">
                <p className="text-gray-700">
                  Se aplican exenciones y descuentos conforme la normativa vigente para personas con
                  discapacidad. Es necesario presentar el carné válido emitido por la autoridad
                  competente (MIES/CONADIS) y la documentación de respaldo. Los beneficios aplican a
                  los emolumentos notariales cuando corresponda.
                </p>
                <p className="text-gray-700 mt-2">
                  Para una orientación precisa sobre su caso, contáctenos por teléfono o correo.
                </p>
              </div>
            </div>
          </div>

          {/* PREGUNTAS FRECUENTES */}
          <div className="bg-white border rounded-lg">
            <button
              onClick={() => setOpenFAQ(!openFAQ)}
              className="w-full flex items-center justify-between p-4 text-left"
              aria-expanded={openFAQ}
            >
              <span className="text-lg font-semibold text-gray-900">Preguntas Frecuentes</span>
              {openFAQ ? (
                <ChevronUp className="h-5 w-5 text-gray-700" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-700" aria-hidden="true" />
              )}
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openFAQ ? 'max-h-[1400px] border-t' : 'max-h-0'
              }`}
            >
              <div className="p-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">¿Cuánto tiempo toma el trámite?</h4>
                  <p className="text-gray-700">
                    Si la documentación está completa y existe acuerdo entre las partes, el proceso
                    puede resolverse en plazos breves, sujetos a agenda y validaciones necesarias.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">¿Qué sucede si hay hijos menores?</h4>
                  <p className="text-gray-700">
                    Deben establecerse y presentarse los acuerdos sobre tenencia, alimentos y
                    régimen de visitas. Estos acuerdos son requisito indispensable.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">¿Y si existen bienes conyugales?</h4>
                  <p className="text-gray-700">
                    Se requiere inventario y acuerdo de división de bienes para incorporarlo al
                    trámite, garantizando claridad patrimonial para ambas partes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">¿Es necesario que ambos comparezcan?</h4>
                  <p className="text-gray-700">
                    Sí, por tratarse de mutuo consentimiento. En casos especiales, se revisarán
                    alternativas de representación con poder debidamente otorgado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LEGISLACIÓN BÁSICA APLICABLE */}
          <div className="bg-white border rounded-lg">
            <button
              onClick={() => setOpenLaw(!openLaw)}
              className="w-full flex items-center justify-between p-4 text-left"
              aria-expanded={openLaw}
            >
              <span className="text-lg font-semibold text-gray-900">Legislación Básica Aplicable</span>
              {openLaw ? (
                <ChevronUp className="h-5 w-5 text-gray-700" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-700" aria-hidden="true" />
              )}
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openLaw ? 'max-h-[1000px] border-t' : 'max-h-0'
              }`}
            >
              <div className="p-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Código Civil del Ecuador – Disposiciones sobre matrimonio, divorcio y unión de
                    hecho.
                  </li>
                  <li>
                    Ley Notarial – Competencias y procedimientos notariales aplicables a divorcio por
                    mutuo consentimiento y unión de hecho.
                  </li>
                  <li>
                    Código Orgánico de la Función Judicial (COFJ) – Normas y aranceles del Consejo de
                    la Judicatura.
                  </li>
                  <li>
                    Normativa del Registro Civil – Certificaciones de matrimonio y unión de hecho.
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  Referencias informativas. Para la aplicación concreta, se atenderá a la normativa
                  vigente y criterios institucionales actualizados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default DivorceMutuoConsentimiento;