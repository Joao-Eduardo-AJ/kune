import Image from 'next/image'
import arrow from '@public/arrow-right.svg'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}

export const ButtonWave = ({ ...props }: ButtonProps) => (
  <div className="waves relative before:absolute before:animate-waves">
    <button
      {...props}
      className="waves relative flex w-[232px] items-center justify-between overflow-hidden rounded-xl bg-accent p-2 pl-6 text-xl font-semibold before:absolute before:bg-accent-aux"
    >
      <span className="z-10">Book a call</span>
      <Image src={arrow} width={40} height={40} alt="" className="z-10" />
    </button>
  </div>
)
