import ReactLenis from 'lenis/react'
import {
  Badge,
  Button,
  ButtonWave,
  Logo,
  ProjectGroup,
  ScrollIndicator,
  Status
} from './_components'

export default function Home() {
  return (
    <ReactLenis root>
      <nav></nav>
      <main>
        <section className="flex flex-col items-center justify-center gap-20 py-96">
          <ProjectGroup />
          <Status />
          <div className="flex gap-6">
            <div className="flex">
              <Button>Services</Button>
              <Button>Who we are?</Button>
            </div>
            <Button variant={{ type: 'contained' }}>Book a Call</Button>
          </div>
          <div className="flex gap-3">
            <Badge selected>Web Sites</Badge>
            <Badge>Mobile App</Badge>
            <Badge>Web App</Badge>
          </div>
          <ButtonWave />
          <Logo />
          <ScrollIndicator />
        </section>
      </main>
    </ReactLenis>
  )
}
