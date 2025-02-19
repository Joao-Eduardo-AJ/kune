import { tv, VariantProps } from 'tailwind-variants'

import { Button, Container } from '@/components'

import { Logo } from './component.logo'
import { LanguageSwitcher } from '../language-switcher'
import { useTranslations } from 'next-intl'

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
  const t = useTranslations('home')
  return (
    <header className={header(props)}>
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <Button>{t('scheduleButton')}</Button>
        </div>
      </Container>
    </header>
  )
}
