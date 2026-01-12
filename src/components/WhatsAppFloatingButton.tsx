import React, { useEffect, useMemo, useState } from 'react';
import { SITE } from '../constants';
import { useLocation } from 'react-router-dom';

export type WhatsAppFloatingButtonPosition = 'bottom-right' | 'bottom-left';

export interface WhatsAppFloatingButtonProps {
  phone?: string; // Número destino; si no se provee, usa SITE.CONTACT?.WHATSAPP o SITE.WHATSAPP; fallback 573001234567
  message?: string; // Mensaje base; se complementa con título y URL actuales
  className?: string; // Clases extra
  position?: WhatsAppFloatingButtonPosition; // Posición, por defecto bottom-right
  showLabel?: boolean; // Mostrar etiqueta en hover (md+)
  labelText?: string; // Texto de etiqueta, por defecto "WhatsApp"
  hideOnPaths?: string[]; // Rutas donde NO se renderiza, e.g. ['/.well-known', '/admin']
  ariaLabel?: string; // A11y label; por defecto "Abrir chat de WhatsApp"
}

/**
 * Normaliza un número telefónico conservando solo dígitos.
 */
function normalizePhone(raw?: string): string {
  if (!raw) return '';
  return raw.replace(/\D/g, '');
}

export function WhatsAppFloatingButton({
  phone,
  message,
  className = '',
  position = 'bottom-right',
  showLabel = true,
  labelText,
  hideOnPaths = [],
  ariaLabel = 'Abrir chat de WhatsApp',
}: WhatsAppFloatingButtonProps) {
  // Detecta ruta actual para soportar hideOnPaths (prefijo o match exacto)
  const { pathname } = useLocation();

  const shouldHide = useMemo(() => {
    if (!hideOnPaths?.length) return false;
    return hideOnPaths.some((blocked) => {
      if (!blocked) return false;
      return pathname === blocked || pathname.startsWith(blocked);
    });
  }, [hideOnPaths, pathname]);

  // Determina el número destino por defecto: SITE.CONTACT?.WHATSAPP o SITE.WHATSAPP; fallback
  // Nota: en este proyecto SITE no tiene esos campos, por lo que se usará fallback salvo que se pase phone por props.
  const siteAny = SITE as unknown as Record<string, any>;
  const defaultWhatsApp =
    normalizePhone(siteAny?.CONTACT?.WHATSAPP) ||
    normalizePhone(siteAny?.WHATSAPP) ||
    '573001234567';

  const targetPhone = normalizePhone(phone) || defaultWhatsApp;

  // Mensaje por defecto + contexto automático de la página
  const resolvedMessage = useMemo(() => {
    const title = typeof document !== 'undefined' ? document.title : '';
    const href = typeof window !== 'undefined' ? window.location.href : '';
    const base = message ?? 'Hola, quisiera más información.';
    // Reemplazo de placeholders comunes si el mensaje los contiene
    const withPlaceholders = base
      .replace(/\{document\.title\}|\{title\}|\[Document Title\]|:title:/gi, title)
      .replace(/\{window\.location\.href\}|\{url\}|\[URL Actual\]|:url:/gi, href);
    // Si no había placeholders conocidos, añadimos el contexto automáticamente
    const finalMsg =
      withPlaceholders === base
        ? `${base} Página: ${title} - ${href}`
        : withPlaceholders;
    return finalMsg;
  }, [message]);

  const waUrl = useMemo(() => {
    const encoded = encodeURIComponent(resolvedMessage);
    return `https://wa.me/${targetPhone}?text=${encoded}`;
  }, [resolvedMessage, targetPhone]);

  // Animación de entrada con respeto a reduce-motion
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setMounted(true);
      return;
    }

    const t = window.setTimeout(() => setMounted(true), 800);
    return () => window.clearTimeout(t);
  }, []);

  if (shouldHide || !targetPhone) return null;

  const positionClasses =
    position === 'bottom-left'
      ? 'left-6 md:left-8 right-auto'
      : 'right-6 md:right-8 left-auto';

  return (
    <div
      className={[
        'fixed',
        'bottom-6 md:bottom-8',
        positionClasses,
        'z-50',
        'pb-[env(safe-area-inset-bottom)]',
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        'transition-all duration-300 motion-reduce:transition-none',
      ].join(' ')}
      aria-hidden="false"
    >
      <div className="relative group pointer-events-auto">
        {/* Etiqueta mostrada en hover (solo md+) */}
        {showLabel && (
          <div
            className={[
              'hidden md:flex',
              'items-center',
              'absolute',
              position === 'bottom-left' ? 'left-[72px]' : 'right-[72px]',
              'top-1/2 -translate-y-1/2',
              'bg-black/90 text-white text-sm',
              'rounded-md px-3 py-1.5',
              'opacity-0 group-hover:opacity-100',
              'transition-all duration-200',
              'whitespace-nowrap',
              'shadow-md',
            ].join(' ')}
            role="status"
          >
            {labelText || 'WhatsApp'}
            {/* Flecha hacia el botón */}
            <span
              className={[
                'absolute',
                position === 'bottom-left'
                  ? 'right-[-6px]'
                  : 'left-[-6px]',
                'top-1/2 -translate-y-1/2',
                'w-3 h-3 rotate-45',
                'bg-black/90',
              ].join(' ')}
              aria-hidden="true"
            />
          </div>
        )}

        {/* Botón */}
        <a
          href={waUrl}
          role="link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={[
            'flex items-center justify-center',
            'w-16 h-16 rounded-full',
            // Color base con leve degradado vertical personalizado
            'shadow-lg',
            'transition-all duration-200',
            'motion-reduce:transition-none motion-reduce:transform-none',
            'focus-visible:outline-none',
            'focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-500',
            // Hover: en desktop escala + glow; en mobile (sin md) solo sombra
            'hover:shadow-xl',
            'md:hover:scale-105 md:hover:ring-4 md:hover:ring-emerald-400/30',
            className,
          ].join(' ')}
          style={{
            background:
              'linear-gradient(180deg, #25D366 0%, #1ebe5d 100%)',
          }}
        >
          {/* SVG inline del logotipo de WhatsApp (blanco) */}
          <svg
            aria-hidden="true"
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M27.6 4.4C24.7 1.5 20.7 0 16.5 0 8.4 0 1.9 6.5 1.9 14.6c0 2.6.7 5.1 2 7.3L2 32l10.4-1.8c2.1 1.1 4.5 1.7 7 1.7 8.1 0 14.6-6.5 14.6-14.6 0-4.2-1.6-8.1-4.5-10.9ZM19.4 28.7c-2.2 0-4.3-.6-6.1-1.7l-.4-.2-6.2 1.1 1.2-6.1-.3-.4c-1.2-1.9-1.8-4-1.8-6.2 0-6.5 5.3-11.8 11.8-11.8 3.2 0 6.2 1.2 8.4 3.5 2.2 2.2 3.5 5.2 3.5 8.4 0 6.5-5.3 11.8-11.8 11.8Zm6.8-8.9c-.4-.2-2.3-1.1-2.6-1.2-.4-.2-.7-.2-1 .2-.3.4-1.1 1.2-1.3 1.4-.2.2-.5.2-.9 0s-1.6-.6-3.1-1.9c-1.1-1-1.8-2.3-2-2.7-.2-.4 0-.6.1-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6 0-.2 0-.5 0-.7 0-.2-.9-2.3-1.2-3.2-.3-.8-.6-.7-.8-.7h-.7c-.2 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6s1.5 4.1 1.7 4.4c.2.3 2.9 4.5 7 6.3.9.4 1.7.6 2.2.8.9.3 1.7.3 2.3.2.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.2-.1-.5-.3-.9-.5Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default WhatsAppFloatingButton;