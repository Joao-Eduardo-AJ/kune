'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useInView, Variants } from 'motion/react'
import * as motion from 'motion/react-client'

type ImageGridProps = React.ComponentProps<typeof Image> & {
  semi: boolean
}

export function ImageGrid({ alt, semi, src }: ImageGridProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const variants: Variants = {
    hidden: { scale: 0.95, y: 20, opacity: 0 },
    visible: { scale: 1, y: 0, opacity: 1 }
  }

  return (
    <motion.div
      ref={ref}
      className="rounded-xl sm:[&:nth-child(3n+1)]:col-span-2"
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 1, type: 'spring', delay: 0.25 }}
    >
      <Image alt={alt} src={src} height={695} width={semi ? 592 : 1216} />
    </motion.div>
  )
}
