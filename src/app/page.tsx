import ReactLenis from 'lenis/react'

import {
  Button,
  ButtonWave,
  Customers,
  Logo,
  ScrollIndicator,
  Status,
  Typography
} from '@/app/_components'

import * as Projects from '@/app/_components/projects'

export default function Home() {
  return (
    <ReactLenis root>
      <nav className="bg-grayscale-100 px-7 py-3 xl:px-28 xl:py-6">
        <div className="flex justify-between">
          <Logo />
          <Button>Book a Call</Button>
        </div>
      </nav>
      <main className="flex flex-col items-center">
        <section className="bg-grayscale-100 text-center xl:py-20">
          <div className="flex flex-col items-center gap-10 xl:gap-20">
            <div className="flex max-w-[912px] flex-col items-center gap-6">
              <Status />
              <Typography variant="h1">
                Building <br className="sm:hidden" /> human-centered systems
                <br className="hidden md:block" /> that create real impact
              </Typography>
              <Typography variant="p1" className="md:pb-4">
                Take the first step to turn your idea into reality. Chat with us
                for 10 minutes and explore simple, impactful solutions made for
                you.
              </Typography>
              <ButtonWave />
            </div>
            <Customers />
            <ScrollIndicator />
          </div>
        </section>
        <section className="xl:px-28 xl:py-[200px]">
          <div className="max-w-[384px] sm:max-w-none">
            <Projects.Header />
            <Projects.Group />
          </div>
        </section>
      </main>
    </ReactLenis>
  )
}
