import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function NotariaVirtual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.title = 'Notaría Virtual | Notaría 18 Quito';
    setMounted(true);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white" id="top">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className={`relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl ring-1 ring-white/10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Notaría Virtual</h1>
            <div className="mt-2 text-lg text-amber-400 font-semibold">Dra. Glenda Zapata Silva</div>
            <div className="text-sm md:text-base text-white/80">Notaría 18 - Quito, Ecuador</div>
            <p className="mt-4 text-white/90 max-w-3xl">Servicios notariales telemáticos con total validez legal desde cualquier lugar del Ecuador y el mundo.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:gzapata@notaria18quito.com.ec?subject=Consulta%20Notar%C3%ADa%20Virtual"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Iniciar Consulta Virtual
              </a>
              <a
                href="https://wa.me/593996951682?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20escrituras%20telem%C3%A1ticas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-5 py-3 font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-tr from-amber-400/20 to-cyan-400/20 rounded-full blur-3xl" aria-hidden="true" />
        </section>

        {/* Intro + Requisitos */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 text-white">📋</span>
              ¿Qué es la Notaría Virtual?
            </h2>
            <p className="mt-3 text-slate-600">
              La notaría virtual permite realizar actos notariales a través de videoconferencia, con plena validez legal según la Ley
              Orgánica Reformatoria del Código Orgánico de la Función Judicial y la Resolución 305-2022 del Consejo de la Judicatura.
            </p>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                <h4 className="font-semibold">⏰ Flexible</h4>
                <p className="text-sm text-white/80">Horarios convenientes</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                <h4 className="font-semibold">🌍 Global</h4>
                <p className="text-sm text-white/80">Desde cualquier ubicación</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                <h4 className="font-semibold">⚡ Eficiente</h4>
                <p className="text-sm text-white/80">Proceso digital ágil</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                <h4 className="font-semibold">🔒 Seguro</h4>
                <p className="text-sm text-white/80">Firma electrónica certificada</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 text-white">✅</span>
              Requisitos del Cliente
            </h2>
            <ul className="mt-3 divide-y divide-gray-100">
              <li className="py-2 flex items-start gap-2">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span><strong>Correo electrónico personal</strong></span>
              </li>
              <li className="py-2 flex items-start gap-2">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span><strong>Firma electrónica vigente</strong> emitida por autoridad certificadora autorizada</span>
              </li>
              <li className="py-2 flex items-start gap-2">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span><strong>Documentos habilitantes</strong> en formato PDF (con firma electrónica si aplica)</span>
              </li>
              <li className="py-2 flex items-start gap-2">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span><strong>Conexión estable a internet</strong> para videoconferencia</span>
              </li>
              <li className="py-2 flex items-start gap-2">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span><strong>Dispositivo con cámara</strong> y micrófono funcional</span>
              </li>
            </ul>

            <div className="mt-4 rounded-lg bg-amber-50 border-l-4 border-amber-400 p-4">
              <h3 className="font-semibold text-slate-800">📅 Horarios de Atención</h3>
              <div className="mt-2 text-slate-700">
                <div className="flex items-center justify-between py-1 border-b border-gray-100">
                  <strong className="text-slate-800">Lunes a Viernes</strong>
                  <span>08:00 - 17:00</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <strong className="text-slate-800">Citas virtuales</strong>
                  <span>Fuera de horario previa coordinación</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="mt-10 bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 text-white">🔄</span>
            Proceso de Atención Telemática
          </h2>
          <ol className="mt-4 space-y-3">
            <li className="p-4 rounded-md bg-slate-50 border-l-4 border-slate-800">
              <h3 className="font-semibold text-slate-800">1. Contacto Inicial</h3>
              <p className="text-slate-700">Envío de solicitud por correo con nombres, cédula, descripción del requerimiento y petición firmada electrónicamente.</p>
            </li>
            <li className="p-4 rounded-md bg-slate-50 border-l-4 border-slate-800">
              <h3 className="font-semibold text-slate-800">2. Respuesta de la Notaría</h3>
              <p className="text-slate-700">Se remite lista de documentos habilitantes y asesoramiento jurídico inicial.</p>
            </li>
            <li className="p-4 rounded-md bg-slate-50 border-l-4 border-slate-800">
              <h3 className="font-semibold text-slate-800">3. Verificación de Requisitos</h3>
              <p className="text-slate-700">Validación de documentos, identidad y firmas electrónicas con herramientas especializadas.</p>
            </li>
            <li className="p-4 rounded-md bg-slate-50 border-l-4 border-slate-800">
              <h3 className="font-semibold text-slate-800">4. Proforma y Pago</h3>
              <p className="text-slate-700">Envío de proforma y medios de pago (transferencia, botón de pago, apps).</p>
            </li>
            <li className="p-4 rounded-md bg-slate-50 border-l-4 border-slate-800">
              <h3 className="font-semibold text-slate-800">5. Agendamiento</h3>
              <p className="text-slate-700">Coordinación de fecha y hora de videoconferencia. Acceso seguro con enlace e ID.</p>
            </li>
            <li className="p-4 rounded-md bg-slate-50 border-l-4 border-slate-800">
              <h3 className="font-semibold text-slate-800">6. Comparecencia Virtual</h3>
              <p className="text-slate-700">Videoconferencia grabada, lectura de escritura y firma electrónica de los comparecientes.</p>
            </li>
            <li className="p-4 rounded-md bg-slate-50 border-l-4 border-slate-800">
              <h3 className="font-semibold text-slate-800">7. Entrega de Testimonios</h3>
              <p className="text-slate-700">Entrega de dos testimonios digitales incluidos. Adicionales según tarifario.</p>
            </li>
          </ol>
        </section>

        {/* Actos excluidos */}
        <section className="mt-10 rounded-xl border-2 border-rose-200 bg-rose-50 p-6">
          <h3 className="text-xl font-bold text-rose-700">⚠️ Actos que NO se realizan por modalidad telemática</h3>
          <p className="mt-2 text-rose-800/90">Según el artículo 18.2 de la Ley Notarial, requieren comparecencia presencial:</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-white rounded-md p-3 border-l-4 border-rose-600">Testamento cerrado</div>
            <div className="bg-white rounded-md p-3 border-l-4 border-rose-600">Autorización salida de menores</div>
            <div className="bg-white rounded-md p-3 border-l-4 border-rose-600">Apertura testamento cerrado</div>
            <div className="bg-white rounded-md p-3 border-l-4 border-rose-600">Notificaciones de traspaso</div>
            <div className="bg-white rounded-md p-3 border-l-4 border-rose-600">Sorteos y constataciones físicas</div>
            <div className="bg-white rounded-md p-3 border-l-4 border-rose-600">Autenticación de firmas físicas</div>
            <div className="bg-white rounded-md p-3 border-l-4 border-rose-600">Registro de firmas físicas</div>
            <div className="bg-white rounded-md p-3 border-l-4 border-rose-600">Fe de supervivencia</div>
          </div>
        </section>

        {/* Seguridad */}
        <section className="mt-10 rounded-xl border border-sky-300 bg-sky-50 p-6">
          <h3 className="text-xl font-bold text-sky-700">🔐 Seguridad y Validez Legal</h3>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
            <li><strong>Videoconferencia cifrada</strong> con grabación integral del acto</li>
            <li><strong>Firmas electrónicas certificadas</strong> de todos los participantes</li>
            <li><strong>Verificación biométrica</strong> de identidad durante el proceso</li>
            <li><strong>Archivo digital permanente</strong> con respaldo seguro</li>
            <li><strong>Validez legal plena</strong> según normativa ecuatoriana vigente</li>
          </ul>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-slate-800">Contáctanos</h2>
            <p className="mt-2 text-slate-600">Completa el formulario y te contactaremos para iniciar tu trámite notarial virtual.</p>
            <form action="https://formsubmit.co/gzapata@notaria18quito.com.ec" method="POST" className="mt-4 space-y-4">
              <input type="hidden" name="_next" value="/?enviado=1#contacto" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nueva consulta — Notaría Virtual" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombres" className="block text-sm font-medium text-slate-700">Nombres y Apellidos</label>
                  <input id="nombres" name="nombres" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-slate-800" placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label htmlFor="cedula" className="block text-sm font-medium text-slate-700">Cédula/Pasaporte</label>
                  <input id="cedula" name="cedula" required pattern="[0-9A-Za-z-]{6,20}" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-slate-800" placeholder="Ej. 0102030405" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-slate-800" placeholder="tucorreo@ejemplo.com" />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-slate-700">Teléfono</label>
                  <input id="telefono" name="telefono" type="tel" pattern="[0-9+ ()-]{7,20}" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-slate-800" placeholder="099 695 1682" />
                </div>
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-slate-700">Asunto</label>
                <input id="asunto" name="asunto" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-slate-800" placeholder="Ej. Poder especial, Divorcio, etc." />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={5} required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-slate-800" placeholder="Cuéntanos brevemente tu solicitud"></textarea>
              </div>

              <div className="flex items-start gap-2">
                <input id="acepta" name="acepta" type="checkbox" required className="mt-1" />
                <label htmlFor="acepta" className="text-sm text-slate-700">
                  Acepto el tratamiento de mis datos conforme a la <Link to="/privacidad" className="text-brand-primary hover:underline">Política de Privacidad</Link>.
                </label>
              </div>

              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-slate-800 text-white px-5 py-2.5 font-semibold hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2">
                Enviar consulta
              </button>
            </form>
          </div>

          <div className="rounded-xl p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow">
            <h3 className="text-xl font-bold">Canales de Contacto</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <h4 className="text-amber-300 font-semibold">📧 Email</h4>
                <p>gzapata@notaria18quito.com.ec</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <h4 className="text-amber-300 font-semibold">📱 Celular</h4>
                <p>099-695-1682</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <h4 className="text-amber-300 font-semibold">📞 Teléfono</h4>
                <p>(02) 224-7787</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <h4 className="text-amber-300 font-semibold">📍 Dirección</h4>
                <p>Calle Azuay E2-231 entre Av. Amazonas y Av. Azuay, Quito</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:gzapata@notaria18quito.com.ec?subject=Consulta%20Notar%C3%ADa%20Virtual"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Escribir por Email
              </a>
              <a
                href="https://wa.me/593996951682?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20escrituras%20telem%C3%A1ticas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-5 py-3 font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Info Legal */}
        <section className="mt-10 bg-white rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 text-white">ℹ️</span>
            Información Legal
          </h2>
          <div className="mt-3 text-slate-700 space-y-1">
            <p><strong>Notaria:</strong> Dra. Glenda Zapata Silva - Notaría 18 Quito</p>
            <p><strong>Base Legal:</strong> Resolución 305-2022 del Consejo de la Judicatura</p>
            <p><strong>Protocolo:</strong> DNDMCSJ-SNGSN-SIN-2022-036</p>
            <p><strong>Vigencia:</strong> Hasta implementación de PESNOT</p>
            <p className="italic">Los servicios telemáticos tienen la misma validez legal que los servicios presenciales, garantizando seguridad jurídica plena a nuestros usuarios.</p>
          </div>
        </section>

        <div className="mt-10">
          <Link to="/" className="text-brand-primary hover:underline">← Volver al Inicio</Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  );
}