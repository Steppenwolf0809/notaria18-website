// backend/src/qr/qr.controller.ts
import { verifyQr } from './qr.service';

// Minimal placeholder controller (sin dependencia estricta de Express)
export async function verify(req: any, res: any) {
  try {
    const { code, sig, issuedAt } = req?.query ?? {};
    if (!code || !sig || !issuedAt) {
      return res.status(400).json({ error: 'Missing params: code, sig, issuedAt' });
    }
    const result = await verifyQr({ code, sig, issuedAt });
    return res.json(result);
  } catch (e) {
    console.error('[QR][verify] error', e);
    return res.status(500).json({ error: 'Internal error' });
  }
}

export default { verify };