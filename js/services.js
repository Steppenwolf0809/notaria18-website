// Centralized services data for Notaría 18
// Each service has: title, description, emoji, slug

function slugify(text) {
  return text
    .toLowerCase()
    // Replace accents
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Remove invalid chars
    .replace(/[^a-z0-9\s-]/g, '')
    // Replace whitespace and underscores with -
    .replace(/[\s_]+/g, '-')
    // Collapse multiple -
    .replace(/-+/g, '-')
    // Trim
    .replace(/^-+|-+$/g, '');
}

const rawServices = [
  {
    title: 'Compra Venta',
    description: 'Asesoramiento inmobiliario y formalización de contratos de compraventa.',
    emoji: '🏠',
    content: 'Gestión completa de contratos de compraventa, revisión de títulos y asesoría legal.'
  },
  {
    title: 'Disolución Sociedad Conyugal',
    description: 'Trámites matrimoniales para la disolución de la sociedad conyugal.',
    emoji: '👥',
    content: 'Asesoría sobre régimen de bienes y trámite de disolución de la sociedad conyugal.'
  },
  {
    title: 'Extinción Patrimonio Familiar',
    description: 'Gestión patrimonial para la extinción del patrimonio familiar.',
    emoji: '🏛️',
    content: 'Procesos para la extinción del patrimonio familiar conforme a la normativa vigente.'
  },
  {
    title: 'Posesión Efectiva',
    description: 'Regularización de bienes hereditarios y posesión efectiva.',
    emoji: '📋',
    content: 'Tramitación de la posesión efectiva y asesoría en sucesiones.'
  },
  {
    title: 'Donación',
    description: 'Transferencia de bienes por donación con seguridad jurídica.',
    emoji: '🎁',
    content: 'Redacción y formalización de escrituras de donación.'
  },
  {
    title: 'Divorcio por Mutuo Acuerdo',
    description: 'Divorcios consensuales con acompañamiento integral.',
    emoji: '💔',
    content: 'Asesoría y trámite de divorcio por mutuo consentimiento, acuerdos patrimoniales y de custodia.',
    pathOverride: '/divorcio-union-hecho'
  },
];

const SERVICES = rawServices.map((s) => ({
  ...s,
  slug: slugify(s.title),
}));