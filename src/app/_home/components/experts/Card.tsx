'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Paragraphy } from '@/components'

type ChildrenProp = {
  children: React.ReactNode
}

type FigureProps = React.ComponentProps<typeof Image>

type CaptionProps = {
  name: string
  role: string
}

export const Wrapper = ({ children }: ChildrenProp) => (
  <article className="group relative h-full min-w-[264px] cursor-pointer overflow-hidden rounded-2xl bg-[url(/members/memberbg.svg)] bg-cover p-4 xs:min-w-[301px]">
    <span className="material-symbols-outlined absolute right-4 flex items-center justify-center rounded-lg bg-white p-1 text-[32px] text-grayscale-900">
      arrow_outward
    </span>
    {children}
  </article>
)

export const Figure = ({ alt, src }: FigureProps) => (
  <figure className="transition-500 absolute bottom-0 left-0 rounded-xl group-hover:scale-105">
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
      className={`transition-500 absolute flex w-[calc(100%-32px)] items-center justify-between rounded-xl bg-white px-4 py-3 ${inView ? 'bottom-4 opacity-100' : '-bottom-14 opacity-0'} `}
    >
      <div className="grid">
        <h5 className="font-semibold text-grayscale-900">{role}</h5>
        <Paragraphy variant="p6" className="text-[12px] text-grayscale-900">
          {name}
        </Paragraphy>
      </div>
      <button className="w-[46px] rounded-lg border bg-grayscale-900 text-[32px] font-bold leading-[44px] text-white">
        in
      </button>
    </figcaption>
  )
}
