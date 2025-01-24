import { team } from '@/mock'
import * as Card from './component.card'
import { Typography } from '@/app/_components'

export const Header = () => (
  <div className="my-[19px] flex items-center justify-between border-b border-gray-600 pb-5 lg:my-0">
    <h2 className="text-grayscale-100">Our team of experts</h2>
    <span>\/</span>
  </div>
)

export const Info = () => (
  <div className="grid gap-6 lg:flex lg:justify-between">
    <Typography variant="p1" className="text-white">
      What you can expect
    </Typography>
    <div className="grid max-w-[488px] gap-6">
      <Typography variant="p2" className="text-white">
        We create tailored presentations to help you persuade your colleagues,
        clients, or investors. Whether it’s live or digital, delivered for one
        or a hundred people.
      </Typography>
      <Typography variant="p2" className="text-white">
        We believe the mix of strategy and design (with a bit of coffee) is what
        makes your message clear, convincing, and captivating.
      </Typography>
    </div>
  </div>
)

export function Content() {
  return (
    <div className="hidden-scroll overflow-x-scroll">
      <div className="flex h-[413px] min-w-min gap-4 lg:grid lg:h-[1134px] lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
        {team.map(({ linkedinUrl, cardImageSrc, name, role }) => (
          <Card.Wrapper key={linkedinUrl}>
            a
            <Card.Figure alt="teste" src={cardImageSrc} />
            <Card.Caption name={name} role={role} />
          </Card.Wrapper>
        ))}
      </div>
    </div>
  )
}
