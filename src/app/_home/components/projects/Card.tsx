'use client'

import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { useInView } from 'react-intersection-observer'

import { Paragraphy } from '@/components'
import { Member } from '@/data'

type CardWrapperProps = {
  children: React.ReactNode
  darkContrast?: boolean
  spacedTop?: boolean
  year: string
}

export function Wrapper({ children, spacedTop }: CardWrapperProps) {
  return (
    <article
      className={`relative max-w-[384px] lg:max-w-none ${spacedTop ? 'sm:mt-10 md:mt-20 xl:mt-[120px]' : 'justify-self-end sm:mb-10 md:mb-20 xl:mb-[120px]'}`}
    >
      {children}
    </article>
  )
}

type CardFigureProps = React.ComponentProps<typeof Image>

export function Figure({ alt, src }: CardFigureProps) {
  return (
    <figure className="transition-500 group cursor-pointer overflow-hidden rounded-xl">
      <Image
        width={624}
        height={732}
        src={src}
        alt={alt}
        className="transition-500 group-hover:scale-105"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
    </figure>
  )
}

type CardHeaderProps = {
  darkContrast?: boolean
  year: string
}

export const Header = ({ darkContrast, year }: CardHeaderProps) => (
  <div className="absolute z-10 flex w-full items-center justify-between p-6 lg:p-10">
    <Paragraphy
      variant="p1"
      className={`${darkContrast ? 'text-white' : 'text-grayscale-900'}`}
    >
      {year}
    </Paragraphy>
    <span
      className={`material-symbols-outlined text-[32px] ${darkContrast ? 'text-white' : 'text-grayscale-900'}`}
    >
      arrow_outward
    </span>
  </div>
)

type CardCaptionProps = {
  children: React.ReactNode
}

export function Caption({ children }: CardCaptionProps) {
  return (
    <figcaption className="relative grid h-[180px] gap-5 rounded-xl xs:h-[156px] xl:h-[176px]">
      {children}
    </figcaption>
  )
}

type CardInfoProps = {
  members: Member[]
  title: string
}

export function Info({ members, title }: CardInfoProps) {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true
  })

  return (
    <div
      ref={ref}
      className={`transition-500 absolute flex w-full items-center justify-between ${inView ? 'top-6 opacity-100 xl:top-10' : 'top-[74px] opacity-0 xl:top-[90px]'}`}
    >
      <h3>{title}</h3>
      <div className="flex">
        {members.map((member, index) => (
          <Image
            key={member.id}
            src={`/members/${member.id}/avatar.svg`}
            width={64}
            height={64}
            alt={member.name}
            className={`transition-500 h-auto w-12 rounded-full bg-grayscale-100 xl:w-16 -z-[${index - members.length}]`}
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
    <Paragraphy
      {...props}
      ref={ref}
      variant="p4"
      className={`transition-500 absolute delay-200 ${inView ? 'top-[84px] opacity-100 xl:top-[124px]' : 'top-[134px] opacity-0 xl:top-[174px]'}`}
    />
  )
}
