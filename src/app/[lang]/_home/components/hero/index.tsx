import Image from 'next/image'
import * as motion from 'motion/react-client'
import { twJoin } from 'tailwind-merge'

import { Topic, Paragraphy } from '@/components'

import { CTAButton } from './cta-button'
import { customers } from './customers-data'
import { useTranslations } from 'next-intl'

export function Hero() {
  const duplicatedCustomers = [...customers, ...customers]
  const t = useTranslations('home.hero')

  return (
    <>
      <div className="w-full space-y-10">
        <motion.div
          initial={{ y: 25, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <Topic>{t('status')}</Topic>
          <h1>{t('title')}</h1>
          <Paragraphy>{t('subtitle')}</Paragraphy>
        </motion.div>

        <CTAButton>{t('cta')}</CTAButton>
      </div>

      <motion.div
        initial={{ y: 25, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', delay: 0.2, duration: 0.5 }}
        className="space-y-2 xl:space-y-5"
      >
        <Paragraphy variant="p5">{t('trusted')}</Paragraphy>
        <div className="relative w-full overflow-hidden">
          <span className="fade-x absolute left-0 z-10 h-12 w-full" />
          <div className="flex animate-customers gap-6">
            {duplicatedCustomers.map(({ slug, width }, index) => (
              <Image
                key={index}
                alt={slug}
                src={`/logos/${slug}.svg`}
                height={48}
                width={width}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <span
        className={twJoin(
          'relative mx-auto block h-[52px] w-8 rounded-full border border-grayscale-400',
          'before:left-[13px] before:top-3 before:h-2 before:w-1 before:animate-bounce before:rounded-full before:bg-grayscale-700'
        )}
      />
    </>
  )
}
