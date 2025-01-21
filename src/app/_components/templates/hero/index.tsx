import { Typography } from '@/app/_shared'
import { Status } from './component.status'
import { ButtonWave } from './component.button'
import { Customers } from './component.customers'

export const Content = () => (
  <div className="flex max-w-[912px] flex-col items-center gap-6">
    <Status />
    <Typography variant="h1">
      Building <br className="sm:hidden" /> human-centered systems
      <br className="hidden md:block" /> that create real impact
    </Typography>
    <Typography variant="p1" className="md:pb-4">
      Take the first step to turn your idea into reality. Chat with us for 10
      minutes and explore simple, impactful solutions made for you.
    </Typography>
    <ButtonWave />
  </div>
)

export const Carousel = () => (
  <div className="grid justify-items-center gap-10">
    <Customers />
    <span className="relative h-[52px] w-8 rounded-full border border-grayscale-400 before:left-[13px] before:top-3 before:h-2 before:w-1 before:animate-bounce before:rounded-full before:bg-grayscale-700" />
  </div>
)
