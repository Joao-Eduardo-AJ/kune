'use client'
import { Button, ButtonWave, Logo } from './_components'

export default function Home() {
  return (
    <>
      <nav></nav>
      <main>
        <section className="flex h-dvh w-dvw flex-col items-center justify-center gap-8">
          <div className="flex gap-6">
            <div className="flex">
              <Button>Services</Button>
              <Button>Who we are?</Button>
            </div>
            <Button variant={{ type: 'contained' }}>Book a Call</Button>
          </div>
          <ButtonWave onClick={() => window.alert('aaa')} />
          <Logo />
        </section>
      </main>
    </>
  )
}
