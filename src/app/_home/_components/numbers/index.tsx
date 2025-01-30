import { Paragraphy } from '@/components'
import { HeaderSection } from '../shared/HeaderSection'

export const Header = () => <HeaderSection>Interesting numbers</HeaderSection>

export const Content = () => (
  <div className="flex flex-col gap-6 md:flex-row md:justify-between">
    <h5>Experience That Deliver Results</h5>
    <div className="grid max-w-[488px] gap-y-6 md:grid-cols-2 md:gap-y-20">
      <Paragraphy variant={{ type: 'p2' }} className="md:col-span-2">
        At Kune, we bring together over 20 years of combined experience across
        our Designers, Developers, and Marketing Specialists. Our team excels in
        their fields, delivering innovative and tailored solutions for every
        project.
      </Paragraphy>
      <Paragraphy className="mb-14 md:mb-0">
        <strong>+12</strong>
        <br />
        years of experience
      </Paragraphy>
      <Paragraphy>
        <strong>+50</strong>
        <br />
        projects completed
      </Paragraphy>
    </div>
  </div>
)
