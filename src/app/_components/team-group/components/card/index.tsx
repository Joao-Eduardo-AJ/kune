'use client'

import Image from 'next/image'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { useInView } from 'react-intersection-observer'

type ChildrenProp = {
  children: React.ReactNode
}

type FigureProps = {
  alt: string
  src: StaticImport
}

type CaptionProps = {
  name: string
  role: string
}

export const Wrapper = ({ children }: ChildrenProp) => (
  <article className="relative h-[547px] w-[384px] overflow-hidden rounded-2xl bg-[url('/public/membercardbg.svg')] bg-cover p-4">
    <span className="text-gray-100">icon</span>
    {children}
  </article>
)

export const Figure = ({ alt, src }: FigureProps) => (
  <figure className="absolute bottom-0 left-0">
    <Image width={384} height={547} src={src} alt={alt} />
  </figure>
)

export function Caption({ name, role }: CaptionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <figcaption
      ref={ref}
      className={`transition-500 absolute flex w-[calc(100%-32px)] items-center justify-between rounded-xl bg-white px-4 py-3 ${inView ? 'bottom-4 opacity-100' : '-bottom-16 opacity-0'} `}
    >
      <div className="grid">
        <p className="font-semibold text-grayscale-900">{role}</p>
        <p className="text-[12px] text-grayscale-900">{name}</p>
      </div>
      <span className="h-[41px] w-[41px] rounded-xl bg-grayscale-900" />
    </figcaption>
  )
}
