'use client'

import Image from 'next/image'

import { Typography } from '@/app/_shared/typography'
import { Member } from '@/mock'
import { HTMLAttributes } from 'react'
import { useInView } from 'react-intersection-observer'

type ChildrenProp = {
  children: React.ReactNode
}

type WrapperProps = ChildrenProp & {
  spacedTop?: boolean
}

type FigureProps = {
  alt: string
  src: string
}

type HeaderProps = {
  year: string
  url: string
}

type InfoProps = {
  title: string
  team: Member[]
}

export const Wrapper = ({ children, spacedTop }: WrapperProps) => (
  <article
    className={`relative max-w-[384px] lg:max-w-none ${spacedTop ? 'sm:mt-10 md:mt-20 xl:mt-[120px]' : 'justify-self-end sm:mb-10 md:mb-20 xl:mb-[120px]'}`}
  >
    {children}
  </article>
)

export const Figure = ({ alt, src }: FigureProps) => (
  <figure className="transition-500 group cursor-pointer overflow-hidden rounded-xl">
    <Image
      width={624}
      height={732}
      src={src}
      alt={alt}
      className="transition-500 group-hover:scale-105"
    />
  </figure>
)

export const Header = ({ url, year }: HeaderProps) => (
  <div className="absolute left-10 top-10 flex items-center justify-between text-[22px] text-gray-100">
    <span>{year}</span>
    <span>{url}</span>
  </div>
)

export const Caption = ({ children }: ChildrenProp) => (
  <figcaption className="relative grid h-[180px] gap-5 rounded-xl xs:h-[156px] xl:h-[176px]">
    {children}
  </figcaption>
)

export const Info = ({ team, title }: InfoProps) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true
  })

  return (
    <div
      ref={ref}
      className={`transition-500 absolute flex w-full items-center justify-between ${inView ? 'top-6 opacity-100 xl:top-10' : 'top-[74px] opacity-0 xl:top-[90px]'}`}
    >
      <Typography variant="h3">{title}</Typography>
      <div className="flex">
        {team.map((item, index) => (
          <Image
            key={index}
            src={item.avatarSrc}
            width={64}
            height={64}
            alt={item.name}
            className={`transition-500 h-auto w-12 cursor-pointer rounded-full bg-grayscale-100 hover:-translate-y-1 xl:w-16 -z-[${index - team.length}] ${index + 1 === team.length ? '-ml-2 hover:-ml-2' : '-mx-2 hover:-mx-2 lg:-mx-3'}`}
          />
        ))}
      </div>
    </div>
  )
}

export function Description({
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <Typography
      {...props}
      ref={ref}
      variant="p2"
      className={`transition-500 absolute delay-200 ${inView ? 'top-[84px] opacity-100 xl:top-[124px]' : 'top-[134px] opacity-0 xl:top-[174px]'}`}
    />
  )
}
