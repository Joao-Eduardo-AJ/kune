import { ProjectType } from '@/atom'
import atom from '@public/logos/atom.svg'
import docdoor from '@public/logos/docdoor.svg'
import evo from '@public/logos/evo.svg'
import hulala from '@public/logos/hulala.svg'
import mapletv from '@public/logos/mapletv.svg'
import syonet from '@public/logos/syonet.svg'
import verdecampo from '@public/logos/verdecampo.svg'
import voltbras from '@public/logos/voltbras.svg'
import avatar from '@public/members/avatar.svg'
import memberDaniel from '@public/members/memberdaniel.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

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
  id: 1 | 2 | 3 | 4
  team: Member[]
  description: string
  name: string
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

export const projects: Record<ProjectType, Project[]> = {
  branding: [
    {
      id: 1,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 1',
      year: '2024'
    },
    {
      id: 2,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 2',
      year: '2024'
    },
    {
      id: 3,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 3',
      year: '2024'
    },
    {
      id: 4,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 4',
      year: '2024'
    }
  ],
  mobileapp: [
    {
      id: 1,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 1',
      year: '2024'
    },
    {
      id: 2,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 2',
      year: '2024'
    },
    {
      id: 3,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 3',
      year: '2024'
    },
    {
      id: 4,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 4',
      year: '2024'
    }
  ],
  webapp: [
    {
      id: 1,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 1',
      year: '2024'
    },
    {
      id: 2,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 2',
      year: '2024'
    },
    {
      id: 3,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 3',
      year: '2024'
    },
    {
      id: 4,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 4',
      year: '2024'
    }
  ],
  website: [
    {
      id: 1,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 1',
      year: '2024'
    },
    {
      id: 2,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 2',
      year: '2024'
    },
    {
      id: 3,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 3',
      year: '2024'
    },
    {
      id: 4,
      team: [daniel, guylherme],
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae consequuntur, voluptatem doloremque, possimus harum velit',
      name: 'Project 4',
      year: '2024'
    }
  ]
}

export const team: Member[] = [daniel, guylherme, joao, lucas, miguel, spica]
