import Image from 'next/image'
import logo from '@public/logo.svg'
import { HtmlHTMLAttributes } from 'react'

const Span = ({ ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) => (
  <span
    {...props}
    className={`${props.className} absolute left-0 -z-10 text-2xl font-semibold leading-[90%] text-grayscale-900 opacity-0 transition-all duration-300 ease-out group-hover:left-12 group-hover:opacity-100`}
  />
)
export const Logo = () => (
  <div className="group relative flex items-center">
    <Image src={logo} width={40} height={40} alt="logo" />
    <Span className="-top-[2px]">Kune</Span>
    <Span className="-bottom-[2px] delay-100">Studio</Span>
  </div>
)
