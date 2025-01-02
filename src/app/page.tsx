'use client'
import { Badge, Button, ButtonWave, Logo, Status } from './_components'

export default function Home() {
  return (
    <>
      <nav></nav>
      <main>
        <section className="flex h-dvh w-dvw flex-col items-center justify-center gap-8">
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
          <ButtonWave onClick={() => window.alert('aaa')} />
          <Logo />
        </section>
      </main>
    </>
  )
}
