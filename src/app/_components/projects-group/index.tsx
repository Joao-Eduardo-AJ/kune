'use client'

import { useAtomValue } from 'jotai'
import * as Card from './components/card'
import { Project, projects } from '@src/app/mock'
import { projectTypeAtom } from '@/atom'
import { useEffect, useState } from 'react'

export function ProjectGroup() {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([])
  const projectType = useAtomValue(projectTypeAtom)

  useEffect(() => {
    setVisibleProjects(projects.filter(({ type }) => type === projectType))
  }, [projectType])

  return (
    <div className="grid gap-x-8 gap-y-6 pt-10 sm:grid-cols-2 md:gap-y-20 md:pt-20">
      {visibleProjects.map(
        (
          { team, description, externalUrl, figureAlt, figureSrc, name, year },
          index
        ) => (
          <Card.Wrapper key={externalUrl} spacedTop={index % 2 !== 0}>
            <Card.Header url={externalUrl} year={year} />
            <Card.Figure alt={figureAlt} src={figureSrc} />
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
