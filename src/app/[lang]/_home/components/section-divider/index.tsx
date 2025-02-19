import { Button } from '@/components'
import { useTranslations } from 'next-intl'

export function SectionDivider() {
  const t = useTranslations('home')
  return (
    <>
      <h2 className="z-10">{t('sectionDivider')}</h2>
      <Button>{t('scheduleButton')}</Button>
    </>
  )
}
