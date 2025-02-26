import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown02Icon } from '@hugeicons/core-free-icons'
import { useTranslations } from 'next-intl'

import { Paragraphy } from '@/components'
import { data } from '@/data'

import { ItemWrapper } from './item-wrapper'

export function Expertises() {
  const t = useTranslations('home.expertises')

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300 pb-5">
        <h2>{t('title')}</h2>
        <span className="text-grayscale-900">
          <HugeiconsIcon icon={ArrowDown02Icon} size={32} strokeWidth={1.5} />
        </span>
      </div>

      <ul className="space-y-4">
        {data.expertises.map(({ id, symbolsIcon }, index) => (
          <ItemWrapper key={id} index={index}>
            <span className="material-symbols-outlined text-[40px] font-semibold lg:text-[64px]">
              {symbolsIcon}
            </span>
            <h4 className="col-span-2 lg:col-span-1">{t(`${id}.title`)}</h4>
            <Paragraphy className="col-span-3 lg:col-span-1">
              {t(`${id}.subtitle`)}
            </Paragraphy>
          </ItemWrapper>
        ))}
      </ul>
    </>
  )
}
