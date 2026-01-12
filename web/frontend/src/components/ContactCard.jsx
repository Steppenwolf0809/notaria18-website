import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/593996591682?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20la%20Notar%C3%ADa%2018.%20%C2%BFMe%20pueden%20ayudar%3F';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Calle%20Azuay%20E2-231%20Quito';

export default function ContactCard() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border">
      <div className="text-ink text-xl font-semibold">Contacto</div>
      <div className="mt-4 grid gap-4">
        <div className="flex items-start gap-3">
          <MapPin className="text-primary-600 mt-0.5" size={20} aria-hidden="true" />
          <div>
            <div className="text-sm text-muted">Dirección</div>
            <a
              className="text-ink hover:text-primary-700 underline underline-offset-2"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir ubicación en Google Maps: Calle Azuay E2-231 entre Av. Amazonas y Av. Azuay, Quito"
            >
              Calle Azuay E2-231 entre Av. Amazonas y Av. Azuay, Quito
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="text-primary-600 mt-0.5" size={20} aria-hidden="true" />
          <div>
            <div className="text-sm text-muted">Teléfono</div>
            <a
              className="text-ink hover:text-primary-700 underline underline-offset-2"
              href="tel:+593996591682"
              aria-label="Llamar al número 0996591682"
            >
              0996591682
            </a>
            <div className="text-sm text-muted mt-1">Fax: <a className="hover:text-primary-700 underline underline-offset-2" href="tel:+59322247787" aria-label="Llamar al fax 022247787">022247787</a></div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="text-primary-600 mt-0.5" size={20} aria-hidden="true" />
          <div>
            <div className="text-sm text-muted">Email</div>
            <a
              className="text-ink hover:text-primary-700 underline underline-offset-2"
              href="mailto:notaria18uio@gmail.com"
              aria-label="Enviar correo a notaria18uio@gmail.com"
            >
              notaria18uio@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="text-primary-600 mt-0.5" size={20} aria-hidden="true" />
          <div>
            <div className="text-sm text-muted">Horario de atención</div>
            <div className="text-ink">8:00 AM - 05:00 PM</div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
          aria-label="Abrir WhatsApp para chatear con la Notaría 18 del Cantón Quito"
        >
          <MessageCircle size={18} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
        <a
          href="tel:+593996591682"
          className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 border border-primary-600 text-primary-700 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
          aria-label="Llamar por teléfono"
        >
          <Phone size={18} aria-hidden="true" />
          <span>Llamar</span>
        </a>
        <a
          href="mailto:notaria18uio@gmail.com"
          className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 border text-ink hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
          aria-label="Enviar email"
        >
          <Mail size={18} aria-hidden="true" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}