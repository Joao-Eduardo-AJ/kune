import Image from 'next/image'
import arrow from '@public/arrow-right.svg'

export const ButtonWave = () => (
  <button className="waves after:animate-waves relative flex w-[232px] items-center justify-between rounded-xl bg-gradient-to-r from-accent to-accent-aux p-2 pl-6 text-xl font-semibold">
    Book a call
    <Image src={arrow} width={40} height={40} alt="" />
  </button>
)
