import Image from 'next/image'
import kune from '@public/kune-white.svg'
import { Topic } from '@/app/_components'
import { List } from './component.list'

export const Footer = () => (
  <footer className="bg-grayscale-900">
    <div className="container relative grid gap-4 md:grid-cols-12">
      <div className="md:col-span-5">
        <div className="grid gap-[10px]">
          <Image alt="logo" src={kune} height={60} width={60} />
          <span className="text-4xl font-semibold leading-[32px] text-grayscale-100">
            Kune
            <br />
            Studio
          </span>
        </div>
        <div className="my-20 grid grid-cols-2 justify-between gap-16 md:grid-cols-1">
          <div className="grid gap-6">
            <Topic>CATALOG</Topic>
            <List items={['Web Sites', 'Mobile App', 'Web App', 'Branding']} />
          </div>
          <div className="grid gap-6">
            <Topic variant={{ color: 'gray' }}>ABOUT US</Topic>
            <List items={['Work', 'Clients', 'Services', 'Who we are?']} />
          </div>
        </div>
        <span className="text-grayscale-700">
          &copy; 2024 Kune Studio | All rights reserved
        </span>
      </div>
      <div className="md:col-span-7">
        <div className="grid gap-16">
          <div className="grid gap-6">
            <Topic variant={{ color: 'gray' }}>CONTACT US</Topic>
            <List items={['+1 980 971-24-19', 'kunestudio@contato.com']} />
          </div>
          <div className="grid gap-6">
            <Topic variant={{ color: 'gray' }}>LOCATION</Topic>
            <List
              items={[
                'Brasil / Santa Catarina / Florianópolis',
                '9am—6pm',
                '/Everyday'
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
)
