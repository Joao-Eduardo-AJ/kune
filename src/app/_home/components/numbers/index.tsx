'use client'

import { useInView } from 'react-intersection-observer'
import { twMerge as merge } from 'tailwind-merge'

import { AnimatedCounter, Paragraphy } from '@/components'

import { HeaderSection } from '../shared/HeaderSection'

export const Header = () => <HeaderSection>Interesting numbers</HeaderSection>

export function Content() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true
  })

  return (
    <div
      ref={ref}
      className={merge(
        'flex translate-y-40 flex-col gap-6 opacity-0 transition-all duration-500',
        'md:flex-row md:justify-between',
        inView && 'translate-y-0 opacity-100'
      )}
    >
      <h4>Experience That Deliver Results</h4>
      <div className="grid max-w-[488px] gap-y-6 md:grid-cols-2 md:gap-y-[88px]">
        <Paragraphy variant="p4" className="md:col-span-2">
          At Kune, we bring together over 20 years of combined experience across
          our Designers, Developers, and Marketing Specialists. Our team excels
          in their fields, delivering innovative and tailored solutions for
          every project.
        </Paragraphy>
        <Paragraphy>
          {inView && (
            <AnimatedCounter.Root from={0} to={12} time={2000}>
              <span className="text-[56px] leading-[56px] text-grayscale-900">
                +
                <AnimatedCounter.Value />
              </span>
            </AnimatedCounter.Root>
          )}
          <br />
          years of experience
        </Paragraphy>
        <Paragraphy>
          {inView && (
            <AnimatedCounter.Root from={0} to={50} time={2000}>
              <span className="text-[56px] leading-[56px] text-grayscale-900">
                +
                <AnimatedCounter.Value />
              </span>
            </AnimatedCounter.Root>
          )}
          <br />
          projects completed
        </Paragraphy>
      </div>
    </div>
  )
}
