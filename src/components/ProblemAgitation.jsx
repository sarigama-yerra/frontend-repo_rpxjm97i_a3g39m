import React from 'react'

const ProblemAgitation = () => {
  const bullets = [
    "Te da miedo usar ChatGPT por si 'alucina' y te hace cometer un error legal.",
    'Tu base de datos legal es lenta y te frustra buscando el precedente exacto.',
    'No sabes cómo usar la IA sin comprometer la confidencialidad de tus clientes.',
    'Pierdes tiempo valioso que deberías dedicar a la estrategia y a conseguir nuevos casos.'
  ]
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_10%_10%,rgba(148,163,184,0.15),transparent_60%)]"></div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">¿Estás cansado de perder 60 minutos al día?</h2>
        <p className="mt-4 text-slate-200 max-w-3xl">
          Como abogado, sabes que el tiempo de lectura de sentencias, la búsqueda de precedentes y la redacción inicial de escritos no te genera facturación. Estás dedicando tu talento estratégico a tareas que valen cero euros para el crecimiento de tu firma.
        </p>

        <ul className="mt-8 space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white text-xs">✕</span>
              <span className="text-slate-200">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProblemAgitation
