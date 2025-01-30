'use client'

import { projectTypeAtom } from '@/atom'
import { projects } from '@/mock'
import { useAtomValue } from 'jotai'

import { Typography } from '@/app/_components'
import { ProjectType } from '@/atom'
import { useAtom } from 'jotai'
import { Badge } from './Badge'
import * as Card from './Card'

export function Header() {
  const [projectType, setProjectType] = useAtom(projectTypeAtom)

  function handleProjectType(newProjectType: ProjectType) {
    if (projectType === newProjectType) return
    setProjectType(newProjectType)
  }

  return (
    <div className="relative flex flex-col gap-6 border-b border-grayscale-300 pb-10 md:flex-row md:items-center md:justify-between">
      <Typography variant="h2">Our Work</Typography>
      <span className="fade-r absolute bottom-10 right-0 z-10 h-12 w-10 md:hidden" />
      <div className="hidden-scroll overflow-scroll">
        <div className="flex min-w-min gap-3">
          <Badge
            selected={projectType === 'website'}
            onClick={() => handleProjectType('website')}
          >
            Web Sites
          </Badge>
          <Badge
            selected={projectType === 'mobileapp'}
            onClick={() => handleProjectType('mobileapp')}
          >
            Mobile App
          </Badge>
          <Badge
            selected={projectType === 'webapp'}
            onClick={() => handleProjectType('webapp')}
          >
            Web App
          </Badge>
          <Badge
            selected={projectType === 'branding'}
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

  return (
    <div className="grid gap-x-8 gap-y-6 pt-10 sm:grid-cols-2 md:gap-y-20 md:pt-20">
      {projects[projectType].map(
        ({ team, description, id, name, year }, index) => (
          <Card.Wrapper key={index} spacedTop={index % 2 !== 0}>
            <Card.Header url="teste" year={year} />
            <Card.Figure
              alt="project"
              src={`projects/${projectType}/${id}/thumb.svg`}
            />
            <Card.Caption>
              <Card.Info team={team} title={name} />
              <Card.Description>{description}</Card.Description>
            </Card.Caption>
          </Card.Wrapper>
        )
      )}
    </div>
  )
}
