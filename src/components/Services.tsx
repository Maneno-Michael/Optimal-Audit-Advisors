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
  ArrowRight,
} from 'lucide-react'
const services = [
  {
    icon: Calculator,
    title: 'Payroll Services',
    description:
      'Comprehensive payroll management ensuring timely processing and full compliance with Kenyan labor laws.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&q=80',
  },
  {
    icon: BookOpen,
    title: 'Accounting & Bookkeeping',
    description:
      'Accurate financial record keeping to help you monitor performance and make informed business decisions.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80',
  },
  {
    icon: Scale,
    title: 'Taxation & Compliance',
    description:
      'Strategic tax planning and filing to minimize liability while ensuring full adherence to KRA regulations.',
    image:
      'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=400&h=250&fit=crop&q=80',
  },
  {
    icon: Briefcase,
    title: 'Business Advisory',
    description:
      'Expert guidance on business structure, growth strategies, and financial optimization for sustainable success.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&q=80',
  },
  {
    icon: Globe2,
    title: 'Diaspora Tax Services',
    description:
      'Specialized tax solutions for Kenyans living abroad, managing local investments and compliance.',
    image:
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=250&fit=crop&q=80',
  },
  {
    icon: FileText,
    title: 'VAT Filing Services',
    description:
      'Timely and accurate Value Added Tax computation and filing to avoid penalties and interest.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop&q=80',
  },
  {
    icon: ShieldCheck,
    title: 'Auditing & Assurance',
    description:
      'Independent examination of financial statements to provide credibility and assurance to stakeholders.',
    image:
      'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&h=250&fit=crop&q=80',
  },
  {
    icon: Building2,
    title: 'Rental Income Tax',
    description:
      'Management of monthly rental income tax obligations for landlords and property managers.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&q=80',
  },
  {
    icon: ArrowLeftRight,
    title: 'Transfer Pricing',
    description:
      "Advisory on inter-company transactions to ensure compliance with arm's length principles.",
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80',
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
            className="group rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-900">
                <service.icon className="w-5 h-5" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
