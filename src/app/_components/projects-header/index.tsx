'use client'

import { ProjectType, projectTypeAtom } from '@/atom'
import { useAtom } from 'jotai'
import { Badge } from '../badge'
import { Typography } from '../typography'

export function ProjectHeader() {
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
