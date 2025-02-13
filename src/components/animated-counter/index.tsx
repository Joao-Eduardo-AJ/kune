'use client'

import { Slot } from '@radix-ui/react-slot'
import { animate } from 'motion'
import { useInView, useIsomorphicLayoutEffect } from 'motion/react'
import { useRef } from 'react'

type AnimatedCounterProps = React.ComponentProps<'span'> & {
  asChild?: boolean
  from: number
  to: number
}

export function AnimatedCounter({
  from,
  to,
  asChild,
  ...props
}: AnimatedCounterProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const Component = asChild ? Slot : 'span'

  useIsomorphicLayoutEffect(() => {
    const element = ref.current

    if (!element || !isInView) return

    element.textContent = from.toString()

    const controls = animate(from, to, {
      duration: 2,
      ease: [0.17, 0.67, 0.16, 0.95], //cubic-bezier(.17,.67,.16,.95)
      onUpdate(value) {
        element.textContent = value.toFixed(0)
      }
    })

    return () => {
      controls.stop()
    }
  }, [ref, from, to, isInView])

  return <Component ref={ref} {...props} />
}
