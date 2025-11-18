import React from 'react'

const HeaderHero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_400px_at_50%_-10%,rgba(239,68,68,0.25),transparent_60%)]"></div>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-9 w-9 rounded-xl bg-red-600/90 flex items-center justify-center text-white font-bold shadow-lg">S</div>
          <span className="text-white/90 font-semibold tracking-wide">Spinta-AI</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-5xl">
          Deja de Regalar Horas a la Administración: 
          <span className="text-red-400"> Los 5 Prompts Jurídicos Exactos</span> que Ahorran a tu Bufete 60 Minutos Diarios.
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-slate-200 max-w-3xl">
          El único kit de inicio de IA que te da seguridad, rapidez y precisión en el derecho español. Acceso Instantáneo por solo 17€.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a href="#comprar" className="inline-flex items-center justify-center rounded-xl bg-red-600 hover:bg-red-500 transition-colors text-white font-semibold px-6 py-4 shadow-lg shadow-red-600/30 w-full sm:w-auto">
            🔴 ¡SÍ, QUIERO DELEGAR TAREAS A LA IA AHORA! (Descarga por 17€)
          </a>
          <p className="text-slate-300/80 text-sm">Acceso inmediato • Sin complicaciones</p>
        </div>

        {/* Imagen central simulada */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 p-6 shadow-xl">
            <div className="h-40 rounded-xl bg-[linear-gradient(135deg,#0ea5e9_0%,#ef4444_100%)] opacity-80" />
            <h3 className="mt-4 text-white font-semibold">Promptbook Legal (PDF)</h3>
            <p className="text-slate-300 text-sm">Guía práctica lista para usar</p>
          </div>
          <div className="bg-slate-900/60 rounded-2xl border border-white/10 p-6">
            <div className="h-32 rounded-xl bg-[linear-gradient(135deg,#22c55e_0%,#0ea5e9_100%)] opacity-80" />
            <h3 className="mt-4 text-white font-semibold">Bono: Protocolo Anti-Fugas</h3>
            <p className="text-slate-300 text-sm">Cumple RGPD sin miedos</p>
          </div>
          <div className="bg-slate-900/60 rounded-2xl border border-white/10 p-6">
            <div className="h-32 rounded-xl bg-[linear-gradient(135deg,#f59e0b_0%,#ef4444_100%)] opacity-80" />
            <h3 className="mt-4 text-white font-semibold">Bono: Liderazgo Digital</h3>
            <p className="text-slate-300 text-sm">Diferénciate y sube tarifas</p>
          </div>
        </div>
      </div>

      {/* CTA flotante */}
      <div className="sticky bottom-4 z-30">
        <div className="max-w-3xl mx-auto px-6">
          <a href="#comprar" className="block text-center rounded-2xl bg-red-600 hover:bg-red-500 transition-colors text-white font-semibold px-6 py-4 shadow-xl shadow-red-600/30">
            🔴 ¡SÍ, QUIERO DELEGAR TAREAS A LA IA AHORA! (Descarga por 17€)
          </a>
        </div>
      </div>
    </header>
  )
}

export default HeaderHero
