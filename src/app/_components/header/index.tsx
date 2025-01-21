import { Typography } from '@/app/_shared'

type sectionHeader = {
  children: React.ReactNode
}

export const SectionHeader = ({ children }: sectionHeader) => (
  <div>
    <Typography variant="h2">{children}</Typography>
    <span>aaa</span>
  </div>
)
