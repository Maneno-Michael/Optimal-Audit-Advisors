import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
export function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
