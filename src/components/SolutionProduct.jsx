import React from 'react'

const SolutionProduct = () => {
  const items = [
    {
      title: '5 Prompts de Alto Impacto',
      desc: 'Instrucciones pre-diseñadas y listas para usar que te ahorran al menos una hora diaria.',
      emoji: '📄'
    },
    {
      title: 'El Prompt Anti-Alucinaciones',
      desc: 'Un sistema de verificación para exigir a la IA que cite su fuente, blindando tu trabajo de errores.',
      emoji: '🛡️'
    },
    {
      title: 'Guía de Integración Rápida',
      desc: 'Los 3 pasos para que el sistema esté operativo en menos de 15 minutos.',
      emoji: '🚀'
    }
  ]
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Te Presentamos el "Promptbook del Abogado 2.0"</h2>
        <p className="mt-4 text-slate-200 max-w-3xl">Tu Asistente de IA por el Precio de un Café. Hemos diseñado y probado los 5 comandos de IA más eficientes para el entorno jurídico español. Copiar, pegar y obtener un borrador legal preciso, en minutos. Cero curva de aprendizaje. Máxima seguridad.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="text-3xl">{it.emoji}</div>
              <h3 className="mt-3 text-white font-semibold">{it.title}</h3>
              <p className="text-slate-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionProduct
