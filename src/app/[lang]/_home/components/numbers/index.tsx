import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown02Icon } from '@hugeicons/core-free-icons'
import { useTranslations } from 'next-intl'

import { NumbersContent } from './numbers-content'

export function Numbers() {
  const t = useTranslations('home.numbers')

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300 pb-5">
        <h2>{t('title')}</h2>
        <span className="text-grayscale-900">
          <HugeiconsIcon icon={ArrowDown02Icon} size={32} strokeWidth={1.5} />
        </span>
      </div>

      <NumbersContent />
    </>
  )
}
