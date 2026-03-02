import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Gavel, Phone } from 'lucide-react'
import { Button } from './ui/Button'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { Link } from 'react-router-dom'
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&h=900&fit=crop&q=80"
          alt="Tax tribunal"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800/80" />
      </div>

      {/* Amber accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6"
            >
              <Gavel className="w-3.5 h-3.5" />
              Kenya's Tax Dispute Specialists
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight"
            >
              Facing a <span className="text-amber-400">KRA Dispute?</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-300 mt-2 block">
                Don't face it alone.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg"
            >
              Optimal Audit Advisors specialises in tax advisory and KRA dispute
              resolution. We represent clients at the{' '}
              <strong className="text-white">Tax Appeals Tribunal</strong>,
              negotiate with KRA, and fight to protect your rights and reduce
              your tax burden.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/services/kra-tax-disputes-appeals">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto group"
                >
                  Get Dispute Help Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-500 text-white hover:bg-slate-800"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Free Consultation
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-700 pt-10"
            >
              {[
                {
                  value: '500+',
                  label: 'Cases Resolved',
                },
                {
                  value: '95%',
                  label: 'Success Rate',
                },
                {
                  value: '10+',
                  label: 'Years Experience',
                },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold text-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Panel - Urgency Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="hidden lg:block"
          >
            {/* Urgent Notice Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Received a KRA Notice?</p>
                  <p className="text-slate-400 text-sm">
                    You have 30 days to respond
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  'KRA Assessment / Demand Notice',
                  'Tax Audit or Investigation',
                  'Penalty & Interest Charges',
                  'Agency Notices on Bank Accounts',
                  'Tax Appeals Tribunal Matters',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-slate-300 text-sm"
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a href="#contact" className="block mt-6">
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                  Get Expert Help Today →
                </button>
              </a>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  step: '01',
                  label: 'Free Case Review',
                },
                {
                  step: '02',
                  label: 'We File Objection',
                },
                {
                  step: '03',
                  label: 'Dispute Resolved',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="text-amber-400 font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="text-slate-300 text-xs mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
