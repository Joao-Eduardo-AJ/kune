import { Paragraphy } from '../paragraphy'

type ListProps = {
  items: string[]
}

export const List = ({ items }: ListProps) => (
  <ul className="grid gap-1">
    {items.map(item => (
      <li key={item}>
        <Paragraphy variant="p5" className="text-white">
          {item}
        </Paragraphy>
      </li>
    ))}
  </ul>
)
