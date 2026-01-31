import React from 'react'
import { Section } from './ui/Section'
import { Target, Clock, Users, Award } from 'lucide-react'
const features = [
  {
    icon: Target,
    title: 'Precision & Accuracy',
    description:
      'We leave no stone unturned. Our meticulous approach ensures your financial records are flawless and compliant.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description:
      "We respect your deadlines. Whether it's tax filing or monthly reports, count on us to deliver on time, every time.",
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description:
      'You are not just a number. We build lasting relationships and tailor our services to your specific goals.',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description:
      "Our team stays ahead of regulatory changes in Kenya's financial sector to give you the best advice possible.",
  },
]
export function WhyChooseUs() {
  return (
    <Section id="why-us" background="dark" className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Optimal Advantage
          </h3>
          <p className="text-slate-300 text-lg">
            We combine technical expertise with a deep commitment to your
            success. Here is why businesses across Kenya trust us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
            >
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
