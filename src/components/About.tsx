import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Button } from './ui/Button'
import { Check } from 'lucide-react'
export function About() {
  return (
    <Section id="about" background="light">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative"
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Main Image */}
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=750&fit=crop&q=80"
              alt="Professional team meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary Floating Image */}
          <motion.div
            className="absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=300&fit=crop&q=80"
              alt="Professional accountant"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            className="absolute -top-6 -left-6 bg-slate-900 text-white p-6 rounded-xl shadow-xl"
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
              delay: 0.4,
            }}
          >
            <p className="text-4xl font-bold text-amber-500 mb-1">10+</p>
            <p className="text-sm font-medium text-slate-300">
              Years of Excellence
            </p>
          </motion.div>

          {/* Decorative Element */}
          <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-2xl bg-amber-100/50" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
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
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 * i,
                }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          <a href="#contact">
            <Button variant="secondary">Meet Our Team</Button>
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
