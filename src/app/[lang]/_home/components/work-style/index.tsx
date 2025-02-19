import Image from 'next/image'

import { Paragraphy } from '@/components'
import { data } from '@/data'
import { useTranslations } from 'next-intl'

export function WorkStyle() {
  const t = useTranslations('home.workStyle')
  return (
    <>
      <div className="space-y-6 lg:flex lg:justify-between lg:space-y-0">
        <h4>{t('title')}</h4>
        <Paragraphy variant="p4" className="lg:max-w-[488px]">
          {t('subtitle')}
        </Paragraphy>
      </div>

      <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {data.working.map(({ id, symbolsIcon }) => (
          <article
            key={id}
            className="mx-auto w-full space-y-36 rounded-xl bg-grayscale-50 p-8 lg:space-y-60"
          >
            <div className="inline-flex rounded-2xl bg-grayscale-100 p-7">
              <Image
                alt="card icon"
                width={40}
                height={40}
                src={`/icons/${symbolsIcon}`}
              />
            </div>
            <div className="space-y-6">
              <h5>{t(`${id}.title`)}</h5>
              <Paragraphy variant="p4">{t(`${id}.subtitle`)}</Paragraphy>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
