import type { Variants } from 'framer-motion'

// Staggered container for lists/grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Fade up animation for cards/items
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  },
}

// Reveal text from bottom (mask effect)
export const textReveal: Variants = {
  hidden: { y: '100%' },
  show: {
    y: 0,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.8,
    },
  },
}

// Smooth fade in for sections
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Button hover effect
// export const buttonHover = {
//   scale: 1.02,
//   transition: { duration: 0.2 },
// }

// export const buttonTap = {
//   scale: 0.98,
// }
export const buttonHover: object = {
  scale: 1.05,
  transition: {
    type: 'spring',
    stiffness: 50,
    damping: 20,
  },
}

export const buttonTap: object = {
  scale: 0.95,
  transition: {
    type: 'spring',
    stiffness: 50,
    damping: 20,
  },
}
