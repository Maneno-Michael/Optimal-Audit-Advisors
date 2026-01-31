import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Button } from './ui/Button'
import { Check } from 'lucide-react'
export function About() {
  return (
    <Section id="about" background="light">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200">
            {/* Abstract representation of office/professional setting since we can't use real images */}
            <div className="w-full h-full bg-slate-900 relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 via-slate-900 to-slate-900"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="text-white">
                  <p className="font-bold text-2xl">Excellence in Action</p>
                  <p className="text-slate-300 mt-2">
                    Serving Kenya's Top Businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-[200px]">
            <p className="text-4xl font-bold text-amber-500 mb-1">10+</p>
            <p className="text-sm font-medium text-slate-900">
              Years of Professional Excellence
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-3">
            About Optimal Audit Advisors
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Your Trusted Partner in Financial Growth
          </h3>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            At Optimal Audit Advisors, we believe that sound financial
            management is the cornerstone of every successful enterprise. Based
            in Kenya, we provide world-class audit, tax, and advisory services
            designed to help you navigate the complexities of the financial
            landscape.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our team of certified professionals brings together deep local
            expertise with global best practices. Whether you are a startup, an
            established corporation, or a member of the diaspora, we are
            dedicated to optimizing your financial potential.
          </p>

          <div className="space-y-4 mb-8">
            {[
              'Certified Public Accountants (CPA-K)',
              'Deep understanding of KRA Tax Laws',
              'Personalized financial strategies',
              'Confidential and ethical service',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <a href="#contact">
            <Button variant="secondary">Meet Our Team</Button>
          </a>
        </div>
      </div>
    </Section>
  )
}
