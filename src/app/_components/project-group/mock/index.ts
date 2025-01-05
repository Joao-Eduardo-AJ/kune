/* eslint-disable @typescript-eslint/no-unused-vars */
import avatar from '@public/avatar.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import project from '@public/project.svg'
import { ProjectType } from '@/atom'

export type Author = {
  avatarSrc: StaticImport
  linkedinUrl: string
  name: string
}

export type Project = {
  authors: Author[]
  description: string
  externalUrl: string
  figureAlt: string
  figureSrc: StaticImport
  name: string
  type: ProjectType
  year: string
}

const arnon: Author = {
  avatarSrc: avatar,
  linkedinUrl: 'https://www.linkedin.com/in/arnon-cornette/',
  name: 'Arnon Cornette'
}

const daniel: Author = {
  avatarSrc: avatar,
  linkedinUrl: 'https://www.linkedin.com/in/danieldecastroliveira/',
  name: 'Daniel Oliveira'
}

const guylherme: Author = {
  avatarSrc: avatar,
  linkedinUrl: 'https://www.linkedin.com/in/guysarmento/',
  name: 'Guylherme Sarmento'
}

const joao: Author = {
  avatarSrc: avatar,
  linkedinUrl: 'https://www.linkedin.com/in/joaoeduardoaj/',
  name: 'Eduardo Amorim'
}

const lucas: Author = {
  avatarSrc: avatar,
  linkedinUrl: 'https://www.linkedin.com/in/lucasjfvieira/',
  name: 'Lucas Vieira'
}

const miguel: Author = {
  avatarSrc: avatar,
  linkedinUrl: 'https://www.linkedin.com/in/miguel-elibio-717526212/',
  name: 'Miguel Elbio'
}

const spica: Author = {
  avatarSrc: avatar,
  linkedinUrl: 'https://www.linkedin.com/in/guilhermespica/',
  name: 'Guilheme Spica'
}

export const projects: Project[] = [
  {
    authors: [arnon, daniel, guylherme],
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
    externalUrl: 'a',
    figureAlt: '',
    figureSrc: project,
    name: 'Project 1',
    type: 'website',
    year: '2024'
  },
  {
    authors: [arnon, daniel, guylherme],
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
    externalUrl: 'b',
    figureAlt: '',
    figureSrc: project,
    name: 'Project 2',
    type: 'website',
    year: '2024'
  },
  {
    authors: [arnon, daniel, guylherme],
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
    externalUrl: 'c',
    figureAlt: '',
    figureSrc: project,
    name: 'Project 3',
    type: 'website',
    year: '2024'
  },
  {
    authors: [arnon, daniel, guylherme],
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
    externalUrl: 'd',
    figureAlt: '',
    figureSrc: project,
    name: 'Project 4',
    type: 'website',
    year: '2024'
  }
]
