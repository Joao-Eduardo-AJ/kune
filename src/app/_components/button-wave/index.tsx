import Image from 'next/image'
import arrow from '@public/arrow-right.svg'

export const ButtonWave = () => (
  <button className="waves relative flex w-[232px] items-center justify-between rounded-xl bg-gradient-to-r from-accent to-accent-aux p-2 pl-6 text-xl font-semibold after:animate-waves">
    Book a call
    <Image src={arrow} width={40} height={40} alt="" />
  </button>
)
