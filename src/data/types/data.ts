import { ProjectType } from '@/atom'

export type GenericDataParams = {
  id: string
  symbolsIcon: string
}

export type MemberParams = {
  id: string
  linkedinUrl: string
  name: string
  role: string
}

export type ProjectParams = {
  id: string
  darkContrast: boolean
  members: MemberParams[]
  slug: string
  type: ProjectType
  year: string
}

export type SocialIcon = {
  icon: string
  url: string
}

export type DataParams = {
  expertises: GenericDataParams[]
  members: MemberParams[]
  projects: ProjectParams[]
  working: GenericDataParams[]
  socialIcons: SocialIcon[]
}
