import ReactLenis from 'lenis/react'

import {
  Expertises,
  Experts,
  Hero,
  Numbers,
  Projects,
  Questions,
  SocialProof,
  WorkWay
} from './components'
import { Button, Footer, Header } from '@/components'

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
            <h2 className="z-10">Ready to bring your idea to life?</h2>
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
            <Experts.Header />
            <Experts.Info />
            <Experts.Content />
          </div>
        </section>
        <section className="bg-grayscale-100">
          <div className="container grid gap-10 lg:gap-20">
            <WorkWay.Header />
            <WorkWay.Info />
            <WorkWay.Content />
          </div>
        </section>
        <section>
          <div className="container grid gap-10 lg:gap-20">
            <Numbers.Header />
            <Numbers.Content />
          </div>
        </section>
        <section className="overflow-hidden bg-grayscale-900">
          <div className="container">
            <SocialProof />
          </div>
        </section>
        <section>
          <div className="container grid gap-10 lg:gap-20">
            <Questions.Header />
            <Questions.Content />
          </div>
        </section>
      </main>
      <Footer />
    </ReactLenis>
  )
}
