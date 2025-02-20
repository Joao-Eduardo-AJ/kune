import { Button } from '@/components'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function SectionDivider() {
  const t = useTranslations('home')
  return (
    <>
      <h2 className="z-10">{t('sectionDivider')}</h2>
      <Link href="https://calendly.com/daniel-oliveira-kunestudio/30min">
        <Button>{t('scheduleButton')}</Button>
      </Link>
    </>
  )
}
