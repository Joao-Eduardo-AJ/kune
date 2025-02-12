'use client'

import { useAtom, useAtomValue } from 'jotai'
import Link from 'next/link'

import { ProjectType, projectTypeAtom } from '@/atom'
import { Badge } from '@/components'
import { data } from '@/data'

import * as Card from './Card'

export function Header() {
  const [projectType, setProjectType] = useAtom(projectTypeAtom)

  function handleProjectType(newProjectType: ProjectType) {
    setProjectType(newProjectType)
  }

  return (
    <div className="relative flex flex-col gap-6 border-b border-grayscale-300 pb-10 md:flex-row md:items-center md:justify-between">
      <h2>Our Work</h2>
      <span className="absolute bottom-10 right-0 z-10 h-12 w-10" />
      <div className="no-scrollbar overflow-scroll">
        <div className="flex min-w-min gap-3">
          <Badge
            actived={projectType === 'website'}
            onClick={() => handleProjectType('website')}
          >
            Web Sites
          </Badge>
          <Badge
            actived={projectType === 'mobile'}
            className="hidden"
            onClick={() => handleProjectType('mobile')}
          >
            Mobile App
          </Badge>
          <Badge
            actived={projectType === 'web'}
            className="hidden"
            onClick={() => handleProjectType('web')}
          >
            Web App
          </Badge>
          <Badge
            actived={projectType === 'branding'}
            onClick={() => handleProjectType('branding')}
          >
            Identidade Visual
          </Badge>
        </div>
      </div>
    </div>
  )
}

export function Group() {
  const projectType = useAtomValue(projectTypeAtom)

  const projectsByType = data.projects.filter(project => {
    return project.type === projectType
  })

  return (
    <div className="grid gap-x-8 gap-y-6 pt-10 sm:grid-cols-2 md:gap-y-20 md:pt-20">
      {projectsByType.map((project, index) => {
        return (
          <Card.Wrapper
            key={project.id}
            spacedTop={index % 2 !== 0}
            year="2024"
          >
            <Link href={`/projects/${project.slug}`}>
              <Card.Header
                darkContrast={project.darkContrast}
                year={project.year}
              />
              <Card.Figure
                alt="project"
                src={`/projects/${project.id}/thumb.webp`}
              />
            </Link>

            <Card.Caption>
              <Card.Info members={project.members} title={project.name} />
              <Card.Description>{project.description}</Card.Description>
            </Card.Caption>
          </Card.Wrapper>
        )
      })}
    </div>
  )
}
