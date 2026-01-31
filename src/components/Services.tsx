import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { staggerContainer, fadeInUp } from '../utils/animations'
import {
  Calculator,
  BookOpen,
  Scale,
  Briefcase,
  Globe2,
  FileText,
  ShieldCheck,
  Building2,
  ArrowLeftRight,
} from 'lucide-react'
const services = [
  {
    icon: Calculator,
    title: 'Payroll Services',
    description:
      'Comprehensive payroll management ensuring timely processing and full compliance with Kenyan labor laws.',
  },
  {
    icon: BookOpen,
    title: 'Accounting & Bookkeeping',
    description:
      'Accurate financial record keeping to help you monitor performance and make informed business decisions.',
  },
  {
    icon: Scale,
    title: 'Taxation & Compliance',
    description:
      'Strategic tax planning and filing to minimize liability while ensuring full adherence to KRA regulations.',
  },
  {
    icon: Briefcase,
    title: 'Business Advisory',
    description:
      'Expert guidance on business structure, growth strategies, and financial optimization for sustainable success.',
  },
  {
    icon: Globe2,
    title: 'Diaspora Tax Services',
    description:
      'Specialized tax solutions for Kenyans living abroad, managing local investments and compliance.',
  },
  {
    icon: FileText,
    title: 'VAT Filing Services',
    description:
      'Timely and accurate Value Added Tax computation and filing to avoid penalties and interest.',
  },
  {
    icon: ShieldCheck,
    title: 'Auditing & Assurance',
    description:
      'Independent examination of financial statements to provide credibility and assurance to stakeholders.',
  },
  {
    icon: Building2,
    title: 'Rental Income Tax',
    description:
      'Management of monthly rental income tax obligations for landlords and property managers.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Transfer Pricing',
    description:
      "Advisory on inter-company transactions to ensure compliance with arm's length principles.",
  },
]
export function Services() {
  return (
    <Section id="services" background="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-3">
          Our Expertise
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Comprehensive Financial Solutions
        </h3>
        <p className="text-slate-600 text-lg">
          We offer a full suite of accounting and audit services tailored to
          meet the unique needs of businesses in Kenya and beyond.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: '-50px',
        }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
              <service.icon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">
              {service.title}
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
