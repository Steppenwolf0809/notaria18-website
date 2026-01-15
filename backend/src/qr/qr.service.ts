// backend/src/qr/qr.service.ts
export type VerifyParams = {
  code: string;
  sig: string;
  issuedAt: string; // ISO8601
};

export type QrVerification = {
  code: string;
  act: string;
  party: string;
  issuedAt: string;
  valid: boolean;
};

export async function verifyQr({ code, sig, issuedAt }: VerifyParams): Promise<QrVerification> {
  // Placeholder de servicio.
  // Aquí, en una implementación real, deberías:
  // - Verificar la firma (sig) asociada al código (code)
  // - Comprobar expiración/emitido (issuedAt)
  // - Consultar DB (p.ej., Prisma) para obtener datos del instrumento
  // Mientras tanto, devolvemos un objeto simulado.
  return {
    code,
    act: 'ACTO NOTARIAL (placeholder)',
    party: 'COMPARECIENTE (placeholder)',
    issuedAt,
    valid: true,
  };
}