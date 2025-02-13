import { Button, Container, Header } from '@/components'

import {
  Expertises,
  Experts,
  FAQ,
  Hero,
  Numbers,
  Projects,
  SocialProof,
  WorkStyle
} from './components'

export default function Home() {
  return (
    <>
      <Header filled />
      <main className="flex flex-col items-center overflow-hidden">
        <section className="bg-grayscale-100 text-center">
          <Container className="max-w-[912px] space-y-10 xl:space-y-20">
            <Hero />
          </Container>
        </section>

        <section className="xl:py-[200px]">
          <Container className="space-y-10 xl:space-y-20">
            <Projects.Header />
            <Projects.Group />
          </Container>
        </section>

        <section className="cta relative overflow-hidden">
          <Container className="flex flex-col gap-6 text-center lg:flex-row lg:justify-between">
            <h2 className="z-10">Ready to bring your idea to life?</h2>
            <Button>Schedule a 10-Minute Call</Button>
          </Container>
        </section>

        <section aria-labelledby="our-expertise">
          <Container className="space-y-10 xl:space-y-20">
            <Expertises />
          </Container>
        </section>

        <section className="hidden bg-grayscale-900">
          <Container className="grid gap-10 lg:gap-20 lg:py-[120px]">
            <Experts.Header />
            <Experts.Info />
            <Experts.Content />
          </Container>
        </section>

        <section className="bg-grayscale-100">
          <Container className="space-y-10 xl:space-y-20">
            <WorkStyle />
          </Container>
        </section>

        <section>
          <Container className="space-y-10 xl:space-y-20">
            <Numbers />
          </Container>
        </section>

        <section className="overflow-hidden bg-grayscale-900">
          <Container>
            <SocialProof />
          </Container>
        </section>

        <section>
          <Container className="xl:space-y-5">
            <FAQ />
          </Container>
        </section>
      </main>
    </>
  )
}
