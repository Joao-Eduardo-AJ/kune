import { Typography } from '@/app/_components'
import { questionsLeft } from '@/mock'
import { HeaderSection } from '../shared/HeaderSection'

export const Header = () => <HeaderSection>Questions Left</HeaderSection>

export const Content = () => (
  <ul>
    {questionsLeft.map(({ content, title }, index) => (
      <li
        key={title}
        className="group flex gap-6 border-b px-4 py-10 last:border-b-0"
      >
        <span>{index + 1}</span>
        <div className="flex flex-col gap-0 transition-all duration-300 group-hover:gap-6">
          <h5>{title}</h5>
          <Typography
            variant="p2"
            className="h-0 overflow-hidden transition-all duration-300 group-hover:h-52 md:group-hover:h-24"
          >
            {content}
          </Typography>
        </div>
        <span className="plus-button relative h-6 w-6 before:absolute after:absolute" />
      </li>
    ))}
  </ul>
)
