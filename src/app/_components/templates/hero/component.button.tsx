import arrow from '@public/arrow-right.svg'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}

export const ButtonWave = ({ ...props }: ButtonProps) => (
  <div className="shadow-waves relative before:animate-waves before:rounded-xl">
    <button
      {...props}
      className="waves relative flex w-[232px] items-center justify-between rounded-xl bg-accent p-2 pl-6 text-xl before:bg-accent-aux"
    >
      <span className="z-10 cursor-pointer">Book a call</span>
      <Image src={arrow} width={40} height={40} alt="" className="z-10" />
    </button>
  </div>
)
