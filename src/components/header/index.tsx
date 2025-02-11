import { tv, VariantProps } from 'tailwind-variants'

import { Button, Container } from '@/components'

import { Logo } from './component.logo'

const header = tv({
  base: 'px-7 py-3 xl:px-28 xl:py-6',
  variants: {
    filled: {
      true: 'bg-grayscale-100'
    }
  }
})

export type HeaderProps = React.ComponentProps<'header'> &
  VariantProps<typeof header>

export function Header(props: HeaderProps) {
  const headerStyle = header(props)

  return (
    <header className={headerStyle}>
      <Container className="flex justify-between">
        <Logo />
        <Button>Book a Call</Button>
      </Container>
    </header>
  )
}
