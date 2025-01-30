import { expertises } from '@/mock'
import { Typography } from '@/app/_components'
import { HeaderSection } from '../shared/HeaderSection'

export const Header = () => <HeaderSection>Our Expertises</HeaderSection>

export const List = () => (
  <ul>
    {expertises.map(({ title, content }) => (
      <li
        key={title}
        className="flex flex-col gap-12 border-b border-grayscale-300 py-6 last:border-b-0 last:pb-0 md:flex-row lg:gap-56 lg:py-20"
      >
        <div className="flex items-center gap-12 lg:gap-[136px]">
          <span className="w-10 lg:w-16" aria-hidden="true">
            iconicon
          </span>
          <Typography variant="h4">{title}</Typography>
        </div>
        <Typography variant="p1">{content}</Typography>
      </li>
    ))}
  </ul>
)
