import { Typography } from '@/app/_components'
import { questions } from './questions'

export const Header = () => (
  <div className="my-[19px] flex items-center justify-between border-b border-gray-300 pb-5">
    <Typography variant="h2">Interesting numbers</Typography>
    <span>\/</span>
  </div>
)

export const Content = () => (
  <ul>
    {questions.map(({ content, title }, index) => (
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
