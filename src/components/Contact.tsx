import React, { useState } from 'react'
import { Section } from './ui/Section'
import { Button } from './ui/Button'
import { Mail, Phone, MapPin, Send, AlertTriangle } from 'lucide-react'
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    alert('Thank you for your message. We will get back to you shortly.')
  }
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <Section id="contact" background="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-3">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Facing a Tax Dispute? Let's Talk.
          </h3>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Whether you have received a KRA demand notice, are facing an audit,
            or need expert tax advisory — our specialists are ready to help. The
            sooner you act, the better your outcome.
          </p>

          {/* Urgency note */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm font-medium">
              KRA objections must be filed within <strong>30 days</strong> of an
              assessment. Don't delay — contact us today.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Call Us
                </h4>
                <p className="text-slate-600">+254 720 565 289</p>
                <p className="text-slate-500 text-sm mt-1">
                  Mon-Fri from 8am to 5pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Email Us
                </h4>
                <p className="text-slate-600">info@optimalaudit.co.ke</p>
                <p className="text-slate-500 text-sm mt-1">
                  We reply within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Visit Us
                </h4>
                <p className="text-slate-600">Nairobi, Kenya</p>
                <p className="text-slate-500 text-sm mt-1">
                  By appointment only
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
          <h4 className="text-lg font-bold text-slate-900 mb-6">
            Request a Free Consultation
          </h4>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
                value={formState.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                placeholder="john@company.com"
                value={formState.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                How Can We Help?
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white"
                value={formState.service}
                onChange={handleChange}
              >
                <option value="">Select a matter...</option>
                <option value="kra-dispute">
                  KRA Tax Dispute / Assessment
                </option>
                <option value="tribunal">
                  Tax Appeals Tribunal Representation
                </option>
                <option value="audit">KRA Audit / Investigation</option>
                <option value="penalty">Penalty & Interest Waiver</option>
                <option value="tax-advisory">Tax Advisory & Planning</option>
                <option value="payroll">Payroll Services</option>
                <option value="accounting">Accounting & Bookkeeping</option>
                <option value="vat">VAT Filing</option>
                <option value="diaspora">Diaspora Tax Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Describe Your Situation
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="e.g. I received a KRA assessment for KES 2M and need help filing an objection..."
                value={formState.message}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Send Message
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </Section>
  )
}
