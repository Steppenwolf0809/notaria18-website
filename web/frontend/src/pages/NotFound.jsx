import SeoHead from '../components/SeoHead';

export default function NotFound(){
  return (
    <>
      <SeoHead title="404 — Página no encontrada" description="La página solicitada no existe." path="/404" />
      <div className="max-w-3xl mx-auto p-10">
        <h1 className="text-2xl font-semibold mb-2">Página no encontrada</h1>
        <p>Vuelve al <a className="underline text-primary-600" href="/">inicio</a>.</p>
      </div>
    </>
  )
}