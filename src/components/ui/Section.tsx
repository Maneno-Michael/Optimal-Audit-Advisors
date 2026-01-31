import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/animations'
import { clsx } from 'clsx'
interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  background?: 'white' | 'light' | 'dark'
}
export function Section({
  id,
  className,
  children,
  background = 'white',
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    light: 'bg-stone-50',
    dark: 'bg-slate-900 text-white',
  }
  return (
    <section
      id={id}
      className={clsx(
        'py-20 md:py-32 overflow-hidden',
        bgStyles[background],
        className,
      )}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: '-100px',
        }}
        variants={fadeIn}
        className="container mx-auto px-4 md:px-6 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  )
}
