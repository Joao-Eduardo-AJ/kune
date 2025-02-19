import { useTranslations } from 'next-intl'
import { NumbersContent } from './numbers-content'

export function Numbers() {
  const t = useTranslations('home.numbers')
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300 pb-5">
        <h2>{t('title')}</h2>
        <span className="material-symbols-outlined text-[32px] text-grayscale-900">
          arrow_downward
        </span>
      </div>

      <NumbersContent />
    </>
  )
}
