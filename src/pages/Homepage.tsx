import React from 'react'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { About } from '../components/About'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { Contact } from '../components/Contact'
export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Contact />
    </main>
  )
}
