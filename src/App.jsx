import React from 'react'
import HeaderHero from './components/HeaderHero'
import ProblemAgitation from './components/ProblemAgitation'
import SolutionProduct from './components/SolutionProduct'
import OfferBonuses from './components/OfferBonuses'
import ValueStack from './components/ValueStack'
import TestimonialsGuarantee from './components/TestimonialsGuarantee'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <HeaderHero />
      <ProblemAgitation />
      <SolutionProduct />
      <OfferBonuses />
      <ValueStack />
      <TestimonialsGuarantee />

      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Spinta-AI • Promptbook Legal
      </footer>
    </div>
  )
}

export default App
