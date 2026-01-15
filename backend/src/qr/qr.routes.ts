// backend/src/qr/qr.routes.ts
// Placeholder de rutas estilo Express (tipos relajados para evitar dependencia directa)
// Úsalo como referencia para integrar en tu servidor real.

import controller from './qr.controller';

export function registerQrRoutes(app: any) {
  // GET /api/qr/verify?code=...&sig=...&issuedAt=...
  app.get('/api/qr/verify', (req: any, res: any) => controller.verify(req, res));
}

export default { registerQrRoutes };