import ReactLenis from 'lenis/react'

import { Expertises, Hero, Projects, Team, Working } from './_components'
import { Button, Header, Typography } from '@/app/_components'

export default function Home() {
  return (
    <ReactLenis root>
      <Header />
      <main className="flex flex-col items-center overflow-hidden">
        <section className="bg-grayscale-100 text-center">
          <div className="container flex flex-col items-center gap-10 xl:gap-20">
            <Hero.Content />
            <Hero.Carousel />
          </div>
        </section>
        <section className="xl:py-[200px]">
          <div className="container">
            <Projects.Header />
            <Projects.Group />
          </div>
        </section>
        <section className="divider before:divider-xs lg:before:divider-lg relative overflow-hidden bg-accent before:bg-accent-aux">
          <div className="container flex flex-col gap-6 text-center lg:flex-row lg:justify-between">
            <Typography variant="h2" className="z-10">
              Ready to bring your idea to life?
            </Typography>
            <Button variant={{ size: 'lg' }}>Schedule a 10-Minute Call</Button>
          </div>
        </section>
        <section aria-labelledby="our-expertise" className="bg-grayscale-100">
          <div className="container grid gap-10 lg:gap-20">
            <Expertises.Header />
            <Expertises.List />
          </div>
        </section>
        <section className="bg-grayscale-900">
          <div className="container grid gap-10 lg:gap-20 lg:py-[120px]">
            <Team.Header />
            <Team.Info />
            <Team.Content />
          </div>
        </section>
        <section className="bg-grayscale-100">
          <div className="container grid gap-10 lg:gap-20">
            <Working.Header />
            <Working.Info />
            <Working.Content />
          </div>
        </section>
        <section>
          <div className="container grid gap-10 lg:gap-20">
            <div className="my-[19px] flex items-center justify-between border-b border-gray-300 pb-5 lg:my-0">
              <h2>Interesting numbers</h2>
              <span>\/</span>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <h5>Experience That Deliver Results</h5>
              <div className="grid max-w-[488px] gap-y-6 md:grid-cols-2 md:gap-y-20">
                <Typography variant="p2" className="md:col-span-2">
                  At Kune, we bring together over 20 years of combined
                  experience across our Designers, Developers, and Marketing
                  Specialists. Our team excels in their fields, delivering
                  innovative and tailored solutions for every project.
                </Typography>
                <Typography variant="p1" className="mb-14 md:mb-0">
                  <strong>+12</strong>
                  <br />
                  years of experience
                </Typography>
                <Typography variant="p1">
                  <strong>+50</strong>
                  <br />
                  projects completed
                </Typography>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-grayscale-900">
          <div className="container">
            <div className="relative flex flex-col gap-10 bg-no-repeat before:top-1/3 before:hidden before:h-[781px] before:w-[781px] before:bg-[url(/section-bg.svg)] md:flex-row md:justify-between before:lg:block">
              <h2 className="text-white">
                Clients Who Trust, <br /> Results That Shine
              </h2>
              <div className="grid max-w-[592px] gap-20">
                <h3 className="z-10 text-accent">
                  “At Kune, we bring together over 20 years of combined
                  experience across our Designers, Developers, and Marketing
                  Specialists. Our team excels in their fields, delivering
                  innovative and tailored solutions for every project.”
                </h3>
                <div>
                  <Typography variant="p1" className="text-white">
                    Bernardo Campos
                  </Typography>
                  <Typography variant="p2" className="text-white">
                    CEO / Founder at Doc.Door
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  )
}
