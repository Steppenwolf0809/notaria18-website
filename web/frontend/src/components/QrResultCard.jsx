export default function QrResultCard({ data, status }) {
  if (status === 'loading') {
    return (
      <div className="p-6 border rounded-xl bg-white shadow-sm">
        <div className="animate-pulse">
          <div className="h-5 w-40 bg-surface rounded mb-2"></div>
          <div className="h-4 w-72 bg-surface rounded mb-1"></div>
          <div className="h-4 w-64 bg-surface rounded"></div>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="p-6 border rounded-xl bg-white shadow-sm">
        <div className="text-red-600 font-semibold">No se pudo verificar el instrumento.</div>
        <p className="text-sm text-muted mt-1">Revisa el código y vuelve a intentar.</p>
      </div>
    );
  }

  if (status === 'ok' && data) {
    return (
      <div className="p-6 border rounded-xl bg-white shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted">Estado</div>
            <div className="text-green-700 font-semibold">Válido</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted">Emitido</div>
            <div className="text-ink font-medium">{data?.issuedAt || '-'}</div>
          </div>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted">Código</div>
            <div className="font-mono">{data?.code || '-'}</div>
          </div>
          <div>
            <div className="text-sm text-muted">Acto</div>
            <div className="text-ink">{data?.act || '-'}</div>
          </div>
          <div>
            <div className="text-sm text-muted">Compareciente</div>
            <div className="text-ink">{data?.party || '-'}</div>
          </div>
          <div>
            <div className="text-sm text-muted">Notaría</div>
            <div className="text-ink">Notaría 18 Quito</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}