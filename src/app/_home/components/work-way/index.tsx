import { Paragraphy } from '@/components'
import * as Card from './Card'
import { HeaderSection } from '../shared/HeaderSection'

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
  <div className="hidden-scroll overflow-x-scroll">
    <div className="grid justify-items-center gap-8 md:flex">
      <Card.Wrapper>
        <Card.Icon />
        <Card.Text>
          <h5>Collaboration</h5>
          <Paragraphy variant="p4">
            We work closely with our clients, understanding their goals,
            challenges, and vision. This partnership ensures that every decision
            we make aligns with their needs.
          </Paragraphy>
        </Card.Text>
      </Card.Wrapper>
      <Card.Wrapper>
        <Card.Icon />
        <Card.Text>
          <h5>Collaboration</h5>
          <Paragraphy variant="p4">
            We work closely with our clients, understanding their goals,
            challenges, and vision. This partnership ensures that every decision
            we make aligns with their needs.
          </Paragraphy>
        </Card.Text>
      </Card.Wrapper>
      <Card.Wrapper>
        <Card.Icon />
        <Card.Text>
          <h5>Collaboration</h5>
          <Paragraphy variant="p4">
            We work closely with our clients, understanding their goals,
            challenges, and vision. This partnership ensures that every decision
            we make aligns with their needs.
          </Paragraphy>
        </Card.Text>
      </Card.Wrapper>
    </div>
  </div>
)
