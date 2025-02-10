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
import { Button, Container } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      <section className="bg-grayscale-100 text-center">
        <Container className="flex flex-col items-center gap-10 xl:gap-20">
          <Hero.Content />
          <Hero.Carousel />
        </Container>
      </section>
      <section className="xl:py-[200px]">
        <Container>
          <Projects.Header />
          <Projects.Group />
        </Container>
      </section>
      <section className="divider before:divider-xs lg:before:divider-lg relative overflow-hidden bg-accent before:bg-accent-aux">
        <Container className="flex flex-col gap-6 text-center lg:flex-row lg:justify-between">
          <h2 className="z-10">Ready to bring your idea to life?</h2>
          <Button variant={{ size: 'lg' }}>Schedule a 10-Minute Call</Button>
        </Container>
      </section>
      <section aria-labelledby="our-expertise" className="bg-grayscale-100">
        <Container className="grid gap-10 lg:gap-20">
          <Expertises.Header />
          <Expertises.List />
        </Container>
      </section>
      <section className="bg-grayscale-900">
        <Container className="grid gap-10 lg:gap-20 lg:py-[120px]">
          <Experts.Header />
          <Experts.Info />
          <Experts.Content />
        </Container>
      </section>
      <section className="bg-grayscale-100">
        <Container className="grid gap-10 lg:gap-20">
          <WorkWay.Header />
          <WorkWay.Info />
          <WorkWay.Content />
        </Container>
      </section>
      <section>
        <Container className="grid gap-10 lg:gap-20">
          <Numbers.Header />
          <Numbers.Content />
        </Container>
      </section>
      <section className="overflow-hidden bg-grayscale-900">
        <Container>
          <SocialProof />
        </Container>
      </section>
      <section>
        <Container className="grid gap-10 lg:gap-20">
          <Questions.Header />
          <Questions.Content />
        </Container>
      </section>
    </main>
  )
}
