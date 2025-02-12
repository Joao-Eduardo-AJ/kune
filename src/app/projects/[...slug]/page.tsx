import Link from 'next/link'
import Image from 'next/image'

import { Button, Container, Header, Paragraphy } from '@/components'
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
        <Container className="w-full space-y-20 pb-20 pt-40">
          <Link href="/">
            <span className="material-symbols-outlined">chevron_left</span>
          </Link>

          <div className="space-y-4 border-b border-grayscale-300 pb-5">
            <h2>{project.name}</h2>
          </div>

          <div className="flex w-full justify-between">
            <div className="space-y-1">
              <Paragraphy variant="p4">Service</Paragraphy>
              <Paragraphy variant="p2" className="text-gray-900">
                Visual Identity
              </Paragraphy>
            </div>
            <p className="max-w-[488px]">{project.description}</p>
          </div>
        </Container>

        <GalleryGrid projectId={project.id} projectName={project.name} />

        <Container className="space-y-20 py-32">
          <div className="flex items-start justify-between">
            <strong className="leading-[62px] text-grayscale-900 lg:max-w-[613px] lg:text-[64px]">
              Let{`'`}s create something together?
            </strong>

            <div className="inline-flex rounded-lg bg-grayscale-900 p-4">
              <Image height={40} width={40} src="/kune-white.svg" alt="kune" />
            </div>
          </div>

          <div className="flex w-full justify-between">
            <Paragraphy className="max-w-[240px]" variant="p4">
              Tell us your idea and get in touch to make your dream come true
            </Paragraphy>

            <Button variant="secondary">Schedule a 10-Minute Call</Button>
          </div>
        </Container>
      </main>
    </>
  )
}
