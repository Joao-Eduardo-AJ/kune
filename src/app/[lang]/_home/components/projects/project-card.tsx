import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { useRef } from 'react'
import { useInView, Variants } from 'motion/react'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import { twJoin, twMerge } from 'tailwind-merge'

import { iconButton, Paragraphy } from '@/components'

type CardWrapperProps = React.ComponentProps<typeof motion.div> & {
  children: React.ReactNode
}

export function Wrapper({ children, className, ...props }: CardWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const variants: Variants = {
    hidden: { scale: 0.95, y: 20, opacity: 0 },
    visible: { scale: 1, y: 0, opacity: 1 }
  }

  return (
    <motion.div
      ref={ref}
      className={twMerge(
        'relative mx-auto space-y-6 sm:max-w-none sm:space-y-8 sm:even:mt-[120px]',
        className
      )}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 1, type: 'spring', delay: 0.25 }}
      {...props}
    >
      {children}
      <span
        className={twJoin(
          'pointer-events-none absolute right-6 top-6 z-10 !mt-0',
          'sm:right-10 sm:top-10',
          iconButton()
        )}
      >
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          size={24}
          color="currentColor"
          strokeWidth={1.5}
        />
      </span>
    </motion.div>
  )
}

type CardFigureProps = React.ComponentProps<typeof Image>

export function Figure({ alt, src }: CardFigureProps) {
  return (
    <figure className="group cursor-pointer overflow-hidden rounded-xl">
      <Image
        width={624}
        height={732}
        src={src}
        alt={alt}
        className="duration-500 group-hover:scale-105"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
    </figure>
  )
}

type CardCaptionProps = {
  description: string
  shortly?: boolean
  title: string
}

export function Caption({ description, title, shortly }: CardCaptionProps) {
  return (
    <figcaption className="grid gap-5 rounded-xl">
      <div className="flex items-center justify-between">
        <h3>{title}</h3>
        {shortly && (
          <span className="rounded-full border border-grayscale-300 bg-grayscale-100 px-4 py-2 font-semibold">
            Coming soon
          </span>
        )}
      </div>

      <Paragraphy variant="p4">{description}</Paragraphy>
    </figcaption>
  )
}
