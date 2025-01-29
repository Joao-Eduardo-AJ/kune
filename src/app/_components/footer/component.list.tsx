import { Typography } from '../typography'

type ListProps = {
  items: string[]
}

export const List = ({ items }: ListProps) => (
  <ul className="grid gap-1">
    {items.map(item => (
      <li key={item}>
        <Typography variant="p1" className="text-grayscale-100">
          {item}
        </Typography>
      </li>
    ))}
  </ul>
)
