import { ProjectType } from '@/atom'

export type GenericDataParams = {
  content: string
  id: string
  symbolsIcon: string
  title: string
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
  description: string
  members: MemberParams[]
  name: string
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
