import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from './ui/Button'
import { fadeInUp, staggerContainer } from '../utils/animations'
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 translate-x-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Premier Financial Services in Kenya
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 tracking-tight"
            >
              Precision in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Every Audit.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg"
            >
              Optimal Audit Advisors delivers expert accounting, tax compliance,
              and business advisory services tailored for Kenyan businesses and
              the diaspora.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact">
                <Button size="lg" className="w-full sm:w-auto group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center gap-8 text-sm text-slate-500 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span>Certified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span>KRA Compliant</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element - Image Collage */}
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
              duration: 1,
              delay: 0.4,
            }}
            className="relative hidden lg:block"
          >
            {/* Main Hero Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&fit=crop&q=80"
                alt="Professional business consultation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating Stats Card */}
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
                delay: 0.8,
                duration: 0.6,
              }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    KES 2.4M+
                  </div>
                  <div className="text-sm text-slate-500">
                    Tax Savings for Clients
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Image Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 -right-4 w-32 h-32 rounded-xl overflow-hidden shadow-xl z-20 border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop&q=80"
                alt="Financial analysis"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Compliance Badge */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
              className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">100% KRA Compliant</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
