import { team } from '@/app/mock'
import * as Card from './components/card'

export function TeamGroup() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {team.map(({ cardImageSrc, linkedinUrl, name, role }) => (
        <Card.Wrapper key={linkedinUrl}>
          <Card.Figure alt={name} src={cardImageSrc} />
          <Card.Caption name={name} role={role} />
        </Card.Wrapper>
      ))}
    </div>
  )
}
