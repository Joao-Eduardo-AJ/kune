import { Container } from '@/components'

import { ImageGrid } from './image-grid'

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
    <Container className="grid auto-cols-fr gap-y-4 sm:gap-x-8 sm:gap-y-10">
      {images.map(({ alt, semi, src }, index) => (
        <ImageGrid key={`${alt}-${index}`} alt={alt} src={src} semi={semi} />
      ))}
    </Container>
  )
}
