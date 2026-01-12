import { Helmet } from 'react-helmet-async';

export default function SeoHead({
  title = 'Notaría 18 | Quito',
  description = 'Fe pública moderna, servicios notariales y verificación de instrumentos mediante código QR.',
  path = '/',
  noindex = false,
  breadcrumbs = []
}) {
  const base = import.meta.env.VITE_PUBLIC_DOMAIN || 'https://www.notaria18quito.com.ec';
  const url = `${base}${path}`;
  const org = {
    "@context":"https://schema.org",
    "@type":"Notary",
    "name": import.meta.env.VITE_BUSINESS_NAME || "Notaría 18 del Cantón Quito",
    "url": base || "https://www.notaria18quito.com.ec",
    "email": import.meta.env.VITE_BUSINESS_EMAIL || "notaria18uio@gmail.com",
    "telephone": import.meta.env.VITE_BUSINESS_PHONE || "0996951682",
    "address": {
      "@type":"PostalAddress",
      "streetAddress": import.meta.env.VITE_BUSINESS_ADDRESS || "Calle Azuay E2-231 entre Av. Amazonas y Av. Azuay",
      "addressLocality": import.meta.env.VITE_BUSINESS_CITY || "Quito",
      "addressCountry": "EC"
    }
  };
  const localBusiness = {
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    "name": import.meta.env.VITE_BUSINESS_NAME || "Notaría 18 del Cantón Quito",
    "image": `${base}/og-default.png`,
    "email": import.meta.env.VITE_BUSINESS_EMAIL || "notaria18uio@gmail.com",
    "telephone": import.meta.env.VITE_BUSINESS_PHONE || "0996951682",
    "address": {
      "@type":"PostalAddress",
      "streetAddress": import.meta.env.VITE_BUSINESS_ADDRESS || "Calle Azuay E2-231 entre Av. Amazonas y Av. Azuay",
      "addressLocality": import.meta.env.VITE_BUSINESS_CITY || "Quito",
      "addressCountry": "EC"
    },
    "url": base || "https://www.notaria18quito.com.ec"
  };
  const website = {
    "@context":"https://schema.org",
    "@type":"WebSite",
    "url": base || "https://www.tu-dominio.com",
    "potentialAction": {
      "@type":"SearchAction",
      "target": `${base}/?q={search_term_string}`,
      "query-input":"required name=search_term_string"
    }
  };
  const breadcrumbLd = breadcrumbs.length ? {
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement": breadcrumbs.map((bc, i)=>({
      "@type":"ListItem","position": i+1,
      "name": bc.name, "item": `${base}${bc.path}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content="/og-default.png"/>
      <meta property="og:url" content={url}/>
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(org)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
      {breadcrumbLd && <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>}
    </Helmet>
  );
}