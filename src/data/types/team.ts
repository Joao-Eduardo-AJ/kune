export type Member = {
  id: string
  linkedinUrl: string
  name: string
  role: string
}

export type Project = {
  id: string
  description: string
  members: Member[]
  name: string
  slug: string
  type: string
  year: string
}

export type TeamData = {
  members: Member[]
  projects: Project[]
}
