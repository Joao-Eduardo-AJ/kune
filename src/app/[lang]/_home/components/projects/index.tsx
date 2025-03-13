'use client'

import { useAtom, useAtomValue } from 'jotai'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twJoin } from 'tailwind-merge'

import { ProjectType, projectTypeAtom } from '@/atom'
import { Badge } from '@/components'
import { data } from '@/data'

import * as ProjectCard from './project-card'
import { useTranslations } from 'next-intl'

export function Header() {
  const [projectType, setProjectType] = useAtom(projectTypeAtom)
  const t = useTranslations('projects')

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
      <h2>{t('title')}</h2>
      <div className="no-scrollbar overflow-scroll">
        <div className="flex min-w-min gap-3">
          <Badge
            actived={projectType === 'branding'}
            onClick={() => handleProjectType('branding')}
          >
            {t('brandingDesign')}
          </Badge>
          <Badge
            actived={projectType === 'website'}
            onClick={() => handleProjectType('website')}
          >
            {t('webSites')}
          </Badge>
          <Badge
            actived={projectType === 'mobile'}
            className="hidden"
            onClick={() => handleProjectType('mobile')}
          >
            {t('mobileApps')}
          </Badge>
          <Badge
            actived={projectType === 'web'}
            className="hidden"
            onClick={() => handleProjectType('web')}
          >
            {t('webApp')}
          </Badge>
        </div>
      </div>
    </div>
  )
}

export function Group() {
  const projectType = useAtomValue(projectTypeAtom)
  const lang = usePathname().split('/')[1]
  const t = useTranslations('projects')

  const projectsByType = data.projects.filter(project => {
    return project.type === projectType
  })

  return (
    <div className={twJoin('grid gap-6 sm:grid-cols-2 xl:gap-x-8 xl:gap-y-20')}>
      {projectsByType.map(({ id, slug }) => {
        return (
          <ProjectCard.Wrapper key={id}>
            <Link
              href={`${lang}/projects/${slug}`}
              onClick={e => projectType === 'website' && e.preventDefault()}
            >
              <ProjectCard.Figure
                alt="project"
                src={`/projects/${id}/thumb.webp`}
              />
            </Link>

            <ProjectCard.Caption
              title={t(`${slug}.name`)}
              description={t(`${slug}.caption`)}
              shortly={projectType === 'website'}
            />
          </ProjectCard.Wrapper>
        )
      })}
    </div>
  )
}
