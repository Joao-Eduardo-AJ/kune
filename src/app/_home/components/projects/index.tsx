'use client'

import { useAtom, useAtomValue } from 'jotai'
import Link from 'next/link'
import { twJoin } from 'tailwind-merge'

import { ProjectType, projectTypeAtom } from '@/atom'
import { Badge } from '@/components'
import { data } from '@/data'

import * as ProjectCard from './project-card'

export function Header() {
  const [projectType, setProjectType] = useAtom(projectTypeAtom)

  function handleProjectType(newProjectType: ProjectType) {
    setProjectType(newProjectType)
  }

  return (
    <div
      className={twJoin(
        'relative flex flex-col gap-6 border-b border-grayscale-300 pb-10',
        'xl:flex-row xl:justify-between'
      )}
    >
      <h2>Our Work</h2>
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
            Branding
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
    <div className={twJoin('grid gap-6 sm:grid-cols-2 xl:gap-x-8 xl:gap-y-20')}>
      {projectsByType.map(project => {
        return (
          <ProjectCard.Wrapper key={project.id}>
            <Link href={`/projects/${project.slug}`}>
              <ProjectCard.Figure
                alt="project"
                src={`/projects/${project.id}/thumb.webp`}
              />
            </Link>

            <ProjectCard.Caption
              description={project.description}
              title={project.name}
              shortly={projectType === 'website'}
            />
          </ProjectCard.Wrapper>
        )
      })}
    </div>
  )
}
