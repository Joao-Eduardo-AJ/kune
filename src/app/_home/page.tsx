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
      </main>
    </ReactLenis>
  )
}
