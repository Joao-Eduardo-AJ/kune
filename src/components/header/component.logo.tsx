import logo from '@public/logos/kune.svg'
import Image from 'next/image'
import { HtmlHTMLAttributes } from 'react'

const Span = ({ ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) => (
  <span
    {...props}
    className={`${props.className} absolute left-0 -z-10 text-xl font-semibold text-grayscale-900 opacity-0 transition-all duration-300 ease-out group-hover:left-12 group-hover:opacity-100 xl:text-2xl`}
  />
)
export const Logo = () => (
  <div className="group relative z-10 flex items-center">
    <Image
      src={logo}
      width={40}
      height={40}
      alt="logo"
      className="h-8 w-8 xl:h-10 xl:w-10"
    />
    <Span className="-top-[2px]">Kune</Span>
    <Span className="-bottom-[2px] delay-100">Studio</Span>
  </div>
)
