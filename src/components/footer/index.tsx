import { Container, Paragraphy, Topic } from '@/components'
import kune from '@public/kune-white.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { LanguageSwitcher } from '../language-switcher'
import { List } from './List'
import { SocialIcons } from './social-icons'

export function Footer() {
  const t = useTranslations('home.footer')
  return (
    <footer className="relative overflow-hidden bg-grayscale-900">
      <div
        aria-hidden="true"
        role="presentation"
        className="absolute -left-0 top-24 h-[443px] w-[443px] bg-[url(/footer-bg.svg)] bg-cover lg:-top-12 lg:left-1/3 lg:h-[676px] lg:w-[676px]"
      />
      <Container className="flex flex-col gap-10">
        <div className="z-10 flex flex-col gap-10 border-b border-grayscale-800 pb-10 md:flex-row md:justify-between">
          <div className="grid gap-3">
            <Topic color="gray">{t('grow.title')}</Topic>
            <Paragraphy className="max-w-[400px] text-white">
              {t('grow.paragraph')}
            </Paragraphy>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-3">
              <Topic color="gray">{t('about.title')}</Topic>
              <List
                items={[
                  t('about.work'),
                  t('about.clients'),
                  t('about.services'),
                  t('about.who')
                ]}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Topic color="gray">{t('contact')}</Topic>
              <List items={['+55 48 9182-2250', 'contato@kunestudio.com']} />
            </div>
          </div>
        </div>
        <div className="z-10 flex flex-col justify-between gap-4 md:flex-row">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex gap-1">
              <Image alt="logo" src={kune} height={40} width={40} />
              <span className="text-[24px] font-semibold leading-[22px] text-grayscale-100">
                Kune
                <br />
                Studio
              </span>
            </div>
            <SocialIcons className="hidden md:flex" />
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <span className="text-grayscale-700">&copy; {t('rights')}</span>
            <SocialIcons className="flex md:hidden" />
            <div className="flex items-center justify-between md:gap-48">
              <Paragraphy variant="p5">{t('policy')}</Paragraphy>
              <LanguageSwitcher footer />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
