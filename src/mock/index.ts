import avatar from '@public/avatar.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import project from '@public/project.svg'
import { ProjectType } from '@/atom'
import memberDaniel from '@public/memberdaniel.svg'
import verdecampo from '@public/verdecampo.svg'
import evo from '@public/evo.svg'
import mapletv from '@public/mapletv.svg'
import voltbras from '@public/voltbras.svg'
import hulala from '@public/hulala.svg'
import atom from '@public/atom.svg'
import syonet from '@public/syonet.svg'
import docdoor from '@public/docdoor.svg'

type Customers = {
  alt: string
  src: StaticImport
  width: number
}

type Expersise = {
  title: string
  content: string
}

export type Member = {
  avatarSrc: StaticImport
  cardImageSrc: StaticImport
  linkedinUrl: string
  name: string
  role: string
}

export type Project = {
  team: Member[]
  description: string
  externalUrl: string
  figureAlt: string
  figureSrc: StaticImport
  name: string
  type: ProjectType
  year: string
}

export const customers: Customers[] = [
  {
    src: verdecampo,
    alt: 'verde campo',
    width: 80
  },
  {
    src: evo,
    alt: 'evo',
    width: 70
  },
  {
    src: mapletv,
    alt: 'maple tv',
    width: 129
  },
  {
    src: voltbras,
    alt: 'voltbras',
    width: 97
  },
  {
    src: hulala,
    alt: 'hulala',
    width: 90
  },
  {
    src: atom,
    alt: 'atom',
    width: 48
  },
  {
    src: syonet,
    alt: 'syonet',
    width: 104
  },
  {
    src: docdoor,
    alt: 'docdoor',
    width: 98
  }
]

export const expertises: Expersise[] = [
  {
    title: 'UX Design & Strategy',
    content:
      'We design user-focused experiences and strategies that drive growth, boost engagement, and deliver results.'
  },
  {
    title: 'UI Design & auditing',
    content:
      'We create intuitive interfaces and audit designs to improve usability, performance, and visual impact.'
  },
  {
    title: 'Development & Technology',
    content:
      'We build scalable, custom digital solutions using smart technology to ensure performance, reliability, and growth.'
  },
  {
    title: 'Branding & Positioning',
    content:
      'We craft authentic brand identities and strategies that inspire, connect with audiences, and stand out.'
  }
]

const arnon: Member = {
  avatarSrc: avatar,
  cardImageSrc: memberDaniel,
  linkedinUrl: 'https://www.linkedin.com/in/arnon-cornette/',
  name: 'Arnon Cornette',
  role: 'UX Designer'
}

const daniel: Member = {
  avatarSrc: avatar,
  cardImageSrc: memberDaniel,
  linkedinUrl: 'https://www.linkedin.com/in/danieldecastroliveira/',
  name: 'Daniel Oliveira',
  role: 'Marketing'
}

const guylherme: Member = {
  avatarSrc: avatar,
  cardImageSrc: memberDaniel,
  linkedinUrl: 'https://www.linkedin.com/in/guysarmento/',
  name: 'Guylherme Sarmento',
  role: 'Branding'
}

const joao: Member = {
  avatarSrc: avatar,
  cardImageSrc: memberDaniel,
  linkedinUrl: 'https://www.linkedin.com/in/joaoeduardoaj/',
  name: 'Eduardo Amorim',
  role: 'Software Developer'
}

const lucas: Member = {
  avatarSrc: avatar,
  cardImageSrc: memberDaniel,
  linkedinUrl: 'https://www.linkedin.com/in/lucasjfvieira/',
  name: 'Lucas Vieira',
  role: 'UI Designer'
}

const miguel: Member = {
  avatarSrc: avatar,
  cardImageSrc: memberDaniel,
  linkedinUrl: 'https://www.linkedin.com/in/miguel-elibio-717526212/',
  name: 'Miguel Elbio',
  role: 'Branding'
}

const spica: Member = {
  avatarSrc: avatar,
  cardImageSrc: memberDaniel,
  linkedinUrl: 'https://www.linkedin.com/in/guilhermespica/',
  name: 'Guilheme Spica',
  role: 'Software Develop'
}

export const projects: Project[] = [
  {
    team: [arnon, daniel, guylherme],
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
    team: [arnon, daniel, guylherme],
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
    team: [arnon, daniel, guylherme],
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
    team: [arnon, daniel, guylherme],
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

export const team: Member[] = [
  arnon,
  daniel,
  guylherme,
  joao,
  lucas,
  miguel,
  spica
]
