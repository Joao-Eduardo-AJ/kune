import { data } from '@/data'
import * as Card from './Card'
import { Paragraphy } from '@/components'
import { HeaderSection } from '../shared/HeaderSection'

export const Header = () => (
  <HeaderSection dark>Our team of experts</HeaderSection>
)

export const Info = () => (
  <div className="grid gap-6 lg:flex lg:justify-between">
    <h4 className="text-white">What you can expect</h4>
    <div className="grid max-w-[488px] gap-6">
      <Paragraphy variant="p4" className="text-white">
        We create tailored presentations to help you persuade your colleagues,
        clients, or investors. Whether it’s live or digital, delivered for one
        or a hundred people.
      </Paragraphy>
      <Paragraphy variant="p4" className="text-white">
        We believe the mix of strategy and design (with a bit of coffee) is what
        makes your message clear, convincing, and captivating.
      </Paragraphy>
    </div>
  </div>
)

export function Content() {
  return (
    <div className="no-scrollbar overflow-x-scroll">
      <div className="flex h-[413px] min-w-min gap-4 lg:grid lg:h-[1134px] lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
        {data.members.map(({ id, name, role }) => (
          <Card.Wrapper key={id}>
            <Card.Figure alt="teste" src={`/members/${id}/team-image.svg`} />
            <Card.Caption name={name} role={role} />
          </Card.Wrapper>
        ))}
      </div>
    </div>
  )
}
