import { Topic, Paragraphy } from '@/components'
import { ButtonPing } from './ButtonPing'
import { Customers } from './Customers'

export const Content = () => (
  <div className="flex max-w-[912px] flex-col items-center gap-6">
    <Topic>Available for new projects</Topic>
    <h1>
      Building <br className="sm:hidden" /> human-centered systems
      <br className="hidden md:block" /> that create real impact
    </h1>
    <Paragraphy className="md:pb-4">
      Take the first step to turn your idea into reality. Chat with us for 10
      minutes and explore simple, impactful solutions made for you.
    </Paragraphy>
    <ButtonPing />
  </div>
)

export const Carousel = () => (
  <div className="grid justify-items-center gap-10">
    <Customers />
    <span className="relative h-[52px] w-8 rounded-full border border-grayscale-400 before:left-[13px] before:top-3 before:h-2 before:w-1 before:animate-bounce before:rounded-full before:bg-grayscale-700" />
  </div>
)
