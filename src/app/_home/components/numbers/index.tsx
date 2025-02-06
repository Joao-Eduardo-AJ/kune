import { Paragraphy } from '@/components'
import { HeaderSection } from '../shared/HeaderSection'

export const Header = () => <HeaderSection>Interesting numbers</HeaderSection>

export const Content = () => (
  <div className="flex flex-col gap-6 md:flex-row md:justify-between">
    <h4>Experience That Deliver Results</h4>
    <div className="grid max-w-[488px] gap-y-6 md:grid-cols-2 md:gap-y-[88px]">
      <Paragraphy variant="p4" className="md:col-span-2">
        At Kune, we bring together over 20 years of combined experience across
        our Designers, Developers, and Marketing Specialists. Our team excels in
        their fields, delivering innovative and tailored solutions for every
        project.
      </Paragraphy>
      <Paragraphy>
        <span className="text-[56px] leading-[56px] text-grayscale-900">
          +12
        </span>
        <br />
        years of experience
      </Paragraphy>
      <Paragraphy>
        <span className="text-[56px] leading-[56px] text-grayscale-900">
          +50
        </span>
        <br />
        projects completed
      </Paragraphy>
    </div>
  </div>
)
