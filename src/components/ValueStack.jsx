import React, { useEffect, useState } from 'react'

const ValueStack = () => {
  const [timeLeft, setTimeLeft] = useState(29 * 60 + 59)

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const fmt = (s) => {
    const h = Math.floor(s / 3600).toString().padStart(2, '0')
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0')
    const sec = Math.floor(s % 60).toString().padStart(2, '0')
    return `${h}:${m}:${sec}`
  }

  const rows = [
    { name: 'El Promptbook del Abogado 2.0 (5 Prompts)', value: '97€' },
    { name: 'Bono #1: Protocolo Anti-Fugas (RGPD)', value: '79€' },
    { name: 'Bono #2: Estrategia de Liderazgo Digital', value: '79€' },
    { name: 'Bono #3: Mapa de Rutas de Automatización', value: '79€' }
  ]

  const total = '334€'

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">¿Cuánto Vale Realmente Ahorrar Una Hora al Día?</h2>
        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="divide-y divide-white/10">
            {rows.map((r, i) => (
              <div key={i} className="flex items-center justify-between py-3">
                <span className="text-slate-200">{r.name}</span>
                <span className="text-white font-semibold">{r.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-4">
              <span className="text-white font-semibold">VALOR TOTAL</span>
              <span className="text-white text-xl font-extrabold">{total}</span>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4 items-end">
            <div>
              <p className="text-sm text-slate-300">PRECIO HOY (Acceso Instantáneo)</p>
              <p className="text-4xl font-extrabold text-red-400">17€</p>
              <p className="mt-2 text-slate-300">¡Atención! Esta oferta es limitada. El precio subirá a 47€ al alcanzar las 100 descargas.</p>
            </div>
            <div className="text-right">
              <div className="text-slate-300 text-sm">Temporizador</div>
              <div className="text-3xl font-mono text-white">{fmt(timeLeft)}</div>
            </div>
          </div>

          <a id="comprar" href="#checkout" className="mt-8 block text-center rounded-2xl bg-red-600 hover:bg-red-500 transition-colors text-white font-semibold px-6 py-4 shadow-xl shadow-red-600/30">
            🔴 DAME ACCESO INMEDIATO AL PROMPTBOOK Y LOS 3 BONOS (Solo 17€)
          </a>
          <p className="mt-3 text-center text-slate-400 text-sm">No, prefiero seguir perdiendo una hora diaria en tareas repetitivas.</p>
        </div>
      </div>
    </section>
  )
}

export default ValueStack
