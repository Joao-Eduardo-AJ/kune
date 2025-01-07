'use client'

import Image from 'next/image'

import { Member } from '@src/app/mock'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
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
  src: StaticImport
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
    className={`relative h-[870px] max-w-[592px] ${spacedTop ? 'mt-[120px]' : 'mb-[120px]'}`}
  >
    {children}
  </article>
)

export const Figure = ({ alt, src }: FigureProps) => (
  <figure className="group cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:shadow-xl">
    <Image
      width={592}
      height={695}
      src={src}
      alt={alt}
      className="transition-all duration-500 ease-in-out group-hover:scale-110"
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
  <figcaption className="grid gap-5 rounded-xl bg-white">{children}</figcaption>
)

export const Info = ({ team, title }: InfoProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  return (
    <div
      ref={ref}
      className={`absolute flex w-full items-center justify-between transition-all duration-500 ease-out ${inView ? 'bottom-[71px] opacity-100' : '-bottom-20 opacity-0'}`}
    >
      <h3 className="font-semibold">{title}</h3>
      <div className="flex">
        {team.map((item, index) => (
          <Image
            key={index}
            src={item.avatarSrc}
            width={64}
            height={64}
            alt={item.name}
            className={`cursor-pointer rounded-full bg-grayscale-100 transition-all duration-500 ease-out hover:-translate-y-1 -z-[${index - team.length}] ${index + 1 === team.length ? '-ml-3 hover:-ml-2' : '-mx-3 hover:-mx-2'}`}
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
    threshold: 0.5,
    triggerOnce: true
  })

  return (
    <p
      {...props}
      ref={ref}
      className={`absolute transition-all delay-200 duration-500 ease-out ${inView ? 'bottom-0 opacity-100' : '-bottom-20 opacity-0'}`}
    />
  )
}
