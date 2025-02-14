import Link from 'next/link'
import Image from 'next/image'

import { Button, Container, Header, IconButton, Paragraphy } from '@/components'
import { data } from '@/data'

import { GalleryGrid } from './components/galery-grid'

type ProjectProps = {
  params: Promise<{
    slug: string[]
  }>
}

export default async function Project({ params }: ProjectProps) {
  const [slug] = (await params).slug

  const project = data.projects.find(item => {
    return item.slug === slug
  })

  if (!project) return null

  return (
    <>
      <Header />
      <main>
        <section className="pb-20 pt-[128px]">
          <Container className="w-full space-y-12 lg:space-y-20">
            <Link className="inline-flex" href="/">
              <IconButton variant="secondary">
                <span className="material-symbols-outlined">chevron_left</span>
              </IconButton>
            </Link>

            <div className="space-y-10 lg:space-y-0">
              <div className="space-y-4">
                <h2>{project.name}</h2>
                <Paragraphy className="text-grayscale-500" variant="p5">
                  Visual identity for developer | Programming and development
                </Paragraphy>
              </div>

              <span className="block h-px w-full bg-grayscale-300 lg:!mt-5" />

              <div className="space-y-10 lg:!mt-20 lg:flex lg:justify-between lg:space-y-0">
                <div className="space-y-1">
                  <Paragraphy variant="p4">Service</Paragraphy>
                  <Paragraphy variant="p2" className="text-gray-900">
                    Visual Identity
                  </Paragraphy>
                </div>

                <Paragraphy
                  className="max-w-[488px] text-grayscale-500"
                  variant="p4"
                >
                  {project.description}
                </Paragraphy>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-0 pb-20 lg:py-[128px]">
          <GalleryGrid projectId={project.id} projectName={project.name} />
        </section>

        <section className="py-20 lg:py-[128px]">
          <Container className="space-y-10 lg:space-y-20">
            <div className="space-y-10 lg:flex lg:flex-row-reverse lg:items-start lg:justify-between lg:space-y-0">
              <div className="max-w-fit rounded-lg bg-grayscale-900 p-4">
                <Image
                  height={40}
                  width={40}
                  src="/kune-white.svg"
                  alt="kune"
                />
              </div>

              <span className="block text-[56px]/[56px] font-semibold text-grayscale-900 lg:max-w-[613px] lg:text-[64px]/[62px]">
                Let{`'`}s create something together?
              </span>
            </div>

            <div className="space-y-10 lg:flex lg:items-center lg:justify-between lg:space-y-0">
              <Paragraphy className="lg:max-w-60" variant="p4">
                Tell us your idea and get in touch to make your dream come true
              </Paragraphy>

              <Button variant="secondary">Schedule a 10-Minute Call</Button>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
