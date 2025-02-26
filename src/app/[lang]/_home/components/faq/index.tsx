import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown02Icon } from '@hugeicons/core-free-icons'
import { useTranslations } from 'next-intl'
import { twJoin } from 'tailwind-merge'

import { Paragraphy } from '@/components'

export function FAQ() {
  const t = useTranslations('home.faq')

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300 pb-5">
        <h2>{t('title')}</h2>
        <span className="text-grayscale-900">
          <HugeiconsIcon icon={ArrowDown02Icon} size={32} strokeWidth={1.5} />
        </span>
      </div>

      <ul>
        {Array.from({ length: 5 }).map((_, index) => {
          const newIndex = `0${index + 1}`
          return (
            <li
              key={newIndex}
              className="group flex items-start border-b px-4 py-10"
            >
              <Paragraphy
                className="text-grayscale-500 md:leading-8 xl:leading-10"
                variant="p1"
              >
                {newIndex}
              </Paragraphy>

              <div
                className={twJoin(
                  'ml-6 mr-3 transition-all duration-300 group-hover:space-y-6',
                  'md ml-20'
                )}
              >
                <h5>{t(`${newIndex}.title`)}</h5>
                <Paragraphy
                  variant="p3"
                  className={twJoin(
                    'max-h-0 overflow-hidden transition-all duration-300',
                    'group-hover:max-h-56 sm:group-hover:max-h-28'
                  )}
                >
                  {t(`${newIndex}.subtitle`)}
                </Paragraphy>
              </div>

              <span className="plus-button relative h-6 w-6 shrink-0" />
            </li>
          )
        })}
      </ul>
    </>
  )
}
