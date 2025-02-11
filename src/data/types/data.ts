export type DefaultData = {
  icon: string
  id: string
  title: string
  content: string
}

export type Member = {
  id: string
  linkedinUrl: string
  name: string
  role: string
}

export type Project = {
  id: string
  darkContrast: boolean
  description: string
  members: Member[]
  name: string
  slug: string
  type: string
  year: string
}

export type SocialIcon = {
  icon: string
  url: string
}

export type Data = {
  expertises: DefaultData[]
  members: Member[]
  projects: Project[]
  working: DefaultData[]
  socialIcons: SocialIcon[]
}
