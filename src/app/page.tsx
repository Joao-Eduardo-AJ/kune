import ReactLenis from 'lenis/react'

import {
  Button,
  ButtonWave,
  CustomerCarousel,
  Logo,
  ScrollIndicator,
  Status,
  Typography
} from './_components'

export default function Home() {
  return (
    <ReactLenis root>
      <nav className="flex justify-between bg-grayscale-100 px-7 py-3 xl:px-28 xl:py-6">
        <Logo />
        <Button>Book a Call</Button>
      </nav>
      <main>
        <section className="flex flex-col items-center gap-10 bg-grayscale-100 px-7 py-10 text-center xl:gap-20 xl:py-20">
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
          <CustomerCarousel />
          <ScrollIndicator />
        </section>
        {/* <div className="bg-member-card h-96 w-96"></div>
        <section className="flex flex-col items-center justify-center gap-20 py-96">
          <TeamGroup />
          <ProjectGroup />
          <div className="flex gap-6">
            <div className="flex">
              <Button>Services</Button>
              <Button>Who we are?</Button>
            </div>
            <Button>Book a Call</Button>
          </div>
          <div className="flex gap-3">
            <Badge selected>Web Sites</Badge>
            <Badge>Mobile App</Badge>
            <Badge>Web App</Badge>
          </div>
          <Logo />
        </section> */}
      </main>
    </ReactLenis>
  )
}
