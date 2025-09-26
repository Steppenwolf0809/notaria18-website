import React from 'react';
import { BadgeCheck, Handshake, ShieldCheck, Briefcase, Eye, ThumbsUp } from 'lucide-react';

export function Values() {
  const values = [
    { icon: <BadgeCheck className="h-6 w-6 text-brand-primary" aria-hidden="true" />, label: 'Fe Pública' },
    { icon: <ThumbsUp className="h-6 w-6 text-brand-primary" aria-hidden="true" />, label: 'Confianza' },
    { icon: <ShieldCheck className="h-6 w-6 text-brand-primary" aria-hidden="true" />, label: 'Seguridad' },
    { icon: <Briefcase className="h-6 w-6 text-brand-primary" aria-hidden="true" />, label: 'Profesionalismo' },
    { icon: <Eye className="h-6 w-6 text-brand-primary" aria-hidden="true" />, label: 'Transparencia' },
    { icon: <Handshake className="h-6 w-6 text-brand-primary" aria-hidden="true" />, label: 'Honestidad' },
  ];

  return (
    <div className="bg-gray-100 rounded-lg p-8 flex flex-col h-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="text-brand-primary mr-2">★</span>
        Nuestros Valores
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {values.map((v, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition duration-300 flex items-center gap-3"
          >
            {v.icon}
            <span className="text-gray-800 font-medium">{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}