import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { servicesData } from '../data/services'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import {
  CheckCircle2,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations'
export function ServiceDetailPage() {
  const { slug } = useParams<{
    slug: string
  }>()
  const navigate = useNavigate()
  const service = servicesData.find((s) => s.slug === slug)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Service Not Found
          </h2>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    )
  }
  const relatedServices = servicesData
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-4xl"
          >
            <Link
              to="/"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Overview
                  </h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                  {service.fullDescription}
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div variants={fadeInUp} className="mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-stone-50 p-6 rounded-xl border border-stone-100"
                    >
                      <h4 className="font-bold text-slate-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div variants={fadeInUp} className="mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Our Process
                </h3>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setOpenFaq(openFaq === index ? null : index)
                        }
                        className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors text-left"
                      >
                        <span className="font-medium text-slate-900">
                          {faq.question}
                        </span>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500" />
                        )}
                      </button>
                      {openFaq === index && (
                        <div className="p-4 bg-stone-50 border-t border-slate-200 text-slate-600">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Benefits Card */}
              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  onClick={() =>
                    document.getElementById('contact-form')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                >
                  Get Started
                </Button>
              </div>

              {/* Contact Card */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Need Help?
                </h3>
                <p className="text-slate-600 mb-6">
                  Not sure if this is the right service for you? Let's talk
                  about your specific needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">+254 700 000 000</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">info@optimalaudit.co.ke</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="light">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">
          Related Services
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((related, index) => (
            <Link
              key={index}
              to={`/services/${related.slug}`}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 block"
            >
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <related.icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                {related.title}
              </h4>
              <p className="text-slate-600 text-sm line-clamp-2">
                {related.shortDescription}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                View Service{' '}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <div id="contact-form" className="bg-slate-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and learn how our{' '}
            {service.title} can help your business grow.
          </p>
          <Link to="/#contact">
            <Button size="lg" variant="secondary">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
