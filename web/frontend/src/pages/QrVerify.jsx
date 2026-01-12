import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../lib/api-client';
import QrResultCard from '../components/QrResultCard';
import SeoHead from '../components/SeoHead';

export default function QrVerify(){
  const [sp] = useSearchParams();
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState(null);

  useEffect(() => {
    const code = sp.get('code');
    const sig = sp.get('sig');
    const issuedAt = sp.get('issuedAt');
    if(!code || !sig || !issuedAt){ setStatus('error'); return; }
    (async ()=>{
      try{
        console.log('[SESSION][QR] Verifying…', { code, issuedAt });
        const { data } = await api.get('/api/qr/verify', { params: { code, sig, issuedAt }});
        setData(data); setStatus('ok');
      }catch{ setStatus('error'); }
    })();
  }, [sp]);

  return (
    <>
      <SeoHead title="Verificación de Instrumento — QR"
        description="Página de verificación de instrumentos mediante código QR."
        path="/qr/verify"
        noindex
      />
      <section className="max-w-3xl mx-auto p-6">
        <QrResultCard data={data} status={status}/>
      </section>
    </>
  );
}