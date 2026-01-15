import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * FloatingWhatsApp
 *
 * Props:
 * - phoneNumber: string (required) international format WITHOUT '+' or spaces, e.g. "5939XXXXXXX"
 * - message: string default message (will be URL-encoded)
 * - position: "bottom-right" | "bottom-left" (default: "bottom-right")
 * - showOnDesktop: boolean (default: true) - when false, hide on md+ screens
 * - className: additional className
 * - excludePaths: array of pathname prefixes to hide button on (e.g. ['/admin'])
 * - onClick: optional function called when link is clicked (analytics)
 *
 * Usage:
 * <FloatingWhatsApp phoneNumber="5939XXXXXXX" message="Hola, tengo una consulta" />
 *
 * Notes:
 * - Opens https://api.whatsapp.com/send?phone={phoneNumber}&text={encodedMessage}
 * - Accessibility: link has aria-label and img/svg has empty alt=""
 */

export default function FloatingWhatsApp({
  phoneNumber,
  message = 'Hola, tengo una consulta',
  position = 'bottom-right',
  showOnDesktop = true,
  className = '',
  excludePaths = [],
  onClick = undefined,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // small mount animation trigger
    const t = setTimeout(() => setMounted(true), 30);
    // debug trace to validar montaje en consola
    try {
      const msg = `FloatingWhatsApp mounted → href:${typeof window !== 'undefined' ? window.location.pathname : ''}`;
      // eslint-disable-next-line no-console
      console.log(msg);
    } catch {}
    return () => clearTimeout(t);
  }, []);

  // hide when current pathname matches any excluded prefix
  // prefer window.location when available to avoid relying on react-router hooks
  const isExcluded = useMemo(() => {
    const pathname = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname : '/';
    return excludePaths.some((p) => {
      if (!p) return false;
      // exact or prefix match
      return pathname === p || pathname.startsWith(p);
    });
  }, [excludePaths]);

  if (!phoneNumber || isExcluded) return null;

  // normalize phone number: keep digits only, convert local leading 0 to Ecuador country code (593)
  const digitsOnly = (phoneNumber || '').toString().replace(/\D/g, '');
  let normalized = digitsOnly;
  if (normalized.length > 0) {
    // common cases:
    // - user passed local mobile starting with 0 (e.g. 0996591682) => convert to 593996591682
    // - user passed already international without '+' (e.g. 593996591682) => keep as is
    if (normalized.startsWith('0')) {
      normalized = '593' + normalized.slice(1);
    } else if (normalized.length === 9 && !normalized.startsWith('593')) {
      // fallback: treat 9-digit local number as Ecuador mobile
      normalized = '593' + normalized;
    }
  }

  const encoded = encodeURIComponent(message || '');
  const href = `https://api.whatsapp.com/send?phone=${normalized}&text=${encoded}`;

  // position classes
  const posClass = position === 'bottom-left'
    ? 'left-6 right-auto'
    : 'right-6 left-auto';

  // showOnDesktop handling: if false, hide on md and up (md:hidden)
  const desktopClass = showOnDesktop ? '' : 'md:hidden';

  // mount animation classes
  const mountClass = mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90';

  // Use a portal so positioning is relative to viewport regardless of parent stacking contexts
  return createPortal(
    (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp"
        onClick={(e) => {
          if (typeof onClick === 'function') {
            try { onClick({ phoneNumber, message, href }); } catch (err) { /* ignore analytics errors */ }
          }
        }}
        className={
          `fixed z-[2147483647] bottom-6 ${posClass} ${desktopClass} ${className} ` +
          `transform-gpu transition-all duration-200 ${mountClass}`
        }
        style={{ zIndex: 2147483647, pointerEvents: 'auto' }}
        data-testid="floating-whatsapp"
      >
        <div className={`flex items-center justify-center gap-3`}>
          {/* circle button */}
          <div
            className={
              'inline-flex items-center justify-center rounded-full shadow-lg ' +
              'bg-[#25D366] hover:scale-105 transform transition-all duration-200 ' +
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 ' +
              'w-14 h-14 md:w-16 md:h-16'
            }
          >
            {/* WhatsApp SVG inline for crispness */}
            <svg
              className="w-7 h-7 md:w-8 md:h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M20.52 3.48A11.89 11.89 0 0 0 12 0C5.373 0 .001 5.373.001 12c0 2.116.55 4.09 1.506 5.86L0 24l6.44-1.492A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.195-1.247-6.196-3.48-8.52z" fill="#25D366"/>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.671.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.297-.495.099-.198.049-.371-.025-.52-.075-.148-.671-1.617-.92-2.217-.242-.579-.487-.5-.671-.51l-.571-.01c-.198 0-.52.074-.792.371s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487  .709.306 1.26.489 1.692.626.71.226 1.356.194 1.866.118.569-.085 1.758-.718 2.007-1.412.248-.694.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
            </svg>
          </div>

          {/* text label (visible on sm+) */}
          <span
            className={`hidden sm:inline-flex items-center gap-2 bg-white text-primary-700 rounded-full px-4 py-2 shadow-md ml-2 transform transition-all duration-200 hover:scale-102 ${showOnDesktop ? 'md:inline-flex' : 'md:hidden'}`}
          >
            <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20.52 3.48A11.89 11.89 0 0 0 12 0C5.373 0 .001 5.373.001 12c0 2.116.55 4.09 1.506 5.86L0 24l6.44-1.492A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.195-1.247-6.196-3.48-8.52z" fill="#25D366"/>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.671.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.297-.495.099-.198.049-.371-.025-.52-.075-.148-.671-1.617-.92-2.217-.242-.579-.487-.5-.671-.51l-.571-.01c-.198 0-.52.074-.792.371s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487  .709.306 1.26.489 1.692.626.71.226 1.356.194 1.866.118.569-.085 1.758-.718 2.007-1.412.248-.694.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
            </svg>
            <span className="text-sm font-medium">Escríbenos</span>
          </span>
        </div>
      </a>
    ),
    document.body
  );
}
