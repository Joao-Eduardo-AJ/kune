import { Container, Paragraphy, Topic } from '@/components'
import { List } from './List'
import Image from 'next/image'
import kune from '@public/kune-white.svg'
import { data } from '@/data'
import Link from 'next/link'

export const Footer = () => (
  <footer className="relative overflow-hidden bg-grayscale-900">
    <div
      aria-hidden="true"
      role="presentation"
      className="absolute -left-0 top-24 h-[443px] w-[443px] bg-[url(/footer-bg.svg)] bg-cover lg:-top-12 lg:left-1/3 lg:h-[676px] lg:w-[676px]"
    />
    <Container className="flex flex-col gap-10">
      <div className="z-10 flex flex-col gap-10 border-b border-grayscale-800 pb-10 md:flex-row md:justify-between">
        <div className="grid gap-3">
          <Topic color="gray">We build. You grow</Topic>
          <Paragraphy className="max-w-[400px] text-white">
            We create digital solutions that drive results, combining design,
            technology, and strategy to help your business grow and scale.
          </Paragraphy>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-3">
            <Topic color="gray">About us</Topic>
            <List items={['Work', 'Clients', 'Services', 'Who we are?']} />
          </div>
          <div className="flex flex-col gap-3">
            <Topic color="gray">Contact us</Topic>
            <List items={['+1 980 971-24-19', 'kunestudio@contato.com']} />
          </div>
        </div>
      </div>
      <div className="z-10 flex flex-col justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex gap-1">
            <Image alt="logo" src={kune} height={40} width={40} />
            <span className="text-[24px] font-semibold leading-[22px] text-grayscale-100">
              Kune
              <br />
              Studio
            </span>
          </div>
          <div className="flex items-center gap-1">
            {data.socialIcons.map(({ icon, url }) => (
              <Link
                key={icon}
                href={url}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-grayscale-700 transition-all duration-300 hover:-translate-y-1"
              >
                <Image alt="" width={16} height={16} src={`/icons/${icon}`} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <span className="text-grayscale-700">
            &copy; 2024 Kune Studio | All rights reserved
          </span>
          <Paragraphy variant="p5">Privacy policy</Paragraphy>
        </div>
      </div>
    </Container>
  </footer>
)
