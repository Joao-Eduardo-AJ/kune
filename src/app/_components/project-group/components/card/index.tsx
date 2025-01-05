'use client'

import Image from 'next/image'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { HTMLAttributes, useCallback, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Author } from '../../mock'

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
  authors: Author[]
}

export function Wrapper({ children, spacedTop }: WrapperProps) {
  return (
    <article
      className={`relative h-[870px] max-w-[592px] ${spacedTop ? 'mt-[120px]' : 'mb-[120px]'}`}
    >
      {children}
    </article>
  )
}

export function Figure({ alt, src }: FigureProps) {
  return (
    <figure className="">
      <Image width={592} height={695} src={src} alt={alt} />
    </figure>
  )
}

export function Header({ url, year }: HeaderProps) {
  return (
    <div className="absolute left-10 top-10 flex items-center justify-between text-[22px] text-gray-100">
      <span>{year}</span>
      <span>{url}</span>
    </div>
  )
}

export function Caption({ children }: ChildrenProp) {
  const ref = useRef<HTMLElement>(null)
  const { ref: inViewRef } = useInView({
    threshold: 1,
    triggerOnce: true,
    onChange(inView) {
      handleEntry(inView)
    }
  })

  const setRefs = useCallback(
    (node: HTMLElement) => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef]
  )

  function handleEntry(inView: boolean) {
    if (!ref.current) return
    const { classList } = ref.current
    if (classList.contains('animate-project-card') || !inView) return
    classList.add('animate-project-card')
  }

  return (
    <>
      <span className="absolute bottom-0 z-[1] h-[175px] w-full bg-white" />
      <figcaption
        ref={setRefs}
        className="absolute bottom-0 left-4 grid max-w-[560px] gap-5 rounded-xl bg-white p-5 transition-all duration-300"
      >
        {children}
      </figcaption>
    </>
  )
}

export function Info({ authors, title }: InfoProps) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex">
        {authors.map((item, index) => (
          <Image
            key={index}
            src={item.avatarSrc}
            width={64}
            height={64}
            alt={item.name}
            className={`cursor-pointer rounded-full bg-grayscale-100 transition-all duration-300 hover:scale-105 -z-[${index - authors.length}] ${index + 1 === authors.length ? '-ml-3 hover:-ml-2' : '-mx-3 hover:-mx-2'}`}
          />
        ))}
      </div>
    </div>
  )
}

export function Description({
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} />
}
