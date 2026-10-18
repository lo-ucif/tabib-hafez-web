import type { Variants, Transition } from 'framer-motion'

// Premium cubic-bezier easing curve
export const premiumEase = [0.22, 1, 0.36, 1] as const

// Standard smooth transition configuration
export const defaultTransition: Transition = {
  duration: 0.65,
  ease: premiumEase,
}

// Fade in
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
}

// Fade up (standard vertical reveal)
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

// Fade down
export const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

// Fade left (for RTL / LTR side entries)
export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
}

// Fade right
export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
}

// Scale in
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: premiumEase,
    },
  },
}

// Staggered Container
export const createStaggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0.05
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

// Stagger child item (fade up)
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: premiumEase,
    },
  },
}

// Interactive button micro-interactions
export const buttonMotionProps = {
  whileHover: { scale: 1.025 },
  whileTap: { scale: 0.975 },
  transition: { duration: 0.2, ease: 'easeOut' },
}

// Card interactive hover motion
export const cardHoverMotion = {
  whileHover: {
    y: -5,
    transition: { duration: 0.28, ease: premiumEase },
  },
}

// Subtle floating idle motion for decorative elements
export const floatingMotion = (delay = 0, duration = 5, yOffset = 8) => ({
  animate: {
    y: [-yOffset, yOffset, -yOffset],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: 'mirror' as const,
      ease: 'easeInOut',
      delay,
    },
  },
})

// Standard viewport config for on-scroll reveal
export const defaultViewport = {
  once: true,
  amount: 0.2,
}
