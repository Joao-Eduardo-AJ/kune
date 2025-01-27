import { Typography } from '@/app/_components'
import * as Card from './card.component'

export const Header = () => (
  <div className="my-[19px] flex items-center justify-between border-b border-gray-300 pb-5 lg:my-0">
    <h2>Our way of Working</h2>
    <span>\/</span>
  </div>
)

export const Info = () => (
  <div className="grid gap-6 lg:flex lg:justify-between">
    <Typography variant="p1">What you can expect</Typography>
    <Typography variant="p2" className="max-w-[488px]">
      At Kune, we believe that every project is unique and deserves a customized
      approach. That’s why our process is built on three key pillars:
      collaboration, innovation, and results.
    </Typography>
  </div>
)

export const Content = () => (
  <div className="hidden-scroll overflow-x-scroll">
    <div className="grid justify-items-center gap-8 md:flex">
      <Card.Wrapper>
        <Card.Icon />
        <Card.Text>
          <h5>Collaboration</h5>
          <Typography variant="p2">
            We work closely with our clients, understanding their goals,
            challenges, and vision. This partnership ensures that every decision
            we make aligns with their needs.
          </Typography>
        </Card.Text>
      </Card.Wrapper>
      <Card.Wrapper>
        <Card.Icon />
        <Card.Text>
          <h5>Collaboration</h5>
          <Typography variant="p2">
            We work closely with our clients, understanding their goals,
            challenges, and vision. This partnership ensures that every decision
            we make aligns with their needs.
          </Typography>
        </Card.Text>
      </Card.Wrapper>
      <Card.Wrapper>
        <Card.Icon />
        <Card.Text>
          <h5>Collaboration</h5>
          <Typography variant="p2">
            We work closely with our clients, understanding their goals,
            challenges, and vision. This partnership ensures that every decision
            we make aligns with their needs.
          </Typography>
        </Card.Text>
      </Card.Wrapper>
    </div>
  </div>
)
