import Image from 'next/image'
import arrow from '@public/arrow-right.svg'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}

export const ButtonWave = ({ ...props }: ButtonProps) => (
  <div className="waves relative from-accent-shadow to-accent-aux-shadow before:absolute before:animate-waves before:bg-gradient-to-r">
    <button
      {...props}
      className="waves relative flex w-[232px] items-center justify-between rounded-xl bg-accent p-2 pl-6 text-xl before:absolute before:bg-accent-aux"
    >
      <span className="z-10">Book a call</span>
      <Image src={arrow} width={40} height={40} alt="" className="z-10" />
    </button>
  </div>
)
