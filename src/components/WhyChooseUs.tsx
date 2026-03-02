import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Gavel, ShieldCheck, Clock, Users } from 'lucide-react'
import { staggerContainer, fadeInUp } from '../utils/animations'
const features = [
  {
    icon: Gavel,
    title: 'Tribunal-Ready Expertise',
    description:
      'We have deep, hands-on experience appearing before the Tax Appeals Tribunal. We know the procedures, the arguments that work, and how to build a winning case.',
  },
  {
    icon: ShieldCheck,
    title: 'Aggressive KRA Representation',
    description:
      "We do not accept unfair assessments. We challenge KRA's positions with technical rigour, using every legal avenue available — objections, ADR, and tribunal appeals.",
  },
  {
    icon: Clock,
    title: 'Time-Critical Response',
    description:
      'Tax disputes have strict deadlines. We act fast — reviewing your case, filing objections, and protecting your rights within the statutory timeframes.',
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    description:
      "We treat every client's dispute as if it were our own. You get direct access to senior advisors, clear communication, and a team that genuinely fights for you.",
  },
]
export function WhyChooseUs() {
  return (
    <Section id="why-us" background="dark" className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      {/* Amber top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Optimal Advantage in Tax Disputes
          </h3>
          <p className="text-slate-300 text-lg">
            When KRA comes knocking, you need more than an accountant — you need
            a specialist who knows how to fight back and win.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
            >
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dispute Process Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-16 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-8"
        >
          <p className="text-center text-amber-400 font-semibold uppercase text-sm tracking-wide mb-6">
            Our Dispute Resolution Pathway
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'KRA Assessment',
                sub: 'Notice received',
              },
              {
                step: '02',
                title: 'Formal Objection',
                sub: 'Filed within 30 days',
              },
              {
                step: '03',
                title: 'ADR / Negotiation',
                sub: 'Settle where possible',
              },
              {
                step: '04',
                title: 'Tax Appeals Tribunal',
                sub: 'Full representation',
              },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="text-3xl font-bold text-amber-500/30 mb-1">
                  {item.step}
                </div>
                <div className="text-white font-semibold text-sm">
                  {item.title}
                </div>
                <div className="text-slate-400 text-xs mt-1">{item.sub}</div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-4 -right-2 text-amber-500/40 text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
