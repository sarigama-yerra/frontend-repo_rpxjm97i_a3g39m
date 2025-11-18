import React from 'react'

const OfferBonuses = () => {
  const bonuses = [
    {
      name: 'El Protocolo Legal Anti-Fugas: 7 Pasos para Usar IA sin Violar el Secreto Profesional (Guía RGPD)',
      why: 'Tu miedo #1 es la confidencialidad. Te damos el checklist para trabajar con IA cumpliendo la normativa española. (Impide que cometas un error irreversible).',
      tag: 'Seguridad'
    },
    {
      name: 'De Abogado Tradicional a Líder Digital: Cómo Posicionar tu Bufete y Justificar Tarifas Más Altas con IA',
      why: 'Tu deseo #2 es diferenciarte. Te mostramos la hoja de ruta para que tu bufete sea la vanguardia, atrayendo mejores clientes. (Te da la ventaja competitiva).',
      tag: 'Estrategia'
    },
    {
      name: 'El Mapa de Rutas de la IA: Los 10 Procesos Legales Clave que Debes Automatizar HOY (y los que NUNCA debes delegar)',
      why: 'Tu dolor #1 es la incertidumbre. Te ahorramos la prueba y error, diciendo dónde la IA es segura y dónde mantener intervención humana. (Máxima eficiencia sin riesgo).',
      tag: 'Productividad'
    }
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Solo Hoy: Multiplica el Valor x20. Consigue 3 Bonos Exclusivos GRATIS</h2>
        <p className="mt-3 text-slate-200">Valorado en +250€</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {bonuses.map((b, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <span className="inline-block text-xs px-2 py-1 rounded-full bg-red-600/20 text-red-300 border border-red-500/30">{b.tag}</span>
              <h3 className="mt-3 text-white font-semibold">{b.name}</h3>
              <p className="text-slate-300 text-sm">{b.why}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfferBonuses
