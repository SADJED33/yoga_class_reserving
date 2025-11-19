
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const ScrollAnimation = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: ScrollAnimationProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getDirection = () => {
    switch (direction) {
      case 'up': return { y: 20 }
      case 'down': return { y: -20 }
      case 'left': return { x: -20 }
      case 'right': return { x: 20 }
      default: return { y: 20 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getDirection() }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation
