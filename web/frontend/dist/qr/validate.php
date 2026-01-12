<?php
// public/qr/validate.php
header('Content-Type: text/html; charset=UTF-8');
header('X-Robots-Tag: noindex, nofollow');

function h($v) {
  return htmlspecialchars($v ?? '', ENT_QUOTES, 'UTF-8');
}

$code = $_GET['code'] ?? null;
$sig = $_GET['sig'] ?? null;
$issuedAt = $_GET['issuedAt'] ?? null;

// Placeholder de verificación (sin JS). En producción, realizaría una llamada
// server-to-server al backend: GET https://api.notaria18quito.com.ec/api/qr/verify?code=..&sig=..&issuedAt=..
// y mostraría el resultado de forma segura. Aquí solo se presenta eco básico.
$status = 'error';
$data = null;

if ($code && $sig && $issuedAt) {
  // Simulación: si los parámetros existen, devolver "válido" como placeholder.
  $status = 'ok';
  $data = [
    'code' => $code,
    'act' => 'ACTO NOTARIAL (placeholder)',
    'party' => 'COMPARECIENTE (placeholder)',
    'issuedAt' => $issuedAt
  ];
}
?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Verificación de Instrumento — QR</title>
  <meta name="robots" content="noindex,nofollow">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0E5AA7">
  <link rel="canonical" href="https://www.notaria18quito.com.ec/qr/verify">
  <style>
    :root{
      --ink:#0F172A; --muted:#64748B; --primary:#0E5AA7; --surface:#F8FAFC; --ok:#166534; --err:#991B1B;
      --radius:12px;
      font-family: Inter, ui-sans-serif, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      color-scheme: light;
    }
    body{ background:#F8FAFC; color:var(--ink); margin:0; }
    .container{ max-width:720px; margin:40px auto; padding:0 16px; }
    .card{ background:#fff; border:1px solid #e5e7eb; border-radius:var(--radius); box-shadow: 0 1px 2px rgba(0,0,0,.04); padding:20px; }
    .muted{ color:var(--muted); }
    .title{ font-size:20px; font-weight:600; margin:0 0 6px 0; }
    .row{ display:flex; gap:16px; justify-content:space-between; }
    .k{ font-size:12px; color:var(--muted); }
    .v{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    .ok{ color:var(--ok); font-weight:600; }
    .err{ color:var(--err); font-weight:600; }
    .mt{ margin-top:16px; }
    .small{ font-size:13px; }
    a.btn{ display:inline-block; margin-top:14px; color:#fff; background:var(--primary); padding:10px 14px; border-radius:10px; text-decoration:none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="title">Verificación de Instrumento — QR</div>
      <div class="muted small">Página de validación sin JavaScript (PHP)</div>

      <?php if ($status === 'ok'): ?>
        <div class="row mt">
          <div><div class="k">Estado</div><div class="ok">Válido</div></div>
          <div style="text-align:right"><div class="k">Emitido</div><div class="v"><?php echo h($data['issuedAt']); ?></div></div>
        </div>
        <div class="row mt">
          <div><div class="k">Código</div><div class="v"><?php echo h($data['code']); ?></div></div>
          <div><div class="k">Acto</div><div><?php echo h($data['act']); ?></div></div>
        </div>
        <div class="row mt">
          <div><div class="k">Compareciente</div><div><?php echo h($data['party']); ?></div></div>
          <div><div class="k">Notaría</div><div>Notaría 18 Quito</div></div>
        </div>
      <?php else: ?>
        <div class="err mt">No se pudo verificar el instrumento.</div>
        <div class="muted small">Revisa los parámetros "code", "sig" y "issuedAt".</div>
      <?php endif; ?>

      <div class="mt small muted">
        También puedes usar la versión SPA: https://www.notaria18quito.com.ec/qr/verify
      </div>
      <a class="btn" href="/">Ir al inicio</a>
    </div>
  </div>
</body>
</html>