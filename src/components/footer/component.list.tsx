import { Paragraphy } from '../paragraphy'

type ListProps = {
  items: string[]
}

export const List = ({ items }: ListProps) => (
  <ul className="grid gap-1">
    {items.map(item => (
      <li key={item}>
        <Paragraphy className="text-grayscale-100">{item}</Paragraphy>
      </li>
    ))}
  </ul>
)
