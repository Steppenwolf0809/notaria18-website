# Pendientes de SEO tras retirar la Notaría Virtual

**Fecha:** 2026-08-31
**Estado del encargo anterior:** terminado y desplegado (commit `4f0750b`).

## Qué leer primero

1. `.htaccess` y `.cpanel.yml` en la raíz — ahí está documentada la trampa del despliegue.
2. Este archivo.

## Lo que ya se decidió y por qué

- **El sitio vivo es el estático de la raíz**, no la SPA de `web/frontend/`. La SPA
  está en el repo pero no se publica.
- **El despliegue copia, no sincroniza.** cPanel hace checkout del repo en
  `/home/notaria18quito/home/notaria18quito/public_html` (ruta anidada, mal
  configurada) y `.cpanel.yml` hace `cp -R *` al `public_html` real. Un archivo
  borrado del repo sobrevive en el destino hasta que se lo borre explícitamente.
  Así fue como `notaria-virtual.html` siguió indexada meses después de eliminarla.
- **`cp -R *` no expande dotfiles**, así que el `.htaccess` se copia aparte.
- **Las dos redirecciones al formulario UAFE** (`/registro-personal` y `/formulario`
  → Railway) sólo existían en el servidor. Ya están en el `.htaccess` del repo;
  no las borres al editarlo.
- **410 Gone, no 404 ni 301**: el catch-all de la raíz sirve `index.html` con 200
  para cualquier URL inexistente, o sea soft-404. Sin la regla explícita de 410,
  Google no suelta la URL.

## Qué falta hacer

### 1. ~~Sitemap desalineado~~ — HECHO (commit `bb75ac2`)
`sitemap.xml` y `robots.txt` ya están versionados en el repo y desplegados. El
sitemap lista las seis URLs reales, cada una verificada con contenido propio.
Quedaron **fuera a propósito** `verificar.html` y `encuesta-satisfaccion.html`:
son páginas de utilidad a las que se llega por enlace directo o QR, no por
búsqueda. Siguen siendo rastreables, sólo no se le proponen a Google.

### 1b. Sin canonical, y el sitio responde igual con y sin `www`
`https://notaria18quito.com.ec/` devuelve 200 en vez de redirigir a la versión
`www`, y ninguna página tiene `<link rel="canonical">`. Para Google eso es el
mismo contenido en dos direcciones distintas, y reparte la autoridad entre las
dos. La corrección es un 301 de no-www a www en el `.htaccess` más un canonical
en cada página. **Ojo:** el `.htaccess` ya tiene un `RewriteRule ^ https://...`
para forzar HTTPS; la regla de www va junto a esa y hay que probar que no se
encadenen dos redirecciones.

### 2. Enlaces rotos en el home
`index.html` enlaza a cuatro páginas que no existen:
`servicios/donacion.html`, `servicios/posesion-efectiva.html`,
`servicios/disolucion-sociedad-conyugal.html`,
`servicios/extincion-patrimonio-familiar.html`.
Las cuatro devuelven el home con 200. Decidir con José Luis: crear las páginas
(hay contenido reutilizable en `web/frontend/src/pages/Servicios.jsx`) o quitar
los enlaces.

### 3. Ruta duplicada del repo en cPanel
`repository_root` quedó como `/home/notaria18quito//home/notaria18quito/public_html`.
Funciona, pero es un accidente de configuración. Enderezarlo implica reclonar el
repo en cPanel; **no hacerlo sin respaldar `public_html` primero**, porque ahí viven
directorios que no están en el repo: `docs/`, `fotos-escrituras/`, `registro-personal/`,
`assets/`, `qr/`, más `encuesta-satisfaccion.html`, `verificar.html`, `robots.txt`
y `sitemap.xml`.

### 4. Solicitud de retirada en Search Console
`/notaria-virtual.html` ya devuelve 410. Falta pedir la retirada en
Search Console → Retiradas → Nueva solicitud, para que desaparezca del buscador
en ~24 h en vez de esperar el rastreo.

## Cómo se sabe que terminó

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.notaria18quito.com.ec/servicios/donacion.html
```

Debe dar `200` con contenido propio de donación (o `410` si se decidió quitarla),
nunca el home. Y el sitemap no debe declarar ninguna URL que devuelva el home.
