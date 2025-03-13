'use client'

import { useRef } from 'react'
import { useInView, Variants } from 'motion/react'
import * as motion from 'motion/react-client'
import { twJoin } from 'tailwind-merge'

export type ItemWrapperProps = React.ComponentProps<typeof motion.li> & {
  index: number
}

export function ItemWrapper({ children, index, ...props }: ItemWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const variants: Variants = {
    hidden: { x: -120, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  return (
    <motion.li
      ref={ref}
      className={twJoin(
        'grid grid-cols-3 gap-y-12 rounded-2xl bg-grayscale-100 p-6 sm:grid-cols-6',
        'lg:flex lg:items-center lg:justify-between lg:rounded-3xl lg:px-20 lg:py-16'
      )}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay: (index + 1) * 0.2 }}
      {...props}
    >
      {children}
    </motion.li>
  )
}
