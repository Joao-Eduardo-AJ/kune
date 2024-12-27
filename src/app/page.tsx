import { ButtonWave, Logo } from './_components'

export default function Home() {
  return (
    <>
      <nav></nav>
      <main>
        <section className="flex h-dvh w-dvw flex-col items-center justify-center gap-8">
          <ButtonWave />
          <Logo />
        </section>
      </main>
    </>
  )
}
