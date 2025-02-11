import { Paragraphy } from '@/components'
import * as Card from './Card'
import { HeaderSection } from '../shared/HeaderSection'
import { data } from '@/data'

export const Header = () => <HeaderSection>Our way of working</HeaderSection>

export const Info = () => (
  <div className="grid gap-6 lg:flex lg:justify-between">
    <h4>What you can expect</h4>
    <Paragraphy variant="p4" className="max-w-[488px]">
      At Kune, we believe that every project is unique and deserves a customized
      approach. That’s why our process is built on three key pillars:
      collaboration, innovation, and results.
    </Paragraphy>
  </div>
)

export const Content = () => (
  <div className="no-scrollbar overflow-x-scroll">
    <div className="grid justify-items-center gap-8 md:flex">
      {data.working.map(({ icon, id, title, content }) => (
        <Card.Wrapper key={id}>
          <Card.Icon icon={icon} />
          <Card.Text>
            <h5>{title}</h5>
            <Paragraphy variant="p4">{content}</Paragraphy>
          </Card.Text>
        </Card.Wrapper>
      ))}
    </div>
  </div>
)
