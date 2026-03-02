import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { buttonHover, buttonTap } from '../../utils/animations'
import { clsx } from 'clsx'
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm',
    secondary: 'bg-amber-500 text-white hover:bg-amber-600 shadow-sm',
    outline:
      'border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900',
  }
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  }
  return (
    <motion.button
      whileHover={buttonHover}
      whileTap={buttonTap}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
