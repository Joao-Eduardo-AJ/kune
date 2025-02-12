import Image from 'next/image'

import { Container } from '@/components'

type GalleryGridProps = {
  projectId: string
  projectName: string
}

export function GalleryGrid({ projectId, projectName }: GalleryGridProps) {
  const images = [
    {
      src: `/projects/${projectId}/apply-1.webp`,
      alt: `${projectName}`,
      semi: false
    },
    {
      src: `/projects/${projectId}/apply-2.webp`,
      alt: `${projectName}`,
      semi: true
    },
    {
      src: `/projects/${projectId}/apply-3.webp`,
      alt: `${projectName}`,
      semi: true
    },
    {
      src: `/projects/${projectId}/apply-4.webp`,
      alt: `${projectName}`,
      semi: false
    },
    {
      src: `/projects/${projectId}/apply-5.webp`,
      alt: `${projectName}`,
      semi: true
    },
    {
      src: `/projects/${projectId}/apply-6.webp`,
      alt: `${projectName}`,
      semi: true
    },
    {
      src: `/projects/${projectId}/apply-7.webp`,
      alt: `${projectName}`,
      semi: false
    },
    {
      src: `/projects/${projectId}/apply-8.webp`,
      alt: `${projectName}`,
      semi: true
    },
    {
      src: `/projects/${projectId}/apply-9.webp`,
      alt: `${projectName}`,
      semi: true
    },
    {
      src: `/projects/${projectId}/apply-10.webp`,
      alt: `${projectName}`,
      semi: false
    }
  ]

  return (
    <Container className="flex flex-wrap gap-x-8 gap-y-10 py-32">
      {images.map(({ alt, semi, src }, index) => (
        <div key={`${alt}-${index}`} className="rounded-xl">
          <Image alt={alt} src={src} height={695} width={semi ? 592 : 1216} />
        </div>
      ))}
    </Container>
  )
}
