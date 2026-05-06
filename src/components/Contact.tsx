import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Section } from './ui/Section'
import { Button } from './ui/Button'
import { Mail, Phone, MapPin, Send, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react'

const YOUR_SERVICE_ID = 'service_qptxaju'       // e.g. 'service_abc123'
const YOUR_TEMPLATE_ID = 'template_o04ulvg'     // e.g. 'template_xyz456'
const YOUR_PUBLIC_KEY = 'eTvQAEi6_8Ty2N7Fn'       // e.g. 'abcDEFghiJKL'

type FormState = {
  name: string
  email: string
  service: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) {
    errors.name = 'Full name is required.'
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }
  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.service) {
    errors.service = 'Please select how we can help.'
  }
  if (!form.message.trim()) {
    errors.message = 'Please describe your situation.'
  } else if (form.message.trim().length < 20) {
    errors.message = 'Please provide at least 20 characters of detail.'
  }
  return errors
}

export function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    const updated = { ...formState, [name]: value }
    setFormState(updated)
    if (touched[name as keyof FormState]) {
      setErrors(validate(updated))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(formState))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, service: true, message: true }
    setTouched(allTouched)
    const validationErrors = validate(formState)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitStatus('loading')
    try {
      await emailjs.send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          service: formState.service,
          message: formState.message,
        },
        YOUR_PUBLIC_KEY,
      )
      setSubmitStatus('success')
      setFormState({ name: '', email: '', service: '', message: '' })
      setTouched({})
      setErrors({})
    } catch (err) {
      console.error('EmailJS error:', err)
      setSubmitStatus('error')
    }
  }

  const fieldClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-lg border outline-none transition-all ${
      errors[field] && touched[field]
        ? 'border-red-400 focus:ring-2 focus:ring-red-400 bg-red-50'
        : 'border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent'
    }`

  return (
    <Section id="contact" background="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left column - contact info */}
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
                <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                <p className="text-slate-600">+254 720 565 289</p>
                <p className="text-slate-500 text-sm mt-1">Mon-Fri from 8am to 5pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                <p className="text-slate-600">Optimalauditadvisors@gmail.com</p>
                <p className="text-slate-500 text-sm mt-1">We reply within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h4>
                <p className="text-slate-600">Nairobi, Kenya</p>
                <p className="text-slate-500 text-sm mt-1">Viewpark Towers, 16th Floor, Wing A</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - form */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
          <h4 className="text-lg font-bold text-slate-900 mb-6">
            Request a Free Consultation
          </h4>

          {submitStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <CheckCircle className="w-14 h-14 text-green-500" />
              <h5 className="text-xl font-bold text-slate-900">Message Sent!</h5>
              <p className="text-slate-600">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="mt-4 text-amber-600 font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={fieldClass('name')}
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={fieldClass('email')}
                  placeholder="john@company.com"
                  value={formState.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                  How Can We Help? <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  className={fieldClass('service')}
                  value={formState.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select a matter...</option>
                  <option value="KRA Tax Dispute / Assessment">KRA Tax Dispute / Assessment</option>
                  <option value="Tax Appeals Tribunal Representation">Tax Appeals Tribunal Representation</option>
                  <option value="KRA Audit / Investigation">KRA Audit / Investigation</option>
                  <option value="Penalty & Interest Waiver">Penalty & Interest Waiver</option>
                  <option value="Tax Advisory & Planning">Tax Advisory & Planning</option>
                  <option value="Payroll Services">Payroll Services</option>
                  <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                  <option value="VAT Filing">VAT Filing</option>
                  <option value="Diaspora Tax Services">Diaspora Tax Services</option>
                  <option value="Other">Other</option>
                </select>
                {errors.service && touched.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Describe Your Situation <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={fieldClass('message')}
                  placeholder="e.g. I received a KRA assessment for KES 2M and need help filing an objection..."
                  value={formState.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && touched.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  Failed to send message. Please try again or email us directly.
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={submitStatus === 'loading'}
              >
                {submitStatus === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}