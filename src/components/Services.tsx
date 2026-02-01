import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { staggerContainer, fadeInUp } from '../utils/animations'
import { servicesData } from '../data/services'
import { ArrowRight } from 'lucide-react'
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
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="group rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden flex-shrink-0">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-900">
                <service.icon className="w-5 h-5" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                {service.shortDescription}
              </p>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors mt-auto"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
