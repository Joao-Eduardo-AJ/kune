'use client'

import { useRef } from 'react'
import { useInView, Variants } from 'motion/react'
import * as motion from 'motion/react-client'
import { twJoin } from 'tailwind-merge'

import { AnimatedCounter, Paragraphy } from '@/components'

export function NumbersContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const variants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.div
      variants={variants}
      initial="visible"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ ease: 'easeOut', delay: 0.25, duration: 0.5 }}
      ref={ref}
      className={twJoin('space-y-6 lg:space-y-20')}
    >
      <div className="space-y-6 lg:flex lg:justify-between lg:space-y-0">
        <h4 className="text-grayscale-700">Experience That Deliver Results</h4>
        <Paragraphy className="lg:max-w-[488px]" variant="p4">
          At Kune, we bring together over 20 years of combined experience across
          our Designers, Developers, and Marketing Specialists. Our team excels
          in their fields, delivering innovative and tailored solutions for
          every project.
        </Paragraphy>
      </div>

      <div className="flex justify-between sm:float-right sm:gap-x-20">
        <div className="space-y-3">
          <span className="text-[56px]/[56px] font-semibold text-grayscale-900 lg:text-[64px]/[62px]">
            +
            <AnimatedCounter from={0} to={12} />
          </span>
          <Paragraphy className="text-grayscale-500" variant="p2">
            Years of experience
          </Paragraphy>
        </div>

        <div className="space-y-3">
          <span className="text-[56px]/[56px] font-semibold text-grayscale-900 lg:text-[64px]/[62px]">
            +
            <AnimatedCounter from={0} to={50} />
          </span>
          <Paragraphy className="text-grayscale-500" variant="p2">
            Projects completed
          </Paragraphy>
        </div>
      </div>
    </motion.div>
  )
}
