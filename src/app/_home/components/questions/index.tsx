import { Paragraphy } from '@/components'
import { HeaderSection } from '../shared/HeaderSection'
import { questions } from './questions'

export const Header = () => <HeaderSection>Questions Left</HeaderSection>

export const Content = () => (
  <ul>
    {questions.map(({ content, title }, index) => (
      <li
        key={title}
        className="group flex gap-6 border-b px-4 py-10 last:border-b-0"
      >
        <Paragraphy variant="p1">{index + 1}</Paragraphy>
        <div className="flex flex-col gap-0 transition-all duration-300 group-hover:gap-6">
          <h5>{title}</h5>
          <Paragraphy
            variant="p3"
            className="h-0 overflow-hidden transition-all duration-300 group-hover:h-52 md:group-hover:h-24"
          >
            {content}
          </Paragraphy>
        </div>
        <span className="plus-button relative h-6 w-6 before:absolute after:absolute" />
      </li>
    ))}
  </ul>
)
